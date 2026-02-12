#!/usr/bin/env python3
"""
Sync changed files from Git to Google Drive
Ultra lightweight - only syncs what changed
"""

import os
import json
import subprocess
from pathlib import Path
from google.oauth2 import service_account
from googleapiclient.discovery import build
from googleapiclient.http import MediaFileUpload

# Configuration
SCOPES = ['https://www.googleapis.com/auth/drive.file']
KNOWLEDGE_BASE_PATH = '01-knowledge-base'
GDRIVE_FOLDER_ID = os.environ.get('GDRIVE_FOLDER_ID')
CREDENTIALS_JSON = os.environ.get('GDRIVE_CREDENTIALS')

def get_drive_service():
    """Initialize Google Drive API service"""
    creds_dict = json.loads(CREDENTIALS_JSON)
    credentials = service_account.Credentials.from_service_account_info(
        creds_dict, scopes=SCOPES
    )
    return build('drive', 'v3', credentials=credentials)

def get_changed_files():
    """Get list of changed files from last commit"""
    result = subprocess.run(
        ['git', 'diff', '--name-only', 'HEAD~1', 'HEAD'],
        capture_output=True,
        text=True
    )
    files = result.stdout.strip().split('\n')
    # Filter only knowledge base files
    return [f for f in files if f.startswith(KNOWLEDGE_BASE_PATH)]

def get_or_create_folder(service, folder_name, parent_id):
    """Get existing folder or create new one"""
    query = f"name='{folder_name}' and '{parent_id}' in parents and mimeType='application/vnd.google-apps.folder' and trashed=false"
    results = service.files().list(q=query, fields='files(id, name)').execute()
    folders = results.get('files', [])
    
    if folders:
        return folders[0]['id']
    
    # Create folder
    folder_metadata = {
        'name': folder_name,
        'mimeType': 'application/vnd.google-apps.folder',
        'parents': [parent_id]
    }
    folder = service.files().create(body=folder_metadata, fields='id').execute()
    return folder['id']

def ensure_folder_structure(service, file_path, root_folder_id):
    """Ensure folder structure exists in Google Drive"""
    # Remove knowledge base prefix and get folder path
    relative_path = file_path.replace(f'{KNOWLEDGE_BASE_PATH}/', '')
    parts = Path(relative_path).parts[:-1]  # Exclude filename
    
    current_folder_id = root_folder_id
    for folder_name in parts:
        current_folder_id = get_or_create_folder(service, folder_name, current_folder_id)
    
    return current_folder_id

def upload_or_update_file(service, local_path, parent_folder_id):
    """Upload new file or update existing one"""
    file_name = Path(local_path).name
    
    # Check if file exists
    query = f"name='{file_name}' and '{parent_folder_id}' in parents and trashed=false"
    results = service.files().list(q=query, fields='files(id, name)').execute()
    existing_files = results.get('files', [])
    
    # Prepare file metadata
    file_metadata = {
        'name': file_name,
        'parents': [parent_folder_id]
    }
    
    # Determine MIME type
    mime_type = 'text/markdown' if local_path.endswith('.md') else 'text/plain'
    media = MediaFileUpload(local_path, mimetype=mime_type, resumable=True)
    
    if existing_files:
        # Update existing file
        file_id = existing_files[0]['id']
        service.files().update(
            fileId=file_id,
            media_body=media
        ).execute()
        print(f"✅ Updated: {file_name}")
    else:
        # Create new file
        service.files().create(
            body=file_metadata,
            media_body=media,
            fields='id'
        ).execute()
        print(f"✅ Created: {file_name}")

def main():
    """Main sync function"""
    print("🔄 Starting Google Drive sync...")
    
    # Get changed files
    changed_files = get_changed_files()
    if not changed_files or changed_files == ['']:
        print("ℹ️  No files changed in knowledge base")
        return
    
    print(f"📁 Files to sync: {len(changed_files)}")
    
    # Initialize Drive service
    service = get_drive_service()
    
    # Sync each file
    for file_path in changed_files:
        if not os.path.exists(file_path):
            print(f"⚠️  Skipped (deleted): {file_path}")
            continue
        
        try:
            # Ensure folder structure
            parent_folder_id = ensure_folder_structure(service, file_path, GDRIVE_FOLDER_ID)
            
            # Upload or update file
            upload_or_update_file(service, file_path, parent_folder_id)
            
        except Exception as e:
            print(f"❌ Error syncing {file_path}: {str(e)}")
    
    print("✅ Google Drive sync completed!")

if __name__ == '__main__':
    main()

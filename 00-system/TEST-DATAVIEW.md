# Test Dataview

This file tests if Dataview plugin is working correctly.

## Test 1: Simple List

List all files in knowledge base:

```dataview
LIST
FROM "01-knowledge-base"
LIMIT 5
```

## Test 2: Simple Table

Show files with modification time:

```dataview
TABLE file.mtime as "Modified"
FROM "01-knowledge-base"
LIMIT 5
```

## Test 3: Count Files

Count files per folder:

```dataview
TABLE WITHOUT ID
  file.folder as "Folder",
  length(rows) as "Count"
FROM ""
GROUP BY file.folder
LIMIT 5
```

---

## Expected Results:

- **Test 1**: Should show list of files from knowledge base
- **Test 2**: Should show table with file names and modification times
- **Test 3**: Should show table with folder names and file counts

## If You See "xxxxx":

This means Dataview plugin is not rendering. Try:

1. **Wait 10 seconds** - Plugin might still be loading
2. **Refresh**: Press `Ctrl+Shift+R`
3. **Toggle Plugin**: Settings → Dataview → OFF → ON
4. **Restart Obsidian**: Close and reopen

## If Still Not Working:

Check these settings:
- Settings → Dataview → "Enable JavaScript Queries" = ON
- Settings → Dataview → "Enable Inline Queries" = ON
- Settings → Community Plugins → Dataview = Enabled (green)

---

**Status**: If you can read this and see actual data above (not xxxxx), Dataview is working! ✅

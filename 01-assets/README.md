# 📦 Assets Management

> **Penyimpanan akun, credentials, dan aset digital perusahaan**

## 📋 Struktur Folder

```
01-assets/
├── account/          # Akun email, social media, platform
├── integrations/     # API keys, credentials, OAuth tokens
└── storage/          # Dokumen, kontrak, sertifikat
```

---

## 📁 Account

Menyimpan informasi akun yang dimiliki perusahaan:
- Email accounts (corporate, personal, departmental)
- Social media accounts (Instagram, TikTok, Facebook, LinkedIn, dll)
- Platform accounts (marketplace, SaaS, tools)
- Login credentials (non-sensitive info only)

**Files:**
- `email-accounts.md` - Daftar email perusahaan
- `social-media-accounts.md` - Akun social media
- `platform-accounts.md` - Akun platform & tools

---

## 🔌 Integrations

Menyimpan konfigurasi integrasi dan credentials:
- API keys & secrets
- OAuth tokens
- Webhook URLs
- Integration configs

**⚠️ SECURITY NOTE:**
- Semua file credentials di-gitignore
- Jangan commit sensitive information
- Gunakan environment variables untuk production

**Files:**
- `api-keys.md` (gitignored)
- `credentials.md` (gitignored)
- `oauth-tokens.md` (gitignored)

---

## 💾 Storage

Penyimpanan dokumen penting:
- Legal documents
- Contracts & agreements
- Certificates & licenses
- Company documents

**Subfolder:**
- `documents/` - Dokumen umum
- `contracts/` - Kontrak & perjanjian
- `certificates/` - Sertifikat & lisensi

---

## 🔐 Best Practices

### Security
1. **Never commit sensitive data** ke Git
2. **Use .gitignore** untuk file credentials
3. **Encrypt sensitive files** jika perlu disimpan
4. **Regular audit** akun dan credentials
5. **Use password manager** untuk credentials

### Organization
1. **Consistent naming** untuk file dan folder
2. **Update regularly** saat ada perubahan
3. **Document everything** dengan jelas
4. **Archive old accounts** yang tidak digunakan
5. **Maintain access log** untuk tracking

### Maintenance
1. **Monthly review** semua akun aktif
2. **Quarterly audit** credentials dan API keys
3. **Yearly cleanup** akun yang tidak terpakai
4. **Update documentation** setiap ada perubahan

---

## 📝 Template

### Account Template
```markdown
# [Platform Name] Account

**Account Type:** [Personal/Corporate/Departmental]
**Email:** [email@domain.com]
**Username:** [username]
**Purpose:** [Deskripsi penggunaan]
**Owner:** [Department/Person]
**Status:** [Active/Inactive]
**Created:** [YYYY-MM-DD]
**Last Updated:** [YYYY-MM-DD]

## Access
- URL: [platform URL]
- Login method: [Email/Username/SSO]
- 2FA: [Enabled/Disabled]

## Notes
[Catatan tambahan]
```

---

**Last Updated:** 2026-02-17  
**Maintained by:** IT & Digital Team

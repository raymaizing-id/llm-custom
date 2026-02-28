# Article Repurpose Automation (n8n)

Workflow ini memparafrase satu artikel dengan aturan:
- menjaga fakta dari artikel sumber,
- mengikuti brand voice,
- menyertakan citation ke source article dan knowledge base.

## File Utama
- `workflow/n8n-article-paraphrase-brand-voice.json`
- `knowledge-base/brand-voice-raymaizing.md`
- `knowledge-base/source-knowledge-base.md`
- `samples/input-article-template.md`

## Cara Pakai di n8n
1. Import file workflow JSON.
2. Set environment variable `OPENAI_API_KEY` pada n8n.
3. Buka node `Prepare Input`, ganti `source_url`, `source_title`, `article_text`.
4. Jalankan workflow dari `Manual Trigger`.
5. Ambil output dari node `Quality Gate`.

## Output yang Diharapkan
Node `Quality Gate` menghasilkan:
- `paraphrased_article`
- `summary_bullets`
- `citations`
- `brand_voice_check`
- `factual_guard`
- `quality_gate` (`pass` atau `needs_review`)

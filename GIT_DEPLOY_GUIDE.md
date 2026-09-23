# Git Deployment Guide — CausaTwin v0.6 Update

This package contains the v0.6 update for the Yanlee/CausaTwin repository. Follow these steps to deploy.

## Files in this package

| File | Where it goes | What it does |
|---|---|---|
| `causatwin_v0.6.html` | repo root | v0.6 benchmark viewer |
| `cases_v0.6.js` | repo root | 50 cases with 6-config results |
| `index.html` | repo root | REPLACE existing — version selector |
| `README.md` | repo root | REPLACE existing — describes both versions |
| `CHANGELOG.md` | repo root | NEW — version history |
| `CITATION.cff` | repo root | NEW — citation metadata |
| `release_notes_v0.6.md` | repo root (or release) | NEW — v0.6 release notes |
| `docs/CausaTwin_v0.6_Paper_v5.docx` | docs/ | NEW — v0.6 paper |
| `output/v6_fig*.png` | output/ | NEW — v0.6 figures |

## Files NOT to remove

The following v0.3 files stay in the repo (both versions are public):
- `causatwin_v0.3.html`
- `demo_cases_data.js`
- `target_kb_data.js`
- `docs/CausaTwin_v0.3_Main_Report.docx`

## Step-by-step Git deployment

### Option A — Direct copy to existing repo (recommended)

```bash
# 1. Navigate to your local clone
cd /path/to/CausaTwin

# 2. Copy all v0.6 files into the repo
cp /tmp/causatwin_v06_update/* . -r
# Or drag-and-drop in file manager

# 3. Verify
ls -la
# Should see causatwin_v0.6.html, cases_v0.6.js, CITATION.cff, etc.

# 4. Check what changed
git status

# 5. Stage everything
git add .

# 6. Commit with descriptive message
git commit -m "v0.6.0: 50-case forward-looking benchmark + Solo > Multi-Agent finding"

# 7. Push to main
git push origin main

# 8. Wait 1-2 minutes for GitHub Pages to rebuild
# Then visit: https://yanlee.github.io/CausaTwin/
```

### Option B — Create a v0.6 branch first (safer)

```bash
cd /path/to/CausaTwin

# 1. Create and checkout a new branch
git checkout -b v0.6-release

# 2. Copy files
cp /tmp/causatwin_v06_update/* . -r

# 3. Commit
git add .
git commit -m "v0.6.0: 50-case forward-looking benchmark + Solo > Multi-Agent finding"

# 4. Push branch
git push origin v0.6-release

# 5. Create Pull Request on GitHub web UI
# 6. Review + merge to main after approval
```

### Option C — Use the GitHub web UI (no git command line)

1. Go to https://github.com/Yanlee/CausaTwin
2. Click **Add file → Upload files** for each file
3. For replacement files (index.html, README.md): click the file → pencil icon → upload new version
4. Commit directly on main

## After deployment — verify

### 1. GitHub Pages should auto-rebuild

```bash
# Check repo Settings → Pages
# Build status: github.com/Yanlee/CausaTwin/deployments
```

### 2. Visit the version selector

```
https://yanlee.github.io/CausaTwin/
```

You should see both **v0.3** and **v0.6** cards.

### 3. Visit the v0.6 demo directly

```
https://yanlee.github.io/CausaTwin/causatwin_v0.6.html
```

Should show 50-case benchmark viewer.

### 4. Create a GitHub Release

1. Go to https://github.com/Yanlee/CausaTwin/releases
2. Click **Create a new release**
3. Tag: `v0.6.0`
4. Title: `CausaTwin v0.6.0 — 50-Case Forward-Looking Benchmark`
5. Body: paste contents of `release_notes_v0.6.md`
6. Attach: `docs/CausaTwin_v0.6_Paper_v5.docx`
7. Publish

### 5. (Recommended) Bind to Zenodo for DOI

1. Go to https://zenodo.org/account/settings/github/
2. Enable "Yanlee/CausaTwin" repository
3. Future releases will get automatic DOIs
4. For v0.6.0 specifically: click "Create release" on Zenodo side

## GitHub Topics (set via web UI)

1. Go to https://github.com/Yanlee/CausaTwin
2. Click the gear icon next to "About"
3. Add topics:
   - `drug-target-discovery`
   - `multi-agent-debate`
   - `llm-agents`
   - `bioinformatics`
   - `drug-pipeline`
   - `forward-looking-benchmark`
   - `deepseek`
4. Save

## License verification

```bash
# Should still be MIT
cat LICENSE
```

## Summary checklist

- [ ] `causatwin_v0.6.html` uploaded
- [ ] `cases_v0.6.js` uploaded
- [ ] `index.html` REPLACED (now a version selector)
- [ ] `README.md` REPLACED (mentions both versions)
- [ ] `CHANGELOG.md` uploaded (NEW)
- [ ] `CITATION.cff` uploaded (NEW)
- [ ] `release_notes_v0.6.md` uploaded (NEW)
- [ ] `docs/CausaTwin_v0.6_Paper_v5.docx` uploaded
- [ ] `output/v6_fig1-5_*.png` uploaded
- [ ] GitHub Pages rebuilt (check 1-2 min after push)
- [ ] Topics set on GitHub About section
- [ ] GitHub Release v0.6.0 created
- [ ] Zenodo DOI generated (optional)
- [ ] Verify https://yanlee.github.io/CausaTwin/causatwin_v0.6.html works

#!/bin/bash
# CausaTwin — One-command sync local files → GitHub
# Usage: bash sync_to_github.sh

set -e

echo "🦞 CausaTwin GitHub Sync"
echo "========================="
echo ""

REPO_URL="https://github.com/Yanlee/CausaTwin.git"
WORK_DIR="$HOME/CausaTwin_sync_$$"

# Step 1: Clone or update the repo
echo "📥 Step 1: Cloning/updating repo..."
if [ -d "$WORK_DIR" ]; then
    cd "$WORK_DIR"
    git pull origin main
else
    git clone "$REPO_URL" "$WORK_DIR"
    cd "$WORK_DIR"
fi
echo "✅ Repo at: $(pwd)"
echo ""

# Step 2: Clean repo root (keep .git)
echo "🧹 Step 2: Cleaning repo root..."
# Remove everything except .git
find . -maxdepth 1 -mindepth 1 ! -name '.git' -exec rm -rf {} + 2>/dev/null || true
ls -la | head -10
echo ""

# Step 3: Copy latest package files
echo "📦 Step 3: Copying latest files..."
PACKAGE_SRC="/home/gem/workspace/agent/workspace/causatwin_v0.2_package_temp"

if [ ! -d "$PACKAGE_SRC" ]; then
    # Fall back: use the local causatwin_v0.2 dir (need to extract specific files)
    SRC_DIR="/home/gem/workspace/agent/workspace/causatwin_v0.2"
    cp "$SRC_DIR/causatwin_v0.3.html" .
    cp "$SRC_DIR/demo_cases_data.js" .
    cp "$SRC_DIR/target_kb_data.js" .
    cp "$SRC_DIR/README.md" .
    cp "$SRC_DIR/LICENSE" .
    cp "$SRC_DIR/deploy_to_github_pages.sh" .
else
    cp -r "$PACKAGE_SRC"/* .
fi

echo "✅ Files copied:"
ls -la causatwin_v0.3.html demo_cases_data.js target_kb_data.js README.md LICENSE deploy_to_github_pages.sh 2>/dev/null
echo ""

# Step 4: Commit and push
echo "🔧 Step 4: Git commit + push..."
git add -A
git status --short

if git diff --cached --quiet; then
    echo "ℹ️  No changes to commit (already up to date)"
else
    git commit -m "v0.3: Sync latest files

- English README (replaces Chinese version)
- LICENSE updated to 'CausaTwin Development Team'
- Add deploy_to_github_pages.sh for one-command deployment
- Reorganize files to repo root for clean GitHub Pages URL"
    echo "✅ Committed"
fi

echo ""
echo "📤 Pushing to GitHub..."
git push origin main
echo "✅ Pushed"
echo ""

# Step 5: Print final status
echo "🎯 Done!"
echo "=========="
echo ""
echo "Your repo is now synced with the latest files."
echo ""
echo "Next: Enable GitHub Pages"
echo "  1. Open: $REPO_URL/settings/pages"
echo "  2. Source: Deploy from a branch"
echo "  3. Branch: main, Folder: / (root)"
echo "  4. Save, wait 1-2 min"
echo ""
echo "Your app will be live at:"
echo "  https://yanlee.github.io/CausaTwin/"
echo ""

# Cleanup
cd "$HOME"
rm -rf "$WORK_DIR"
echo "🧹 Cleaned up temp dir"

#!/bin/bash
# CausaTwin — One-command GitHub Pages deployment
# Usage: bash deploy_to_github_pages.sh

set -e

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PACKAGE_DIR="$REPO_DIR/causatwin_v0.3_package"

echo "🦞 CausaTwin GitHub Pages Deployment"
echo "===================================="
echo "Working directory: $REPO_DIR"
echo ""

# Step 1: Verify files exist
echo "📁 Step 1: Verify files..."
required_files=(
    "causatwin_v0.3_package/causatwin_v0.3.html"
    "causatwin_v0.3_package/demo_cases_data.js"
    "causatwin_v0.3_package/target_kb_data.js"
    "causatwin_v0.3_package/README.md"
    "causatwin_v0.3_package/LICENSE"
)

for f in "${required_files[@]}"; do
    if [ ! -f "$REPO_DIR/$f" ]; then
        echo "❌ Missing: $f"
        exit 1
    fi
done
echo "✅ All required files present"
echo ""

# Step 2: Move files to repo root
echo "📦 Step 2: Flattening package to repo root..."
cd "$REPO_DIR"

# Move all files from package subdir to root
mv -f causatwin_v0.3_package/causatwin_v0.3.html .
mv -f causatwin_v0.3_package/demo_cases_data.js .
mv -f causatwin_v0.3_package/target_kb_data.js .

# Keep README at root (English version for GitHub)
if [ -f "causatwin_v0.3_package/README.md" ]; then
    echo "⚠️  README.md exists at root, keeping current version (English)"
fi

# Move LICENSE to root
mv -f causatwin_v0.3_package/LICENSE .

# Remove now-empty package directory (but keep build scripts for users who want to regenerate)
rm -f causatwin_v0.3_package/build_lite_cases.py
rm -f causatwin_v0.3_package/build_kb.py
rm -f causatwin_v0.3_package/test_data.js
mv -f causatwin_v0.3_package/build_lite_cases.py . 2>/dev/null || true
mv -f causatwin_v0.3_package/build_kb.py . 2>/dev/null || true

# Remove the package dir if empty
if [ -z "$(ls -A causatwin_v0.3_package 2>/dev/null)" ]; then
    rmdir causatwin_v0.3_package
    echo "✅ Package subdir removed (now empty)"
fi

echo "✅ Files flattened to root"
ls -la causatwin_v0.3.html demo_cases_data.js target_kb_data.js LICENSE README.md 2>/dev/null
echo ""

# Step 3: Git commit and push
echo "🔧 Step 3: Git commit + push..."

# Check if it's a git repo
if [ ! -d ".git" ]; then
    echo "⚠️  Not a git repo, initializing..."
    git init
    git branch -M main
fi

# Check if there's a remote
if ! git remote get-url origin &>/dev/null; then
    echo "⚠️  No git remote found"
    echo "   Run: git remote add origin https://github.com/Yanlee/CausaTwin.git"
    echo "   Then re-run this script"
    exit 1
fi

# Stage and commit
git add -A
git status --short

# Only commit if there are changes
if git diff --cached --quiet; then
    echo "ℹ️  No changes to commit"
else
    git commit -m "v0.3: Flatten package for GitHub Pages deployment

- Move causatwin_v0.3.html to repo root
- Move data files to repo root for clean URL structure
- Keep LICENSE and README at root"
    echo "✅ Committed"
fi

# Push
echo "📤 Pushing to GitHub..."
git push origin main
echo "✅ Pushed"
echo ""

# Step 4: Print next steps
echo "🎯 Next steps (do this in browser):"
echo "===================================="
echo "1. Open: https://github.com/Yanlee/CausaTwin/settings/pages"
echo "2. Under 'Source', select:"
echo "   - Branch: main"
echo "   - Folder: / (root)"
echo "3. Click 'Save'"
echo "4. Wait 1-2 minutes for GitHub to deploy"
echo ""
echo "🌐 Your app will be live at:"
echo "   https://yanlee.github.io/CausaTwin/"
echo ""
echo "🦞 Done!"

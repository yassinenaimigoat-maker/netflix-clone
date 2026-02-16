#!/bin/bash

# Netflix Clone - Automated GitHub Deployment Script
# This script will help you deploy to GitHub quickly

set -e

echo "🎬 Netflix Clone - GitHub Deployment"
echo "===================================="
echo ""

# Check if git is configured
if ! git config user.name > /dev/null 2>&1; then
    echo "⚠️  Git user not configured"
    echo "Please enter your name:"
    read -r git_name
    git config user.name "$git_name"
fi

if ! git config user.email > /dev/null 2>&1; then
    echo "⚠️  Git email not configured"
    echo "Please enter your email:"
    read -r git_email
    git config user.email "$git_email"
fi

echo "✅ Git configured:"
echo "   Name: $(git config user.name)"
echo "   Email: $(git config user.email)"
echo ""

# Ask for GitHub username
echo "📝 Please enter your GitHub username:"
read -r github_username

# Ask for repository name
echo "📝 Repository name (default: netflix-clone):"
read -r repo_name
repo_name=${repo_name:-netflix-clone}

# Repository URL
repo_url="https://github.com/$github_username/$repo_name.git"

echo ""
echo "🔍 Repository will be created at:"
echo "   $repo_url"
echo ""
echo "⚠️  IMPORTANT: Make sure you've created this repository on GitHub first!"
echo "   Go to: https://github.com/new"
echo "   - Repository name: $repo_name"
echo "   - Leave all checkboxes unchecked (no README, .gitignore, or license)"
echo ""
read -p "Have you created the repository? (y/n): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Please create the repository first, then run this script again"
    exit 1
fi

# Check if remote already exists
if git remote | grep -q origin; then
    echo "⚠️  Remote 'origin' already exists. Removing it..."
    git remote remove origin
fi

# Add remote
echo "🔗 Adding GitHub remote..."
git remote add origin "$repo_url"

echo "📤 Pushing to GitHub..."
echo ""

# Try to push
if git push -u origin main; then
    echo ""
    echo "🎉 SUCCESS! Your code is now on GitHub!"
    echo ""
    echo "🔗 View your repository:"
    echo "   https://github.com/$github_username/$repo_name"
    echo ""
    echo "📋 Next steps:"
    echo "   1. Visit your repository on GitHub"
    echo "   2. Follow QUICK_START.md to deploy to Railway"
    echo "   3. Your Netflix clone will be live in 10 minutes!"
else
    echo ""
    echo "❌ Push failed. This might be because:"
    echo "   1. Repository doesn't exist on GitHub"
    echo "   2. Authentication failed"
    echo "   3. You don't have permission"
    echo ""
    echo "💡 Solutions:"
    echo "   1. Make sure you created the repository on GitHub"
    echo "   2. Use a Personal Access Token instead of password"
    echo "   3. Generate token at: https://github.com/settings/tokens"
    echo "      - Click 'Generate new token (classic)'"
    echo "      - Select 'repo' scope"
    echo "      - Copy the token and use it as password when prompted"
fi

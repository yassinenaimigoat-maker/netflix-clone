# 🐙 GitHub Setup Instructions

## Step 1: Create GitHub Repository

1. **Go to GitHub**
   - Visit [github.com](https://github.com)
   - Log in to your account

2. **Create New Repository**
   - Click the "+" icon in the top right
   - Select "New repository"
   - Fill in the details:
     - **Repository name**: `netflix-clone`
     - **Description**: "A full-stack Netflix clone built with MERN stack"
     - **Visibility**: Choose Public or Private
     - **DO NOT** initialize with README, .gitignore, or license (we already have these)
   - Click "Create repository"

## Step 2: Push Your Code to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
cd netflix-clone

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/netflix-clone.git

# Push your code
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

## Step 3: Verify Upload

1. Refresh your GitHub repository page
2. You should see all your files:
   - backend/
   - frontend/
   - README.md
   - DEPLOYMENT.md
   - railway.json
   - nixpacks.toml
   - etc.

## Step 4: Add Repository Description & Topics

1. Go to your repository on GitHub
2. Click the ⚙️ settings icon next to "About"
3. Add:
   - **Description**: "Full-stack Netflix clone - MERN stack with authentication, movie browsing, and watchlist features"
   - **Topics**: `netflix-clone`, `react`, `nodejs`, `mongodb`, `express`, `mern-stack`, `full-stack`
   - **Website**: (Add after deploying to Railway)

## Alternative: Using GitHub Desktop

If you prefer a GUI:

1. Download [GitHub Desktop](https://desktop.github.com/)
2. Open GitHub Desktop
3. File → Add Local Repository
4. Select the `netflix-clone` folder
5. Click "Publish repository"
6. Choose visibility and click "Publish"

## Alternative: Using SSH (More Secure)

1. **Set up SSH key** (if you haven't already):
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   eval "$(ssh-agent -s)"
   ssh-add ~/.ssh/id_ed25519
   ```

2. **Add SSH key to GitHub**:
   ```bash
   cat ~/.ssh/id_ed25519.pub
   # Copy the output
   ```
   - Go to GitHub → Settings → SSH and GPG keys
   - Click "New SSH key"
   - Paste your key and save

3. **Push with SSH**:
   ```bash
   cd netflix-clone
   git remote add origin git@github.com:YOUR_USERNAME/netflix-clone.git
   git push -u origin main
   ```

## Quick Commands Reference

```bash
# Check git status
git status

# View commit history
git log --oneline

# Check remote URL
git remote -v

# Add all changes
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push

# Pull latest changes
git pull
```

## Next Steps

After pushing to GitHub, proceed to Railway deployment:
1. Read `DEPLOYMENT.md` for detailed Railway instructions
2. Go to [railway.app](https://railway.app)
3. Connect your GitHub repository
4. Deploy!

## Troubleshooting

### "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/netflix-clone.git
```

### Permission denied (publickey)
- Make sure you've added your SSH key to GitHub
- Or use HTTPS instead of SSH

### "Updates were rejected"
```bash
git pull origin main --rebase
git push origin main
```

## Need Help?

- GitHub Docs: https://docs.github.com
- GitHub Support: https://support.github.com
- Git Tutorial: https://git-scm.com/docs/gittutorial

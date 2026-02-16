# 🚀 Deploy to GitHub Right Now!

## Method 1: Automated Script (Easiest)

Run this one command:

```bash
cd /root/netflix-clone
./deploy-to-github.sh
```

The script will guide you through:
1. Setting up git configuration
2. Entering your GitHub username
3. Pushing to GitHub

**Before running the script:**
1. Go to https://github.com/new
2. Create a repository named `netflix-clone`
3. Don't check any boxes (no README, .gitignore, or license)
4. Click "Create repository"

Then run the script!

---

## Method 2: Manual Commands

### Step 1: Create GitHub Token (for authentication)

1. Go to: https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Give it a name: "Netflix Clone Deploy"
4. Select scope: **repo** (check all repo boxes)
5. Click "Generate token"
6. **COPY THE TOKEN** (you'll use it as password)

### Step 2: Create Repository on GitHub

1. Go to: https://github.com/new
2. Repository name: `netflix-clone`
3. Description: "Full-stack Netflix clone - MERN stack"
4. Choose Public or Private
5. **DO NOT** check any boxes
6. Click "Create repository"

### Step 3: Push Your Code

Replace `YOUR_USERNAME` with your GitHub username:

```bash
cd /root/netflix-clone

# Add remote
git remote add origin https://github.com/YOUR_USERNAME/netflix-clone.git

# Push (use your token as password when prompted)
git push -u origin main
```

When asked for password, paste your Personal Access Token!

---

## Method 3: Using SSH (Most Secure)

### Setup SSH Key (one-time):

```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your_email@example.com"

# Start SSH agent
eval "$(ssh-agent -s)"

# Add key
ssh-add ~/.ssh/id_ed25519

# Copy public key
cat ~/.ssh/id_ed25519.pub
```

### Add to GitHub:

1. Copy the output from the `cat` command
2. Go to: https://github.com/settings/keys
3. Click "New SSH key"
4. Paste your key and save

### Push with SSH:

```bash
cd /root/netflix-clone
git remote add origin git@github.com:YOUR_USERNAME/netflix-clone.git
git push -u origin main
```

---

## ⚠️ Troubleshooting

### "Authentication failed"
- Use Personal Access Token instead of password
- Generate at: https://github.com/settings/tokens

### "Repository not found"
- Make sure you created the repository on GitHub first
- Check your username is correct

### "remote origin already exists"
```bash
git remote remove origin
# Then try adding it again
```

### "Permission denied (publickey)"
- Use HTTPS instead of SSH, or
- Set up SSH key properly

---

## ✅ After Successful Push

1. Visit: https://github.com/YOUR_USERNAME/netflix-clone
2. Verify all files are there
3. Follow `QUICK_START.md` to deploy to Railway
4. Your app will be live! 🎉

---

## 🆘 Still Having Issues?

Run the automated script - it handles most problems:
```bash
./deploy-to-github.sh
```

Or create an issue and I'll help you troubleshoot!

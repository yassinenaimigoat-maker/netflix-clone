# ⚡ Quick Start Guide

## 🚀 Deploy in 3 Steps

### Step 1: Push to GitHub (5 minutes)

1. **Create a new repository on GitHub**
   - Go to https://github.com/new
   - Name it `netflix-clone`
   - Don't initialize with README
   - Click "Create repository"

2. **Push your code** (replace YOUR_USERNAME with your GitHub username):
   ```bash
   cd netflix-clone
   git remote add origin https://github.com/YOUR_USERNAME/netflix-clone.git
   git push -u origin main
   ```

### Step 2: Deploy to Railway (10 minutes)

1. **Go to Railway**
   - Visit https://railway.app
   - Click "Start a New Project"
   - Login with GitHub

2. **Deploy from GitHub**
   - Click "Deploy from GitHub repo"
   - Select your `netflix-clone` repository
   - Railway will start building automatically

3. **Add MongoDB**
   - Click "+ New" in your project
   - Select "Database" → "MongoDB"
   - Railway creates a MongoDB instance automatically

4. **Set Environment Variables**
   - Click on your main service
   - Go to "Variables" tab
   - Add these variables:
     ```
     MONGODB_URI=${{MongoDB.MONGO_URL}}
     JWT_SECRET=netflix_clone_secret_key_change_this
     NODE_ENV=production
     ```

5. **Get Your URL**
   - Go to "Settings" tab
   - Click "Generate Domain"
   - Your app will be live at: `https://your-app.up.railway.app`

### Step 3: Test Your App (2 minutes)

1. Visit your Railway URL
2. Click "Sign Up" and create an account
3. Browse movies and add them to your list!

## 🎉 That's it!

Your Netflix clone is now live on the internet!

---

## 📚 Detailed Guides

For more detailed instructions, see:
- `GITHUB_SETUP.md` - Complete GitHub setup guide
- `DEPLOYMENT.md` - Detailed Railway deployment guide
- `README.md` - Full project documentation

## 🆘 Need Help?

### Common Issues

**"Failed to push to GitHub"**
- Make sure you replaced `YOUR_USERNAME` with your actual GitHub username
- Check if the repository exists on GitHub

**"Build failed on Railway"**
- Check the Railway logs for errors
- Make sure all environment variables are set
- Verify MongoDB is connected

**"Can't connect to database"**
- Ensure `MONGODB_URI` is set to `${{MongoDB.MONGO_URL}}`
- Check if MongoDB service is running in Railway

### Support Resources
- Railway Discord: https://discord.gg/railway
- GitHub Help: https://docs.github.com
- Create an issue in your repository

## 💰 Cost

- **Railway**: $5/month (includes 500 hours + MongoDB)
- **GitHub**: Free

## 🔐 Security Reminder

⚠️ **Important**: Change the `JWT_SECRET` to a strong, unique value in production!

Generate a secure secret:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

---

**Ready to deploy?** Start with Step 1! 🚀

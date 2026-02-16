# 🚂 Railway Deployment - Final Steps

## ✅ What's Already Done

1. ✅ **GitHub Repository Created**
   - URL: https://github.com/yassinenaimigoat-maker/netflix-clone
   
2. ✅ **Railway Project Created**
   - Project: netflix-clone
   - URL: https://railway.com/project/78556101-1c5e-4062-a79f-ca62a8ec3b9a
   
3. ✅ **MongoDB Database Provisioned**
   - Service: MongoDB
   - Internal URL: `mongodb://mongo:kSDKKDzeMCnapvsVZZbStSwBbnbjQztZ@mongodb.railway.internal:27017`

---

## 🎯 Complete the Deployment (2 Minutes)

### Step 1: Add Your GitHub Repository as a Service

1. **Open Railway Project:**
   👉 https://railway.com/project/78556101-1c5e-4062-a79f-ca62a8ec3b9a

2. **Click "+ New"** button

3. **Select "GitHub Repo"**

4. **Choose:** `yassinenaimigoat-maker/netflix-clone`

5. Railway will automatically:
   - Detect the `railway.json` and `nixpacks.toml`
   - Install dependencies
   - Build the project
   - Deploy the backend

### Step 2: Configure Environment Variables

1. Click on the **netflix-clone service** (not MongoDB)

2. Go to **"Variables"** tab

3. Click **"Add Variable"** and add these:

   ```
   MONGODB_URI = ${{MongoDB.MONGO_URL}}
   JWT_SECRET = netflix_clone_secret_2024
   NODE_ENV = production
   PORT = 5000
   ```

   **Important:** For `MONGODB_URI`, use the reference `${{MongoDB.MONGO_URL}}` which will automatically link to your MongoDB service.

### Step 3: Generate a Domain

1. Go to **"Settings"** tab

2. Scroll to **"Networking"**

3. Click **"Generate Domain"**

4. Railway will give you a URL like: `https://netflix-clone-production-xxxx.up.railway.app`

### Step 4: Test Your App! 🎉

1. Visit your Railway URL

2. Click **"Sign Up"** to create an account

3. Browse movies and enjoy!

---

## 🔧 MongoDB Connection String

Your MongoDB is already running with these credentials:

- **Host:** `mongodb.railway.internal`
- **Port:** `27017`
- **Username:** `mongo`
- **Password:** `kSDKKDzeMCnapvsVZZbStSwBbnbjQztZ`
- **Full URL:** `mongodb://mongo:kSDKKDzeMCnapvsVZZbStSwBbnbjQztZ@mongodb.railway.internal:27017`

**Use the variable reference:** `${{MongoDB.MONGO_URL}}`

---

## 📊 Expected Result

After deployment, you should see:
- ✅ Backend service running
- ✅ MongoDB connected
- ✅ Public URL accessible
- ✅ API endpoints working
- ✅ Frontend served from `/`

---

## 🐛 Troubleshooting

### "Build Failed"
- Check the build logs in Railway
- Ensure all dependencies are in `package.json`

### "Cannot connect to MongoDB"
- Verify `MONGODB_URI` is set to `${{MongoDB.MONGO_URL}}`
- Check both services are in the same project

### "502 Bad Gateway"
- Wait 2-3 minutes for deployment to complete
- Check service logs for errors

---

## 💡 Quick Access Links

- **Railway Project:** https://railway.com/project/78556101-1c5e-4062-a79f-ca62a8ec3b9a
- **GitHub Repo:** https://github.com/yassinenaimigoat-maker/netflix-clone
- **Your MongoDB:** Already provisioned and running!

---

**Time to complete:** ~2 minutes
**After this, your Netflix clone will be LIVE on the internet!** 🚀

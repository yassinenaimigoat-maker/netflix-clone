# 🚀 Deployment Guide - Netflix Clone

## Quick Deploy to Railway

### Step 1: Prepare Your Repository

1. Make sure all changes are committed:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

### Step 2: Deploy on Railway

1. **Sign Up/Login to Railway**
   - Visit [railway.app](https://railway.app)
   - Sign up with GitHub

2. **Create New Project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Authorize Railway to access your GitHub
   - Select your `netflix-clone` repository

3. **Add MongoDB Database**
   - In your project dashboard, click "+ New"
   - Select "Database" → "MongoDB"
   - Railway automatically provisions a MongoDB instance
   - Copy the connection string (it's auto-generated as `MONGO_URL`)

4. **Configure Environment Variables**
   
   Click on your service → "Variables" tab → Add these:
   
   ```
   MONGODB_URI=${{MongoDB.MONGO_URL}}
   JWT_SECRET=netflix_clone_super_secret_key_2024_change_this
   NODE_ENV=production
   PORT=5000
   ```

5. **Configure Build Settings** (if needed)
   - Railway should auto-detect the configuration from `railway.json` and `nixpacks.toml`
   - Start Command: `cd backend && npm start`

6. **Deploy**
   - Railway will automatically build and deploy
   - Wait 2-3 minutes for the build to complete
   - You'll get a public URL like: `https://netflix-clone-production.up.railway.app`

### Step 3: Verify Deployment

1. Visit your Railway URL
2. Check the logs in Railway dashboard
3. Test the API: `https://your-app.railway.app/`

## Alternative: Separate Frontend Deployment

For better performance, deploy frontend and backend separately:

### Backend on Railway (as above)

### Frontend on Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy Frontend**
   ```bash
   cd frontend
   vercel --prod
   ```

3. **Configure Environment Variables on Vercel**
   - Go to your Vercel project settings
   - Add environment variable:
     ```
     VITE_API_URL=https://your-railway-backend.railway.app/api
     ```

4. **Redeploy**
   ```bash
   vercel --prod
   ```

## Environment Variables Reference

### Backend (Railway)
| Variable | Description | Example |
|----------|-------------|---------|
| `MONGODB_URI` | MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net/netflix` |
| `JWT_SECRET` | Secret key for JWT tokens | `your_super_secret_key_here` |
| `NODE_ENV` | Environment mode | `production` |
| `PORT` | Server port (Railway sets this automatically) | `5000` |

### Frontend (Vercel/Netlify)
| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API URL | `https://your-backend.railway.app/api` |

## Troubleshooting

### Build Fails on Railway
- Check the logs in Railway dashboard
- Ensure all dependencies are in `package.json`
- Verify `railway.json` and `nixpacks.toml` are correct

### MongoDB Connection Error
- Verify `MONGODB_URI` is set correctly
- Ensure MongoDB instance is running on Railway
- Check if IP whitelist is configured (if using MongoDB Atlas)

### CORS Issues
- Make sure backend CORS is configured to allow your frontend domain
- Update `server.js` if needed:
  ```javascript
  app.use(cors({
    origin: ['https://your-frontend.vercel.app', 'http://localhost:3000']
  }));
  ```

### Frontend Can't Connect to Backend
- Verify `VITE_API_URL` is set correctly
- Check browser console for errors
- Ensure backend is deployed and running

## Monitoring & Maintenance

### Railway Dashboard
- Monitor logs in real-time
- Check resource usage
- View deployment history
- Manage environment variables

### Database Backup
- Set up regular MongoDB backups
- Use Railway's built-in backup features or MongoDB Atlas backups

## Scaling

Railway automatically scales based on:
- CPU usage
- Memory usage
- Request volume

For high traffic:
1. Upgrade Railway plan
2. Consider CDN for frontend assets
3. Implement caching (Redis)
4. Use MongoDB indexes

## Custom Domain (Optional)

1. **Add Domain in Railway**
   - Go to Settings → Domains
   - Click "Add Domain"
   - Enter your custom domain

2. **Configure DNS**
   - Add CNAME record pointing to Railway URL
   - Wait for DNS propagation (up to 24 hours)

3. **SSL Certificate**
   - Railway automatically provisions SSL certificates
   - HTTPS is enabled by default

## Cost Estimation

### Railway
- Hobby Plan: $5/month (500 hours)
- MongoDB: Included in hobby plan
- Additional usage: Pay as you go

### Vercel (if using for frontend)
- Free tier: Sufficient for most projects
- Pro: $20/month for production apps

## Need Help?

- Railway Docs: https://docs.railway.app
- Railway Discord: https://discord.gg/railway
- GitHub Issues: Create an issue in your repository

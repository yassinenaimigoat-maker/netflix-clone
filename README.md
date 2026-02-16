# 🎬 Netflix Clone

A full-stack Netflix clone built with the MERN stack (MongoDB, Express.js, React, Node.js).

## ✨ Features

- 🔐 User Authentication (Register/Login with JWT)
- 🎥 Browse Movies and TV Shows
- 🔍 Search Functionality
- 📺 Movie Details with Trailers
- ⭐ My List (Add/Remove from Watchlist)
- 📱 Responsive Design
- 🎨 Netflix-like UI/UX

## 🛠️ Tech Stack

### Frontend
- React 19
- React Router DOM
- Vite
- CSS3

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- bcryptjs for password hashing

## 🚀 Local Development Setup

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or cloud instance)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd netflix-clone
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Edit .env with your MongoDB URI and JWT secret
   ```

3. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   cp .env.example .env
   # Edit .env with your backend API URL
   ```

4. **Seed the Database (Optional)**
   ```bash
   cd backend
   npm run seed
   ```

5. **Run the Application**

   Terminal 1 - Backend:
   ```bash
   cd backend
   npm run dev
   ```

   Terminal 2 - Frontend:
   ```bash
   cd frontend
   npm run dev
   ```

6. **Access the App**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 🌐 Deployment

### Deploy to Railway

1. **Create a Railway Account**
   - Go to [railway.app](https://railway.app) and sign up

2. **Create a New Project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Connect your GitHub account and select this repository

3. **Add MongoDB Database**
   - In your Railway project, click "New"
   - Select "Database" → "MongoDB"
   - Railway will automatically create a MongoDB instance

4. **Configure Environment Variables**
   
   Click on your service → Variables → Add the following:
   
   ```
   PORT=5000
   MONGODB_URI=${{MongoDB.MONGO_URL}}
   JWT_SECRET=your_super_secret_jwt_key_here
   NODE_ENV=production
   ```

5. **Deploy**
   - Railway will automatically deploy your app
   - You'll get a public URL like: `https://your-app.railway.app`

### Deploy Frontend Separately (Optional)

For better performance, you can deploy the frontend on Vercel/Netlify:

1. **Build the frontend**
   ```bash
   cd frontend
   npm run build
   ```

2. **Deploy to Vercel**
   ```bash
   npm i -g vercel
   vercel --prod
   ```

3. **Update Environment Variables**
   - Set `VITE_API_URL` to your Railway backend URL

## 📁 Project Structure

```
netflix-clone/
├── backend/
│   ├── config/          # Database configuration
│   ├── controllers/     # Route controllers
│   ├── middleware/      # Auth middleware
│   ├── models/          # Mongoose models
│   ├── routes/          # API routes
│   ├── .env             # Environment variables
│   ├── server.js        # Express server
│   └── seed.js          # Database seeder
├── frontend/
│   ├── public/          # Static assets
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── context/     # Context providers
│   │   ├── pages/       # Page components
│   │   ├── services/    # API services
│   │   ├── styles/      # CSS styles
│   │   └── App.jsx      # Main App component
│   └── index.html       # HTML template
├── .gitignore
├── railway.json         # Railway configuration
├── nixpacks.toml        # Nixpacks build config
└── README.md
```

## 🔑 API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

### Movies
- `GET /api/movies` - Get all movies
- `GET /api/movies/:id` - Get movie by ID
- `GET /api/movies/featured` - Get featured movies
- `GET /api/movies/trending` - Get trending movies
- `GET /api/movies/genre/:genre` - Get movies by genre

### Watchlist
- `GET /api/watchlist` - Get user's watchlist
- `POST /api/watchlist/:movieId` - Add movie to watchlist
- `DELETE /api/watchlist/:movieId` - Remove movie from watchlist

## 🎨 Screenshots

(Add screenshots of your app here)

## 📝 Environment Variables

### Backend (.env)
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000/api
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Design inspired by Netflix
- Built as a learning project

## 📧 Contact

Your Name - your.email@example.com

Project Link: [https://github.com/yourusername/netflix-clone](https://github.com/yourusername/netflix-clone)

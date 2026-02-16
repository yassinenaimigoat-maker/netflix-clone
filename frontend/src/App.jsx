import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { useAuth } from './context/AuthContext';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Browse from './pages/Browse';
import MovieDetail from './pages/MovieDetail';
import MyList from './pages/MyList';
import Navbar from './components/Navbar';

function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<PrivateRoute><><Navbar /><Home /></></PrivateRoute>} />
          <Route path="/browse" element={<PrivateRoute><><Navbar /><Browse /></></PrivateRoute>} />
          <Route path="/movie/:id" element={<PrivateRoute><><Navbar /><MovieDetail /></></PrivateRoute>} />
          <Route path="/my-list" element={<PrivateRoute><><Navbar /><MyList /></></PrivateRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

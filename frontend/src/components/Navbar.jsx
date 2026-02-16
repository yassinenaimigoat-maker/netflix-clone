import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Navbar.css';

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="netflix-logo">NETFLIX</h1>
        <Link to="/">Home</Link>
        <Link to="/browse">Browse</Link>
        <Link to="/my-list">My List</Link>
      </div>
      <div className="navbar-right">
        <span className="user-name">{user?.username}</span>
        <img src={user?.profileImage} alt="Profile" className="profile-img" />
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;

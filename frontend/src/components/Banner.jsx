import { useNavigate } from 'react-router-dom';
import '../styles/Banner.css';

function Banner({ movie }) {
  const navigate = useNavigate();

  return (
    <div 
      className="banner" 
      style={{ backgroundImage: `url(${movie.banner || movie.thumbnail})` }}
    >
      <div className="banner-content">
        <h1 className="banner-title">{movie.title}</h1>
        <div className="banner-buttons">
          <button className="banner-button" onClick={() => navigate(`/movie/${movie._id}`)}>
            ▶ Play
          </button>
          <button className="banner-button banner-button-info" onClick={() => navigate(`/movie/${movie._id}`)}>
            ℹ More Info
          </button>
        </div>
        <p className="banner-description">{movie.description}</p>
      </div>
      <div className="banner-fade"></div>
    </div>
  );
}

export default Banner;

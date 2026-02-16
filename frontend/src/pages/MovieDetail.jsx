import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById, addToMyList, removeFromMyList } from '../services/api';
import '../styles/MovieDetail.css';

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [inList, setInList] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await getMovieById(id);
      setMovie(data);
    };
    fetchMovie();
  }, [id]);

  const handleListToggle = async () => {
    try {
      if (inList) {
        await removeFromMyList(id);
        setInList(false);
      } else {
        await addToMyList(id);
        setInList(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (!movie) return <div className="loading">Loading...</div>;

  return (
    <div className="movie-detail">
      <div className="movie-detail-banner" style={{ backgroundImage: `url(${movie.banner || movie.thumbnail})` }}>
        <div className="movie-detail-content">
          <h1>{movie.title}</h1>
          <div className="movie-meta">
            <span className="rating">{movie.rating}/10</span>
            <span>{movie.year}</span>
            <span>{movie.duration}</span>
            <span className="maturity">{movie.maturityRating}</span>
          </div>
          <p className="movie-description">{movie.description}</p>
          <div className="movie-info">
            <p><strong>Cast:</strong> {movie.cast?.join(', ')}</p>
            {movie.director && <p><strong>Director:</strong> {movie.director}</p>}
            <p><strong>Genres:</strong> {movie.genre?.join(', ')}</p>
          </div>
          <div className="movie-actions">
            <button className="btn-play">▶ Play</button>
            <button className="btn-list" onClick={handleListToggle}>
              {inList ? '✓ Remove from My List' : '+ Add to My List'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;

import { useNavigate } from 'react-router-dom';
import '../styles/MovieRow.css';

function MovieRow({ title, movies }) {
  const navigate = useNavigate();

  return (
    <div className="movie-row">
      {title && <h2 className="row-title">{title}</h2>}
      <div className="row-posters">
        {movies.map((movie) => (
          <img
            key={movie._id}
            src={movie.thumbnail}
            alt={movie.title}
            className="row-poster"
            onClick={() => navigate(`/movie/${movie._id}`)}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieRow;

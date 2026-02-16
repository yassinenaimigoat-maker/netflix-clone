import { useEffect, useState } from 'react';
import { getAllMovies, getGenres, getMoviesByGenre } from '../services/api';
import MovieRow from '../components/MovieRow';
import '../styles/Browse.css';

function Browse() {
  const [genres, setGenres] = useState([]);
  const [moviesByGenre, setMoviesByGenre] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const genresData = await getGenres();
      setGenres(genresData);
      
      const genreMovies = {};
      for (const genre of genresData.slice(0, 10)) {
        const movies = await getMoviesByGenre(genre);
        if (movies.length > 0) {
          genreMovies[genre] = movies;
        }
      }
      setMoviesByGenre(genreMovies);
    };
    fetchData();
  }, []);

  return (
    <div className="browse">
      <h1 className="browse-title">Browse</h1>
      {Object.entries(moviesByGenre).map(([genre, movies]) => (
        <MovieRow key={genre} title={genre} movies={movies} />
      ))}
    </div>
  );
}

export default Browse;

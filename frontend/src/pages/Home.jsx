import { useEffect, useState } from 'react';
import { getFeaturedMovies, getTrendingMovies } from '../services/api';
import Banner from '../components/Banner';
import MovieRow from '../components/MovieRow';
import '../styles/Home.css';

function Home() {
  const [featured, setFeatured] = useState([]);
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const featuredData = await getFeaturedMovies();
      const trendingData = await getTrendingMovies();
      setFeatured(featuredData);
      setTrending(trendingData);
    };
    fetchData();
  }, []);

  return (
    <div className="home">
      {featured.length > 0 && <Banner movie={featured[0]} />}
      <div className="home-rows">
        {featured.length > 0 && <MovieRow title="Featured" movies={featured} />}
        {trending.length > 0 && <MovieRow title="Trending Now" movies={trending} />}
      </div>
    </div>
  );
}

export default Home;

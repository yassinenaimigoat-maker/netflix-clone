import { useEffect, useState } from 'react';
import { getMyList } from '../services/api';
import MovieRow from '../components/MovieRow';
import '../styles/MyList.css';

function MyList() {
  const [myList, setMyList] = useState([]);

  useEffect(() => {
    const fetchList = async () => {
      const data = await getMyList();
      setMyList(data);
    };
    fetchList();
  }, []);

  return (
    <div className="my-list">
      <h1>My List</h1>
      {myList.length > 0 ? (
        <MovieRow movies={myList} />
      ) : (
        <p className="empty-message">Your list is empty. Start adding movies!</p>
      )}
    </div>
  );
}

export default MyList;

import { useDebugValue, useEffect, useState } from 'react';
import { Food } from './types/Movie';
import data from './MovieData.json';

function MovieList() {
  // Movie Colletion
  const [foodDate, setFoodDate] = useState<Food[]>([]);
  // Making sure they don't keep checking the server  for updates
  useEffect(() => {
    const fetchFood = async () => {
      const response = await fetch('https://localhost:4000/api/food');
      const data = await response.json();
      setFoodDate(data);
    };
    fetchFood();
  }, []);

  return (
    <>
      <div>
        <h1>Joel Hilton's Movie Collection</h1>
      </div>
      <br />
      <div className="table-responsive">
        <table className="table table-hover table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
              <th>LentTo</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {foodDate.map((m) => (
              <tr key={m.movieId}>
                <td>{m.title}</td>
                <td>{m.year}</td>
                <td>{m.director}</td>
                <td>{m.rating}</td>
                <td>{m.category}</td>
                <td>{m.edited}</td>
                <td>{m.lentTo}</td>
                <td>{m.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MovieList;

import React from 'react';
import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import { useParams } from 'react-router-dom';

const Movie = () => {
  const { id } = useParams(); // Get movie ID from URL parameter
  const [movie, setMovie] = useState(null); 

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`) // Replace with your movie details API
      .then(response => response.json())
      .then(data => setMovie(data));
  }, [id]);

  return (
    <>
      <NavBar />
      <header>
        <h1>Movie Details</h1>
      </header>
      <main>
        {movie ? (
          <>
            <h2>{movie.title}</h2>
            <p>Runtime: {movie.runtime} minutes</p>
            <p>Genres: {movie.genres.join(', ')}</p>
          </>
        ) : (
          <p>Loading movie details...</p>
        )}
      </main>
    </>
  );
};

export default Movie;

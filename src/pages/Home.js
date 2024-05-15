import { useEffect, useState } from "react";
import React from 'react';
import NavBar from '../components/NavBar';
import MovieCard from '../components/MovieCard';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/movies') // Replace with your movie data source
      .then(response => response.json())
      .then(data => setMovies(data));
  }, []);
  return (
    <>
      <NavBar />
      <header>
        <h1>Home Page</h1>
      </header>
      <main>
        <h2>Movies</h2>
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <MovieCard title={movie.title} id={movie.id} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default Home;

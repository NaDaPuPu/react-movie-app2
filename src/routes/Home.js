import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

function Home() {
  const [inputs, setinputs] = useState({
    isLoading: true,
    movies: [],
  });
  const getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      'https://yts-proxy.now.sh/list_movies.json?sort_by=rating'
    );
    setinputs({ movies, isLoading: false });
  };

  useEffect(() => {
    getMovies();
  });

  const { isLoading, movies } = inputs;

  return (
    <section className='container'>
      {isLoading ? (
        <div className='loader'>
          <span className='loader__text'>Loading...</span>
        </div>
      ) : (
        <div className='movies'>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Home;

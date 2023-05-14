import React, { useEffect, useState } from 'react';
import axios from '../axios';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const baseURL = 'https://image.tmdb.org/t/p/original';

const Row = ({ title, fetchURL, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerURL, setTrailerURL] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
    };

    fetchData();
  }, [fetchURL]);

  const handleClick = (movie) => {
    // console.log(movie?.title);
    if (trailerURL) {
      setTrailerURL('');
    } else {
      movieTrailer(movie?.title || '')
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerURL(urlParams.get('v'));
        })
        .catch((error) => console.log(error));
    }
  };

  const opts = {
    height: '390',
    width: '99%',
    playerVars: {
      autoplay: 0,
    },
  };

  const moviesList = movies.map((movie) => {
    // console.log(movie);
    return (
      <img
        key={movie.id}
        className={`row__poster ${isLargeRow && 'row__poster-large'}`}
        onClick={() => handleClick(movie)}
        src={`${baseURL}${
          isLargeRow ? movie.poster_path : movie.backdrop_path
        }`}
        alt={movie.name}
      />
    );
  });

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">{moviesList}</div>
      <div style={{ padding: '40px' }}>
        {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
      </div>
    </div>
  );
};

export default Row;

import React, { useEffect, useState } from 'react';
import axios from '../axios';
import requests from '../requests';
import './Banner.css';

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchTrending);

      const randomNum = Math.floor(
        Math.random() * request.data.results.length - 1
      );
      setMovie(request.data.results[randomNum]);
    };

    fetchData();
  }, []);

  const styleBgrd = {
    backgroundSize: 'cover',
    backgroundImage: `url( "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
    backgroundPosition: 'center',
  };

  console.log(movie);
  return (
    <header className="banner" style={styleBgrd}>
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h3 className="banner__description">{movie?.overview}</h3>
      </div>
      <div className="banner__fade" />
    </header>
  );
};

export default Banner;

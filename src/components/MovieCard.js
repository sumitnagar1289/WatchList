
import React from 'react';
import { useMovieContext } from '../utils/MovieContext';

const MovieCard = ({ movie }) => {
  const { Poster, Title, Year } = movie;
  const { addUserMovie } = useMovieContext(); // Consume context

  const handleAddMovie = () => {
    addUserMovie(Title); // Add movie title
  };

  return (
    <div className="m-4 p-4 w-[200px] relative rounded-xl shadow-md bg-gray-50 hover:bg-gray-200 hover:scale-[1.02] ">
      <div className='relative flex'>
        <img
          className="rounded-lg"
          alt="movie-poster"
          src={Poster === "N/A" ? "default-poster-url" : Poster}
        />
        <div className='absolute bottom-1 right-1'>
          <button
            className="p-1 my-2 bg-white hover:bg-green-400 hover:bg-gray-100 rounded-lg shadow-lg"
            onClick={handleAddMovie}
          >
            Add +
          </button>
        </div>
      </div>
      <h3 className="font-bold py-4">{Title}</h3>
      <h4 className='absolute bottom-2'>Released Year : {Year}</h4>
    </div>
  );
};

export default MovieCard;

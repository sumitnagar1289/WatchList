
// // MovieContext.js
// import React, { createContext, useState, useContext, useEffect } from 'react';

// const MovieContext = createContext();

// export const useMovieContext = () => useContext(MovieContext);

// export const MovieProvider = ({ children }) => {
//   // Load added movies from local storage when the component mounts
//   const initialAddedMovies = JSON.parse(localStorage.getItem('addedMovies')) || [];
//   const [addedMovies, setAddedMovies] = useState(initialAddedMovies);

//   useEffect(() => {
//     // Save added movies to local storage whenever they change
//     localStorage.setItem('addedMovies', JSON.stringify(addedMovies));
//   }, [addedMovies]);

//   const addMovie = (title) => {
//     // Check if the movie is already added
//     if (!addedMovies.includes(title)) {
//       setAddedMovies((prevMovies) => [...prevMovies, title]);
//     }
//   };

//   const clearMovies = () => {
//     setAddedMovies([]);
//   };

//   return (
//     <MovieContext.Provider value={{ addedMovies, addMovie, clearMovies }}>
//       {children}
//     </MovieContext.Provider>
//   );
// };



// MovieContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [userMovies, setUserMovies] = useState({});
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    // Load user movies and email from localStorage when the component mounts
    const storedUserMovies = JSON.parse(localStorage.getItem('userMovies')) || {};
    const storedUserEmail = localStorage.getItem('userEmail') || '';
    setUserMovies(storedUserMovies);
    setUserEmail(storedUserEmail);
  }, []);

  const addUserMovie = (movie) => {
    setUserMovies(prevUserMovies => {
      const updatedUserMovies = { ...prevUserMovies };
      if (!updatedUserMovies[userEmail]) {
        updatedUserMovies[userEmail] = [movie];
      } else {
        updatedUserMovies[userEmail] = [...updatedUserMovies[userEmail], movie];
      }
      localStorage.setItem('userMovies', JSON.stringify(updatedUserMovies));
      return updatedUserMovies;
    });
  };

  const getUserMovies = () => {
    return userMovies[userEmail] || [];
  };

  const clearUserMovies = () => {
    setUserMovies(prevUserMovies => {
      const updatedUserMovies = { ...prevUserMovies };
      delete updatedUserMovies[userEmail];
      localStorage.setItem('userMovies', JSON.stringify(updatedUserMovies));
      return updatedUserMovies;
    });
  };

  return (
    <MovieContext.Provider value={{ addUserMovie, getUserMovies, clearUserMovies }}>
      {children}
    </MovieContext.Provider>
  );
};



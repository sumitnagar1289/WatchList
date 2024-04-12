


import React, { useState } from "react";
import MovieCard from "./MovieCard";

const Screen = () => {
    const [movieList, setMovieList] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [isLoading, setIsLoading] = useState(false);
  
    async function fetchMovie(search) {
      setIsLoading(true);
      const encodedSearch = encodeURIComponent(search.trim());
      const result = await fetch(
        `https://www.omdbapi.com/?s=${encodedSearch}&apikey=cfd38099`
      );
      const data = await result.json();
      const searchResults = data.Search || [];
      setMovieList(searchResults);
      setIsLoading(false);
    }
  
    const handleSearch = () => {
      fetchMovie(searchText);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          handleSearch();
        }
      };
  
    return (
      <div className="flex"> 
        <div className="flex-grow">
        <div className="border border-solid border-red-500  border-2 p-2 shadow-md">
          <h1 className="text-red-400 font-bold text-3xl m-3">Welcome to WatchList</h1>
          <div className="m-3">
            Browse movies, add them to watchlist
          </div>
          </div>

          <div className="filter flex justify-center">
            <div className="search m-3 p-3">
              <input
                type="text"
                className="w-[300px] m-1 border hover:scale-105 border-black  text-black bg-white focus:bg-white px-1 py-1 rounded-md"
                placeholder="Search..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button
                className="p-1 rounded-lg m-1 border-black border-[1px] bg-rose-500 hover:text-white hover:scale-110"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            searchText.length > 0 ? (
              <p>Showing results for "{searchText}"</p>
            ) : null
          )}
          <div className="flex flex-wrap">
            {movieList.length > 0 ? (
              movieList.map((movie, index) => (
                <MovieCard key={index} movie={movie} />
              ))
            ) : (
              <p>No results found</p>
            )}
          </div>
        </div>
      </div>
    );
};

export default Screen;

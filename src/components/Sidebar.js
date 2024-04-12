


// // Sidebar.js
// import React from 'react';
// import { useMovieContext } from '../utils/MovieContext';
// //setIsLoggedIn,
// const Sidebar = ({  handleLogout }) => {
//   const { addedMovies, clearMovies } = useMovieContext(); // Consume context

//   return (
//     <div className="bg-gray-200 p-1 overflow-y-auto h-full align-bottom flex flex-col justify-between">
//       <div>
//         <h2 className="text-2xl font-bold mb-2">Added Movies</h2>
//         <ul className="list-disc pl-4">
//           {addedMovies.map((movie, index) => (
//             <li key={index}>{movie}</li>
//           ))}
//         </ul>
//         <button
//           className="bg-red-500 text-white py-2 px-4 mt-4 rounded hover:bg-red-600"
//           onClick={clearMovies} // Clear cart function
//         >
//           Clear Cart
//         </button>
//       </div>
//       <button
//         className="bg-red-500 text-white py-2 px-4 mt-4 rounded hover:bg-red-600"
//         onClick={handleLogout} // Logout function

//       >
//         Log Out
//       </button>
//     </div>
//   );
// };

// export default Sidebar;



// Sidebar.js
// import React, { useEffect } from 'react';
// import { useMovieContext } from '../utils/MovieContext';

// const Sidebar = ({ handleLogout }) => {
//   const { userEmail, addedMovies, clearMovies } = useMovieContext();

//   return (
//     <div className="bg-gray-200 p-1 overflow-y-auto h-full align-bottom flex flex-col justify-between">
//       <div>
//         <h2 className="text-2xl font-bold mb-2">Added Movies</h2>
//         <ul className="list-disc pl-4">
//           {addedMovies.map((movie, index) => (
//             <li key={index}>{movie}</li>
//           ))}
//         </ul>
//         <button
//           className="bg-red-500 text-white py-2 px-4 mt-4 rounded hover:bg-red-600"
//           onClick={clearMovies}
//         >
//           Clear Cart
//         </button>
//       </div>
//       <button
//         className="bg-red-500 text-white py-2 px-4 mt-4 rounded hover:bg-red-600"
//         onClick={handleLogout}
//       >
//         Log Out
//       </button>
//     </div>
//   );
// };

// export default Sidebar;



// Sidebar.js
import React from 'react';
import { useMovieContext } from '../utils/MovieContext';

const Sidebar = ({ handleLogout }) => {
  const { getUserMovies, clearUserMovies } = useMovieContext(); // Consume context
  const userEmail = localStorage.getItem('userEmail');
  const userMovies = getUserMovies() || [];

  return (
    <div className="bg-rose-100 p-1 overflow-y-auto h-full align-bottom flex flex-col justify-between">
      <div>
        <h1 className=" font-bold mb-2 "> Hello {userEmail.split('@')[0]}</h1>
        <h2 className="text-2xl text-rose-600 font-bold mb-2">WatchList</h2>
        <ul className="list-disc pl-4">
          {userMovies.map((movie, index) => (
            <li key={index}>{movie}</li>
          ))}
        </ul>
        <button
          className="bg-red-500 text-white py-2 px-4 mt-4 rounded hover:bg-red-600"
          onClick={clearUserMovies} // Clear cart function
        >
          Clear Cart
        </button>
      </div>
      <button
        className="bg-red-500 text-white py-2 px-4 mt-4 rounded hover:bg-red-600"
        onClick={handleLogout} // Logout function
      >
        Log Out
      </button>
    </div>
  );
};

export default Sidebar;





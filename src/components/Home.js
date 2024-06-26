
import React from 'react';
import Sidebar from './Sidebar';
import Screen from './Screen';
import { MovieProvider } from '../utils/MovieContext';
import { useNavigate } from 'react-router-dom';

function Home({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    navigate("/");
  };

  return (
    <MovieProvider>
      <div className="App flex ">
        <div className="p-1 w-[300px] h-screen">
          <Sidebar handleLogout={handleLogout} />
        </div>
        <div className="p-5 w-screen h-screen border overflow-auto">
          <Screen />
        </div>
      </div>
    </MovieProvider>
  );
}

export default Home;

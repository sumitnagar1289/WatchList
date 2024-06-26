
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if login state in localStorage
    const loggedInState = localStorage.getItem('isLoggedIn');
    if (loggedInState === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true'); // Store login state in localStorage
  };

  const handleSignUp = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true'); // Store login state in localStorage
  };

  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp onSignUp={handleSignUp} />} />
        <Route path="/home" element={isLoggedIn ? <Home setIsLoggedIn={setIsLoggedIn} /> : <Login onLogin={handleLogin} />} />
        <Route path="/" element={<Login onLogin={handleLogin} />} />
      </Routes>
    </Router>
  );
}

export default App;

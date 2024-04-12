


// import React, { useEffect, useState } from 'react';
// import Login from './components/Login';
// import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
// import Home from './components/Home';
// import SignUp from './components/SignUp';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     // Check if login state in localStorage
//     const loggedInState = localStorage.getItem('isLoggedIn');
//     if (loggedInState === 'true') {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//     localStorage.setItem('isLoggedIn', 'true'); // Store login state in localStorage
//   };



//   return (
//     <Router>
//       <Routes>
//         <Route path="/signup" element={<SignUp onSignUp={handleSignUp} />} />
//         <Route path="/login" element={<Login onLogin={handleLogin} />} />
//         <Route path="/home" element={<Home setIsLoggedIn={setIsLoggedIn} />} />
//       </Routes>
//     </Router>
//   );
// }


// export default App;



import React, { useEffect, useState } from 'react';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './components/Home';
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
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/home" element={<Home setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>
    </Router>
  );
}

export default App;

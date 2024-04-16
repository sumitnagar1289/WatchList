import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    const storedEmails = JSON.parse(localStorage.getItem('emails')) || [];
    const storedPasswords = JSON.parse(localStorage.getItem('passwords')) || [];
    
    if (!email.trim()) {
      setError('Please enter your email address.');
    } else if (!password.trim()) {
      setError('Please enter your password.');
    } else if (!storedEmails.includes(email)) {
      setError('Email not found. Please sign up first.');
    } else {
      const index = storedEmails.indexOf(email);
      if (storedPasswords[index] !== password) {
        setError('Incorrect password.');
      } else {
        setError('');
        onLogin(email);
        localStorage.setItem('userEmail', email);
        navigate('/home');
      }
    }
  };

  return (
    <div className="container mx-auto mt-20 w-1/3 shadow-2xl">
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-xl p-3 bg-rose-100">
        <h2 className="text-3xl font-bold mb-4 text-center text-red-600">Log In To WatchList</h2>
        <div className="px-6 py-8">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          <div className="flex items-center justify-between">
            <button
              onClick={handleSubmit}
              className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              Log In
            </button>
          </div>
          <p className="mt-4 text-center text-sm">
            Don't have an account? <Link to="/signup" className="text-red-600 font-bold hover:scale-x-110">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;

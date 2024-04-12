import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!email.trim()) {
      setError('Please enter your email address.');
    } else {
      setError('');
      // Retrieve existing emails from local storage
      const existingEmails = JSON.parse(localStorage.getItem('emails')) || [];
      // Check if the email already exists
      if (existingEmails.includes(email)) {
        setError('Email already exists. Please use a different email.');
      } else {
        // Add the new email to the existing emails array
        const updatedEmails = [...existingEmails, email];
        localStorage.setItem('emails', JSON.stringify(updatedEmails));
        localStorage.setItem('userEmail', email); // Set userEmail in localStorage
        // Navigate to the login page after signing up
        navigate('/');
      }
    }
  };


  return (
    <div className="container mx-auto mt-20 w-1/3  ">
      <div className="max-w-md mx-auto p-2 bg-white rounded-lg overflow-hidden md:max-w-xl shadow-lg bg-rose-100">
        <h2 className="text-3xl font-bold mb-4 text-center text-red-600">Sign Up</h2>
        <div className="px-6 py-8 mx-8">
          <div className="mb-4 ">
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
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>
          <div className="flex items-center justify-center">
            <button
              onClick={handleSubmit}
              className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

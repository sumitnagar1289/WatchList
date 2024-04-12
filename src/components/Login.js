// import React, { useState } from 'react';

// function Login({ onLogin }) {
//   const [email, setEmail] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onLogin(email);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 bg-slate-100 m-auto w-[400px] h-[400px] flex items-center justify-between">
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//           Email Address
//         </label>
//         <input
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           id="email"
//           type="email"
//           placeholder="Email Address"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//       </div>
//       <div className="flex items-center justify-between">
//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           type="submit"
//         >
//           Log In
//         </button>
//       </div>
//     </form>
//   );
// }

// export default Login;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Login({ onLogin }) {
//   const [email, setEmail] = useState('');
//   const [error, setError] = useState('');
//   const navigate  =  useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!email.trim()) {
//       setError('Please enter your email address.');
//     } else {
//       setError('');
//       onLogin(email);
//       navigate('/home')
//     }
//   };

//   return (
//     <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 bg-slate-100 m-auto w-[400px] h-[400px] flex flex-col items-center justify-center">
//       <h2 className="text-3xl font-bold mb-4 text-gray-800">Log In</h2>
//       <div className="mb-4 w-full">
//         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//           Email Address
//         </label>
//         <input
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           id="email"
//           type="email"
//           placeholder="Email Address"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
//       </div>
//       <button
//         onClick={handleSubmit}
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//       >
//         Log In
//       </button>
//     </div>
//   );
// }

// export default Login;

// Login.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Login({ onLogin }) {
//   const [email, setEmail] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!email.trim()) {
//       setError('Please enter your email address.');
//     } else {
//       setError('');
//       onLogin(email);
//       navigate('/home');
//     }
//   };

//   return (
//     <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 bg-slate-100 m-auto w-[400px] h-[400px] flex flex-col items-center justify-center">
//       <h2 className="text-3xl font-bold mb-4 text-gray-800">Log In</h2>
//       <div className="mb-4 w-full">
//         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//           Email Address
//         </label>
//         <input
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           id="email"
//           type="email"
//           placeholder="Email Address"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
//       </div>
//       <button
//         onClick={handleSubmit}
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//       >
//         Log In
//       </button>
//     </div>
//   );
// }

// export default Login;


import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Retrieve existing emails from local storage
    const storedEmails = JSON.parse(localStorage.getItem('emails')) || [];
    // Check if the entered email exists in the stored emails
    if (!email.trim()) {
      setError('Please enter your email address.');
    } else if (!storedEmails.includes(email)) {
      setError('Email not found. Please sign up first.');
    } else {
      setError('');
      onLogin(email);
      localStorage.setItem('userEmail', email); // Set userEmail in localStorage
      navigate('/home');
    }
  };

  return (
    <div className="container mx-auto mt-20 w-1/3 shadow-2xl ">
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
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>
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


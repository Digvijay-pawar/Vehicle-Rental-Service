// App.js
import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/Register';
import Home from './pages/Home';
import ResetPassword from './pages/ResetPassword';
import { useProfile } from './hook/useProfile';
import Careers from './components/Careers';
import Profile from './pages/Profile';
import Header from './components/Header';
import { AuthContext } from './context/authContext';

function App() {
  const { getProfile } = useProfile();
  const { user } = useContext(AuthContext);
  const isLogin = !!user;
  const navigate = useNavigate();
  const location = useLocation(); // To get the current route

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    const checkProfile = async () => {
      const success = await getProfile(token);
      if (success) {
        navigate('/');
      }
    };

    checkProfile();
  }, []);

  // List of paths where header should not be displayed
  const noHeaderPaths = ['/login', '/register', '/reset-password'];

  return (
    <div>
      {/* Conditionally render the header */}
      {!noHeaderPaths.includes(location.pathname) && <Header />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/profile' element={isLogin ? <Profile /> : <Navigate path={'/'}/>} />
      </Routes>
    </div>
  );
}

export default function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/Register';
import Home from './pages/Home';
import ResetPassword from './pages/ResetPassword';
import { useProfile } from './hook/useProfile';

function App() {
  const { getProfile } = useProfile();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    
    const checkProfile = async () => {
      const success = await getProfile(token);
      if (success) {
        navigate('/home');
      }else{
        navigate("/")
      }
    };

    checkProfile();
  }, []);

  return (
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/reset-password' element={<ResetPassword />} />
    </Routes>
  );
}

export default function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

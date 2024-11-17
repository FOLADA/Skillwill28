import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Header from './components/Header';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './routes/ProdectedRoute';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/About" element={<About />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;

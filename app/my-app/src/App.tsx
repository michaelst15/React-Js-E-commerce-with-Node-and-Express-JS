import './App.css';
import React from 'react';
import NavBar from './Component/NavBar';
import Home from './Component/Home';
import Login from './Component/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Login' element={<Login />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
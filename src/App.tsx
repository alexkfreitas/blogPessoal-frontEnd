import React from 'react';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import {Grid} from '@material-ui/core';
import './App.css';
import Home from './paginas/home/Home';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";

import Login from './paginas/login/Login';

function App() {
  return (
    <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
          </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
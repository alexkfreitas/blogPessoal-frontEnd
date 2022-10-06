import React from 'react';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import {Grid} from '@material-ui/core';
import './App.css';
import Home from './paginas/home/Home';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';

function App() {
  return (
    <BrowserRouter>
      
        <Navbar />

        <div style={{minHeight: '100vh'}}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastrousuario" element={<CadastroUsuario />} />
            <Route path="/temas" element={<ListaTema />} />
            <Route path="/posts" element={<ListaPostagem />} />
          </Routes>
        </div>
        
        <Footer />
      
    </BrowserRouter>
  );
}

export default App;
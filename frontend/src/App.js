import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './componets/layout/Header';
import Nav from './componets/layout/Nav';
import Footer from './componets/layout/Footer';

import ContactoPage from './pages/ContactoPage';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/Nosotros Page';
import NovedadesPage from './pages/NovedadesPage';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Nav />  
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='nosotros' element={<NosotrosPage />} />
          <Route path='novedades' element={<NovedadesPage />} />
          <Route path='contacto' element={<ContactoPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

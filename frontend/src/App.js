import React from 'react';
import { BrowseRouter, Routes, Route } from 'react-router-dom';
import Header from './componets/layout/Header';
import Nav from './componets/layout/Nav';
import Footer from './componets/layout/Footer';

import CotactoPage from './pages/ContactoPage';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/Nosotros Page';
import NovedadesPage from '/pages/NovedadesPage';

import './App.css';
import ContactoPage from './pages/ContactoPage';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowseRouter>
        <Nav />  
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='nosotros' element={<NosotrosPage />} />
          <Route path='novedades' element={<NovedadesPage />} />
          <Route path='contacto' element={<ContactoPage />} />
        </Routes>
      </BrowseRouter>
      <Footer />
    </div>
  );
}

export default App;

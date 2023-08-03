import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import './App.css';
import Catalog from './components/Catalog';
import Contact from './components/Contact';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/catalog' element={<Catalog />}/>
      <Route path='/contact' element={<Contact />}/>
    </Routes>
  );
}

export default App;

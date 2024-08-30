import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import City from './pages/city';
import About from './pages/About';


const App = () => (
  <div className="app-container">
    <Navbar />
    <main className="flex-grow-1">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city/:cityId" element={<City/>} />
        <Route path="/about" element={<About/>} />
        <Route  />
      </Routes>
    </main>
    <Footer />
  </div>
);

export default App;

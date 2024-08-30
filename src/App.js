import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import City from './pages/city';


const App = () => (
  <div>
    <Navbar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city/:cityId" element={<City/>} />
        <Route  />
      </Routes>
    </main>
    <Footer />
  </div>
);

export default App;

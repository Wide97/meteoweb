import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';


const App = () => (
  <div>
    <Navbar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route  />
      </Routes>
    </main>
    <Footer />
  </div>
);

export default App;

import './App.css';
import Navbar from "./components/NavBar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import React from 'react';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import Products from './components/pages/Products';



function App() {
  return (
    <>
    <Router>
     <Navbar />
     <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/services' element={<Services />} />
       <Route path='/products' element={<Products />} />
       <Route path='/sign-up' element={<SignUp />} />
     </Routes>
    </Router>
    </>
  );
}

export default App;

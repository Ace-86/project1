import './App.css';
import Navbar from "./components/NavBar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import React from 'react';



function App() {
  return (
    <>
    <Router>
     <Navbar />
     <Routes>
       <Route path='/' element={<Home />} />
     </Routes>
    </Router>
    </>
  );
}

export default App;

import './App.css';
import React from "react";
//Config router
import {BrowserRouter, Routes, Route} from "react-router-dom";
//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Info from "./pages/Info";


function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/products/:id/info" element={<Info />}/>  
        <Route path="/products/:id" element={<Products />}/>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;

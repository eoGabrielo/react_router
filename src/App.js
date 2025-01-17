import './App.css';
import React from "react";
//Config router
import {BrowserRouter, Routes, Route} from "react-router-dom";
//Componentes
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";
//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";



function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
    <BrowserRouter>
    <Navbar />
    <SearchForm />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/products/:id/info" element={<Info />}/>  
        <Route path="/products/:id" element={<Products />}/>
        <Route path='/search' element={<Search />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;

import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Router/Home';
import Products from './Router/Products';
import Login from './Router/Login';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/products' element={<Products />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

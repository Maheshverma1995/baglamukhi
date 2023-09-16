import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import NavBar from './component/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavHeader from './component/NavHeader';
import Slider from './component/Slider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <NavHeader></NavHeader>
    <NavBar/>
    <Routes>
      <Route path='' element={<Slider/>}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();

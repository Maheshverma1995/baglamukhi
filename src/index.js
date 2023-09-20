import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import NavBar from './component/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavHeader from './component/NavHeader';
import Home from './component/Home';
import Footer from './component/Footer';
import Pujavidhi from './component/Pujavidhi';
import Legal from './component/Legal';
import Life from './component/Life';
import Propery from './component/Propery';
import Child from './component/Child'
import Court from './component/Court'
import CareerPage from './component/CareerPage';
import Loss from './component/Loss'
// import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
    <NavHeader></NavHeader>
    <NavBar/>
    <Routes>
      <Route path='' element={<Home/>}></Route>
      <Route path='pujavidhi' element={<Pujavidhi/>}></Route>
      <Route path='legal' element={<Legal/>}></Route>
      <Route path='careerpage' element={<CareerPage/>}></Route>
      <Route path='life' element={<Life/>}></Route>
      <Route path='property' element={<Propery/>}></Route>
      <Route path='child' element={<Child/>}></Route>
      <Route path='loss' element={<Loss/>}></Route>
      <Route path='court' element={<Court/>}></Route>
    </Routes>
    <Footer/>
    {/* <App/> */}
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();

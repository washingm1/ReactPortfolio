import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from "./Components/Nav";
import Header from './Components/Header';
import Section from './Components/Section';
import Portfolio from './Components/Portfolio';
import Footer from './Components/Footer';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode> 
    <Nav />
    <Header />
    <Section />
    <Portfolio />
    <Footer />
 </React.StrictMode>

  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

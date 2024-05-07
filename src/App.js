// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Layout from './Headerlinks/Layout'
import Shop from './Headerlinks/Shop'
import Account from './Headerlinks/Account'
import Shipping from './Headerlinks/Shipping'
import NoPage from './Headerlinks/Nopage'
import About from './Headerlinks/About'
import Contact from "./Headerlinks/Contact";


function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Shop />} />
          <Route path="account" element={<Account />} />
          <Route path="about" element={<About/>} />
          <Route path="contact" element={<Contact />} />
          <Route path="shipping" element={<Shipping/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from 'react'
import Countries from './component/Countries'
import Header from './component/Header';
import {  BrowserRouter, Routes, Route } from 'react-router-dom'
import Card from './component/Card';

function App() {
  return (
  <BrowserRouter>
     <Header/>

     <Routes>
      <Route path='/'  element={<Countries/>}/>
      <Route path='/name/:id'  element={<Card/>}/>
     </Routes>
  
  
  </BrowserRouter>
  

  )
}

export default App;

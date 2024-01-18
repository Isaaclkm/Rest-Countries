import React from 'react'
import Countries from './component/Countries'
import Header from './component/Header';
import Filter from './component/Filter';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
  <>
    <Header/>
    <Routes>
      <Route path='/' elements={
      <Filter/>
      <Countries/>}/>
      <Route path='/product' element={<Card/>}/>
    </Routes>
    <Filter/>
    <Countries/>

  </>
  )
}

export default App;

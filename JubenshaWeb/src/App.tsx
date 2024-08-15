import './styles/App.css'
import { Routes } from 'react-router';
import {  Route } from "react-router-dom";
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import List from './pages/List';
import SingleJuben from './pages/SingleJuben';



function App() {
  

  return (
    <div className='container'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/list' element={<List/>}/>
        <Route path='/list/:title' element={<SingleJuben/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App

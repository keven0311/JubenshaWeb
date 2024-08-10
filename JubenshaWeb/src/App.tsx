import './styles/App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import List from './pages/List';


function App() {
  

  return (
    <div className='container'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/list' element={<List/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App

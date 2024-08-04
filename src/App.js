import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Business from './pages/Business';
import Health from './pages/Health';
import Entertainment from './pages/Entertainment';
import Science from './pages/Science';
import Sports from './pages/Sports';
import Technology from './pages/Technology';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
export const App = () => {
  return (
    <div>
      <Router>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route  path="/general" element={<Categories/>} />
          <Route  path="/business" element={<Business/>} />
          <Route  path="/entertainment" element={<Entertainment/>} />
          <Route  path="/health" element={<Health/>} />
          <Route  path="/science" element={<Science/>} />
          <Route  path="/sports" element={<Sports/>} />
          <Route  path="/technology" element={<Technology/>} />
        </Routes>
        <Footer/>
      </Router>
    

      </div>
  )
}

export default App;
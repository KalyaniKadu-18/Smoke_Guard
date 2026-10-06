import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import Detect from './pages/detect/Detect.jsx';
import Login from './pages/login/Login.jsx';
import Signup from './pages/signup/Signup.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/footer/Footer.jsx';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Navbar/>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/detect' element={<Detect/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  )
}

export default App
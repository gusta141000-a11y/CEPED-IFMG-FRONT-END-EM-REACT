import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './components/aula33/Home.jsx'
import Contact from './components/aula33/contact.jsx'
import About from './components/aula33/About.jsx'


function App() {
    return(
        <BrowserRouter>
        {/* Navegação */}
        <nav>
            <Link to="/">Home</Link> |{" "}
            <Link to="/about">About</Link> |{" "}
            <Link to="/contact">Contact</Link>
      </nav>
        {/* Routes  */}
        <Routes>
            <Route path='/' element  = {<Home/>}/>
            <Route path='/About' element  = {<About/>}/>
            <Route path='/Contact' element  = {<Contact/>}/>
        </Routes>

        </BrowserRouter>
    );
}
export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route, Link, useParams} from 'react-router-dom'
import Home from './components/aula33/Home.jsx'
import Contact from './components/aula33/contact.jsx'
import BikeProducts from './components/aula33/componentes_ex2/BikeProducts.jsx'
import Products from './components/aula33/componentes_ex2/Products.jsx'
import CarProducts from './components/aula33/componentes_ex2/CarProducts.jsx'
import Info from './components/aula33/componentes_ex2/Info.jsx'


 
function App() {
    let x = "/customer/Felipe"
    let y = "Felipe"
    return(
    <BrowserRouter>
      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/custumer/products">Products</Link> |{" "}
        <Link to="/custumer/contact">Contact</Link> |{" "}
        <Link to="/customer/Emil">Emil</Link> |{" "}
        <Link to="/customer/Tobias">Tobias</Link> | {" "}
        <Link to = {`/customer/${y}`} > {y}</Link> |{" "}
      </nav>

      {/* Routes */}
      <Routes>
      <Route path="/customer/:firstname" element={<Info />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}>
          
          <Route path="car" element={<CarProducts />} />
          <Route path="bike" element={<BikeProducts />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    );
}
export default App

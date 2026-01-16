import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Car from './components/car.jsx'
import Moto from './components/moto.jsx'
import favoriteColor from './components/moto.jsx'




function App(props) {


    const carInfo = {

        name: "Ford",
        
        model: "Mustang",
        
        color: "red",
        
        year: 1969
        
        };

    const motoInfo = {

        name: "Honda",
            
        model: "Cbx 250",
            
        color: "white",
            
        year: 2008
            
        };

    return (
        <>
            <Car carinfo={carInfo}/>
            <Moto motoinfo={motoInfo}/>

        </>
       
);

}
export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Car from './components/car.jsx'

    
function App(props) {


    const carInfo = {

        name: "Ford",
        
        model: "Mustang",
        
        color: "red",
        
        year: 1969
        
        };
    return (

        <Car carinfo={carInfo}/>
);

}
export default App

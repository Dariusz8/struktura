import './App.css'
import LogoLoader from './LogoLoader';
import SideBar from './SideBar'; 
import HomePage from './HomePage';
import React, { createContext, useState} from 'react';

export const MyStateContext = createContext();

function App() {
  
const [contextCounter, setContextCounter] = useState(0);

  return (
    <MyStateContext.Provider value ={{ contextCounter, setContextCounter}}>
      <div>
        <LogoLoader/>
        <SideBar/>
        <HomePage/>
      </div>
    </MyStateContext.Provider>
  )
}

export default App

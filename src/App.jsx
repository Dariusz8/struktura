import './App.css'
import LogoLoader from './LogoLoader';
import SideBar from './SideBar'; 
import HomePage from './HomePage';
import React, { createContext, useState} from 'react';

export const MyStateContext = createContext();

function App() {

const [sideBarActive, setSideBarActive] = useState(true);
const [portfolioActive, setPortfolioActive] = useState(false);
const [aboutActive, setAboutActive] = useState(false);
const [kitchenActive, setKitchenActive] = useState(false);
const [bathroomActive, setBathroomActive] = useState(false);
const [bedroomActive, setBedroomActive] = useState(false);
const [indoorActive, setIndoorActive] = useState(false);
const [outdoorActive, setOutdoorActive] = useState(false);

  return (
    <MyStateContext.Provider value ={{ aboutActive, setAboutActive,kitchenActive, setKitchenActive,
      sideBarActive, setSideBarActive,portfolioActive, setPortfolioActive,bathroomActive, setBathroomActive,bedroomActive, setBedroomActive,
      indoorActive, setIndoorActive, outdoorActive, setOutdoorActive}}>
      <div>
        <LogoLoader/>
        <SideBar/>
        <HomePage/>
      </div>
    </MyStateContext.Provider>
  )
}

export default App

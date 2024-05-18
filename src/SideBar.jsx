import './assets/SideBar.css';
import { Cloudinary } from '@cloudinary/url-gen';
import {AdvancedImage} from '@cloudinary/react';
import {limitFill, scale} from "@cloudinary/url-gen/actions/resize";
import React, {useState, useContext} from 'react';
import { format } from '@cloudinary/url-gen/actions/delivery';
import { auto } from '@cloudinary/url-gen/qualifiers/format';
import { MyStateContext } from './App';

const SideBar = () => {
    const {sideBarActive,setSideBarActive, portfolioActive, setPortfolioActive,
        aboutActive,setAboutActive, kitchenActive,setKitchenActive, bathroomActive,setBathroomActive, bedroomActive,setBedroomActive} = useContext(MyStateContext);
    
    
    //wtv wants to be shown fist be default one and then ! ...

    const portfolioClick = () => {
        setSideBarActive(false);
        setAboutActive(false);
        setPortfolioActive(true);
        setContextCounter(contextCounter+1)
    }

    const backToMenuClick = () => {
        setPortfolioActive(false);
        setSideBarActive(true);
    }

    const aboutClick = () => {
        setPortfolioActive(false)
        setAboutActive(true);
    }
//SET ALL TO OPPOSITE SO CAN BACK AND FORTH STATE
    const kitchenClick = () => {
        setPortfolioActive(false);
        setBathroomActive(false);
        setBedroomActive(false);
        setKitchenActive(true);
    }

    const bathroomClick = () => {
        setPortfolioActive(false);
        setKitchenActive(false);
        setBedroomActive(false);
        setBathroomActive(true);
    }

    const bedroomClick = () => {
        setPortfolioActive(false);
        setKitchenActive(false);
        setBathroomActive(false);
        setBedroomActive(true)
    }

    const contactClick = () => {
        window.location.href = "mailto:struktura.reno@gmail.com";
      };

//when was trying to use signals for state
    // const portfolioClick = () => {
    //     portfolioStatus.value = !portfolioStatus.value;
    //     localStorage.setItem('portfolioStatus', JSON.stringify(portfolioStatus.value))
    //     window.location.reload();
    // }
    //     const storedPortfolioValue = localStorage.getItem('portfolioStatus');
    //         if (storedMenuValue !== null) {
    //         portfolioStatus.value = JSON.parse(storedPortfolioValue);
    //         }
    //checking signal value
    //effect(() => console.log(sideBarStatus.value));

//create and configure to my cloudinary instance
    const cld = new Cloudinary({
        cloud: {
        cloudName: 'dly85se71'
        }
    });
//cloudinary pictures being taken
    const logoImg = cld.image('STRUKTURA');
    const sideBarMenu = cld.image('STRUKTURA1');

  //use cloudinary sdk to have image in ready format
    logoImg.format('auto')
        .quality('auto')
        .resize(scale().width(0.10).regionRelative());

    sideBarMenu.format('auto')
        .quality('auto')
        .resize(scale().width(0.065).regionRelative());


    const showingPorfolioSideBar = (
        <div className='sideBarBoxDaddy'>
            <p className='sideBarLogo'>
                <AdvancedImage cldImg={logoImg} alt="Small Struktura Company Logo" />
            </p>
            <button className='kitchenIcon sideBarOptions' title="Kitchen" onClick={kitchenClick}>
                Kitchen
            </button>
            <button className='sideBarOptions' title="Toilet" onClick={bathroomClick}>
                Bathroom
            </button>
            <button className='sideBarOptions' title="Bed" onClick={bedroomClick}>
                Bedroom
            </button>
            <button className='sideBarOptions' title="TV">
                Others
            </button>
            <button className='sideBarMenuButtonOff' onClick={backToMenuClick}>
                <AdvancedImage cldImg={sideBarMenu} alt="Arrow Button For Sidebar Menu" />
            </button>
        </div>)
        
    const hiddingSideBarCode = (
        <div className='sideBarBoxDaddy'>
            <p className='sideBarLogo'>
                <AdvancedImage cldImg={logoImg} alt="Small Struktura Company Logo" />
            </p>
            <button className='sideBarMenuButtonOff' >
                <AdvancedImage cldImg={sideBarMenu} alt="Arrow Button For Sidebar Menu" />
            </button>
        </div>)

    const showingHomeSideBar = (
        <div className='sideBarBoxDaddy'>
            <p className='sideBarLogo'>
                <AdvancedImage cldImg={logoImg} alt="Small Struktura Company Logo" />
            </p>
            <button className='mutedSideBarMenuButtonOn' >
                <AdvancedImage cldImg={sideBarMenu} alt="Arrow Button For Sidebar Menu" />
            </button>
            <button className='sideBarOptions'>
                About Us
            </button>
            <button className='sideBarOptions' onClick={portfolioClick}>
                Portfolio
            </button>
            <button onClick={contactClick} className='sideBarOptions'>
                Contact
            </button>
        </div>
    )

    return (
        <div>
        {
            sideBarActive && showingHomeSideBar
        }
        {
            portfolioActive && showingPorfolioSideBar
        }
        </div>
    )
}

export default SideBar;
import './assets/SideBar.css';
import { Cloudinary } from '@cloudinary/url-gen';
import {AdvancedImage} from '@cloudinary/react';
import {limitFill, scale} from "@cloudinary/url-gen/actions/resize";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { LiaBedSolid } from "react-icons/lia";
import { PiToiletBold } from "react-icons/pi";
import { MdOutlineKitchen } from "react-icons/md";
//import { signal, effect } from "@preact/signals-react";
//import { sideBarStatus, portfolioStatus } from './App';
import React, {useState} from 'react';

const SideBar = () => {

    const [sideBarActive, setSideBarActive] = useState(true);
    const [portfolioActive, setPortfolioActive] = useState(false);
    const [aboutActive, setAboutActive] = useState(false);
    const [contactActive, setContactActive] = useState(false);
    
    //wtv wants to be shown fist be default one and then ! ...

    const portfolioClick = () => {
        setSideBarActive(false)
        setPortfolioActive(true);
    }

    const backToMenuClick = () => {
        setPortfolioActive(false);
        setSideBarActive(true);
    }

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
            <button className='kitchenIcon sideBarOptions' title="Kitchen">
                Kitchen
            </button>
            <button className='sideBarOptions' title="Toilet">
                Bathroom
            </button>
            <button className='sideBarOptions' title="Bed">
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
            <button className='sideBarOptions'>
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
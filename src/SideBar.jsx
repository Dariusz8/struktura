import './assets/SideBar.css';
import { Cloudinary } from '@cloudinary/url-gen';
import {AdvancedImage} from '@cloudinary/react';
import {limitFill, scale} from "@cloudinary/url-gen/actions/resize";
import React, {useState, useContext} from 'react';
import { format } from '@cloudinary/url-gen/actions/delivery';
import { auto } from '@cloudinary/url-gen/qualifiers/format';
import { MyStateContext } from './App';

const SideBar = () => {
    const {sideBarActive,setSideBarActive, portfolioActive,setPortfolioActive,
        setAboutActive,aboutActive,kitchenActive,setKitchenActive,setBathroomActive,bathroomActive,bedroomActive,setBedroomActive} = useContext(MyStateContext);
    
    
    //wtv wants to be shown fist be default one and then ! ...

    const portfolioClick = () => {
        setSideBarActive(!sideBarActive);
        setAboutActive(!aboutActive);
        setPortfolioActive(!portfolioActive);
    }

    const backToMenuClick = () => {
        setPortfolioActive(!portfolioActive);
        setSideBarActive(!sideBarActive);
    }

    const aboutClick = () => {
        setPortfolioActive(!portfolioActive)
        setAboutActive(!aboutActive);
    }
//SET ALL TO OPPOSITE SO CAN BACK AND FORTH STATE
    const kitchenClick = () => {
        setBathroomActive(!bathroomActive);
        setBedroomActive(!bedroomActive);
        setKitchenActive(!kitchenActive);
    }

    const bathroomClick = () => {
        setKitchenActive(!kitchenActive);
        setBedroomActive(!bedroomActive);
        setBathroomActive(!bathroomActive);
    }

    const bedroomClick = () => {
        setKitchenActive(!kitchenActive);
        setBathroomActive(!bathroomActive);
        setBedroomActive(!bedroomActive)
    }

    const contactClick = () => {
        window.location.href = "mailto:struktura.reno@gmail.com";
      };

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
        
    // const hiddingSideBarCode = (
    //     <div className='sideBarBoxDaddy'>
    //         <p className='sideBarLogo'>
    //             <AdvancedImage cldImg={logoImg} alt="Small Struktura Company Logo" />
    //         </p>
    //         <button className='sideBarMenuButtonOff' >
    //             <AdvancedImage cldImg={sideBarMenu} alt="Arrow Button For Sidebar Menu" />
    //         </button>
    //     </div>)

    const showingHomeSideBar = (
        <div className='sideBarBoxDaddy'>
            <p className='sideBarLogo'>
                <AdvancedImage cldImg={logoImg} alt="Small Struktura Company Logo" />
            </p>
            <button className='mutedSideBarMenuButtonOn' >
                <AdvancedImage cldImg={sideBarMenu} alt="Arrow Button For Sidebar Menu" />
            </button>
            <button className='sideBarOptions' onClick={aboutClick}>
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
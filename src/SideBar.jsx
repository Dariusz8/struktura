import './assets/SideBar.css';
import { Cloudinary } from '@cloudinary/url-gen';
import {AdvancedImage} from '@cloudinary/react';
import {scale} from "@cloudinary/url-gen/actions/resize";
import React, { useContext} from 'react';
import { MyStateContext } from './App';

const SideBar = () => {
    const {sideBarActive,setSideBarActive, portfolioActive,setPortfolioActive,
        setAboutActive,setKitchenActive,kitchenActive, setBathroomActive,bathroomActive,setBedroomActive,
        bedroomActive, setIndoorActive, indoorActive, setOutdoorActive, outdoorActive} = useContext(MyStateContext);
    

    const portfolioClick = () => {
        setSideBarActive(false);
        setAboutActive(false);
        setPortfolioActive(true);
    }

    const backToMenuClick = () => {
        setBathroomActive(false);
        setKitchenActive(false);
        setBedroomActive(false);
        setPortfolioActive(false);
        setIndoorActive(false);
        setOutdoorActive(false);
        setSideBarActive(true);
    }

    const aboutClick = () => {
        setAboutActive(true);
    }
//SET ALL TO OPPOSITE SO CAN BACK AND FORTH STATE
    const kitchenClick = () => {
        setBathroomActive(false);
        setBedroomActive(false);
        setPortfolioActive(false);
        setIndoorActive(false);
        setOutdoorActive(false);
        setKitchenActive(true);
    }

    const bathroomClick = () => {
        setKitchenActive(false);
        setBedroomActive(false);
        setPortfolioActive(false);
        setIndoorActive(false);
        setOutdoorActive(false);
        setBathroomActive(true);
    }

    const bedroomClick = () => {
        setKitchenActive(false);
        setBathroomActive(false);
        setPortfolioActive(false);
        setIndoorActive(false);
        setOutdoorActive(false);
        setBedroomActive(true);
    }

    const indoorClick = () => {
        setKitchenActive(false);
        setBathroomActive(false);
        setPortfolioActive(false);
        setBedroomActive(false);
        setOutdoorActive(false);
        setIndoorActive(true);
    }

    const outdoorClick = () => {
        setKitchenActive(false);
        setBathroomActive(false);
        setPortfolioActive(false);
        setBedroomActive(false);
        setIndoorActive(false);
        setOutdoorActive(true);
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
    const logoImg = cld.image('struktura_project/STRUKTURA.png');
    const sideBarMenu = cld.image('struktura_project/STRUKTURA1.png');

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
            <button className='sideBarOptions' title="Bathroom" onClick={bathroomClick}>
                Bathroom
            </button>
            <button className='sideBarOptions' title="Bedroom" onClick={bedroomClick}>
                Bedroom
            </button>
            <button className='sideBarOptions' title="Indoor" onClick={indoorClick}>
                Indoor
            </button>
            <button className='sideBarOptions' title="Outdoor" onClick={outdoorClick}>
                Outdoor
            </button>
            <button className='sideBarMenuButtonOff' onClick={backToMenuClick}>
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
        <>
        {
            sideBarActive && showingHomeSideBar
        }
        {
            portfolioActive && showingPorfolioSideBar
        }
        {
            !portfolioActive & bathroomActive && showingPorfolioSideBar
        }
        {
            !portfolioActive & kitchenActive && showingPorfolioSideBar
        }
        {
            !portfolioActive & bedroomActive && showingPorfolioSideBar
        }
        {
            !portfolioActive & indoorActive && showingPorfolioSideBar
        }
        {
            !portfolioActive & outdoorActive && showingPorfolioSideBar
        }
        </>
    )
}

export default SideBar;
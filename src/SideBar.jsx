import './assets/SideBar.css';
import { Cloudinary } from '@cloudinary/url-gen';
import {AdvancedImage} from '@cloudinary/react';
import {limitFill, scale} from "@cloudinary/url-gen/actions/resize";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { LiaBedSolid } from "react-icons/lia";
import { PiToiletBold } from "react-icons/pi";
import { MdOutlineKitchen } from "react-icons/md";
import { signal, useSignal, effect } from "@preact/signals-react"; 

const SideBar = () => {

    const sideBarStatus = signal(false);

    const menuClick = () => {
        sideBarStatus.value = !sideBarStatus.value;
//localStorage.setItem('sideBarStatus', JSON.stringify(sideBarStatus.value));
    }

//     const storedValue = localStorage.getItem('sideBarStatus');
// if (storedValue !== null) {
//     sideBarStatus.value = JSON.parse(storedValue);
// }
    //checking signal value
    effect(() => console.log(sideBarStatus.value));

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


    const showingSideBarCode = (sideBarStatus.value &&
        <div className='sideBarBoxDaddy'>
            <p className='sideBarLogo'>
                <AdvancedImage cldImg={logoImg} alt="Small Struktura Company Logo" />
            </p>
            <button className='sideBarMenuButtonOn' onClick={menuClick}>
                <AdvancedImage cldImg={sideBarMenu} alt="Arrow Button For Sidebar Menu" />
            </button>
            <button className='kitchenIcon sideBarOptions' title="Kitchen">
                <MdOutlineKitchen />
                <span>Kitchen</span>
            </button>
            <button className='toiletIcon sideBarOptions' title="Toilet">
                <PiToiletBold />
                <span>Toilet</span>
            </button>
            <button className='bedIcon sideBarOptions' title="Bed">
                <LiaBedSolid />
                <span>Bed</span>
            </button>
            <button className='tvIcon sideBarOptions' title="TV">
                <PiTelevisionSimpleBold />
                <span>TV</span>
            </button>
        </div>)
        
    const hiddingSideBarCode = (!sideBarStatus.value &&
        <div className='sideBarBoxDaddy'>
            <p className='sideBarLogo'>
                <AdvancedImage cldImg={logoImg} alt="Small Struktura Company Logo" />
            </p>
            <button className='sideBarMenuButtonOff' onClick={menuClick}>
                <AdvancedImage cldImg={sideBarMenu} alt="Arrow Button For Sidebar Menu" />
            </button>
        </div>
        )

    return (
        <div>
        {
            showingSideBarCode 
        }
        {
            hiddingSideBarCode
        }
        </div>
    )
}

export default SideBar;
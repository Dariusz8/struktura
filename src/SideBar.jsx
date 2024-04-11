import './assets/SideBar.css';
import { Cloudinary } from '@cloudinary/url-gen';
import {AdvancedImage} from '@cloudinary/react';
import {limitFill, scale} from "@cloudinary/url-gen/actions/resize";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { LiaBedSolid } from "react-icons/lia";
import { PiToiletBold } from "react-icons/pi";
import { MdOutlineKitchen } from "react-icons/md";



const SideBar = () => {
    //create and configure to my cloudinary instance
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dly85se71'
    }
  });

  const logoImg = cld.image('STRUKTURA');
  const sideBarMenu = cld.image('STRUKTURA1');

  logoImg.format('auto')
    .quality('auto')
    .resize(scale().width(0.10).regionRelative());

  sideBarMenu.format('auto')
    .quality('auto')
    .resize(scale().width(0.065).regionRelative());
    ;

    return (
        <div className='sideBarBoxDaddy'>
            <p className='sideBarLogo'>
                <AdvancedImage cldImg={logoImg} alt="Small Struktura Company Logo" />
            </p>
            <p className='sideBarMenuButton'>
                <AdvancedImage cldImg={sideBarMenu} alt="Arrow Button For Sidebar Menu" />
            </p>
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
        </div>
    )
}

export default SideBar;
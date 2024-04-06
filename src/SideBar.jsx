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

  logoImg.format('auto')
    .quality('auto')
    .resize(scale().width(0.10).regionRelative());

    return (
        <div className='sideBarBoxDaddy'>
            <p className='sideBarLogo'>
                <AdvancedImage cldImg={logoImg} alt="Small Struktura Company Logo" />
            </p>
            <p className='kitchenIcon'>
                <MdOutlineKitchen/>
            </p>
            <p className='toiletIcon'>
                <PiToiletBold/>
            </p>
            <p className='bedIcon'>
                <LiaBedSolid/>
            </p>
            <p className='tvIcon'>
                <PiTelevisionSimpleBold/>
            </p>
        </div>
    )
}

export default SideBar;
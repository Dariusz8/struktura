import './assets/SideBar.css';
import { Cloudinary } from '@cloudinary/url-gen';
import {AdvancedImage} from '@cloudinary/react';
import {limitFill, scale} from "@cloudinary/url-gen/actions/resize";

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
    .resize(scale().width(0.15).regionRelative());

    return (
        <div className='sideBarBoxDaddy'>
            <p className='sideBarLogo'>
                <AdvancedImage cldImg={logoImg} />
            </p>
        </div>
    )
}

export default SideBar;
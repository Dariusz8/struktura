import React, { useState, useEffect } from 'react';
import './assets/LogoLoader.css';
import { Cloudinary } from '@cloudinary/url-gen';
import {AdvancedImage, responsive} from '@cloudinary/react';
import { quality } from "@cloudinary/url-gen/actions/delivery";
import { auto } from "@cloudinary/url-gen/qualifiers/quality";

const LogoLoader = () => {
  const [isVisible, setIsVisible] = useState(false);
  //create and configure to my cloudinary instance
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dly85se71'
    }
  });

  const myImage1 = cld.image('struktura_project/STRUKTURA1.png');
  const myImage2 = cld.image('struktura_project/STRUKTURA2.png');
  const myImage3 = cld.image('struktura_project/STRUKTURA3.png');
  const myImage4 = cld.image('struktura_project/STRUKTURA4.png');

  // myImage1.delivery(quality(auto()));

  // myImage2.delivery(quality(auto()));

  // myImage3.delivery(quality(auto()));

  // myImage4.delivery(quality(auto()));

  useEffect(() => {
    const fadeInDelay = 1000;
    const fadeOutDelay = 6000;

  const showParagraphs= () => {
    setIsVisible(true);
    };

    const hideParagraphs = () => {
      setIsVisible(false);
      };

    const fadeInTimeout = setTimeout(showParagraphs, fadeInDelay);
    const fadeOutTimeout = setTimeout(hideParagraphs, fadeOutDelay);

  return () => {
    clearTimeout(fadeInTimeout);
    clearTimeout(fadeOutTimeout);
  }
  }, [])

    return (
      <div className='logoParent'>
        <p className='p1' alt="First Part of Struktura Logo" style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s' }}>
        <AdvancedImage cldImg={myImage1} plugins={[responsive()]} />
        </p>
        <p className='p2' alt="Second Part of Struktura Logo" style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s 1s' }}>
          <AdvancedImage cldImg={myImage2} plugins={[responsive()]} />
        </p>
        <p className='p3' alt="Third Part of Struktura Logo" style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s 2s' }}>
          <AdvancedImage cldImg={myImage3} plugins={[responsive()]} />
        </p>
        <p className='logoName' alt="Struktura in Company" style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s 3s' }}>
          <AdvancedImage cldImg={myImage4} plugins={[responsive()]} />
        </p>
      </div>
    );
  };
  
  export default LogoLoader;
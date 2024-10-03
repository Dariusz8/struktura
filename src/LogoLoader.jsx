import React, { useState, useEffect } from 'react';
import './assets/LogoLoader.css';
import { Cloudinary } from '@cloudinary/url-gen';
import {AdvancedImage, placeholder, lazyload, accessibility, responsive} from '@cloudinary/react';


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
        <AdvancedImage cldImg={myImage1} plugins={[responsive({steps: [200,400,600,800, 1000,1400]}), placeholder()]} />
        </p>
        <p className='p2' alt="Second Part of Struktura Logo" style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s 1s' }}>
          <AdvancedImage cldImg={myImage2} plugins={[responsive({steps: [200,400,600,800, 1000,1400]}, placeholder())]} />
        </p>
        <p className='p3' alt="Third Part of Struktura Logo" style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s 2s' }}>
          <AdvancedImage cldImg={myImage3} plugins={[responsive({steps: [200,400,600,800, 1000,1400]}), placeholder()]} />
        </p>
        <p className='logoName' alt="Struktura in Company" style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s 3s' }}>
          <AdvancedImage cldImg={myImage4} plugins={[responsive({steps: [200,400,600,800, 1000,1400]}), placeholder()]} />
        </p>
      </div>
    );
  };
  
  export default LogoLoader;
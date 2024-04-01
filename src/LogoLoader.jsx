import React, { useState, useEffect } from 'react';
import './assets/LogoLoader.css';
import { Cloudinary } from '@cloudinary/url-gen';
import {AdvancedImage} from '@cloudinary/react';
import {limitFill, scale} from "@cloudinary/url-gen/actions/resize";

const LogoLoader = () => {
  const [isVisible, setIsVisible] = useState(false);
  //create and configure to my cloudinary instance
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dly85se71'
    }
  });

  const myImage1 = cld.image('STRUKTURA1');
  const myImage2 = cld.image('STRUKTURA2');
  const myImage3 = cld.image('STRUKTURA3');
  const myImage4 = cld.image('STRUKTURA4');
  
  myImage1.format('auto')
    .quality('auto')
    .resize(scale().width("1.0").regionRelative());

  myImage2.format('auto')
    .quality('auto')
    .resize(scale().width("1.0").regionRelative());

  myImage3.format('auto')
    .quality('auto')
    .resize(scale().width("1.0").regionRelative());

  myImage4.format('auto')
    .quality('auto')
    .resize(scale().width(0.88).regionRelative());

  useEffect(() => {
    const delay = 1000;

  const showParagraphs = () => {
    setIsVisible(true);
    };

  const timeout = setTimeout(showParagraphs, delay);

  return () => clearTimeout(timeout);
  }, [])

    return (
      <div className='logoParent'>
        <p className='p1' style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s' }}>
        <AdvancedImage cldImg={myImage1} />
        </p>
        <p className='p2' style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s 1s' }}>
          <AdvancedImage cldImg={myImage2} />
        </p>
        <p className='p3' style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s 2s' }}>
          <AdvancedImage cldImg={myImage3} />
        </p>
        <p className='logoName' style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s 3s' }}>
          <AdvancedImage cldImg={myImage4} />
        </p>
      </div>
    );
  };
  
  export default LogoLoader;
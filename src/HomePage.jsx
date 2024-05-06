import './assets/HomePage.css';
//import { signal, effect } from "@preact/signals";
import React, {useState} from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import {AdvancedImage} from '@cloudinary/react';

const cld = new Cloudinary({
    cloud: {
      cloudName: 'dly85se71'
    }
  });

  const testImg1 = cld.image('cld-sample-5');
  const testImg2 = cld.image('cld-sample-3');
  const testImg3 = cld.image('cld-sample-4');
  const testImg4 = cld.image('cld-sample-2');
  const testImg5 = cld.image('cld-sample');

const HomePage = () => {
    //create and configure to my cloudinary instance
    const [pictures,setPictures] = useState({
        entry1:{
            pre: testImg1,
            post: testImg2,
            tag: ["blue"],
            info: "Texas"
        },
        entry2:{
            pre: testImg3,
            post: testImg4,
            tag: ["blue"],
            info: "Texas"
        },
    })

    return (
        <div>
            <input type="text" className="searchBar" placeholder="Search..." />
            <div className='homeBoxDaddy'>
                {pictures && typeof pictures === 'object' && Object.values(pictures).map((entry, index) => (
                    <div key={index}>
                        <AdvancedImage cldImg={entry.pre} />
                        <p>
                            {entry.info}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HomePage;
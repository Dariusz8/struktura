import './assets/HomePage.css';
import { signal, effect } from "@preact/signals";
import { Cloudinary } from '@cloudinary/url-gen';
import {AdvancedImage} from '@cloudinary/react';

const HomePage = () => {
    //create and configure to my cloudinary instance
    const cld = new Cloudinary({
        cloud: {
          cloudName: 'dly85se71'
        }
      });
    
    const allPictures = signal([
        {
            name:"test1",
            tags:"house",
            info:"this is a test1 pre",
            condition:"pre"
    },
    {
        name:"test1",
        tags:"house",
        info:"this is a test1 post",
        condition:"post"
    },
    {
        name:"test2",
        tags:"house",
        info:"this is a test2 pre",
        condition:"pre"
    },
    {
        name:"test2",
        tags:"house",
        info:"this is a test2 post",
        condition:"post"
    }
    ])
    return (
        <div className='homeBoxDaddy'>
            <input type="text" className="searchBar" placeholder="Search..." />
        </div>
    )
}

export default HomePage;
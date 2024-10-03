import './assets/HomePage.css';
import React, {useState, useContext} from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import {AdvancedImage, placeholder, lazyload, accessibility, responsive} from '@cloudinary/react';
import { MyStateContext } from './App';

const HomePage = () => {
    const { aboutActive,bathroomActive, portfolioActive, kitchenActive, bedroomActive, indoorActive,
        outdoorActive} = useContext(MyStateContext);
    const cld = new Cloudinary({
        cloud: {
          cloudName: 'dly85se71'
        }
    });
    // maybe put these pictures elsewhere with all to export from 
    const bath1 = cld.image('struktura_project/bath1');
    const bath1b = cld.image('struktura_project/bath1b');
    const bath1c = cld.image('struktura_project/bath1c');
    const bath2 = cld.image('struktura_project/bath2');
    const bath2b = cld.image('struktura_project/bath2b');
    const bath2c = cld.image('struktura_project/bath2c');
    const bathroom1 = cld.image('struktura_project/bathroom1');
    const bathroom1b = cld.image('struktura_project/bathroom1b');
    const bathroom2 = cld.image('struktura_project/bathroom2');
    const bathroom2b = cld.image('struktura_project/bathroom2b');
    const outdoor1 = cld.image('struktura_project/outdoor1');
    const outdoor1b = cld.image('struktura_project/outdoor1b');

    const indoor1 = cld.image('struktura_project/indoor1');
    const indoor2 = cld.image('struktura_project/indoor2');
    const indoor3 = cld.image('struktura_project/indoor3');
    const indoor4 = cld.image('struktura_project/indoor4');
    const indoor5 = cld.image('struktura_project/indoor5');
    const indoor6 = cld.image('struktura_project/indoor6');
    const indoor7 = cld.image('struktura_project/indoor7');
    const indoor7b = cld.image('struktura_project/indoor7b');
    const indoor8 = cld.image('struktura_project/indoor8');
    const indoor9 = cld.image('struktura_project/indoor9');
    const closet1 = cld.image('struktura_project/closet');
    const closet2 = cld.image('struktura_project/closet2');
    const bedroom1 = cld.image('struktura_project/bedroom1');
    const bedroom2 = cld.image('struktura_project/bedroom2');
    const kitchen1 = cld.image('struktura_project/kitchen1');
    const kitchen1b = cld.image('struktura_project/kitchen1b');
    const kitchen1c = cld.image('struktura_project/kitchen1c');
    

//     bathroom1.resize(scale().width(1280).height(720).aspectRatio("16:9"))
//     .overlay(
//         source(
//             image('STRUKTURA').transformation(
//                 new Transformation()
//                 .resize(scale().width(150))
//                 .adjust(opacity(100))
//                 .adjust(replaceColor("white"))
//             )
//         )
//         .position(
//             new Position().allowOverflow(false).gravity(compass("south_east")).offsetY(50).offsetX(120)
//         )
//     );
    //STATES PICS
    //const [before, setBefore] = useState(true);
    const [pictures,setPictures] = useState({
        entry1:{
            pre: bath1,
            post: null,
            tag: ["bathroom"],
            info: "Texas"
        },
        entry2:{
            pre: bath1b,
            post: null,
            tag: ["bathroom"],
            info: "Texas"
        },
        entry3:{
            pre: bath1c,
            post: null,
            tag: ["bathroom"],
            info: "Texas"
        },
        entry4:{
            pre: bath2,
            post: null,
            tag: ["bathroom"],
            info: "Texas"
        },
        entry5:{
            pre: bath2b,
            post: null,
            tag: ["bathroom"],
            info: "Texas"
        },
        entry6:{
            pre: bath2c,
            post: null,
            tag: ["bathroom"],
            info: "Texas"
        },
        entry7:{
            pre: bathroom1,
            post: null,
            tag: ["bathroom"],
            info: "Texas"
        },
        entry8:{
            pre: bathroom1b,
            post: null,
            tag: ["bathroom"],
            info: "Texas"
        },
        entry9:{
            pre: bathroom2,
            post: null,
            tag: ["bathroom"],
            info: "Texas"
        },
        entry10:{
            pre: bathroom2b,
            post: null,
            tag: ["bathroom"],
            info: "Texas"
        },
        entry11:{
            pre: outdoor1,
            post: null,
            tag: ["outdoor"],
            info: "Texas"
        },
        entry12:{
            pre: outdoor1b,
            post: null,
            tag: ["outdoor"],
            info: "Texas"
        },
        entry13:{
            pre: indoor1,
            post: null,
            tag: ["indoor"],
            info: "Texas"
        },
        entry14:{
            pre: indoor2,
            post: null,
            tag: ["indoor"],
            info: "Texas"
        },
        entry15:{
            pre: indoor3,
            post: null,
            tag: ["indoor"],
            info: "Texas"
        },
        entry16:{
            pre: indoor4,
            post: null,
            tag: ["indoor"],
            info: "Texas"
        },
        entry17:{
            pre: indoor5,
            post: null,
            tag: ["indoor"],
            info: "Texas"
        },
        entry18:{
            pre: indoor6,
            post: null,
            tag: ["indoor"],
            info: "Texas"
        },
        entry19:{
            pre: indoor7,
            post: null,
            tag: ["indoor"],
            info: "Texas"
        },
        entry20:{
            pre: indoor7b,
            post: null,
            tag: ["indoor"],
            info: "Texas"
        },
        entry21:{
            pre: indoor8,
            post: null,
            tag: ["indoor"],
            info: "Texas"
        },
        entry22:{
            pre: indoor9,
            post: null,
            tag: ["indoor"],
            info: "Texas"
        },
        entry23:{
            pre: closet1,
            post: null,
            tag: ["indoor"],
            info: "Texas"
        },
        entry24:{
            pre: closet2,
            post: null,
            tag: ["indoor"],
            info: "Texas"
        },
        entry25:{
            pre: bedroom1,
            post: null,
            tag: ["bedroom"],
            info: "Texas"
        },
        entry26:{
            pre: bedroom2,
            post: null,
            tag: ["bedroom"],
            info: "Texas"
        },
        entry27:{
            pre: kitchen1,
            post: null,
            tag: ["kitchen"],
            info: "Texas"
        },
        entry28:{
            pre: kitchen1b,
            post: null,
            tag: ["kitchen"],
            info: "Texas"
        },
        entry29:{
            pre: kitchen1c,
            post: null,
            tag: ["kitchen"],
            info: "Texas"
        },
    })
    const [matchingEntries, setMatchingEntries] = useState([]);
    //FUNCTIONS
    const handleInputChange = (event) => {
        const inputValue = event.target.value.toLowerCase();
        // Find all entries whose tag matches the input value
    const matchingEntries = Object.entries(pictures).filter(([key, picture]) => (
        picture.tag.some(tag => tag.toLowerCase().includes(inputValue))
    ));
      // Extract the 'pre' property from matching entries
    const matchingPreviews = matchingEntries.map(([key, picture]) => picture.pre);
  
    setMatchingEntries(matchingPreviews);
        }

    const showingBeforePictures = (
        <div>
            <input onChange={handleInputChange} type="text" className="searchBar" placeholder="Search..." />
            <div className='homeBoxDaddy' >
                
                {matchingEntries.length > 0 ? 
                    <div>
                        
                        {matchingEntries.map((pre, index) => (
                        <div className='pictureBox'>
                            <AdvancedImage plugins={[lazyload(), responsive({steps: [200,400,600,800, 1000,1400]}), accessibility(), placeholder({mode: 'blur'})]} cldImg={pre} />
                        </div>
                        ))}
                    </div>
                :pictures && typeof pictures === 'object' && Object.values(pictures).map((entry, index) => (
                    <div className='pictureBox' key={index}>
                        <AdvancedImage plugins={[lazyload(), responsive({steps: [200,400,600,800, 1000,1400]}), accessibility(), placeholder({mode: 'blur'})]} cldImg={entry.pre} />
                    </div>
                ))
                }
                
            </div>
        </div>)

    const showingBathroom = (
        <div>
            <input onChange={handleInputChange} type="text" className="searchBar" placeholder="Search..." />
            <div className='homeBoxDaddy'>
                {matchingEntries.length > 0 ? 
                    <div>
                        <p>Matching entries:</p>
                        {matchingEntries.map((pre, index) => (
                        <div className='pictureBox'>
                            <AdvancedImage plugins={[lazyload(), responsive({steps: [200,400,600,800, 1000,1400]}), accessibility(), placeholder({mode: 'blur'})]} cldImg={pre} />
                        </div>
                        ))}
                    </div>
                :
                pictures && typeof pictures === 'object' && Object.values(pictures).map((entry, index) => (
                    <>
                    {
                        entry.tag =="bathroom" &&
                        <div className='pictureBox' key={index}>
                        <AdvancedImage plugins={[lazyload(), responsive({steps: [200,400,600,800, 1000,1400]}), accessibility(), placeholder({mode: 'blur'})]} cldImg={entry.pre} />
                        </div>
                    }
                    </>
                ))}
            </div>
        </div>
    )

    const showingKitchen = (
        <div>
            <input onChange={handleInputChange} type="text" className="searchBar" placeholder="Search..." />
            <div className='homeBoxDaddy'>
                {matchingEntries.length > 0 ? 
                    <div>
                        <p>Matching entries:</p>
                        {matchingEntries.map((pre, index) => (
                        <div className='pictureBox'>
                            <AdvancedImage plugins={[lazyload(), responsive({steps: [200,400,600,800, 1000,1400]}), accessibility(), placeholder({mode: 'blur'})]} cldImg={pre} />
                        </div>
                        ))}
                    </div>
                :
                pictures && typeof pictures === 'object' && Object.values(pictures).map((entry, index) => (
                    <>
                    {
                        entry.tag =="kitchen" &&
                        <div className='pictureBox' key={index}>
                        <AdvancedImage plugins={[lazyload(), responsive({steps: [200,400,600,800, 1000,1400]}), accessibility(), placeholder({mode: 'blur'})]} cldImg={entry.pre} />
                        </div>
                    }
                    </>
                ))}
            </div>
        </div>
    )

    const showingBedroom = (
        <div>
            <input onChange={handleInputChange} type="text" className="searchBar" placeholder="Search..." />
            <div className='homeBoxDaddy'>
                {matchingEntries.length > 0 ? 
                    <div>
                        <p>Matching entries:</p>
                        {matchingEntries.map((pre, index) => (
                        <div className='pictureBox'>
                            <AdvancedImage plugins={[lazyload(), responsive({steps: [200,400,600,800, 1000,1400]}), accessibility(), placeholder({mode: 'blur'})]} cldImg={pre} />
                        </div>
                        ))}
                    </div>
                :
                pictures && typeof pictures === 'object' && Object.values(pictures).map((entry, index) => (
                    <>
                    {
                        entry.tag =="bedroom" &&
                        <div className='pictureBox' key={index}>
                        <AdvancedImage plugins={[lazyload(), responsive({steps: [200,400,600,800, 1000,1400]}), accessibility(), placeholder({mode: 'blur'})]} cldImg={entry.pre} />
                        </div>
                    }
                    </>
                ))}
            </div>
        </div>
    )

    const showingIndoor = (
        <div>
            <input onChange={handleInputChange} type="text" className="searchBar" placeholder="Search..." />
            <div className='homeBoxDaddy'>
                {matchingEntries.length > 0 ? 
                    <div>
                        <p>Matching entries:</p>
                        {matchingEntries.map((pre, index) => (
                        <div className='pictureBox'>
                            <AdvancedImage plugins={[lazyload(), responsive({steps: [200,400,600,800, 1000,1400]}), accessibility(), placeholder({mode: 'blur'})]} cldImg={pre} />
                        </div>
                        ))}
                    </div>
                :
                pictures && typeof pictures === 'object' && Object.values(pictures).map((entry, index) => (
                    <>
                    {
                        entry.tag =="indoor" &&
                        <div className='pictureBox' key={index}>
                        <AdvancedImage plugins={[lazyload(), responsive({steps: [200,400,600,800, 1000,1400]}), accessibility(), placeholder({mode: 'blur'})]} cldImg={entry.pre} />
                        </div>
                    }
                    </>
                ))}
            </div>
        </div>
    )

    const showingOutdoor = (
        <div>
            <input onChange={handleInputChange} type="text" className="searchBar" placeholder="Search..." />
            <div className='homeBoxDaddy'>
                {matchingEntries.length > 0 ? 
                    <div>
                        <p>Matching entries:</p>
                        {matchingEntries.map((pre, index) => (
                        <div className='pictureBox'>
                        <AdvancedImage plugins={[lazyload(), responsive({steps: [200,400,600,800, 1000,1400]}), accessibility(), placeholder({mode: 'blur'})]} cldImg={pre} />
                        </div>
                        ))}
                    </div>
                :
                pictures && typeof pictures === 'object' && Object.values(pictures).map((entry, index) => (
                    <>
                    {
                        entry.tag =="outdoor" &&
                        <div className='pictureBox' key={index}>
                        <AdvancedImage plugins={[lazyload(), responsive({steps: [200,400,600,800, 1000,1400]}), accessibility(), placeholder({mode: 'blur'})]} cldImg={entry.pre} />
                        </div>
                    }
                    </>
                ))}
            </div>
        </div>
    )

    const showingAbout = (
        <div className='homeBoxDaddy'>
            <input onChange={handleInputChange} type="text" className="searchBar" placeholder="Search..." />
            {matchingEntries.length > 0 ? 
                    <div>
                        <p>Matching entries:</p>
                        {matchingEntries.map((pre, index) => (
                        <div className='pictureBox'>
                            <AdvancedImage plugins={[lazyload(), responsive({steps: [200,400,600,800, 1000,1400]}), accessibility(), placeholder({mode: 'blur'})]} cldImg={pre} />
                        </div>
                        ))}
                    </div>
            : <h1> We Getting $</h1>
            }
        </div>
    )
    
    return (
        <div>
        {
            portfolioActive && showingBeforePictures 
        }
        {
            bathroomActive && showingBathroom
        }
        {
            kitchenActive && showingKitchen
        }
        {
            bedroomActive && showingBedroom
        }
        {
            indoorActive && showingIndoor
        }
        {
            outdoorActive && showingOutdoor
        }
        {
            aboutActive && showingAbout
        }
        </div>
    )
}

export default HomePage;
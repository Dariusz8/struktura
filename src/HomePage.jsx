import './assets/HomePage.css';
import React, {useState, useContext} from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import {AdvancedImage, placeholder, lazyload} from '@cloudinary/react';
import {limitFill, scale, fit, fill, thumbnail, auto} from "@cloudinary/url-gen/actions/resize";
import { image, text } from '@cloudinary/url-gen/qualifiers/source';
import { TextStyle } from '@cloudinary/url-gen/qualifiers/textStyle';
import { source } from '@cloudinary/url-gen/actions/overlay';
import { Position } from '@cloudinary/url-gen/qualifiers/position';
import { compass, focusOn, autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { opacity, replaceColor } from '@cloudinary/url-gen/actions/adjust';
import { Transformation } from '@cloudinary/url-gen';
import { grayscale, colorize } from '@cloudinary/url-gen/actions/effect';
import { MyStateContext } from './App';
import { indoor } from '@cloudinary/url-gen/qualifiers/improveMode';

const HomePage = () => {
    const { aboutActive,bathroomActive, portfolioActive } = useContext(MyStateContext);
    const cld = new Cloudinary({
        cloud: {
          cloudName: 'dly85se71'
        }
    });
    //NEED  maybe put these pictures elsewhere with all to export from
    const bath1 = cld.image('bath1');
    const bath1b = cld.image('bath1b');
    const bath1c = cld.image('bath1c');
    const bath2 = cld.image('bath2');
    const bath2b = cld.image('bath2b');
    const bath2c = cld.image('bath2c');
    const bathroom1 = cld.image('bathroom1');
    const bathroom1b = cld.image('bathroom1b');
    const bathroom2 = cld.image('bathroom2');
    const bathroom2b = cld.image('bathroom2b');
    const outdoor1 = cld.image('outdoor1');
    const outdoor1b = cld.image('outdoor1b');

    const indoor1 = cld.image('indoor1');
    const indoor2 = cld.image('indoor2');
    const indoor3 = cld.image('indoor3');
    const indoor4 = cld.image('indoor4');
    const indoor5 = cld.image('indoor5');
    const indoor6 = cld.image('indoor6');
    const indoor7 = cld.image('indoor7');
    const indoor7b = cld.image('indoor7b');
    const indoor8 = cld.image('indoor8');
    const indoor9 = cld.image('indoor9');
    const closet1 = cld.image('closet1');
    const closet2 = cld.image('closet2');
    const bedroom1 = cld.image('bedroom1');
    const bedroom2 = cld.image('bedroom2');
    const kitchen1 = cld.image('kitchen1');
    const kitchen1b = cld.image('kitchen1b');
    const kitchen1c = cld.image('kitchen1c');
    

    bathroom1.resize(scale().width(1280).height(720).aspectRatio("16:9"))
    .overlay(
        source(
            image('STRUKTURA').transformation(
                new Transformation()
                .resize(scale().width(150))
                .adjust(opacity(100))
                .adjust(replaceColor("white"))
            )
        )
        .position(
            new Position().allowOverflow(false).gravity(compass("south_east")).offsetY(50).offsetX(120)
        )
    );

    bathroom1b.resize(scale().width(1280).height(720).aspectRatio("16:9"))
    .overlay(
        source(
            image('STRUKTURA').transformation(
                new Transformation()
                .resize(scale().width(150))
                .adjust(opacity(100))
                .adjust(replaceColor("white"))
            )
        )
        .position(
            new Position().allowOverflow(false).gravity(compass("south_east")).offsetY(50).offsetX(120)
        )
    );

    bathroom2.resize(scale().width(1280).height(720).aspectRatio("16:9"))
    .overlay(
        source(
            image('STRUKTURA').transformation(
                new Transformation()
                .resize(scale().width(150))
                .adjust(opacity(100))
                .adjust(replaceColor("white"))
            )
        )
        .position(
            new Position().allowOverflow(false).gravity(compass("south_east")).offsetY(50).offsetX(120)
        )
    );

    bathroom2b.resize(scale().width(1280).height(720).aspectRatio("16:9"))
    .overlay(
        source(
            image('STRUKTURA').transformation(
                new Transformation()
                .resize(scale().width(150))
                .adjust(opacity(100))
                .adjust(replaceColor("white"))
            )
        )
        .position(
            new Position().allowOverflow(false).gravity(compass("south_east")).offsetY(50).offsetX(120)
        )
    );

    bath1.resize(scale().width(1280).height(720).aspectRatio("16:9"))
        .overlay(
            source(
                image('STRUKTURA').transformation(
                    new Transformation()
                    .resize(scale().width(150))
                    .adjust(opacity(100))
                    .adjust(replaceColor("white"))
                )
            )
            .position(
                new Position().allowOverflow(false).gravity(compass("south_east")).offsetY(50).offsetX(120)
            )
        );

    bath1b.resize(scale().width(1280).height(720).aspectRatio("16:9"))
        .overlay(
            source(
                image('STRUKTURA').transformation(
                    new Transformation()
                    .resize(scale().width(150))
                    .adjust(opacity(100))
                    .effect(colorize()
                    .color('white')
                    ))
        )
        .position(
            new Position().allowOverflow(false).gravity(compass("south_east")).offsetY(50).offsetX(120)
        )
    );

    bath1c.resize(scale().width(1280).height(720).aspectRatio("16:9"))
    .overlay(
        source(
            image('STRUKTURA').transformation(
                new Transformation()
                .resize(scale().width(150))
                .adjust(opacity(100))
                .effect(grayscale())
                )
    )
    .position(
        new Position().allowOverflow(false).gravity(compass("south_east")).offsetY(50).offsetX(120)
    )
);

    bath2.resize(scale().width(1280).height(720).aspectRatio("16:9"))
    .overlay(
        source(
            image('STRUKTURA').transformation(
                new Transformation()
                .resize(scale().width(150))
                .adjust(opacity(30))
                )
    )
    .position(
        new Position().allowOverflow(false).gravity(compass("south_east")).offsetY(50).offsetX(120)
    )
);

    bath2b.resize(scale().width(1280).height(720).aspectRatio("16:9"))
    .overlay(
        source(
            image('STRUKTURA').transformation(
                new Transformation()
                .resize(scale().width(150))
                .adjust(opacity(100))
                .adjust(replaceColor("white"))
            )
        )
        .position(
            new Position().allowOverflow(false).gravity(compass("south_east")).offsetY(50).offsetX(120)
        )
    );

    bath2c.resize(scale().width(1280).height(720).aspectRatio("16:9"))
    .overlay(
        source(
            image('STRUKTURA').transformation(
                new Transformation()
                .resize(scale().width(150))
                .adjust(opacity(100))
                .adjust(replaceColor("white"))
            )
        )
        .position(
            new Position().allowOverflow(false).gravity(compass("south_east")).offsetY(50).offsetX(120)
        )
    );

    outdoor1.resize(scale().width(1280).height(720).aspectRatio("16:9"))
    .overlay(
        source(
            image('STRUKTURA').transformation(
                new Transformation()
                .resize(scale().width(150))
                .adjust(opacity(100))
                .adjust(replaceColor("white"))
            )
        )
        .position(
            new Position().allowOverflow(false).gravity(compass("south_east")).offsetY(50).offsetX(120)
        )
    );

    outdoor1b.resize(scale().width(1280).height(720).aspectRatio("16:9"))
    .overlay(
        source(
            image('STRUKTURA').transformation(
                new Transformation()
                .resize(scale().width(150))
                .adjust(opacity(100))
                .adjust(replaceColor("white"))
            )
        )
        .position(
            new Position().allowOverflow(false).gravity(compass("south_east")).offsetY(50).offsetX(120)
        )
    );

    indoor1.resize(scale().width(1280).height(720).aspectRatio("16:9"))
    .overlay(
        source(
            image('STRUKTURA').transformation(
                new Transformation()
                .resize(scale().width(150))
                .adjust(opacity(100))
                .adjust(replaceColor("white"))
            )
        )
        .position(
            new Position().allowOverflow(false).gravity(compass("south_east")).offsetY(50).offsetX(120)
        )
    );

    indoor2.resize(scale().width(1280).height(720).aspectRatio("16:9"))
    .overlay(
        source(
            image('STRUKTURA').transformation(
                new Transformation()
                .resize(scale().width(150))
                .adjust(opacity(100))
                .adjust(replaceColor("white"))
            )
        )
        .position(
            new Position().allowOverflow(false).gravity(compass("south_east")).offsetY(50).offsetX(120)
        )
    );

    indoor3.resize(scale().width(1280).height(720).aspectRatio("16:9"))
    .overlay(
        source(
            image('STRUKTURA').transformation(
                new Transformation()
                .resize(scale().width(150))
                .adjust(opacity(100))
                .adjust(replaceColor("white"))
            )
        )
        .position(
            new Position().allowOverflow(false).gravity(compass("south_east")).offsetY(50).offsetX(120)
        )
    );

    indoor4.resize(scale().width(1280).height(720).aspectRatio("16:9"))
    .overlay(
        source(
            image('STRUKTURA').transformation(
                new Transformation()
                .resize(scale().width(150))
                .adjust(opacity(100))
                .adjust(replaceColor("white"))
            )
        )
        .position(
            new Position().allowOverflow(false).gravity(compass("south_east")).offsetY(50).offsetX(120)
        )
    );

    indoor5.resize(scale().width(1280).height(720).aspectRatio("16:9"))
    .overlay(
        source(
            image('STRUKTURA').transformation(
                new Transformation()
                .resize(scale().width(150))
                .adjust(opacity(100))
                .adjust(replaceColor("white"))
            )
        )
        .position(
            new Position().allowOverflow(false).gravity(compass("south_east")).offsetY(50).offsetX(120)
        )
    );

    indoor6.resize(scale().width(1280).height(720).aspectRatio("16:9"))
    .overlay(
        source(
            image('STRUKTURA').transformation(
                new Transformation()
                .resize(scale().width(150))
                .adjust(opacity(100))
                .adjust(replaceColor("white"))
            )
        )
        .position(
            new Position().allowOverflow(false).gravity(compass("south_east")).offsetY(50).offsetX(120)
        )
    );

    indoor7.resize(scale().width(1280).height(720).aspectRatio("16:9"))
    .overlay(
        source(
            image('STRUKTURA').transformation(
                new Transformation()
                .resize(scale().width(150))
                .adjust(opacity(100))
                .adjust(replaceColor("white"))
            )
        )
        .position(
            new Position().allowOverflow(false).gravity(compass("south_east")).offsetY(50).offsetX(120)
        )
    );

    indoor7b.resize(scale().width(1280).height(720).aspectRatio("16:9"))
    .overlay(
        source(
            image('STRUKTURA').transformation(
                new Transformation()
                .resize(scale().width(150))
                .adjust(opacity(100))
                .adjust(replaceColor("white"))
            )
        )
        .position(
            new Position().allowOverflow(false).gravity(compass("south_east")).offsetY(50).offsetX(120)
        )
    );

    indoor8.resize(scale().width(1280).height(720).aspectRatio("16:9"))
    .overlay(
        source(
            image('STRUKTURA').transformation(
                new Transformation()
                .resize(scale().width(150))
                .adjust(opacity(100))
                .adjust(replaceColor("white"))
            )
        )
        .position(
            new Position().allowOverflow(false).gravity(compass("south_east")).offsetY(50).offsetX(120)
        )
    );

    indoor9.resize(scale().width(1280).height(720).aspectRatio("16:9"))
    .overlay(
        source(
            image('STRUKTURA').transformation(
                new Transformation()
                .resize(scale().width(150))
                .adjust(opacity(100))
                .adjust(replaceColor("white"))
            )
        )
        .position(
            new Position().allowOverflow(false).gravity(compass("south_east")).offsetY(50).offsetX(120)
        )
    );

    closet1.resize(scale().width(1280).height(720).aspectRatio("16:9"))
    .overlay(
        source(
            image('STRUKTURA').transformation(
                new Transformation()
                .resize(scale().width(150))
                .adjust(opacity(100))
                .adjust(replaceColor("white"))
            )
        )
        .position(
            new Position().allowOverflow(false).gravity(compass("south_east")).offsetY(50).offsetX(120)
        )
    );

    closet2.resize(scale().width(1280).height(720).aspectRatio("16:9"))
    .overlay(
        source(
            image('STRUKTURA').transformation(
                new Transformation()
                .resize(scale().width(150))
                .adjust(opacity(100))
                .adjust(replaceColor("white"))
            )
        )
        .position(
            new Position().allowOverflow(false).gravity(compass("south_east")).offsetY(50).offsetX(120)
        )
    );

    bedroom1.resize(scale().width(1280).height(720).aspectRatio("16:9"))
    .overlay(
        source(
            image('STRUKTURA').transformation(
                new Transformation()
                .resize(scale().width(150))
                .adjust(opacity(100))
                .adjust(replaceColor("white"))
            )
        )
        .position(
            new Position().allowOverflow(false).gravity(compass("south_east")).offsetY(50).offsetX(120)
        )
    );

    bedroom2.resize(scale().width(1280).height(720).aspectRatio("16:9"))
    .overlay(
        source(
            image('STRUKTURA').transformation(
                new Transformation()
                .resize(scale().width(150))
                .adjust(opacity(100))
                .adjust(replaceColor("white"))
            )
        )
        .position(
            new Position().allowOverflow(false).gravity(compass("south_east")).offsetY(50).offsetX(120)
        )
    );

    kitchen1.resize(scale().width(1280).height(720).aspectRatio("16:9"))
    .overlay(
        source(
            image('STRUKTURA').transformation(
                new Transformation()
                .resize(scale().width(150))
                .adjust(opacity(100))
                .adjust(replaceColor("white"))
            )
        )
        .position(
            new Position().allowOverflow(false).gravity(compass("south_east")).offsetY(50).offsetX(120)
        )
    );

    kitchen1b.resize(scale().width(1280).height(720).aspectRatio("16:9"))
    .overlay(
        source(
            image('STRUKTURA').transformation(
                new Transformation()
                .resize(scale().width(150))
                .adjust(opacity(100))
                .adjust(replaceColor("white"))
            )
        )
        .position(
            new Position().allowOverflow(false).gravity(compass("south_east")).offsetY(50).offsetX(120)
        )
    );

    kitchen1c.resize(scale().width(1280).height(720).aspectRatio("16:9"))
    .overlay(
        source(
            image('STRUKTURA').transformation(
                new Transformation()
                .resize(scale().width(150))
                .adjust(opacity(100))
                .adjust(replaceColor("white"))
            )
        )
        .position(
            new Position().allowOverflow(false).gravity(compass("south_east")).offsetY(50).offsetX(120)
        )
    );

    // testImg1.format('auto')
    //     .quality('auto')
    //     .resize(fill().aspectRatio("1.0"))
    //     .overlay(
    //         source(
    //             text('Before', new TextStyle("Arial", 40))
    //             )
    //             .position(new Position().gravity(compass("south_west")).offsetX(50).offsetY(50))
    //     )
    //     .overlay(
    //         source(
    //             image('STRUKTURA').transformation(
    //                 new Transformation()
    //                 .resize(scale().width(150))
    //                 .adjust(opacity(100))
    //                 .adjust(replaceColor("white"))
    //             )
    //             )
    //         .position(
    //             new Position().allowOverflow(false).gravity(compass("south_east"))
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
    // const screenClick = () => {
    //     setBefore(!before);
    // }
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
                {pictures && typeof pictures === 'object' && Object.values(pictures).map((entry, index) => (
                    <div key={index}>
                        <AdvancedImage plugins={[lazyload(), placeholder({mode: 'blur'})]} cldImg={entry.pre} />
                        <p className='pictureInfo'>
                            {entry.info}
                        </p>
                    </div>
                ))}
            </div>
        </div>)

    const showingBathroom = (
        <div>
            <input onChange={handleInputChange} type="text" className="searchBar" placeholder="Search..." />
            <div className='homeBoxDaddy'>
                {pictures && typeof pictures === 'object' && Object.values(pictures).map((entry, index) => (
                    <>
                    {
                        entry.tag =="bathroom" &&
                        <div className='pictureBox' key={index}>
                        <AdvancedImage plugins={[lazyload(), placeholder({mode: 'blur'})]} cldImg={entry.pre} />
                        <p className='pictureInfo'>
                            {entry.info}
                        </p>
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
            {matchingEntries.length > 0 && 
                <div>
                    <p>Matching entries:</p>
                    {matchingEntries.map((pre, index) => (
                    <AdvancedImage plugins={[lazyload(), placeholder({mode: 'blur'})]} cldImg={pre} />
                    ))}
                </div>
            }
            <h1>We Getting Breesh</h1>
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
            aboutActive && showingAbout
        }
        </div>
    )
}

export default HomePage;
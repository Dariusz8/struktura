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

    bath1.resize(scale().width(1280).height(720).aspectRatio('1.0'))
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

    bath1b.resize(scale().width(1280).height(720).aspectRatio('1.0'))
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

    bath1c.resize(scale().width(1280).height(720).aspectRatio('1.0'))
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

    bath2.resize(scale().width(1280).height(720).aspectRatio('1.0'))
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

    bath2b.resize(scale().width(1280).height(720).aspectRatio('1.0'));

    bath2c.resize(scale().width(1280).height(720).aspectRatio('1.0'));

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
    })
    //FUNCTIONS
    // const screenClick = () => {
    //     setBefore(!before);
    // }

    const showingBeforePictures = (
        <div>
            <input type="text" className="searchBar" placeholder="Search..." />
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
            <input type="text" className="searchBar" placeholder="Search..." />
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
import './assets/HomePage.css';
import React, {useState} from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import {AdvancedImage, placeholder, lazyload} from '@cloudinary/react';
import {limitFill, scale, fit, fill, thumbnail} from "@cloudinary/url-gen/actions/resize";
import { image, text } from '@cloudinary/url-gen/qualifiers/source';
import { TextStyle } from '@cloudinary/url-gen/qualifiers/textStyle';
import { source } from '@cloudinary/url-gen/actions/overlay';
import { Position } from '@cloudinary/url-gen/qualifiers/position';
import { compass, focusOn } from '@cloudinary/url-gen/qualifiers/gravity';
import { opacity, replaceColor } from '@cloudinary/url-gen/actions/adjust';
import { Transformation } from '@cloudinary/url-gen';
import { grayscale, colorize } from '@cloudinary/url-gen/actions/effect';
import { MyStateContext } from './App';

const HomePage = () => {
    const cld = new Cloudinary({
        cloud: {
          cloudName: 'dly85se71'
        }
    });
    //NEED  maybe put these pictures elsewhere with all to export from
    const testImg1 = cld.image('cld-sample-5');
    const testImg2 = cld.image('cld-sample-3');
    const testImg3 = cld.image('cld-sample-4');
    const testImg4 = cld.image('cld-sample-2');
    const bath1 = cld.image('bath1');
    const bath1b = cld.image('bath1b');
    const bath1c = cld.image('bath1c');
    const bath2 = cld.image('bath2');
    const bath2b = cld.image('bath2b');
    const bath2c = cld.image('bath2c');


    testImg1.format('auto')
        .quality('auto')
        .resize(fill().aspectRatio("1.0"))
        .overlay(
            source(
                text('Before', new TextStyle("Arial", 40))
                )
                .position(new Position().gravity(compass("south_west")).offsetX(50).offsetY(50))
        )
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
                new Position().allowOverflow(false).gravity(compass("south_east"))
            )
        );

        testImg2.format('auto')
        .quality('auto')
        .resize(fill().aspectRatio("1.0"))
        .overlay(
            source(
                text('After', new TextStyle("Arial", 40))
                )
        .position(new Position().gravity(compass("south_west")).offsetX(50).offsetY(50))
        )
        .overlay(
            source(
                image('STRUKTURA').transformation(
                    new Transformation()
                    .resize(scale().width(150))
                    .adjust(opacity(100))
                    .effect(
                        colorize()
                        .color('white')
                    )
                )
                )
            .position(
                new Position().allowOverflow(false).gravity(compass("south_east")).offsetY(150)
            )
        );

        testImg3.format('auto')
        .quality('auto')
        .resize(fill().aspectRatio("1.0"))
        .overlay(
            source(
                text('Before', new TextStyle("Arial", 40))
                )
        .position(new Position().gravity(compass("south_west")).offsetX(50).offsetY(50))
        )
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
                new Position().allowOverflow(false).gravity(compass("south_east"))
            )
        );

        testImg4.format('auto')
        .quality('auto')
        .resize(fill().aspectRatio("1.0"))
        .overlay(
            source(
                text('After', new TextStyle("Arial", 40))
                )
        .position(new Position().gravity(compass("south_west")).offsetX(50).offsetY(50))
        )
        .overlay(
            source(
                image('STRUKTURA').transformation(
                    new Transformation()
                    .resize(scale().width(150))
                    .adjust(opacity(50))
                )
                )
            .position(
                new Position().allowOverflow(false).gravity(compass("south_east"))
            )
        );
    //STATES PICS
    
    const [before, setBefore] = useState(true);
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
        entry3:{
            pre: bath1,
            post: "bathroom",
            tag: ["bathroom"],
            info: "Texas"
        },
        entry4:{
            pre: bath1b,
            post: bath1c,
            tag: ["bathroom"],
            info: "Texas"
        },
        entry5:{
            pre: bath2,
            post: "bathroom",
            tag: ["bathroom"],
            info: "Texas"
        },
        entry6:{
            pre: bath2b,
            post: bath2c,
            tag: ["blue"],
            info: "Texas"
        },
    })
    //FUNCTIONS
    const screenClick = () => {
        setBefore(!before);
    }

    const showingBeforePictures = (
        <div>
            <input type="text" className="searchBar" placeholder="Search..." />
            <div className='homeBoxDaddy' onClick={screenClick}>
                {pictures && typeof pictures === 'object' && Object.values(pictures).map((entry, index) => (
                    <div key={index}>
                        <AdvancedImage plugins={[lazyload(), placeholder({mode: 'blur'})]} cldImg={entry.pre} />
                        <p>
                            {entry.info}
                        </p>
                    </div>
                ))}
            </div>
        </div>)
    
    const showingAfterPictures = (
        <div>
            <input type="text" className="searchBar" placeholder="Search..." />
            <div className='homeBoxDaddy' onClick={screenClick}>
                {pictures && typeof pictures === 'object' && Object.values(pictures).map((entry, index) => (
                    <div key={index}>
                        <AdvancedImage plugins={[lazyload(), placeholder({mode: 'blur'})]} cldImg={entry.post} />
                        <p>
                            {entry.info}
                        </p>
                    </div>
                ))}
            </div>
        </div>)

    
    return (
        <div>
        {
            before ? showingBeforePictures : showingAfterPictures
        }
        </div>
    )
}

export default HomePage;
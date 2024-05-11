import './assets/HomePage.css';
//import { signal, effect } from "@preact/signals";
import React, {useState} from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import {AdvancedImage, placeholder, lazyload} from '@cloudinary/react';
import {limitFill, scale, thumbnail} from "@cloudinary/url-gen/actions/resize";
import { image, text } from '@cloudinary/url-gen/qualifiers/source';
import { TextStyle } from '@cloudinary/url-gen/qualifiers/textStyle';
import { source } from '@cloudinary/url-gen/actions/overlay';
import { Position } from '@cloudinary/url-gen/qualifiers/position';
import { compass, focusOn } from '@cloudinary/url-gen/qualifiers/gravity';
import { opacity } from '@cloudinary/url-gen/actions/adjust';
import { Transformation } from '@cloudinary/url-gen';
import { format } from '@cloudinary/url-gen/actions/delivery';
import { auto } from '@cloudinary/url-gen/qualifiers/format';

const HomePage = () => {
    const cld = new Cloudinary({
        cloud: {
          cloudName: 'dly85se71'
        }
    });
    //NEED TO ADD LAZY LOAD OF SORT-watermark-preBeforeText, put these pictures elsewhere with all to export from
    const testImg1 = cld.image('cld-sample-5');
    const testImg2 = cld.image('cld-sample-3');
    const testImg3 = cld.image('cld-sample-4');
    const testImg4 = cld.image('cld-sample-2');
    const logoImg = cld.image('STRUKTURA');

    testImg1.format('auto')
        .quality('auto')
        .resize(scale())
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
                    .adjust(opacity(20))
                )
                )
            .position(
                new Position().allowOverflow(false).gravity(compass("south_east"))
            )
        );

        testImg2.format('auto')
        .quality('auto')
        .resize(scale())
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
                    .adjust(opacity(20))
                )
                )
            .position(
                new Position().allowOverflow(false).gravity(compass("south_east"))
            )
        );;

        testImg3.format('auto')
        .quality('auto')
        .resize(scale())
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
                    .adjust(opacity(20))
                )
                )
            .position(
                new Position().allowOverflow(false).gravity(compass("south_east"))
            )
        );;

        testImg4.format('auto')
        .quality('auto')
        .resize(scale())
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
                    .adjust(opacity(20))
                )
                )
            .position(
                new Position().allowOverflow(false).gravity(compass("south_east"))
            )
        );;

        //just pic overlay
        // .overlay(
        //     source(
        //         image('STRUKTURA')
        //         )
        // )

    //create and configure to my cloudinary instance
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
    })
    //FUNCTIONS
    const screenClick = () => {
        setBefore(!before);
    }
    //CODE TO EXPORT AFTER
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
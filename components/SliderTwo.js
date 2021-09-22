import React, { useState , useEffect} from "react";
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Flickity from 'react-flickity-component';


function SliderTwo() {

    const flickityOptions = {
        autoPlay: true,
        initialIndex: 1,
        accessibility: true,
        contain: true,
        wrapAround: true
    }

    
    return (
        <div className="slidertwo">
            <div className="slidertwo-inner">
                <div className="slidertwo-inner-left">
                    <img src="./banner5.png" alt="banner"></img>
                </div>
                <div className="slidertwo-inner-right">
                    <div className="slidertwo-inner-right-top">
                        <img src="./banner3.png" alt="banner"></img>
                    </div>
                    <div className="slidertwo-inner-right-bottom">
                        <img src="./banner4.png" alt="banner"></img>
                    </div>
                </div>
                <div className="slidertwo-owl">
                <Flickity
                    className={'carousel'} // default '' 
                    elementType={'div'} // default 'div'
                    options={flickityOptions} // takes flickity options {}
                    disableImagesLoaded={false} // default false
                    reloadOnUpdate // default false
                    static // default false
                >
                    {[3,4,5].map((val , index) =>
                    <>
                        <div style={{width:"100%"}}>
                            <img key={index} src={`./banner${val}.png`} alt="banner"></img>
                        </div>
                    </>
                    )}
                </Flickity>
                </div>
            </div>
        </div>
    )
}

export default SliderTwo;
import React, { useState , useEffect} from "react";
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function BannerSection() {



    
    return (
        <div className="bannersection">
            <div className="bannersection-inner">
                <div className="bannersection-inner-left">
                    <img src='./banner3.png' alt="banner"/>
                </div>
                <div className="bannersection-inner-right">
                    <img src='./banner4.png' alt="banner"/>
                </div>
            </div>
        </div>
    )
}

export default BannerSection;
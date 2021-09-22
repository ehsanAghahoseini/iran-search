import React, { useState , useEffect} from "react";
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link';


function Slider() {



    
    return (
        <div className="slider">
            <div className="slider-inner">
                <div className="slider-inner-item">
                    <div className="slider-inner-item-inner">
                        <div className="slider-inner-item-inner-des">
                            <Link href="/category"><h3>موسیقی</h3></Link>
                            <Link href="/category">
                                <button>
                                    <span>مشاهده همه</span>
                                    <span><FontAwesomeIcon icon={faCaretLeft} /></span>
                                </button>
                            </Link>
                        </div>
                        <img src='./banner2.png' alt="banner"></img>
                    </div>
                </div>
                <div className="slider-inner-item">
                    <div className="slider-inner-item-inner">
                        <div className="slider-inner-item-inner-des">
                            <Link href="/category"><h3>زبان ها</h3></Link>
                            <Link href="/category">
                                <button>
                                    <span>مشاهده همه</span>
                                    <span><FontAwesomeIcon icon={faCaretLeft} /></span>
                                </button>
                            </Link>
                        </div>
                        <img src='./banner1.png' alt="banner"></img>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Slider;
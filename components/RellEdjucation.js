import React, { useState , useEffect} from "react";
import { faCaretLeft , faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Flickity from 'react-flickity-component';
import { getServerSideProps } from "../pages";
import Link from 'next/link';


function RellEdjucation(props) {

    const flickityOptions = {
        initialIndex: 2,
        pageDots: false,
        accessibility: true,
        contain: true,
        wrapAround: true
    }

    
    return (
        <div className="bestedjucation">
            <div className="bestedjucation-inner" style={{width:"100%"}}>
                <div className="bestedjucation-inner-head">
                   <h3>آموزش های مرتبط دیگر</h3>
                </div>
                <div className="bestedjucation-inner-cont">
                    <Flickity
                        className={'carousel'} // default ''
                        elementType={'div'} // default 'div'
                        options={flickityOptions} // takes flickity options {}
                        disableImagesLoaded={false} // default false
                        reloadOnUpdate // default false
                        static // default false
                    >
                        {props.data.map((val , index) =>
                        <Link key={index} href={`/profile/${val.id}`}>
                            <div key={index} className="bestedjucation-inner-cont-item">
                                <img className="bestedjucation-inner-cont-item-saz" src="../saz3.png" alt="saz" />
                                <h3>{val.title}</h3>
                                <div className="bestedjucation-inner-cont-item-bottom">
                                    <div className="bestedjucation-inner-cont-item-bottom-right">
                                        <img src="../profile.png" alt="profile"/>
                                    </div>
                                    <div className="bestedjucation-inner-cont-item-bottom-left">
                                        <span>معصومه محمدی</span>
                                        <div className="bestedjucation-inner-cont-item-bottom-left-rate">
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        )}
                    </Flickity>           
                </div>
            </div>
        </div>
    )
}

export default RellEdjucation;
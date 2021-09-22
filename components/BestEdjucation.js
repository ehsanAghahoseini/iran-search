import React, { useState , useEffect} from "react";
import { faCaretLeft , faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Flickity from 'react-flickity-component';
import Link from 'next/link';
import BASE_URL_MEDIA from './BASE_URL_MEDIA';


function BestEdjucation(props) {

    const flickityOptions = {
        initialIndex: 22,
        pageDots: false,
        accessibility: true,
        contain: true,
        wrapAround: true
    }

    
    return (
        <div className="bestedjucation">
            <div className="bestedjucation-inner">
                <div className="bestedjucation-inner-head">
                   <h3>جدیدترین آموزش های موسیقی</h3>
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
                            <div  className="bestedjucation-inner-cont-item">
                                {val.type == 'image' ? 
                                    <img className="bestedjucation-inner-cont-item-saz" src={`${BASE_URL_MEDIA}/posts/${val.file_url}`} alt="saz" />
                                :
                                    <img className="bestedjucation-inner-cont-item-saz" src={'./logo.png'} alt="saz" />
                                }
                                <h3>{val.title}</h3>
                                <div className="bestedjucation-inner-cont-item-bottom">
                                    <div className="bestedjucation-inner-cont-item-bottom-right">
                                        {val.user.image_url && 
                                        <img src={`${BASE_URL_MEDIA}/profile/images/${val.user.image_url}`} alt="profile"/>
                                        }
                                    </div>
                                    <div className="bestedjucation-inner-cont-item-bottom-left">
                                        <span>{val.user.name}</span>
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

export default BestEdjucation;
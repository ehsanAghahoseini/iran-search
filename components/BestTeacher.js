import React, { useState , useEffect} from "react";
import { faCaretLeft , faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Flickity from 'react-flickity-component';
import Link from 'next/link';
import BASE_URL_MEDIA from './BASE_URL_MEDIA'


function BestTeacher(props) {

    const flickityOptions = {
        initialIndex: 2,
        pageDots: false,
        accessibility: true,
        contain: true,
        wrapAround: true
    }

    
    return (
        <div className="bestteacher">
            <div className="bestteacher-inner">
                <div className="bestteacher-inner-head">
                    <h3>برترین</h3>
                    <h3>مدرسین</h3>
                    <h3>موسیقی</h3>
                    <span className="bestteacher-inner-head-span">برترین مدرسین موسیقی</span>
                    <Link href="/category">
                        <button>
                            <span>مشاهده همه</span>
                            <span><FontAwesomeIcon icon={faCaretLeft} /></span>
                        </button>
                    </Link>
                </div>
                <div className="bestteacher-inner-cont">
                <Flickity
                    className={'carousel'} // default ''
                    elementType={'div'} // default 'div'
                    options={flickityOptions} // takes flickity options {}
                    disableImagesLoaded={false} // default false
                    reloadOnUpdate // default false
                    static // default false
                >
                    {props.data.map((val , index) =>
                    <Link  key={index} href={`/profile/teacher/${val.id}`}>
                        <div className="bestteacher-inner-cont-item">
                            {val.image_url && val.image_url != null &&
                            <img className="bestteacher-inner-cont-item-profile" src={`${BASE_URL_MEDIA}/profile/images/${val.image_url}`} alt="profile" />
                            }
                            {!val.image_url || val.image_url == null &&
                            <img className="bestteacher-inner-cont-item-profile" src={`./profile.png`} alt="profile" />
                            }
                            <div className="bestteacher-inner-cont-item-rate">
                                <div className="bestteacher-inner-cont-item-rate-item"><FontAwesomeIcon icon={faStar} /></div>
                                <div className="bestteacher-inner-cont-item-rate-item"><FontAwesomeIcon icon={faStar} /></div>
                                <div className="bestteacher-inner-cont-item-rate-item"><FontAwesomeIcon icon={faStar} /></div>
                                <div className="bestteacher-inner-cont-item-rate-item"><FontAwesomeIcon icon={faStar} /></div>
                                <div className="bestteacher-inner-cont-item-rate-item"><FontAwesomeIcon icon={faStar} /></div>
                            </div>
                            <div className=""></div>
                            <h3>{val.name} {val.family}</h3>
                            {val.tutorials.map((item , index2)=>
                            <>
                            {index2 < 2 && 
                                <div style={{marginTop:"-5px"}} className="bestteacher-inner-cont-item-type">
                                    <div className="bestteacher-inner-cont-item-type-inner">
                                        {item.type == 'image' ? 
                                            <img className="bestteacher-inner-cont-item-type-inner-flag" src={`${BASE_URL_MEDIA}/posts/${item.file_url}`} alt="saz" />
                                        :
                                            <img className="bestteacher-inner-cont-item-type-inner-flag" src="./saz1.png" alt="saz" />
                                        }
                                        <span>{item.title}</span>
                                    </div>
                                </div>
                            }
                            </>
                            )}                        
                        </div>
                    </Link>
                    )}
                </Flickity>    
                </div>
            </div>
        </div>
    )
}

export default BestTeacher;
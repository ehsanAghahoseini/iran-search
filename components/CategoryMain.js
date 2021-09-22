import React, { useState , useEffect} from "react";
import { faMapMarked , faStar , faChalkboard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BASE_URL from './BASE_URL';
import Link from 'next/link';
import BASE_URL_MEDIA from "./BASE_URL_MEDIA";

function CategoryMain(props) {



    
    return (
        <div className="category-main">
            <div className="category-main-inner">
            {props.allPost.map((item , index)=>
            <div  key={index} className={`category-main-item ${props.inlineState == 0 && `ColDisplay`}`}>
                <div className="category-main-item-inner">

                    <Link href={`/profile/${item.id}`}>
                        {item.type == 'image' ? 
                            <img className="category-main-item-inner-profile" src={item.file_url != null ? `${BASE_URL_MEDIA}/posts/${item.file_url}` : './saz5.png'} alt="profile" />
                        :    
                            <img className="category-main-item-inner-profile" src={'./logo.png'} alt="profile" />
                        }
                    </Link>

                    <Link href={`/profile/${item.id}`}><h3 className="category-main-item-inner-h3">{item.title}</h3></Link>

                    <div className="category-main-item-inner-bottom">
                        <div className="category-main-item-inner-bottom-right">
                            <Link href={`/profile/${item.id}`}>
                                {item.user.image_url != null ? 
                                <img src={`${BASE_URL_MEDIA}/profile/images/${item.user.image_url}`} alt='profile' />
                                :
                                <img src={'./logo.png'} alt='profile' />
                                }
                            </Link>
                        </div>
                        <div className="category-main-item-inner-bottom-left">
                            <span>{item.user.name}</span>
                            <div className="category-main-item-inner-bottom-left-rate">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />

                            </div>
                        </div>
                    </div>

                    <div className="category-main-item-inner-title">
                        <Link href={`/profile/${item.id}`}><h3>{item.title}</h3></Link>
                        <div className="category-main-item-inner-title-down">
                            <Link href={`/profile/${item.id}`}>
                                {item.user.image_url != null ? 
                                <img src={`${BASE_URL_MEDIA}/profile/images/${item.user.image_url}`} alt='profile' />
                                :
                                <img src={'./logo.png'} alt='profile' />
                                }
                            </Link>
                            <Link href={`/profile/${item.id}`}><span>{item.user.name}</span></Link>
                        </div>
                    </div>

                    <div className="category-main-item-inner-address">
                        <div className="category-main-item-inner-address-one">
                            <div className="category-main-item-inner-address-one-icon">
                                <FontAwesomeIcon icon={faMapMarked} />
                            </div>
                            <span className="category-main-item-inner-address-one-text">
                                 شهر
                            </span>
                        </div>
                        <div className="category-main-item-inner-address-one">
                            <div className="category-main-item-inner-address-one-icon">
                                <FontAwesomeIcon icon={faChalkboard} />
                            </div>
                            <span className="category-main-item-inner-address-one-text">
                                 آنلاین , آفلاین , حضوری , آموزشگاه
                            </span>
                        </div>
                    </div>

                    <div className="category-main-item-inner-btn">
                        <div className="category-main-item-inner-btn-rate">
                            <div className="category-main-item-inner-btn-rate-one">(25 نفر)</div>
                            <div className="category-main-item-inner-btn-rate-two">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                        </div>
                        <Link href={`/profile/${item.id}`}><button>مشاهده آموزش</button></Link>
                    </div>

                </div>
            </div>
            )}
            </div>
        </div>
    )
}

export default CategoryMain;
import React, { useState , useEffect} from "react";
import { faChalkboard , faBookmark , faStar , faClock , faEnvelope , faGlobe , faMusic , faMapMarked , faPhone } from '@fortawesome/free-solid-svg-icons'
import {faStar as faStar2} from '@fortawesome/free-regular-svg-icons';
import { faTelegram, faWhatsapp , faFacebook , faInstagram , faTwitter  } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link';
import BASE_URL_MEDIA from './BASE_URL_MEDIA';
import Loader from './Loader';
import CheckUserAuth from './CheckUserAuth';
import {Add_To_Favarit} from './API';

function ProfileCard(props) {
    const ISSERVER = typeof window === "undefined";
    const [display , setDisplay]=useState(false);
    const [displayImage , setDisplayImage]=useState(false);


    const changeDisplayImage=()=>{
        if(displayImage){
            setDisplayImage(false)
        }
        else {
            setDisplayImage(true)
        }
    }

    const addToFavarit=(id)=>{
        if(CheckUserAuth())  {
            setDisplay(true);
            const returndata = Add_To_Favarit(id );
            returndata.then((res)=>{
            if(res.result == 'ok'){
                setDisplay(false);
                alert('به لیست علاقه مندی ها افزوده شد')
            }})
        }
        else {
            alert('ابتدا وارد حساب شوید')
        }    
    }

    // useEffect(() => {
    //     if(!ISSERVER){
    //         const slideImageCont = window.document.getElementById('slideImageCont');
    //         window.addEventListener('click', function (e) {
    //             if (!slideImageCont.contains(e.target)) {
    //                 setDisplayImage(false)
    //             }
    //         });
    //     }
    // }, [ISSERVER]);

    
    return (
        <>
        {props.data &&
        <div className="profile-card">
                {display && <Loader/>}
                {props.data.image_url == null ? 
                <Link href={`/profile/teacher/${props.data.id}`}><img className="profile-card-img" src='../../profile.png' alt="profile" /></Link>
                :
                <Link href={`/profile/teacher/${props.data.id}`}><img className="profile-card-img" src={`${BASE_URL_MEDIA}/profile/images/${props.data.image_url}`} alt="profile"  /></Link>
                }
            {props.data.id && <Link href={`/profile/teacher/${props.data.id}`}><p style={{cursor : "pointer"}}>{props.data.name} </p></Link>}
            <div className="profile-card-rate">
            {/* {props.data && props.data.rate} */}
                {[0,1,2,3,4].map((item , index)=>
                    <FontAwesomeIcon icon={faStar} />
                )}
            </div>
            {CheckUserAuth() && props.data.type == 'teacher' &&
                <div className="profile-card-bookmark" onClick={()=>addToFavarit(props.data.id)}> <FontAwesomeIcon icon={faBookmark} /></div>
            }
            <div className="profile-card-bio">
                {props.data.info && props.data.info.description}
            </div>
            <div className="profile-card-address">
                <div className="profile-card-address-item">
                    <FontAwesomeIcon icon={faMapMarked} />
                    {/* <span>اصفهان , ایران</span> */}
                </div>
                <div className="profile-card-address-item">
                    <FontAwesomeIcon icon={faMusic} />
                    {/* <span>پیانو , کمانچه</span> */}
                </div>
                <div className="profile-card-address-item">
                    <FontAwesomeIcon icon={faChalkboard} />
                    <span>
                        {props.data.info && props.data.info.online && 'آنلاین'}
                        {props.data.info && props.data.info.offline && 'آفلاین'}
                        {props.data.info && props.data.info.private && 'خصوصی'}
                        {props.data.info && props.data.info.meeting && 'حضوری'}
                    </span>
                </div>
                <div className="profile-card-address-item">
                    <FontAwesomeIcon icon={faClock} />
                    {props.data.id &&
                    <Link href={`/profile/teacher/${props.data.id}#activityhoures`}><span style={{textDecoration : 'underline' , cursor:'pointer'}}> ساعات حضور در آموزشگاه</span></Link>
                    }
                </div>
            </div>
            <div className="profile-card-social">
                <div className="profile-card-social-icon">
                    <FontAwesomeIcon icon={faPhone} />
                </div>
                <span>{props.data.info && props.data.info.phone}</span>
            </div>
            <div className="profile-card-social">
                <div className="profile-card-social-icon">
                    <FontAwesomeIcon icon={faWhatsapp} />
                </div>
                <span>{props.data.info && props.data.info.whats}</span>
            </div>
            <div className="profile-card-social">
                <div className="profile-card-social-icon">
                    <FontAwesomeIcon icon={faTelegram} />
                </div>
                <span>{props.data.info && props.data.info.telegram}</span>
            </div>
            <div className="profile-card-social">
                <div className="profile-card-social-icon">
                    <FontAwesomeIcon icon={faInstagram} />
                </div>
                <span>{props.data.info && props.data.info.instagram}</span>
            </div>
            <div className="profile-card-social">
                <div className="profile-card-social-icon">
                    <FontAwesomeIcon icon={faTwitter} />
                </div>
                <span>{props.data.info && props.data.info.twitter}</span>
            </div>
            <div className="profile-card-social">
                <div className="profile-card-social-icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <span>{props.data.info && props.data.info.email}</span>
            </div>
            <div className="profile-card-social">
                <div className="profile-card-social-icon">
                    <FontAwesomeIcon icon={faGlobe} />
                </div>
                <span>{props.data.info && props.data.info.website}</span>
            </div>
            {/* <div className={`profile-card-slide-image ${displayImage && 'profile-card-slide-image-active'}`} >
                <div id="slideImageCont" className="profile-card-slide-image-cont" ></div>
            </div> */}
        </div>
        }
        </>
    )
}

export default ProfileCard;
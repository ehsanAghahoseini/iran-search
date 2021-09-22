import React, { useState , useEffect} from "react";
import { faChalkboard , faStar , faClock , faMusic , faMapMarked , faPhone } from '@fortawesome/free-solid-svg-icons'
import { faTelegram, faWhatsapp , faFacebook , faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BASE_URL_MEDIA from "./BASE_URL_MEDIA";

function ProfileHead(props) {



    return (
        <div className="profile-head">
            <div className="profile-head-inner">
                {props.data && props.data.type == 'image' && 
                    <img src={`${BASE_URL_MEDIA}/posts/${props.data.file_url}`} alt="profile" />
                }
                <h1>{props.data && props.data.title}</h1>
            </div>
            <p>{ props.data && props.data.description} </p>
        </div>
        
    )
}

export default ProfileHead;
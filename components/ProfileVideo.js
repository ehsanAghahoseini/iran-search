import React, { useState , useEffect} from "react";
import { faChalkboard , faStar , faClock , faMusic , faMapMarked , faPhone } from '@fortawesome/free-solid-svg-icons'
import { faTelegram, faWhatsapp , faFacebook , faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BASE_URL_MEDIA from './BASE_URL_MEDIA';

function ProfileVideo(props) {

    
    return (
        <div className="profile-video">
            {props.data && props.data.type == 'movie' &&
                <video  controls>
                    <source src={`${BASE_URL_MEDIA}/posts/${props.data && props.data.file_url}`} type="video/mp4" />
                </video>
            }
            {/* <p>می توانید این ویدیو ی زیبا و غیر مرتبط به آموزش پیانو را تماشا کنید</p> */}
        </div>
        
    )
}

export default ProfileVideo;
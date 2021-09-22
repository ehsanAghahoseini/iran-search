import React, { useState , useEffect} from "react";
import { faUser , faSearch , faSchool , faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

function ProfileOtherEdju(props) {

    
    return (
        <div className="profile-edju">
            <div className="profile-edju-head">
                <span>آموزش های دیگر مدرس</span>
            </div>
            <div className="profile-edju-cont">
                {props.data.map((item , index)=>
                <Link key={index} href={`/profile/${item.id}`}>
                    <div className="profile-edju-cont-item">
                        <img src='../saz4.png' alt="saz" />
                        <div className="profile-edju-cont-item-des">
                            <span>{item.title}</span>
                            <span>{item.description.substr(0, 100)}</span>
                        </div>
                    </div>
                </Link>
                )}
            </div>
        </div>

    )
}

export default ProfileOtherEdju;
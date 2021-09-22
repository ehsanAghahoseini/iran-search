import React, { useState , useEffect} from "react";
import { faEdit , faCogs } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BASE_URL_MEDIA from "./BASE_URL_MEDIA";
import Link from 'next/link';

function FavTeacher(props) {


    return (
        <div className="profile-teacher-section">
            <div className="profile-teacher-section-head">
              <span>مدرسین منتخب</span>
            </div>
            {props.data.map((item , index)=>
            <Link href={`/profile/teacher/${item.id}`}>
              <div  key={index} className="profile-teacher-section-item">
                <div className="profile-teacher-section-item-right">
                  <img src={item.image_url ? `${BASE_URL_MEDIA}/profile/images/${item.image_url}` : '../../profile.png'} alt="profile" />
                  <div className="profile-teacher-section-item-right-des">
                    <h3>{item.username}</h3>
                    <span>{item.name} {item.family}</span>
                  </div>
                </div>
                <div className="profile-teacher-section-item-left">
                  <FontAwesomeIcon icon={faCogs} />
                </div>
              </div>
            </Link>
            )}
        </div>
    )
}

export default FavTeacher;
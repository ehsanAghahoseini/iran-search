import React, { useState , useEffect} from "react";
import { faEdit , faCogs } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CheckUserAuth from '../components/CheckUserAuth';
import Link from 'next/link';


function Tutorials(props) {
  const ISSERVER = typeof window === "undefined";



    
    return (
    <div className="profile-teacher-section">
        <div className="profile-teacher-section-head">
          <span>آموزش ها</span>
        </div>
        {props.data.map((item , index)=>
        <Link href={`/profile/${item.id}`}>
          <div  key={index} className="profile-teacher-section-item">
            <div className="profile-teacher-section-item-right">
              <img src='../../profile.png' alt="profile" />
              <div className="profile-teacher-section-item-right-des">
                <h3>{item.title}</h3>
                <span>{item.description.substr(0, 200)}</span>
              </div>
            </div>
            <div className="profile-teacher-section-item-left">
              <FontAwesomeIcon icon={faCogs} />
            </div>
          </div>
        </Link>
        )}
        <div className="profile-teacher-section-footer">
          {CheckUserAuth() && !ISSERVER && props.techID == localStorage.getItem('id') &&     
              <Link href='/addtutorials' >
                <button >
                    <span> افزودن آموزش</span>
                    <FontAwesomeIcon icon={faEdit}/>
                </button>
              </Link>
          }
          </div>
      </div>
    )
}

export default Tutorials;
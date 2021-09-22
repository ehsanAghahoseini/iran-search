
import { faUser , faCogs , faTicketAlt , faPowerOff} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import SettingSide from '../../components/SettingSide';
import CheckUserAuth from '../../components/CheckUserAuth';
import React, { useState , useEffect} from "react";
import AddTutorialsForm from '../../components/AddTutorialsForm';



export default function AddTutorials() {


  useEffect(async()=>{
    if(!CheckUserAuth()){
        location.href="/"      
    }
  },[])

  return (
    <div className="setting">
      <div className="setting-inner">
        <div className="setting-right">
          <SettingSide active={4}/>
        </div>
        <div className="setting-left">
          <div className="setting-left-inner">
            <AddTutorialsForm />
          </div>
        </div>
      </div>
    </div>
  )
}

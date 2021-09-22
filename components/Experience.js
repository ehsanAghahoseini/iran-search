import React, { useState , useEffect} from "react";
import { faEdit , faCogs } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from 'react-modal';
import {Add_Experience} from './API';
import CheckUserAuth from './CheckUserAuth';
import Loader from './Loader';


function Experience(props) {
    const ISSERVER = typeof window === "undefined";

    const[visibleModal , setVisibleModal]=useState(false);
    const [display , setDisplay]=useState(false);
    const customStyles = {
        content: {
          height:'300px',
        },
      };

    const addExperience=(e)=>{
        e.preventDefault();      
        if(CheckUserAuth())  {
            setDisplay(true);
            const returndata = Add_Experience(e , localStorage.getItem('token'));
            returndata.then((res)=>{
            if(res.result == 'ok'){
                location.reload()
            }})
        }
        else {
            alert('ابتدا وارد حساب شوید')
        }    
    }


    
    return (
        <div className="profile-teacher-section">
            {display && <Loader/>}
            <Modal
            isOpen={visibleModal}
            onRequestClose={()=>{setVisibleModal(false)}}
            contentLabel="Example Modal"
            style={customStyles}
            >
                <form className="form-add-experience" onSubmit={addExperience}>
                    <input type="text" required placeholder="عنوان سابقه"></input>
                    <textarea required placeholder="توضیح سابقه"></textarea>
                    <button> ذخیره سابقه</button>
                </form>       
            </Modal>
            <div className="profile-teacher-section-head">
            <span>سوابق کاری</span>
            </div>
            {props.data.map((item , index)=>
            <div  key={index} className="profile-teacher-section-item">
            <div className="profile-teacher-section-item-right">
                <div className="profile-teacher-section-item-right-des">
                <h3>{item.title}</h3>
                <span>{item.description}</span>
                </div>
            </div>
            <div className="profile-teacher-section-item-left">
                <FontAwesomeIcon icon={faCogs} />
            </div>
            </div>
            )}
            <div className="profile-teacher-section-footer">
            {CheckUserAuth() && !ISSERVER && props.techID == localStorage.getItem('id') &&     
                <button onClick={()=>{setVisibleModal(true)}}>
                    <span> افزودن سابقه</span>
                    <FontAwesomeIcon icon={faEdit}/>
                </button>
            }
            </div>
        </div>
    )
}

export default Experience;
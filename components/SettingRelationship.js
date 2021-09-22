import React, { useState , useEffect} from "react";
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Detail_Teacher , Edit_Social} from './API';
import Loader from './Loader';
import CheckUserAuth from './CheckUserAuth';

function SettingRelationship() {

    const[display , setDisplay]=useState(false);
    const[email , setemail]=useState('');
    const[instagram , setinstagram]=useState('');
    const[phone , setphone]=useState('');
    const[telegram , settelegram]=useState('');
    const[twitter , settwitter]=useState('');
    const[website , setwebsite]=useState('');
    const[whats , setwhats]=useState('');



    const onFinish=(e)=>{
        let postdata = {
            'email':email ,
            'instagram':instagram ,
            'phone':phone ,
            'telegram':telegram ,
            'twitter':twitter ,
            'website':website ,
            'whats':whats ,
        }
        setDisplay(true)
        e.preventDefault();
        if(CheckUserAuth()){
            const returndata = Edit_Social(postdata);
            returndata.then((res)=>{
            if(res.result == 'ok'){
                setDisplay(false)
                alert("تغییرات ذخیره شد")
            }})
        }
    }

  
    useEffect(async()=>{
      if(CheckUserAuth()){
        setDisplay(true)
        const returndata = Detail_Teacher(localStorage.getItem('id'));
        returndata.then((res)=>{
        if(res.result == 'ok'){
          setDisplay(false)
          if(res.data.info != null){

                setemail(res.data.info.email) 
                setinstagram(res.data.info.instagram) 
                setphone(res.data.info.phone) 
                settelegram(res.data.info.telegram) 
                settwitter(res.data.info.twitter) 
                setwebsite(res.data.info.website) 
                setwhats(res.data.info.whats )
           }
        }})
      }
      else {
          location.href="/"
      }
    },[])

   
    return (
        <div className="setting-user">
            {display && <Loader/>}
            <form onSubmit={onFinish} className="setting-user-form">
                <div className="setting-user-form-left">
                    <div className="setting-user-form-left-form-item">
                        <label>Telegram</label>
                        <input type="text" name='telegram' value={telegram} onChange={(e)=>{settelegram(e.target.value)}}></input>
                    </div>
                    <div className="setting-user-form-left-form-item">
                        <label>Whatsapp</label>
                        <input type="text" name='whats' value={whats} onChange={(e)=>{setwhats(e.target.value)}}></input>
                    </div>
                    <div className="setting-user-form-left-form-item">
                        <label>Instagram</label>
                        <input type="text" name='instagram' value={instagram} onChange={(e)=>{setinstagram( e.target.value)}}></input>
                    </div>
                    <div className="setting-user-form-left-form-item">
                        <label>Twitter</label>
                        <input type="text" name='twitter' value={twitter} onChange={(e)=>{settwitter(e.target.value)}}></input>
                    </div>
                </div>
                <div className="setting-user-form-right">
                    <div className="setting-user-form-left-form-item">
                        <label>شماره تماس </label>
                        <input type="number" name='phone' value={phone} onChange={(e)=>{setphone(e.target.value)}}></input>
                    </div>
                    <div className="setting-user-form-left-form-item">
                        <label>ایمیل</label>
                        <input type="email" name='email' value={email} onChange={(e)=>{setemail(e.target.value)}}></input>
                    </div>
                    <div className="setting-user-form-left-form-item">
                        <label>وب سایت</label>
                        <input type="text" name='website' value={website} onChange={(e)=>{setwebsite(e.target.value)}}></input>
                    </div>
                    <div className="setting-user-form-left-form-item" style={{marginTop:"29px"}}>
                        <button className="setting-user-form-left-form-item-btn">ذخیره تغییرات</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SettingRelationship;
import React, { useState , useEffect} from "react";
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CheckUserAuth from '../components/CheckUserAuth'
import Loader from './Loader';
import {Detail_Teacher ,Get_All_city , Edit_Main_Profile} from './API';


function SettingUser() {
    const[display , setDisplay]=useState(false);
    const [allCity , setAllCity]=useState([]);
    const [selectCity , setSelectCity]=useState('');
    const [name , setname]=useState('');
    const [family , setfamily]=useState('');
    const [username , setusername]=useState('');
    const [email , setemail]=useState('');
    const [description , setdescription]=useState('');
    const [national_code , setnationalcode]=useState('');


    // const onChange=(key , value)=>{
    //     const newFields = fields ;
    //     newFields[key] =  value ;
    //     setFields(newFields)
    // }  

    const getAllCity=()=>{
        const returndata = Get_All_city();
        returndata.then((res)=>{
            if(res.result == 'ok'){
            setAllCity(res.data);
            }
        })
    }


    const onFinish=(e)=>{
        e.preventDefault();
        let postdata = {
            'name':name ,
            'family':family ,
            'username':username ,
            'email':email ,
            'national_code':national_code ,
            'city':selectCity,
            'info':{
            'description':description ,
            }
        }
        setDisplay(true)
        if(CheckUserAuth()){
            const returndata = Edit_Main_Profile(postdata);
            returndata.then((res)=>{
            if(res.result == 'ok'){
                setDisplay(false)
                alert("تغییرات ذخیره شد")
            }
            else if(res.result == 'error'){
                setDisplay(false);
                alert(res.error)
            }
            else {
                setDisplay(false)
                alert("دوباره امتحان کنید")
            }
        })
        }
    }


    useEffect(async()=>{
        if(CheckUserAuth()){
          getAllCity();
          setDisplay(true)
          const returndata = Detail_Teacher(localStorage.getItem('id'));
          returndata.then((res)=>{
          if(res.result == 'ok'){
            setDisplay(false)
                  setname(res.data.name) 
                  setfamily(res.data.family) 
                  setusername(res.data.username) 
                  setemail(res.data.email) 
                  if(res.data.info != null){setdescription(res.data.info.description )}
                  setnationalcode(res.data.national_code )
                  setSelectCity(res.data.city_id )
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
                        <label>نام </label>
                        <input type="text"  name='name' value={name} onChange={(e)=>{setname(e.target.value)}}></input>
                    </div>
                    <div className="setting-user-form-left-form-item">
                        <label>نام خانوادگی</label>
                        <input type="text"  name='family' value={family} onChange={(e)=>{setfamily(e.target.value)}}></input>
                    </div>
                    <div className="setting-user-form-left-form-item">
                        <label>نام کاربری</label>
                        <input type="text"  name='username' value={username} onChange={(e)=>{setusername(e.target.value)}}></input>
                    </div>
                    <div className="setting-user-form-left-form-item">
                        <label>کدملی</label>
                        <input type="number"   name='national_code' value={national_code} onChange={(e)=>{setnationalcode(e.target.value)}}></input>                    
                    </div>
                </div>
                <div className="setting-user-form-right">
                    <div className="setting-user-form-left-form-item">
                        <label>توضیحات</label>
                        <textarea   name='description' value={description} onChange={(e)=>{setdescription(e.target.value)}}></textarea>
                    </div>
                    <div className="setting-user-form-left-form-item">
                        <label>ایمیل</label>
                        <input type="email"  name='email' value={email} onChange={(e)=>{setemail(e.target.value)}}></input>
                    </div>
                    <div className="setting-user-form-left-form-item">
                        <label>شهر</label>
                        <select value={selectCity} onChange={(e)=>{setSelectCity(e.target.value)}}>
                            <option value="">انتخاب شهر</option>
                            {allCity.map(item=>
                                <option value={item.id}>{item.name}</option>
                            )}
                        </select>                      
                    </div>
                    <div className="setting-user-form-left-form-item">
                        <button className="setting-user-form-left-form-item-btn">ذخیره تغییرات</button>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default SettingUser;
import React, { useState , useEffect} from "react";
import BASE_URL from '../../components/BASE_URL';
import Loader from '../../components/Loader';
import CheckUserAuth from '../../components/CheckUserAuth';
import {Send_Sms , Send_Verify , Send_Register , Get_All_city} from '../../components/API';

export default function Auth() {
  const[status , setStatus]=useState(0);
  const[display , setDisplay]=useState(false);
  const[city , setCity]=useState([]);
  const[type , setType]=useState(0);

  const sendSms=(e)=>{
    e.preventDefault();
    setDisplay(true);
    const returndata = Send_Sms(e);
    returndata.then((res)=>{
      if(res.data == 'ok' && res.result == 'ok'){
        localStorage.setItem('mobile',e.target[0].value)
        setDisplay(false);
        setStatus(1)
      }
    }
    )}


  const sendVerifyCode=(e)=>{
    e.preventDefault();
    setDisplay(true);
    const returndata = Send_Verify(e);
    returndata.then((res)=>{
      if( res.result == 'ok'){
        if(res.data.message == "new user"){
          setDisplay(false)
          setStatus(2);
        }
        else {
          localStorage.setItem('token' , res.data.user.token);
          localStorage.setItem('id' , res.data.user.id);
          localStorage.setItem('name' , res.data.user.name);
          localStorage.setItem('family' , res.data.user.family);
          localStorage.setItem('username' , res.data.user.username);
          setDisplay(false);
          location.href = '/setting/relationship'
        }
      }
      else {
        alert("کد وارد شده صحیح نیست")
        setDisplay(false);
      }
    })
  }


  const sendRegister=(e)=>{
    e.preventDefault();
    if(type != 0){
      setDisplay(true);
      const returndata = Send_Register(e , type);
      returndata.then((res)=>{
        if(res.result == 'ok'){
          localStorage.setItem('token' , res.data.token);
          localStorage.setItem('id' , res.data.id);
          localStorage.setItem('name' , res.data.name);
          localStorage.setItem('family' , res.data.family);
          localStorage.setItem('username' , res.data.username);
          setDisplay(false);
          location.href = '/setting/relationship'
        }
        else if(res.result == 'error'){
          alert(res.error)
          setDisplay(false);
        }
      })
    }
    else {
      alert("لطفا نوع کاربری خود را مشخص نمایید")
    }
  }


  useEffect(()=>{
    setDisplay(true)
    if(CheckUserAuth()){
      location.href = '/'
    }
    const returndata = Get_All_city();
    returndata.then((res)=>{
        if(res.result == 'ok'){
          setDisplay(false)
          setCity(res.data);
        }
      })
  },[])

  return (
    <div className="auth">
        {display && <Loader/>}
        <div className="auth-main">
          <img src='../logo.png' alt="logo" />
          {status == 0 && 
            <div className="auth-login">
              <h3>ورود / ثبت نام</h3>
              <span>شماره موبایل خود را وارد نمایید.</span>
              <form onSubmit={sendSms}>
                <input type='number' required></input>
                <button >ورود به ایران سرچ</button>
              </form>
            </div>  
          }
          {status == 1 && 
            <div className="auth-login">
              <form onSubmit={sendVerifyCode}>
                <input type='number' required placeholder="کد تایید"></input>
                <div className="auth-verify-mes">
                  <span>کد به شماره {localStorage.getItem('mobile')} ارسال شد</span>
                  <span onClick={()=>{setStatus(0)}}>تغییر شماره</span>
                </div>
                <button >تایید</button>
              </form>
            </div>  
          }
          {status == 2 && 
            <div className="auth-login">
              <div className="auth-login-complete"><span>تکمیل اطلاعات</span></div>
              <form onSubmit={sendRegister}>
                <input type='text' required placeholder="نام"></input>
                <input type='text' required placeholder="نام خانوادگی"></input>
                <input type='text' required placeholder="نام کاربری"></input>
                <input type='email' required placeholder="ایمیل"></input>
                <input type='number' required placeholder="کدملی"></input>
                <select name="city" id="city" required placeholder="انتخاب شهر">
                    <option value="">انتخاب شهر</option>
                  {city.map(item=>
                    <option value={item.id}>{item.name}</option>
                  )}
                </select>
                <div className="auth-login-role">
                  <label >
                    <input type="radio" name="radio" value='teacher' onChange={(e)=>{setType(e.target.value)}}></input>
                    <div className="auth-login-role-btn">مدرس</div>
                  </label>
                  <label >
                    <input type="radio" name="radio" value='student' onChange={(e)=>{setType(e.target.value)}}></input>
                    <div className="auth-login-role-btn">دانش آموز</div>
                  </label>
                  <label >
                    <input type="radio" name="radio" value='school' onChange={(e)=>{setType(e.target.value)}} disabled></input>
                    <div className="auth-login-role-btn">آموزشگاه</div>
                  </label>
                </div>
                <button >ذخیره اطلاعات</button>
              </form>
            </div>  
          }
        </div>
    </div>
  )
}

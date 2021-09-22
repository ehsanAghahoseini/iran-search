import React, { useState , useEffect} from "react";
import { faEdit , faCogs } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from 'react-modal';
import {Add_Activity_Houres} from './API';
import CheckUserAuth from './CheckUserAuth';
import Loader from './Loader';


function ActivityHoures(props) {
    const ISSERVER = typeof window === "undefined";
    const[openSchool , setOpenSchool]=useState('')
    const[visibleModal , setVisibleModal]=useState(false);
    const [display , setDisplay]=useState(false);
    const [fieldClock , setFieldClock] = useState([{ day: "", start_time : "" , end_time : ""}])
    const customStyles = {
        content: {
          minHeight:'300px',
        //   width:'400px',
        },
      };

    const incrementRow = async() => {
    setDisplay(true);
    let list = await fieldClock;
    await list.push({ day: "", start_time : "" , end_time : ""});
    setFieldClock(list)
    setDisplay(false);

    }


    const removefield = async(index) => {
    let list = await fieldClock;
    if (list.length > 1) {
        setDisplay(true);
        list.splice(index, 1);
        await setFieldClock(list) 
        setDisplay(false);
    }
    else {
        alert('این سطر را نمیتوان حذف کرد')
        await setDisplay(false);
    }
    setDisplay(false);
    }  



    const handleChange=(i , e)=>{
        let newFormValues = [...fieldClock];
        newFormValues[i][e.target.name] = e.target.value;
        setFieldClock(newFormValues) ;
    }

    const onFinish=(e)=>{
        e.preventDefault();   
        console.log(e.target[0].value);   
        console.log(fieldClock);
        if(CheckUserAuth())  {
            setDisplay(true);
            const returndata = Add_Activity_Houres(e.target[0].value ,fieldClock );
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
        <div className="profile-teacher-section" id="activityhoures">
            {display && <Loader/>}
            <Modal
            isOpen={visibleModal}
            onRequestClose={()=>{setVisibleModal(false)}}
            contentLabel="Example Modal"
            style={customStyles}
            >
                <form className="form-add-school" onSubmit={onFinish}>
                    <input type="text" name='name' required placeholder="نام آموزشگاه"></input>
                    {fieldClock.map((item , index)=>
                        <div  className="form-add-school-item" key={index}>
                            
                            <button type='button' onClick={()=>incrementRow()}>+</button>
                            <input type="text" name='start_time' onChange={(e) => handleChange(index, e)} placeholder="ساعت حضور" required></input>
                            <input type="text" name='end_time' onChange={(e) => handleChange(index, e)} placeholder="ساعت خروج" required></input>
                            <select name='day'  onChange={(e) => handleChange(index, e)} required>
                                <option value="">انتخاب روز</option>
                                <option value="شنبه">شنبه</option>
                                <option value="یک شنبه">یک شنبه</option>
                                <option value="دوشنبه">دوشنبه</option>
                                <option value="سه شنبه">سه شنبه</option>
                                <option value="چهارشنبه">چهارشنبه</option>
                                <option value="پنج شنبه">پنج شنبه</option>
                                <option value="جمعه">جمعه</option>

                            </select>
                            <button type='button' onClick={() => removefield(index)}>-</button>
                        </div>
                    )}
                    <button type='submit'> ذخیره </button>
                </form>       
            </Modal>
            <div className="profile-teacher-section-head">
            <span>ساعات حضور</span>
            </div>
            {props.data.map((item , index)=>
                <div className="activity-school-item">
                    <div className="activity-school-item-inner">
                        <div className="activity-school-item-inner-head">
                            <h3 onClick={()=>{setOpenSchool(index)}}>ساعات حضور در آموزشگاه {item.name}</h3>
                        </div>
                        <div className={`activity-school-item-inner-cont ${index == openSchool && 'activity-school-item-inner-cont-active'}`}>
                            {item.times.map((item2 , index2)=>
                            <div className="activity-school-item-inner-cont-item">
                                <span>{item2.day}</span>
                                <span>{item2.start_time}</span>
                                <span>الی</span>
                                <span>{item2.end_time}</span>
                            </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
            <div className="profile-teacher-section-footer">
            {CheckUserAuth() && !ISSERVER && props.techID == localStorage.getItem('id') &&     
                <button onClick={()=>{setVisibleModal(true)}}>
                    <span> افزودن ساعت حضور</span>
                    <FontAwesomeIcon icon={faEdit}/>
                </button>
            }
            </div>
        </div>
    )
}

export default ActivityHoures;
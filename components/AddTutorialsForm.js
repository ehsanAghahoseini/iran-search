import React, { useState , useEffect} from "react";
import { faUpload  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link';
import CatData from './CatData';
import CheckUserAuth from './CheckUserAuth';
import {Add_Post} from './API';
import Loader from './Loader';


function AddTutorialsForm() {
    const [display , setDisplay]=useState(false);
    const [fileType , setFileType]=useState('');
    const [movieFile , setMovieFile]=useState('');
    const [imageFile , setImageFile]=useState('');



    const onChangeFile=(e)=>{
        setFileType(e.target.value)
    }

    const onFinish=(e)=>{
        setDisplay(true)
        e.preventDefault();
        if(CheckUserAuth()){
            const returndata = Add_Post(e  , movieFile , imageFile);
            returndata.then((res)=>{
                if(res.result == 'ok'){
                    console.log(res);
                    setDisplay(false);
                    location.href = `/profile/${res.data.id}`
                }
                else {
                    setDisplay(false)
                    alert("خطایی رخ داده است دوباره امتحان نمایید")
                }
            })
        }

    }

    
    
    return (
        <div className="setting-user">
            {display && <Loader/>}
            <form onSubmit={onFinish} className="setting-user-form">
                <div className="setting-user-form-left">
                    <div className="setting-user-form-left-form-item">
                        <label>عنوان آموزش</label>
                        <input type="text" required></input>
                    </div>
                    <div className="setting-user-form-left-form-item">
                        <label> دسته بندی </label>
                        <select required>
                            {CatData.map((item , index)=>
                                <option value={item.id}>{item.name}</option>
                            )}
                        </select>
                    </div>
                    <div className="setting-user-form-left-form-item">
                        <label>توضیحات</label>
                        <textarea type="number"></textarea>
                    </div>
                </div>
                <div className="setting-user-form-right">
                    <div className="setting-user-form-left-form-item">
                        <label>افزودن فایل</label>
                        <select onChange={(e)=>onChangeFile(e)}>
                            <option value="">انتخاب فایل</option>
                            <option value="image"> افزودن عکس</option>
                            <option value="movie">افزودن فیلم</option>
                        </select>         
                    </div>
                    {fileType == 'image' && 
                        <div className="setting-user-form-left-form-item">
                            <label className="setting-user-form-custom-field">
                                <div>
                                    {imageFile != '' ?
                                    <>
                                    <span>{imageFile.name}</span>
                                    </>
                                    :
                                    <span>
                                        <span>انتخاب عکس</span>
                                        <FontAwesomeIcon icon={faUpload} />
                                    </span>
                                    }
                                    </div>
                                <input onChange={(e)=>{setImageFile(e.target.files[0])}} type='file' accept="image/*"></input>
                            </label>
                        </div>
                    }
                    {fileType == 'movie' && 
                        <div className="setting-user-form-left-form-item">
                            <label className="setting-user-form-custom-field">
                                <div>
                                    {movieFile != '' ?
                                    <>
                                    <span>{movieFile.name}</span>
                                    </>
                                    :
                                    <span>
                                        <span>انتخاب فیلم</span>
                                        <FontAwesomeIcon icon={faUpload} />
                                    </span>
                                    }
                                </div>
                                <input onChange={(e)=>{setMovieFile(e.target.files[0])}}  type='file' accept="video/*"></input>
                            </label>
                        </div>
                    }
                    <div className="setting-user-form-left-form-item">
                        <button className="setting-user-form-left-form-item-btn">افزودن آموزش</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddTutorialsForm;
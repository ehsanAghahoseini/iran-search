import React, { useState , useEffect} from "react";
import { faCaretLeft, faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link';
import CheckUserAuth from './CheckUserAuth';
import Loader from './Loader';
import {Get_Gallery_image , Add_Gallery_image , Remove_Gallery_image} from './API';
import BASE_URL_MEDIA from "./BASE_URL_MEDIA";

function GalleryProfile() {
    const [display , setDisplay]=useState(false);
    const [listImage , setListImage]=useState([]);
    const [imageFile , setImageFile]=useState('');


    const removeImage=(id)=>{
        setDisplay(true)
        const returndata = Remove_Gallery_image(id);
        returndata.then((res)=>{
            if(res.result == 'ok'){
                setDisplay(false);
                getStart();
            }
            else {
                setDisplay(false);
                alert("خطایی رخ داده است دوباره امتحان کنید")
            }
        })
    }




    const addImage=()=>{
        setDisplay(true)
        const returndata = Add_Gallery_image(imageFile);
        returndata.then((res)=>{
            if(res.result == 'ok'){
                setDisplay(false);
                setImageFile('')
                getStart();
            }
            else {
                setDisplay(false);
                alert("خطایی رخ داده است دوباره امتحان کنید")
            }
        })
    }


    const getStart=()=>{
        if(CheckUserAuth()){
            setDisplay(true)
            const returndata = Get_Gallery_image();
            returndata.then((res)=>{
            if(res.result == 'ok'){
                setDisplay(false)
                setListImage(res.data)
                console.log(res);
            }
            else {
                setDisplay(false)
                alert('لطفا دوباره تلاش نمایید')
            }
            })
            }
            else {
                location.href="/"
            }
    }

    
    useEffect(async()=>{
        getStart()
      },[])

    
    return (
        <div className="galleryPro">
            {display && <Loader/>}
            <div className="galleryPro-upload">
                <label>
                    <input onChange={(e)=>{setImageFile(e.target.files[0])}} type='file' accept="image/*"></input>
                    <div className="galleryPro-upload-select">
                        <div className="galleryPro-upload-select-inner">
                            <FontAwesomeIcon icon={faUpload} />
                            {!imageFile.name ?
                            <span>انتخاب عکس</span>
                            :
                            <span>{imageFile.name}</span> 
                            }
                        </div>
                    </div>
                </label>
                {imageFile.name &&
                    <div className="galleryPro-upload-btn">
                        <button onClick={()=>addImage()}>آپلود</button>
                        <button onClick={()=>{setImageFile('')}}>حذف</button>
                    </div>
                }
            </div>
            <div className="galleryPro-listImg">
                {listImage.map(item=>
                    <div className="galleryPro-listImg-item">
                        <div className="galleryPro-listImg-item-inner">
                            <div onClick={()=>removeImage(item.id)} className="galleryPro-listImg-item-inner-delete">x</div>
                            <img src={`${BASE_URL_MEDIA}/profile/images/${item.image_url}`} alt="profile" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default GalleryProfile;
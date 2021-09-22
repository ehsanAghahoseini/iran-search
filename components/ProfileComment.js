import React, { useState , useEffect} from "react";
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons'
import { faTelegram, faWhatsapp , faFacebook , faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from "jalali-moment";
import CheckUserAuth from '../components/CheckUserAuth';
import Link from 'next/link';
import {Add_Comment} from './API';
import Modal from 'react-modal';
import Loader from './Loader';
import BASE_URL_MEDIA from './BASE_URL_MEDIA';

function ProfileComment(props) {
    const [rate , setRate]=useState(0);
    const [replyID , setReplyID]=useState(0);
    const[visibleModal , setVisibleModal]=useState(false);
    const [display , setDisplay]=useState(false);
    const customStyles = {
        content: {
          height:'150px',
          width:'400px'
        },
      };

    const setNewRate=(id)=>{
        setRate(id)
    }

    const displayModalReply=(repId)=>{
        setReplyID(repId);
        setVisibleModal(true);
    }

    const addComment=(e)=>{
        e.preventDefault();
        if(CheckUserAuth()){
            setDisplay(true);
            const returndata = Add_Comment(e  , props.postId , rate , replyID);
            returndata.then((res)=>{
            if(res.result == 'ok' && res.data != 'comment already submit'){
                location.reload()
            }
            else if(res.result == 'ok' && res.data == 'comment already submit'){
                setDisplay(false);
                alert('برای هر پست فقط یکبار میتوانید کامنت بگذارید')

            }
        })
        }
        else {
            alert('ابتدا وارد حساب کاربری خود شوید.')
        }
    }

    
    return (
        <div className="profile-comment">
            {display && <Loader/>}
            <Modal
            isOpen={visibleModal}
            onRequestClose={()=>{setVisibleModal(false)}}
            contentLabel="Example Modal"
            style={customStyles}
            >
                <form className="profile-comment-form-modal-reply" onSubmit={addComment}>
                    <input type="text" placeholder="پاسخ شما"/>
                    <input type="submit" value="ارسال"/>
                </form>          
            </Modal>
            {props.data.map(item=>
            <>
                <div className="profile-comment-item">
                    <div className="profile-comment-item-cont">
                        {item.user.image_url != null  ? 
                            <img src={`${BASE_URL_MEDIA}/profile/images/${item.user.image_url}`} alt="profile" />
                        :
                            <img src='../profile.png' alt="profile" />
                        }
                        <div className="profile-comment-item-cont-des">
                            <span>
                                <span style={{marginLeft:"10px" , marginRight:"10px"}}>{item.user.username}</span>
                                <span>{item.message}</span>
                            </span>
                            <span className="profile-comment-item-cont-des-time">
                                <>{moment(item.created_at).locale('fa').format("YYYY/M/D - hh:mm")}</>
                                {props.user.id == localStorage.getItem('id') && item.reply_id == null  && <span onClick={()=>displayModalReply(item.id)}>پاسخ دادن</span>}
                            </span>
                        </div>
                    </div>
                </div>
                {item.reply.length > 0  && 
                    <div className="profile-comment-item-reply">
                        <div className="profile-comment-item-reply-inner">
                            <span>پاسخ آموزگار :</span>
                            <span>{item.reply[0].message}</span>
                        </div>
                    </div>
                }
            </>    
            )}
            <div className="profile-comment-item-send">
                {CheckUserAuth() ? 
                <form onSubmit={addComment}>
                    <input type="text" placeholder="دیدگاه شما"/>
                    <input type="submit" value="ارسال"/>
                    <div className="profile-comment-item-send-rate-star">
                        <div title={1}><FontAwesomeIcon onClick={()=>setNewRate(1)} icon={faStar} className={`${rate >0 && 'profile-comment-item-send-rate-star-active'}`} /></div>
                        <div title={2}><FontAwesomeIcon onClick={()=>setNewRate(2)} icon={faStar} className={`${rate >1 && 'profile-comment-item-send-rate-star-active'}`} /></div>
                        <div title={3}><FontAwesomeIcon onClick={()=>setNewRate(3)} icon={faStar} className={`${rate >2 && 'profile-comment-item-send-rate-star-active'}`} /></div>
                        <div title={4}><FontAwesomeIcon onClick={()=>setNewRate(4)} icon={faStar} className={`${rate >3 && 'profile-comment-item-send-rate-star-active'}`} /></div>
                        <div title={5}><FontAwesomeIcon onClick={()=>setNewRate(5)} icon={faStar} className={`${rate >4 && 'profile-comment-item-send-rate-star-active'}`} /></div>
                    </div>
                </form>
                :
                <Link href={'/auth'}><button className="profile-comment-item-send-btn-login"> برای ارسال دیدگاه وارد شوید</button></Link>
                }
            </div>
        </div>
        
    )
}

export default ProfileComment;
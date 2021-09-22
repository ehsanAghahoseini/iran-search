import React, { useState , useEffect} from "react";
import { faUser , faSearch , faArrowRight , faListAlt , faBell , faHome , faWindowClose , faCogs , faTicketAlt , faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link';
import CheckUserAuth from './CheckUserAuth';

function Header() {
    const[submenu , setSubmenu] = useState(0);
    const[notifSwiper , setNotifSwiper] = useState(0);
    const[userSwiper , setUserSwiper] = useState(0);


    const displaySubmenu=(id)=>{
        if(submenu == id){
            setSubmenu(0)
        }
        else {
            setSubmenu(id)
        }
    }

    const displayNotifSwiper=()=>{
        setUserSwiper(0)
        if(notifSwiper){
            setNotifSwiper(0)
        }
        else {
            setNotifSwiper(1)
        }
    }

    const displayUserSwiper=()=>{
        setNotifSwiper(0)
        if(userSwiper){
            setUserSwiper(0)
        }
        else {
            setUserSwiper(1)
        }
    }

    const ExitUser=()=>{
        localStorage.clear();
        location.href = '/';
    }

 
    
    return (
        <header>
            <div className="header-inner">
                <div className="header-right">
                    <Link href="/"><img src='/logo.png' alt="logo"></img></Link>
                    <form>
                        <input placeholder="جستجو" type="text"></input>
                        <button><FontAwesomeIcon icon={faSearch} /></button>
                    </form>
                </div>
                <div className="header-left">
                    <Link href="/category">
                        <div className="header-left-icon">
                            <FontAwesomeIcon icon={faListAlt} /> 
                            <span> دسته بندی ها</span> 
                        </div>
                    </Link>
                    {!CheckUserAuth() && 
                    <Link href="/auth">
                        <div className="header-left-icon">
                            <FontAwesomeIcon icon={faUser} /> 
                            <span>ورود / ثبت نام</span> 
                        </div>
                    </Link>
                    }
                    {CheckUserAuth() && 
                    <div className="header-left-icon"  onClick={()=>displaySubmenu(2)}>
                        <FontAwesomeIcon icon={faBell} /> 
                        <span>اعلان ها</span> 
                        <div style={{width:"300px"}} className={`header-left-icon-sub ${submenu == 2 &&'header-left-icon-sub-active'}`}>
                            <div className="header-left-icon-sub-notif">
                                <div className="header-left-icon-sub-notif-item">
                                    <div className="header-left-icon-sub-notif-item-one">
                                        <img src='/profile.png' alt="profile"/>
                                    </div>
                                    <div className="header-left-icon-sub-notif-item-two">
                                        <span className="header-left-icon-sub-notif-item-two-text">Ali به نظر شما پاسخ داد :</span>
                                        <span className="header-left-icon-sub-notif-item-two-cont">نظر بسیار جالب داشتین و قابل بررسی میباشد</span>
                                    </div>
                                </div>
                                <div className="header-left-icon-sub-notif-item">
                                    <div className="header-left-icon-sub-notif-item-one">
                                        <img src='/profile.png' alt="profile"/>
                                    </div>
                                    <div className="header-left-icon-sub-notif-item-two">
                                        <span className="header-left-icon-sub-notif-item-two-text">Ali به نظر شما پاسخ داد :</span>
                                        <span className="header-left-icon-sub-notif-item-two-cont">نظر بسیار جالب داشتین و قابل بررسی میباشد</span>
                                    </div>
                                </div>
                                <div className="header-left-icon-sub-notif-item">
                                    <div className="header-left-icon-sub-notif-item-one">
                                        <img src='/profile.png' alt="profile"/>
                                    </div>
                                    <div className="header-left-icon-sub-notif-item-two">
                                        <span className="header-left-icon-sub-notif-item-two-text">Ali به نظر شما پاسخ داد :</span>
                                        <span className="header-left-icon-sub-notif-item-two-cont">نظر بسیار جالب داشتین و قابل بررسی میباشد</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    }
                    {CheckUserAuth() && 
                    <div className="header-left-icon"  onClick={()=>displaySubmenu(3)}>
                        <FontAwesomeIcon icon={faUser} /> 
                        <span>حساب کاربری</span> 
                        <div className={`header-left-icon-sub ${submenu == 3 &&'header-left-icon-sub-active'}`}>
                            <div className="header-left-icon-sub-user">
                                <Link href='/setting/user'>
                                    <div className="header-left-icon-sub-user-item">
                                        <FontAwesomeIcon icon={faUser} />
                                        <span>حساب کاربری</span>
                                    </div>
                                </Link>
                                <Link href='/setting/relationship'>
                                    <div className="header-left-icon-sub-user-item">
                                        <FontAwesomeIcon icon={faCogs} />
                                        <span>تنظیمات</span>
                                    </div>
                                </Link>
                                <Link href='/setting/relationship'>
                                    <div className="header-left-icon-sub-user-item">
                                        <FontAwesomeIcon icon={faTicketAlt} />
                                        <span>راه ارتباطی</span>
                                    </div>
                                </Link>
                                <div onClick={ExitUser} className="header-left-icon-sub-user-item">
                                    <FontAwesomeIcon icon={faPowerOff} />
                                    <span>خروج</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    }        
                </div>
                <div className="mobile-menu">
                    {/* {!CheckUserAuth() &&
                    <Link href="/auth">
                        <div className="mobile-menu-item">                      
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                    </Link>
                    } */}
                    {CheckUserAuth() ?
                    <div className="mobile-menu-item">
                        <FontAwesomeIcon icon={faUser} onClick={displayUserSwiper}/>
                    </div>
                    :
                    <Link href="/auth">
                        <div className="mobile-menu-item">                      
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                    </Link>
                    }
                    {CheckUserAuth() &&
                    <div className="mobile-menu-item" onClick={displayNotifSwiper}>
                        <FontAwesomeIcon icon={faBell} />
                    </div>
                    }
                    <Link href="/category">
                        <div className="mobile-menu-item">                      
                            <FontAwesomeIcon icon={faListAlt} />
                        </div>
                    </Link>    
                    <Link href="/">
                        <div className="mobile-menu-item" >
                            <FontAwesomeIcon icon={faHome} />
                        </div>
                    </Link>
                </div>

                <div className={`swiper-notif ${notifSwiper == 1 && 'swiper-notif-active'}`}>
                    <div className="swiper-notif-head">
                        <FontAwesomeIcon icon={faArrowRight} onClick={displayNotifSwiper} />
                        <span>اعلان ها</span>
                    </div>
                    <div className="swiper-notif-item">
                        <div className="swiper-notif-item-img">
                            <img src="/profile.png" alt="profile"></img>
                        </div>
                        <div className="swiper-notif-item-cont">
                            <span>Ali درباره شما نظر داد :</span>
                            <span>بسیار عالی میباشد ولی بنده نیاز دارم تا وقت بیشتری در این مورد صرف نمایم</span>
                        </div>
                    </div>
                    <div className="swiper-notif-item">
                        <div className="swiper-notif-item-img">
                            <img src="/profile.png" alt="profile"></img>
                        </div>
                        <div className="swiper-notif-item-cont">
                            <span>Ali درباره شما نظر داد :</span>
                            <span>باتوجه به سابقه خوبی که از ایشان سراغ دارم احتمال میدهم که دوره آموزش زبان مقدماتی ایشان بسیار عالی بوده و تمام نیاز های یک فرد را در این موضوع برطرف نماید.باتشکر</span>
                        </div>
                    </div>
                    <div className="swiper-notif-item">
                        <div className="swiper-notif-item-img">
                            <img src="/profile.png" alt="profile"></img>
                        </div>
                        <div className="swiper-notif-item-cont">
                            <span>Ali درباره شما نظر داد :</span>
                            <span>بسیار عالی میباشد ولی بنده نیاز دارم تا وقت بیشتری در این مورد صرف نمایم</span>
                        </div>
                    </div>
                </div>

                <div className={`swiper-user ${userSwiper == 1 && 'swiper-user-active'}`}>
                    <div onClick={ExitUser} className="swiper-user-active-item">
                        <FontAwesomeIcon icon={faPowerOff}/>
                        <span>خروج</span>
                    </div>    
                    <Link href='/setting/relationship'>     
                        <div className="swiper-user-active-item">
                            <FontAwesomeIcon icon={faCogs}/>
                            <span>تنظیمات</span>
                        </div>
                    </Link>
                    <Link href='/setting/relationship'>
                        <div className="swiper-user-active-item">
                            <FontAwesomeIcon icon={faTicketAlt}/>
                            <span>راه ارتباطی</span>
                        </div>
                    </Link>
                    <Link href='/setting/user'>
                        <div className="swiper-user-active-item">
                            <FontAwesomeIcon icon={faUser}/>
                            <span>حساب کاربری</span>
                        </div>
                    </Link>
                </div>

            </div>
        </header>
    )
}

export default Header;
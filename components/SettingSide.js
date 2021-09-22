
import { faUser , faCogs , faTicketAlt , faPowerOff , faUpload , faPlus} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import Link from 'next/link';

function SettingSide(props) {


    const logOut=()=>{
        localStorage.clear();
        location.href = '/';
    }
    
    return (
        <div className="setting-right-inner">
            <h4>تنظیمات</h4>
            <Link href="/profile/gallery">
                <div className={`setting-right-inner-item ${props.active == 5 && 'setting-right-inner-item-active'} `}>
                    <FontAwesomeIcon icon={faUpload} />
                    <span>تصاویر پروفایل</span>
                </div>
            </Link>
            <Link href="/setting/user">
                <div className={`setting-right-inner-item ${props.active == 1 && 'setting-right-inner-item-active'} `}>
                    <FontAwesomeIcon icon={faUser} />
                    <span>حساب کاربری</span>
                </div>
            </Link>
            <Link href="/addtutorials">
                <div className={`setting-right-inner-item ${props.active == 4 && 'setting-right-inner-item-active'} `}>
                    <FontAwesomeIcon icon={faPlus} />
                    <span>افزودن آموزش</span>
                </div>
            </Link>
            <Link href="/setting/relationship">
                <div className={`setting-right-inner-item ${props.active == 2 && 'setting-right-inner-item-active'} `}>
                    <FontAwesomeIcon icon={faCogs} />
                    <span>راه های ارتباطی</span>
                </div>
            </Link>
            <Link href="/setting/subscription">
                <div className={`setting-right-inner-item ${props.active == 3 && 'setting-right-inner-item-active'} `}>
                    <FontAwesomeIcon icon={faTicketAlt} />
                    <span>اشتراک</span>
                </div>
            </Link>
            <div onClick={logOut} className="setting-right-inner-item">
                <FontAwesomeIcon icon={faPowerOff} />
                <span>خروج</span>
            </div>
        </div>
    )
}

export default SettingSide;
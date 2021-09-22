import React, { useState , useEffect} from "react";
import { faTelegram, faWhatsapp , faFacebook , faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link';


function Footer() {



    
    return (
        <footer>
            <div className="footer-one">
                <Link href="/"><img src='/logo2.png' alt="logo"></img></Link>
            </div>
            <div className="footer-two">
                <div className="footer-two-left">
                    <span>دانلود اپلیکیشن موبایل ایران سرچ</span>
                </div>
                <div className="footer-two-right">
                    <img src="/app1.png" alt="app"/>
                    <img src="/app2.png" alt="app"/>
                    <img src="/app3.png" alt="app"/>
                </div>
            </div>
            <div className="footer-three">
                <div className="footer-three-item">
                    <h6>همراه با ایران سرچ</h6>
                    <span>درباره ایران سرچ</span>
                    <span>تماس با ایران سرچ</span>
                </div>
                <div className="footer-three-item">
                    <h6>  خدمات مشتریان </h6>
                    <span>پاسخ به پرسش های متداول</span>
                    <span>شرایط استفاده</span>
                    <span>حریم خصوصی</span>
                    <span>قوانین استفاده</span>

                </div>
                <div className="footer-three-item">
                    <h6> راهنمای خرید اشتراک </h6>
                    <span>امکانات خرید اشتراک</span>
                    <span>نحوه تمدید اشتراک</span>
                    <span>شیوه های پرداخت</span>
                    <span>نحوه خرید اشتراک برای مدرسین</span>

                </div>
                <div className="footer-three-item">
                    <h6> ما را در شبکه های اجتماعی دنبال کنید </h6>
                    <div className="footer-three-item-social">
                        <div className="footer-three-item-social-item"><FontAwesomeIcon icon={faTelegram} /></div>
                        <div className="footer-three-item-social-item"><FontAwesomeIcon icon={faInstagram} /></div>
                        <div className="footer-three-item-social-item"><FontAwesomeIcon icon={faWhatsapp} /></div>
                        <div className="footer-three-item-social-item"><FontAwesomeIcon icon={faFacebook} /></div>

                    </div>
                </div>
            </div>
            <div className="footer-four">
                <div className="footer-four-one">
                    <h6>ایران سرچ تحولی نوین در آموزش</h6>
                    <p>
                    ایران سرچ با اینجاد پلتفرمی نوین و خلاقانه در صدد آن است تا امر تدریس و آموزش را برای مدرسین ، آموزشگاه ها و همچنین هنرجویان و دانش آموزان به امری سهل و آسان تبدیل نماید تاهمگی بتوانند به توسعه ی دانش در کشور مقدس جمهوری اسلامی ایران نائل گردند و موجب سربلندی ایران و ایرانیان گردند.
                    </p>
                </div>
                <div className="footer-four-two">
                    <img src="/e1.png" alt="enamad"/>
                    <img src="/e2.png" alt="enamad"/>
                    <img src="/e3.png" alt="enamad"/>
                </div>
            </div>
            <div className="footer-five">
                <span>تمامی مطالب وبسایت ایران سرچ متعلق به این برند می باشد و هر گونه کپی برداری پیگرد قانونی دارد</span>
            </div>
        </footer>
    )
}

export default Footer;
import React, { useState , useEffect} from "react";
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CheckUserAuth from '../components/CheckUserAuth'


function SettingChart() {

    useEffect(async()=>{
        if(!CheckUserAuth()){
            location.href="/"      
        }
      },[])

    
    return (
        <div className="setting-user">
            <div className="setting-chart">
                <h3>وضعیت اشتراک</h3>
                <div className="setting-chart-radius">
                    <span>20</span>
                    <span>روز باقی مانده</span>
                </div>
                <div className="setting-chart-pelan">
                    <h3>تمدید اشتراک</h3>
                    <div className="setting-chart-pelan-item">
                        <button>خرید</button>
                        <div className="setting-chart-pelan-item-left">
                            <span>اشتراک یک ماهه</span>
                            <span>5000 تومان</span>
                        </div>
                    </div>
                    <div className="setting-chart-pelan-item">
                        <button>خرید</button>
                        <div className="setting-chart-pelan-item-left">
                            <span>اشتراک سه ماهه</span>
                            <span>15000 تومان</span>
                        </div>
                    </div>
                    <div className="setting-chart-pelan-item">
                        <button>خرید</button>
                        <div className="setting-chart-pelan-item-left">
                            <span>اشتراک شش ماهه</span>
                            <span>50000 تومان</span>
                        </div>
                    </div>
                    <div className="setting-chart-pelan-item">
                        <button>خرید</button>
                        <div className="setting-chart-pelan-item-left">
                            <span>اشتراک یک ساله</span>
                            <span>100000 تومان</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SettingChart;
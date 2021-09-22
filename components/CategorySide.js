import React, { useState , useEffect} from "react";
import { faList , faChevronLeft , faChevronDown , faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CatData from './CatData';
import { Get_All_city} from './API';


function CategorySide(props) {
    const[openCatMain , setOpenCatMain] = useState(true) ;
    const[iraniMusic , setIraniMusic] = useState(false) ;
    const[OutMusic , setOutMusic] = useState(false) ;
    const[language , setLanguage] = useState(false) ;
    const[city , setCity]=useState([]);

    

    const openBlock=(id)=>{
        if(id == 1){if(openCatMain){setOpenCatMain(false)}else {setOpenCatMain(true);}}
        else if(id == 2){if(iraniMusic){setIraniMusic(false)}else {setIraniMusic(true);}}
        else if(id == 3){if(OutMusic){setOutMusic(false)}else {setOutMusic(true);}}
        else if(id == 4){if(language){setLanguage(false)}else {setLanguage(true);}}
    }



    useEffect(()=>{
        const returndata = Get_All_city();
        returndata.then((res)=>{
        if(res.result == 'ok'){
            setCity(res.data);
        }
        })
    },[])


    
    return (
        <div className="category-side">
            <div className="category-side-type">
                <div onClick={()=>props.changeInlineItem(1)}>
                    <FontAwesomeIcon icon={faList} />
                    <span className="category-side-type-text">خطی</span>
                </div>
                <div onClick={()=>props.changeInlineItem(0)}>
                    <FontAwesomeIcon icon={faList} />
                    <span className="category-side-type-text">پنجره ای</span>
                </div>
            </div>

            {/* <div className="category-side-block">
                <div className="category-side-block-head">
                    <span>آموزش ها</span>
                    {openCatMain ? 
                        <FontAwesomeIcon onClick={()=>openBlock(1)} icon={faChevronDown}/>
                    :
                        <FontAwesomeIcon onClick={()=>openBlock(1)} icon={faChevronLeft}/>
                    }    
                </div>
                <div className={`category-side-block-cont ${openCatMain && 'category-side-block-cont-active'} `}>
                    <label className="category-side-block-cont-item">
                        <input type="radio" name="radio"></input>
                        <span className="category-side-block-cont-item-checkmark" style={{borderRadius : "50%"}}>
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <span className="category-side-block-cont-item-text">مدرس</span>
                    </label>
                    <label className="category-side-block-cont-item">
                        <input type="radio" name="radio"></input>
                        <span className="category-side-block-cont-item-checkmark" style={{borderRadius : "50%"}}>
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <span className="category-side-block-cont-item-text">آموزشگاه</span>
                    </label>
                    <label className="category-side-block-cont-item">
                        <input type="radio" name="radio"></input>
                        <span className="category-side-block-cont-item-checkmark" style={{borderRadius : "50%"}}>
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <span className="category-side-block-cont-item-text">فروشگاه</span>
                    </label>
                </div>
            </div> */}

            <div className="category-side-block">
                <div className="category-side-block-head">
                    <span>سازهای ایرانی</span>
                    {openCatMain ? 
                        <FontAwesomeIcon onClick={()=>openBlock(2)} icon={faChevronDown}/>
                    :
                        <FontAwesomeIcon onClick={()=>openBlock(2)} icon={faChevronLeft}/>
                    }    
                </div>
                <div className={`category-side-block-cont ${iraniMusic && 'category-side-block-cont-active'} `}>
                    <h5>زهی و مضرابی</h5>
                    {CatData.map((item , index)=>
                    <>
                        {item.id > 54 && item.id < 70 && 
                            <label className="category-side-block-cont-item">
                                <input onChange={()=>props.listCat(item.id)} type="checkbox" ></input>
                                <span className="category-side-block-cont-item-checkmark">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                <span className="category-side-block-cont-item-text">{item.name}</span>
                            </label>
                        }
                    </>    
                    )}
                </div>

                <div className={`category-side-block-cont ${iraniMusic && 'category-side-block-cont-active'} `}>
                    <h5>بادی</h5>
                    {CatData.map((item , index)=>
                    <>
                        {item.id > 69 && item.id < 79 && 
                            <label className="category-side-block-cont-item">
                                <input onChange={()=>props.listCat(item.id)} type="checkbox" ></input>
                                <span className="category-side-block-cont-item-checkmark">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                <span className="category-side-block-cont-item-text">{item.name}</span>
                            </label>
                        }
                    </>    
                    )}
                </div>

                <div className={`category-side-block-cont ${iraniMusic && 'category-side-block-cont-active'} `}>
                    <h5>کوبه ای</h5>
                    {CatData.map((item , index)=>
                    <>
                        {item.id > 78 && item.id < 87 && 
                            <label className="category-side-block-cont-item">
                                <input onChange={()=>props.listCat(item.id)} type="checkbox" ></input>
                                <span className="category-side-block-cont-item-checkmark">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                <span className="category-side-block-cont-item-text">{item.name}</span>
                            </label>
                        }
                    </>    
                    )}
                </div>

                <div className={`category-side-block-cont ${iraniMusic && 'category-side-block-cont-active'} `}>
                    <h5>آواز</h5>
                    {CatData.map((item , index)=>
                    <>
                        {item.id > 86 && item.id < 89 && 
                            <label className="category-side-block-cont-item">
                                <input onChange={()=>props.listCat(item.id)} type="checkbox" ></input>
                                <span className="category-side-block-cont-item-checkmark">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                <span className="category-side-block-cont-item-text">{item.name}</span>
                            </label>
                        }
                    </>    
                    )}
                </div>

                <div className={`category-side-block-cont ${iraniMusic && 'category-side-block-cont-active'} `}>
                    <h5>ساخت ساز های ایرانی</h5>
                    {CatData.map((item , index)=>
                    <>
                        {item.id > 88 && item.id < 92 && 
                            <label className="category-side-block-cont-item">
                                <input onChange={()=>props.listCat(item.id)} type="checkbox" ></input>
                                <span className="category-side-block-cont-item-checkmark">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                <span className="category-side-block-cont-item-text">{item.name}</span>
                            </label>
                        }
                    </>    
                    )}
                </div>

            </div>

            <div className="category-side-block">
                <div className="category-side-block-head">
                    <span>موسیقی خارجی</span>
                    {openCatMain ? 
                        <FontAwesomeIcon onClick={()=>openBlock(3)} icon={faChevronDown}/>
                    :
                        <FontAwesomeIcon onClick={()=>openBlock(3)} icon={faChevronLeft}/>
                    }    
                </div>

                <div className={`category-side-block-cont ${OutMusic && 'category-side-block-cont-active'} `}>
                    <h5>زهی</h5>
                    {CatData.map((item , index)=>
                    <>
                        {item.id > 92 && item.id < 97 && 
                            <label className="category-side-block-cont-item">
                                <input onChange={()=>props.listCat(item.id)} type="checkbox" ></input>
                                <span className="category-side-block-cont-item-checkmark">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                <span className="category-side-block-cont-item-text">{item.name}</span>
                            </label>
                        }
                    </>    
                    )}
                </div>

                <div className={`category-side-block-cont ${OutMusic && 'category-side-block-cont-active'} `}>
                    <h5>کلاویه ای</h5>
                    {CatData.map((item , index)=>
                    <>
                        {item.id > 96 && item.id < 103 && 
                            <label className="category-side-block-cont-item">
                                <input onChange={()=>props.listCat(item.id)} type="checkbox" ></input>
                                <span className="category-side-block-cont-item-checkmark">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                <span className="category-side-block-cont-item-text">{item.name}</span>
                            </label>
                        }
                    </>    
                    )}
                </div>

                <div className={`category-side-block-cont ${OutMusic && 'category-side-block-cont-active'} `}>
                    <h5>بادی چوبی</h5>
                    {CatData.map((item , index)=>
                    <>
                        {item.id > 102 && item.id < 109 && 
                            <label className="category-side-block-cont-item">
                                <input onChange={()=>props.listCat(item.id)} type="checkbox" ></input>
                                <span className="category-side-block-cont-item-checkmark">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                <span className="category-side-block-cont-item-text">{item.name}</span>
                            </label>
                        }
                    </>    
                    )}
                </div>

                <div className={`category-side-block-cont ${OutMusic && 'category-side-block-cont-active'} `}>
                    <h5>بادی برنجی</h5>
                    {CatData.map((item , index)=>
                    <>
                        {item.id > 108 && item.id < 113 && 
                            <label className="category-side-block-cont-item">
                                <input onChange={()=>props.listCat(item.id)} type="checkbox" ></input>
                                <span className="category-side-block-cont-item-checkmark">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                <span className="category-side-block-cont-item-text">{item.name}</span>
                            </label>
                        }
                    </>    
                    )}
                </div>

                <div className={`category-side-block-cont ${OutMusic && 'category-side-block-cont-active'} `}>
                    <h5>کوبه ای</h5>
                    {CatData.map((item , index)=>
                    <>
                        {item.id > 112 && item.id < 117 && 
                            <label className="category-side-block-cont-item">
                                <input onChange={()=>props.listCat(item.id)} type="checkbox" ></input>
                                <span className="category-side-block-cont-item-checkmark">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                <span className="category-side-block-cont-item-text">{item.name}</span>
                            </label>
                        }
                    </>    
                    )}
                </div>

                <div className={`category-side-block-cont ${OutMusic && 'category-side-block-cont-active'} `}>
                    <h5>گوناگون</h5>
                    {CatData.map((item , index)=>
                    <>
                        {item.id > 117 && item.id < 127 && 
                            <label className="category-side-block-cont-item">
                                <input onChange={()=>props.listCat(item.id)} type="checkbox" ></input>
                                <span className="category-side-block-cont-item-checkmark">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                <span className="category-side-block-cont-item-text">{item.name}</span>
                            </label>
                        }
                    </>    
                    )}
                </div>

                <div className={`category-side-block-cont ${OutMusic && 'category-side-block-cont-active'} `}>
                    <h5>کودک</h5>
                    {CatData.map((item , index)=>
                    <>
                        {item.id > 126 && item.id < 132 && 
                            <label className="category-side-block-cont-item">
                                <input onChange={()=>props.listCat(item.id)} type="checkbox" ></input>
                                <span className="category-side-block-cont-item-checkmark">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                <span className="category-side-block-cont-item-text">{item.name}</span>
                            </label>
                        }
                    </>    
                    )}
                </div>

                <div className={`category-side-block-cont ${OutMusic && 'category-side-block-cont-active'} `}>
                    <h5>گیتار</h5>
                    {CatData.map((item , index)=>
                    <>
                        {item.id > 131 && item.id < 141 && 
                            <label className="category-side-block-cont-item">
                                <input onChange={()=>props.listCat(item.id)} type="checkbox" ></input>
                                <span className="category-side-block-cont-item-checkmark">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                <span className="category-side-block-cont-item-text">{item.name}</span>
                            </label>
                        }
                    </>    
                    )}
                </div>

                <div className={`category-side-block-cont ${OutMusic && 'category-side-block-cont-active'} `}>
                    <h5>علوم نظری</h5>
                    {CatData.map((item , index)=>
                    <>
                        {item.id > 140 && item.id < 147 && 
                            <label className="category-side-block-cont-item">
                                <input onChange={()=>props.listCat(item.id)} type="checkbox" ></input>
                                <span className="category-side-block-cont-item-checkmark">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                <span className="category-side-block-cont-item-text">{item.name}</span>
                            </label>
                        }
                    </>    
                    )}
                </div>

                <div className={`category-side-block-cont ${OutMusic && 'category-side-block-cont-active'} `}>
                    <h5>آواز کلاسیک</h5>
                    {CatData.map((item , index)=>
                    <>
                        {item.id > 146 && item.id < 151 && 
                            <label className="category-side-block-cont-item">
                                <input onChange={()=>props.listCat(item.id)} type="checkbox" ></input>
                                <span className="category-side-block-cont-item-checkmark">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                <span className="category-side-block-cont-item-text">{item.name}</span>
                            </label>
                        }
                    </>    
                    )}
                </div>

            </div>


            <div className="category-side-block">
                <div className="category-side-block-head">
                    <span>زبان</span>
                    {openCatMain ? 
                        <FontAwesomeIcon onClick={()=>openBlock(4)} icon={faChevronDown}/>
                    :
                        <FontAwesomeIcon onClick={()=>openBlock(4)} icon={faChevronLeft}/>
                    }    
                </div>
                <div className={`category-side-block-cont ${language && 'category-side-block-cont-active'} `}>
                    <h5> زبان </h5>
                    {CatData.map((item , index)=>
                    <>
                        {item.id > 0 && item.id < 7 && 
                            <label className="category-side-block-cont-item">
                                <input onChange={()=>props.listCat(item.id)} type="checkbox" ></input>
                                <span className="category-side-block-cont-item-checkmark">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                <span className="category-side-block-cont-item-text">{item.name}</span>
                            </label>
                        }
                    </>    
                    )}
                </div>

                <div className={`category-side-block-cont ${language && 'category-side-block-cont-active'} `}>
                    <h5> زبان </h5>
                    {CatData.map((item , index)=>
                    <>
                        {item.id > 0 && item.id < 7 && 
                            <label className="category-side-block-cont-item">
                                <input onChange={()=>props.listCat(item.id)} type="checkbox" ></input>
                                <span className="category-side-block-cont-item-checkmark">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                <span className="category-side-block-cont-item-text">{item.name}</span>
                            </label>
                        }
                    </>    
                    )}
                </div>

                <div className={`category-side-block-cont ${language && 'category-side-block-cont-active'} `}>
                    <h5> انگلیسی </h5>
                    {CatData.map((item , index)=>
                    <>
                        {item.id >6 && item.id < 20 && 
                            <label className="category-side-block-cont-item">
                                <input onChange={()=>props.listCat(item.id)} type="checkbox" ></input>
                                <span className="category-side-block-cont-item-checkmark">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                <span className="category-side-block-cont-item-text">{item.name}</span>
                            </label>
                        }
                    </>    
                    )}
                </div>

                <div className={`category-side-block-cont ${language && 'category-side-block-cont-active'} `}>
                    <h5> سایر زبان ها </h5>
                    {CatData.map((item , index)=>
                    <>
                        {item.id >19 && item.id < 37 && 
                            <label className="category-side-block-cont-item">
                                <input onChange={()=>props.listCat(item.id)} type="checkbox" ></input>
                                <span className="category-side-block-cont-item-checkmark">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                <span className="category-side-block-cont-item-text">{item.name}</span>
                            </label>
                        }
                    </>    
                    )}
                </div>

                <div className={`category-side-block-cont ${language && 'category-side-block-cont-active'} `}>
                    <h5> آزمون های بین المللی </h5>
                    {CatData.map((item , index)=>
                    <>
                        {item.id >36 && item.id < 50 && 
                            <label className="category-side-block-cont-item">
                                <input onChange={()=>props.listCat(item.id)} type="checkbox" ></input>
                                <span className="category-side-block-cont-item-checkmark">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                <span className="category-side-block-cont-item-text">{item.name}</span>
                            </label>
                        }
                    </>    
                    )}
                </div>

                <div className={`category-side-block-cont ${language && 'category-side-block-cont-active'} `}>
                    <h5> دوره های خاص </h5>
                    {CatData.map((item , index)=>
                    <>
                        {item.id >49 && item.id < 54 && 
                            <label className="category-side-block-cont-item">
                                <input onChange={()=>props.listCat(item.id)} type="checkbox" ></input>
                                <span className="category-side-block-cont-item-checkmark">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                <span className="category-side-block-cont-item-text">{item.name}</span>
                            </label>
                        }
                    </>    
                    )}
                </div>

            </div>


            <div className="category-side-block">
                <div className="category-side-block-head">
                    <span>شهر</span>
                </div>
                <div className="category-side-block-cont  'category-side-block-cont-active" style={{height:"70px"}}>
                <select onChange={(e)=>props.changeCity(e)} name="city" className="category-side-block-cont-city" placeholder="انتخاب شهر">
                    <option value="">انتخاب شهر</option>
                    {city.map(item=>
                        <option value={item.id}>{item.name}</option>
                    )}
                </select>
                </div>
            </div>

            

       </div>
    )
}

export default CategorySide;
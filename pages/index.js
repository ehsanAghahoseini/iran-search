import Head from 'next/head'
import Slider from '../components/Slider';
import SliderTwo from '../components/SliderTwo';
import BestTeacher from '../components/BestTeacher';
import BestEdjucation from '../components/BestEdjucation';
import BestTeacherLanguage from '../components/BestTeacherLanguage';
import BestEdjucationLanguage from '../components/BestEdjucationLanguage';
import BannerSection from '../components/BannerSection';
import {Home_Page} from '../components/API';
import { useEffect, useState } from 'react';
import BASE_URL from '../components/BASE_URL';


function Home({homePage}) {
  const[topMusic , setTopMusic]=useState([]);
  const[topLanguage , setTopLanguage]=useState([]);
  const[postMusic , setPostMusic]=useState([]);
  const[postLanguage , setPostLanguage]=useState([]);


  useEffect(async()=>{
    if(homePage.result == 'ok'){
      setTopMusic(homePage.data.top_music);
      setTopLanguage(homePage.data.top_language);
      setPostMusic(homePage.data.posts);
      setPostLanguage(homePage.data.posts);
    }
  },[])

  return (
    <>
      <Slider/>
      <SliderTwo />
      <BestTeacher data={topMusic} />
      <BestEdjucation data={postMusic}/>
      <BestTeacherLanguage data={topLanguage}/>
      <BestEdjucationLanguage data={postLanguage}/>
      <BannerSection/>
    </>
  )
}



export async function getServerSideProps(context) {
  const returndata = await  fetch(`${BASE_URL}/web/home` , {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    })
    const homePage = await returndata.json()
    return { props: {homePage}}
}

export default Home ;

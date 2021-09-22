import React, { useState , useEffect} from "react";
import CategorySide from '../../components/CategorySide';
import CategoryMain from '../../components/CategoryMain';
import BASE_URL from '../../components/BASE_URL';
import {Update_Post_Category} from '../../components/API';
import Loader from '../../components/Loader';


function Category({post}) {
  const[display , setDisplay] = useState(false) ;
  const[listCatData , setListCatData] = useState([]) ;
  const[allPost , setAllPost] = useState([]) ;
  const [inlineItem , setInlineItem] = useState(1) ;
  const [windoWidth , setwindoWidth] = useState(0) ;
  const [cityData , setCityData] = useState("") ;


  const changeInlineItem=(status)=>{
    setInlineItem(status)
  }


  const handleResize=()=>{
    if (window.innerWidth < 1100){
      setInlineItem(1)
    }
  }

  const changeCity= async(value)=>{
    await setCityData(value.target.value)
    updatePost()
  }

  const listCat=(id)=>{
    let newListData = listCatData ;
    for(let i in newListData){
        if(newListData[i] == id){
            newListData.splice(i, 1);
            setListCatData(newListData)
            updatePost()
            return true ;
        }
    }
    newListData.push(id);
    setListCatData(newListData)
    updatePost()
}


const updatePost=()=>{
  setDisplay(true)
  const returndata = Update_Post_Category(listCatData , cityData);
  returndata.then((res)=>{
    if(res.result == 'ok'){
      setDisplay(false)
      setAllPost(res.data);
    }
  })
  returndata.catch((e)=>{
    setDisplay(false)
    console.log(e);
  })
}

  useEffect(() => {
    if (typeof window !== 'undefined') {
        window.addEventListener("resize", handleResize);
    }
  },[handleResize])  


  useEffect(async()=>{
    if(post.result == 'ok'){
      setAllPost(post.data);
    }
  },[post])

  return (
    <div className="category">
      {display && <Loader/>}
      <div className="category-inner">
       <CategorySide changeInlineItem={changeInlineItem}  listCat={listCat} changeCity={changeCity} />
       <CategoryMain inlineState={inlineItem} allPost = {allPost} />
      </div>
    </div>
  )
}


export async function getServerSideProps(context) {
  const returndata = await  fetch(`${BASE_URL}/web/category` , {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({}) 
    })
    const post = await returndata.json()
    return { props: {post}}
}


export default Category ;
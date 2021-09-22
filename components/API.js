import React from "react";
import BASE_URL from './BASE_URL';



function Send_Sms(e) {
  return fetch(`${BASE_URL}/auth/send` , {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "phone" : e.target[0].value,
      }) 
    })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      alert("try again")
    })
}
export {Send_Sms};



function Send_Verify(e) {
  return fetch(`${BASE_URL}/auth/check` , {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "phone" : localStorage.getItem('mobile'),
        "code" :e.target[0].value
      }) 
    })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      alert("try again")
    })
}
export {Send_Verify};


function Send_Register(e , type) {
  return fetch(`${BASE_URL}/auth/register` , {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "name" :e.target[0].value,
        "phone":localStorage.getItem('mobile'),
        "family" :e.target[1].value,
        "username" :e.target[2].value,
        "email" : e.target[3].value,
        "national_code" : e.target[4].value,
        "city_id" : e.target[5].value ,
        "type":type,
      }) 
    })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      alert("try again")
    })
}
export {Send_Register};



function Get_All_city() {
  return fetch(`${BASE_URL}/cities` , {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }, 
    })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      alert("try again")
    })
}
export {Get_All_city};



function Add_Comment(e  , postID , rate , replyID) {
  let postData = {
    "token" : localStorage.getItem('token'),
    "post_id" : postID,
    "message" : e.target[0].value ,
    "rate" : rate
  }
  if(replyID != 0){
    postData['reply_id'] = replyID ;
  }
  return fetch(`${BASE_URL}/add_comment` , {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify(postData) 
  })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      alert("try again")
    })
}
export {Add_Comment};


function Add_Experience(e , token) {
  return fetch(`${BASE_URL}/profile/add_experience` , {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify({
      "token" : token,
      "title" :  e.target[0].value,
      "description" : e.target[1].value
    }) 
  })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      alert("try again")
    })
}
export {Add_Experience};


function Detail_Teacher(id) {
  return fetch(`${BASE_URL}/profile/teacher` , {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify({
      "teacher_id" : id ,
      "token":localStorage.getItem('token'),
    }) 
  })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      alert("try again")
    })
}
export {Detail_Teacher};



function Update_Post_Category(listCat , cityId) {
  let postData = {} ;
  if(cityId != ""){
    postData = {"category" : listCat ,"city" : cityId} ;
  }
  else {
    postData = {"category" : listCat } ;

  }
  return fetch(`${BASE_URL}/web/category` , {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify(postData) 
  })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      alert("try again")
    })
}
export {Update_Post_Category};





function Edit_Social(values) {
  return fetch(`${BASE_URL}/profile/update` , {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify({
      'token':localStorage.getItem('token'),
      'info':{
        'email':values.email ,
        'instagram':values.instagram ,
        'phone':values.phone ,
        'telegram':values.telegram ,
        'twitter':values.twitter ,
        'website':values.website ,
        'whats':values.whats ,
      }
    }) 
  })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      alert("try again")
    })
}
export {Edit_Social};



function Edit_Main_Profile(values) {
  const postData = {
    'token':localStorage.getItem('token'),
    'name':values.name ,
    'family':values.family ,
    'username':values.username ,
    'email':values.email ,
    'national_code':values.national_code ,
    'info':{
      'description':values.info.description ,
    }
  }
  if(values.city != ''){
    postData['city_id'] = parseInt(values.city) ;
  }
  return fetch(`${BASE_URL}/profile/update` , {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify(postData) 
  })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      alert("try again")
    })
}
export {Edit_Main_Profile};





function Add_Post(e , movieFile , imageFile) {
  var formdata = new FormData();
  formdata.append("token", localStorage.getItem('token'));
  formdata.append("title", e.target[0].value);
  formdata.append("category_id", e.target[1].value);
  formdata.append("description", e.target[2].value);
  if(e.target[3].value == 'movie'){
    formdata.append("file", movieFile);
    formdata.append("type", 'movie');
  }else if (e.target[3].value == 'image') {
    formdata.append("file", imageFile);
    formdata.append("type", 'image');
  }
  else {
    formdata.append("type", 'text');
  }


  return fetch(BASE_URL + `/add_post` , {
    method: 'POST',
    body: formdata 
    })
    .then(res => res.json())
    .then((res) => {
        return res ;
    })
    .catch((er)=>{
      alert("try again")
    })
}
export {Add_Post};





function Get_Gallery_image() {
  return fetch(`${BASE_URL}/profile/list_image` , {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify({
      "token":localStorage.getItem('token'),
    }) 
  })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      alert("try again")
    })
}
export {Get_Gallery_image};



function Add_Gallery_image(imageFile) {
  var formdata = new FormData();
  formdata.append("token", localStorage.getItem('token'));
  formdata.append("image", imageFile);
  return fetch(BASE_URL + `/profile/add_image` , {
    method: 'POST',
    body: formdata 
    })
    .then(res => res.json())
    .then((res) => {
        return res ;
    })
    .catch((er)=>{
      alert("try again")
    })
}
export {Add_Gallery_image};



function Remove_Gallery_image(id) {
  return fetch(`${BASE_URL}/profile/remove_image` , {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify({
      "token":localStorage.getItem('token'),
      "image_id" : id ,
    }) 
  })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      alert("try again")
    })
}
export {Remove_Gallery_image};




function Add_Activity_Houres(e , values) {
  return fetch(`${BASE_URL}/profile/add_school` , {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify({
      "token":localStorage.getItem('token'),
      "name" : e ,
      "times":values ,
    }) 
  })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      alert("try again")
    })
}
export {Add_Activity_Houres};




function Add_To_Favarit(id) {
  return fetch(`${BASE_URL}/profile/add_bookmark` , {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify({
      "token":localStorage.getItem('token'),
      "teacher_id" :id ,
    }) 
  })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      alert("try again")
    })
}
export {Add_To_Favarit};

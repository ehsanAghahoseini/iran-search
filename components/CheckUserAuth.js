import React from 'react';



function CheckUserAuth(){

const ISSERVER = typeof window === "undefined";

  if(!ISSERVER) {
    if(localStorage.getItem("token") != null && localStorage.getItem("name") != null && localStorage.getItem("family") != null && localStorage.getItem("username") != null){
      return true
    }
    else {
      return false
    }
  }

}

export default CheckUserAuth;

import React, { useEffect } from 'react'
import api from "../../service/apis/api.user.js"
export default function Register() {
  // let data={
  //   "userName":"noc",
  //   "email":"noc@gmail.com",
  //   "password":"123",
  //   "cart":[]
  // }

  useEffect(()=>{
    console.log(api.checkRegister());
    api.checkRegister("noc@gmail.com")
  },[])
  return (
    <>
      REgister
    </>
  )
}

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useStateValue } from "../../Context/StateProvider";

export default function HospitalHome(props) {
    const navigate = useNavigate();
  const [ {HospitalUser} , dispatchUser] = useStateValue();

  useEffect(()=>{
    console.log(HospitalUser);
    if(HospitalUser === null)
    {
        navigate("/hospitalLogin");
    }
  },[]);
  return <> <h1>Hello, Patient Home {HospitalUser}</h1> </>
}

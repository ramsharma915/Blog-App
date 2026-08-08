import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function AuthLayout(
    {
        children ,
        Authentication=true
    }
){
    const navigate = useNavigate()
    const [loader,setloader] = useState(true);
    const authStatus = useSelector((State)=>State.Auth.status)
    useEffect(()=>{
        if(Authentication && authStatus!==Authentication){navigate('/login')}
            else if(!Authentication && authStatus!==Authentication){
                navigate('/');
            }
            setloader(false);
    },[authStatus, Authentication ,navigate])
return loader?<h1>loading...</h1>:<>{children}</>;
}

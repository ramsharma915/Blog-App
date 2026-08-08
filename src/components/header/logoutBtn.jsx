import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'
import autheuser from '../../appwrite/Auth'

function LogoutBtn(){
    const dispatch = useDispatch();
    const logoutHandler = ()=>{
        autheuser.logoutAccount().then(()=>dispatch(logout()))
    }
    return (
        <button onClick={logoutHandler}>Logout</button>
    )
}
export default LogoutBtn;

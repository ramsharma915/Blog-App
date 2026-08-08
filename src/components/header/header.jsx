import React, { useState,useEffect,useRef } from 'react';
import { Footer, Container, LogoutBtn, Logo, Input, SearchBox } from '../index'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { search } from '../../store/authSlice';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

import autheuser from '../../appwrite/Auth';


function Header() {
    const [click,setclick] = useState(false);
    const authStatus = useSelector((state) => state.Auth.status)
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const searchSubmit = (data) => {
        if (!data.name.trim()) {
        Navigate("/");
        return;
        }

        Navigate("/search");
        dispatch(search(data.name.trim()));
        }
    const clickHandler=(item)=>{
    Navigate(item.slug);
    setclick(false);
    }
     
    const menuRef = useRef(null);
    useEffect(() => {
    const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setclick(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);


    const navItems = [
        {
            name: 'Home',
            slug: '/',
            active: true
        },
        {
            name: 'Login',
            slug: '/login',
            active: !authStatus
        },
        {
            name: 'Signup',
            slug: '/signup',
            active: !authStatus
        },
        {
            name: 'All posts',
            slug: '/all-posts',
            active: authStatus
        },
        {
            name: 'Add post',
            slug: '/add-post',
            active: authStatus
        }
    ]
    const activeItems = navItems.filter(item => item.active);
    return (
        <header className='p-3 shadow bg-gray-300 h-15 fixed top-0 w-full z-50'>
            <Container>
                <nav className='w-full flex h-8 items-center'>
                    <div className="w-8">
                        <Link to='/'>
                            <Logo width='w-8' />
                        </Link>
                    </div>
                    <div className="px-10 w-full ">
                        <form onSubmit={handleSubmit(searchSubmit)}
                         className="h-8 flex justify-items-center border rounded-sm">
                        <Input type="search" placeholder="Search Movie"
                         {...register('name', { required: true, })}
                         className="bg-white h-7.5 text-xs px-1 rounded-l-sm border-none outline-none"/>
                         <button type="submit" className="bg-gray-200 rounded-r-sm size-7.5 py-1">
                        <span className="material-symbols-outlined">
                        search
                        </span>
                        </button>
                        </form>
                    </div>

                    <ul className="ml-auto md:flex sm:hidden hidden items-center">
                        {navItems.map((item) =>
                            item.active ? (
                                <li key={item.name}>
                                    <button
                                        onClick={() => Navigate(item.slug)}
                                        className='text-black w-24 px-2 duration-200 hover:bg-blue-100 rounded-full '
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            ) : null
                        )}
                        {authStatus && (
                            <div
                                className='text-black inline-block px-6 duration-200 hover:bg-blue-100 rounded-full '
                            >
                                <LogoutBtn />
                            </div>
                        )}
                    </ul>

                    {/* MENU FOR MOBILE */}
                   <div ref={menuRef} className="relative md:hidden">
                   <button className="md:hidden h-6 w-8 text-3xl text-center flex items-center"
                   onClick={()=>setclick(!click)}>{click ? <RxCross2/>:<GiHamburgerMenu/>}</button>
                  <ul className="fixed top-14 right-0 border rounded-sm md:hidden bg-white z-50 overflow-hidden">
                   {click ? navItems.map((item,index)=>
                   (item.active?(<li key={item.name} className={`px-2 ${index !== 0 ? "border-t" : "rounded-t-sm"} ${!authStatus &&index === activeItems.length - 1 ? "rounded-b-sm" : ""} py-1 hover:bg-gray-200`} onClick={()=>clickHandler(item)} >{item.name}</li>):null
                    )):""}
                    {click && authStatus && (
                            <div
                                className='px-2 border-t py-1 hover:bg-gray-200 rounded-b-sm '
                            >
                                <LogoutBtn />
                            </div>
                        )}
                   </ul>
                   </div>
                </nav>
            </Container>
        </header>
    )
}

export default Header;

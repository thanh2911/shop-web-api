import React, { useEffect, useRef, useState } from 'react';
import { Link , useLocation , useNavigate} from "react-router-dom";
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import { GrFormClose } from 'react-icons/gr'
import { FaShoppingBag } from 'react-icons/fa'
import { FaUserCircle } from 'react-icons/fa'


import { useUserAuth } from '../../GlobalState'
import Button from '../../components/button/Button'

import Logo from "../../assets/img/logo.png"
import './header.scss'


const NavData = [
    {
        display_name: "home" ,
        path : "/"
    },
    {
        display_name: "product" ,
        path : "/product"
    },
    {
        display_name: "contact" ,
        path : "#"
    },
    {
        display_name: "blog" ,
        path : "#"
    },
]

const Header = () => {

    const {pathname} = useLocation();
    const { logOut, user } = useUserAuth();

    const navigate = useNavigate();

    const active = NavData.findIndex(item => pathname === item.path)

    const menuRef = useRef(null);
    const loginRef = useRef(null);

    const handleLogout = async () => {
        try {
          await logOut();
          navigate("/");
        } catch (error) {
          console.log(error.message);
        }
      };

    //   console.log(user);

    // console.log(pathname, active);

    const menuToggle = () => menuRef.current.classList.toggle('active');
    const loginToggle = () => loginRef.current.classList.toggle('active');

  return (
    <div className="header">
            <div className="logo">
                <Link to={`/`}>
                    <img src={Logo} alt="logo" />
                </Link>
                
            </div>

            <div className="header-menu">
                <div className="header-menu__bar" onClick={menuToggle}>
                    <AiOutlineMenuUnfold />
                </div>

                <ul className="header-menu__nav" ref={menuRef}>
                    <div className="header-menu__nav--close"  onClick={menuToggle}>
                        <GrFormClose />
                    </div>
                {
                    NavData.map((item , index) => (
                        <li key={index} 
                        className={`nav-item ${active===index ? "active" : ''}`} >
                            <Link to={item.path} >
                            {
                                <span className='line-hover'>{item.display_name}</span>
                            }
                            </Link>
                        </li>
                    ))
                }
                </ul>

                
            </div>

            <ul className="tools">

                <div className="tools-cart">
                    <FaShoppingBag />
                </div>

                <div className="tools-user">
                    <div className="tools-user__name" onClick={loginToggle}>
                    {
                        !user  ? 
                            <FaUserCircle /> 
                            :
                        <div className='tools-user__name--email'>
                            {user.email && user.email.substring(0, 1)}
                        </div> 
                     }
                    </div>

               
               <div className="tools-user__btn" ref={loginRef}>
               {     
                    !user  ?  
                        <Button 
                            size={`small`}
                        >
                            <Link to={`/login`} >
                                Login
                            </Link> 
                        </Button>
                        :
                        <Button 
                        size={`small`}
                            onClick={handleLogout}
                        >
                             Logout
                        </Button>    
                       
                }
               </div>

                </div>
               
            </ul>

    </div>
  )
}

export default Header
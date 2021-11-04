import React from "react";
import './Header.scss';
import logo from '../../assets/logo.png';
import { BiRuble } from 'react-icons/bi';
import { BsCart2 } from 'react-icons/bs';
import { Link } from "react-router-dom";

const Header = () => {
   return (
      <header className="header">
         <div className="header__row">
            <div className="header__logo-gr logo-group">
               <Link
                  to='/home'
                  className="logo-group__img"
               >
                  <img src={logo} alt="App logo" />
               </Link>
               <div className="logo-group__body">
                  <div className="logo-group__title">
                     REACT PIZZA
                  </div>
                  <div className="logo-group__subtitle">
                     самая вкусная пицца во вселенной
                  </div>
               </div>
            </div>
            <nav className="header__nav nav">
               <Link
                  to='/cart'
                  className="nav__cart nav-cart"
               >
                  <div className="nav-cart__money">
                     500
                     <BiRuble className="nav-money-icon" />
                  </div>
                  <div className="nav-cart__icon">
                     <BsCart2 />
                  </div>
               </Link>
            </nav>
         </div>
      </header>
   )
}

export default Header

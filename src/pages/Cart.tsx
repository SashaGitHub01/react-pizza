import React from "react";
import './Cart.scss';
import cart from '../assets/cart.svg';
import trash from '../assets/trash.svg';
import arrow from '../assets/arrow.svg';
import CartItem from "../components/Cart/CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
   return (
      <div className="cart">
         <div className="cart__content">
            <div className="cart__header">
               <div className="cart__title">
                  <img src={cart} alt="" />
                  <span>Корзина</span>
               </div>
               <div className="cart__trash">
                  <img src={trash} alt="" />
                  <span>Очистить корзину</span>
               </div>
            </div>
            <div className="cart__body">
               <div className="cart__column">
                  <CartItem />
                  <CartItem />
               </div>
            </div>
            <div className="cart__outcome">
               <div className="cart__count">
                  <span>Всего: <b>2 шт.</b></span>
               </div>
               <div className="cart__money">
                  <span>Сумма заказа: <b>900 ₽</b></span>
               </div>
            </div>
            <div className="cart__buttons">
               <Link
                  to='/home'
                  className="cart__back-btn"
               >
                  <img src={arrow} alt="" />
                  <span>Вернуться назад</span>
               </Link>
               <button className="cart__pay-btn">
                  <span>Оплатить сейчас</span>
               </button>
            </div>
         </div>
      </div>
   )
}

export default Cart;

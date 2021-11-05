import React from "react";
import './CartEmpty.scss';
import { Link } from "react-router-dom";
import background from '../../../assets/background.svg'

const CartEmpty = () => {
   return (
      <div className="cart-empty">
         <div className="cart-empty__content">
            <div className="cart-empty__title">
               Корзина пустая 😕
            </div>
            <div className="cart-empty__text">
               <p>Вероятней всего, вы не заказывали ещё пиццу.</p>
               <p>Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
            </div>
            <div className="cart-empty__background">
               <img src={background} alt="" />
            </div>
            <Link className="cart-empty__button" to='/home'>
               Вернуться назад
            </Link>
         </div>
      </div>
   )
}

export default CartEmpty;

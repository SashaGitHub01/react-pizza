import React, { useEffect } from "react";
import './Cart.scss';
import cart from '../assets/cart.svg';
import trash from '../assets/trash.svg';
import arrow from '../assets/arrow.svg';
import CartItem from "../components/Cart/CartItem/CartItem";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { clearCart } from "../redux/actions/cart";
import CartEmpty from "../components/Cart/CartEmpty/CartEmpty";

const Cart = () => {
   const dispatch = useDispatch();

   const { items, totalPrice, totalCount } = useTypedSelector(state => state.cart);

   const itemsToRender = Object.keys(items).map((key) => {
      return items[Number(key)][0];
   });

   const handleClearCart = () => {
      dispatch(clearCart());
   }

   if (true) return <CartEmpty />

   return (
      <div className="cart">
         <div className="cart__content">
            <div className="cart__header">
               <div className="cart__title">
                  <img src={cart} alt="" />
                  <span>Корзина</span>
               </div>
               <div className="cart__trash" onClick={handleClearCart}>
                  <img src={trash} alt="" />
                  <span>Очистить корзину</span>
               </div>
            </div>
            <div className="cart__body">
               <div className="cart__column">
                  {itemsToRender.map((item) => (
                     <CartItem
                        key={item.id}
                        length={items[item.id].length}
                        {...item}
                     />
                  ))}
               </div>
            </div>
            <div className="cart__outcome">
               <div className="cart__count">
                  <span>Всего: <b>{totalCount} шт.</b></span>
               </div>
               <div className="cart__money">
                  <span>Сумма заказа: <b>{totalPrice} ₽</b></span>
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

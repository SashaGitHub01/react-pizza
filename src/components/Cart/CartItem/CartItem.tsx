import React from "react";
import './CartItem.scss';
import pizza from '../../../assets/pizza.png';
import minus from '../../../assets/minus.svg';
import plus from '../../../assets/plusO.svg';
import times from '../../../assets/times.svg';


const CartItem = () => {
   return (
      <div className="cart__selected-i selected-item">
         <div className="selected-item__body">
            <div className="selected-item__img">
               <img src={pizza} alt="" />
            </div>
            <div className="selected-item__about">
               <div className="selected-item__title">
                  Пицца
               </div>
               <div className="selected-item__info">
                  <span>Тесто, </span>
                  <span>40см</span>
               </div>
            </div>
         </div>
         <div className="selected-item__count item-count">
            <div className="item-count__icon">
               <img src={minus} alt="" />
            </div>
            <div className="item-count__value">
               2
            </div>
            <div className="item-count__icon">
               <img src={plus} alt="" />
            </div>
         </div>
         <div className="selected-item__price">
            770 ₽
         </div>
         <div className="selected-item__delete">
            <img src={times} alt="" />
         </div>
      </div>
   )
}

export default CartItem;

import React from "react";
import './CartItem.scss';
import pizza from '../../../assets/pizza.png';
import minus from '../../../assets/minus.svg';
import plus from '../../../assets/plusO.svg';
import times from '../../../assets/times.svg';
import { ISelectedItem } from "../../../types/cart";
import { addItem, deleteItem, removeSection } from "../../../redux/actions/cart";
import { useDispatch } from "react-redux";

type CartItemType = ISelectedItem & { length: number };

const CartItem: React.FC<CartItemType> = ({ id, imageUrl, length, name, type, size, price }) => {
   const dispatch = useDispatch();
   const totalPrice = price * length;

   const handleDelete = () => {
      dispatch(deleteItem(id));
   }

   const handleAdd = () => {
      dispatch(addItem(id));
   }

   const handleRemoveSection = () => {
      dispatch(removeSection(id));
   }

   return (
      <div className="cart__selected-i selected-item">
         <div className="selected-item__body">
            <div className="selected-item__img">
               <img src={imageUrl} alt="" />
            </div>
            <div className="selected-item__about">
               <div className="selected-item__title">
                  {name}
               </div>
               <div className="selected-item__info">
                  <span>{type}, </span>
                  <span>{size} см</span>
               </div>
            </div>
         </div>
         <div className="selected-item__count item-count">
            <div className="item-count__icon" onClick={handleDelete}>
               <img src={minus} alt="" />
            </div>
            <div className="item-count__value">
               {length}
            </div>
            <div className="item-count__icon" onClick={handleAdd}>
               <img src={plus} alt="" />
            </div>
         </div>
         <div className="selected-item__price">
            {totalPrice} ₽
         </div>
         <div className="selected-item__delete" onClick={handleRemoveSection}>
            <img src={times} alt="" />
         </div>
      </div>
   )
}

export default CartItem;

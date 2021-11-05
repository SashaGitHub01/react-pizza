import React, { useState } from "react";
import './PizzaItem.scss';
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import plusW from '../../../assets/plusW.svg';
import plusO from '../../../assets/plusO.svg';
import { IItem } from "../../../types/home";
import { setNewItem } from "../../../redux/actions/cart";

type SizeType = 26 | 30 | 40;
type ThicknessType = number;

const optionsA = [
   { type: 'тонкое' },
   { type: 'традиционное' },
];

const optionsB = [
   { type: 26 },
   { type: 30 },
   { type: 40 },
];

const PizzaItem: React.FC<IItem> = ({ name, id, imageUrl, price, category, rating, types, sizes }) => {
   const [currentSize, setCurrentSize] = useState<SizeType>(sizes[0] as SizeType);
   const [currentThickness, setCurrentThickness] = useState<ThicknessType>(types[0] as ThicknessType);

   const dispatch = useDispatch();

   const items = useTypedSelector(state => state.cart.items);

   const handleSize = (val: SizeType) => {
      setCurrentSize(val);
   }

   const handleThickness = (val: ThicknessType) => {
      setCurrentThickness(val);
   }

   const addCount = () => {
      const obj = {
         id: id,
         name: name,
         type: currentThickness,
         size: currentSize,
         imageUrl: imageUrl,
         price: price,
      }

      dispatch(setNewItem(obj));
   }

   return (
      <div className="pizzas__item pizza-item">
         <div className="pizza-item__content">
            <div className="pizza-item__img">
               <img src={imageUrl} alt="pizza" />
            </div>
            <div className="pizza-item__title">
               {name}
            </div>
            <div className="pizza-item__options">
               <div className="pizza-item__option">
                  {optionsA.map(({ type }, index) => (
                     <div
                        onClick={() => handleThickness(index)}
                        key={type}
                        className={index === currentThickness
                           ? "pizza-item__select active"
                           : types.includes(index)
                              ? "pizza-item__select"
                              : "pizza-item__select  disabled"}
                     >
                        {type}
                     </div>
                  ))}
               </div>
               <div className="pizza-item__option">
                  {optionsB.map(({ type }) => (
                     <div
                        onClick={() => handleSize(type as SizeType)}
                        key={type}
                        className={type === currentSize
                           ? "pizza-item__select active"
                           : sizes.includes(type)
                              ? "pizza-item__select"
                              : "pizza-item__select disabled"}
                     >
                        <span>{type} см.</span>
                     </div>
                  ))}
               </div>
            </div>
            <div className="pizza-item__price">
               <div className="pizza-item__value">
                  <span>от {price} ₽</span>
               </div>
               <button
                  onClick={addCount}
                  className={items[id]
                     ? "pizza-item__btn active"
                     : "pizza-item__btn"
                  }
               >
                  <img
                     src={items[id] ? plusO : plusW}
                     className="plus-icon"
                  />
                  <span>Добавить</span>
                  {items[id]
                     ? <div className="count-circle">
                        <span>
                           {items[id].length}
                        </span>
                     </div>
                     : null}
               </button>
            </div>
         </div>
      </div >
   )
}

export default PizzaItem;

import React, { useState } from "react";
import './PizzaItem.scss';
import image from '../../../assets/pizza.png';
import plusW from '../../../assets/plusW.svg';
import plusO from '../../../assets/plusO.svg';
import { IItem } from "../../../types/home";

type SizeType = 26 | 30 | 40;
type ThicknessType = 'тонкое' | 'традиционное';

const PizzaItem: React.FC<IItem> = ({ name, id, imageUrl, price, category, rating, types }) => {
   const [currentSize, setCurrentSize] = useState<SizeType>(30);
   const [currentThickness, setCurrentThickness] = useState<ThicknessType>('тонкое');
   const [selectedCount, setSelectedCount] = useState(0);

   const optionsA = [
      { type: 'тонкое' },
      { type: 'традиционное' },
   ];

   const optionsB = [
      { type: 26 },
      { type: 30 },
      { type: 40 },
   ];

   const handleSize = (val: SizeType) => {
      setCurrentSize(val);
   }

   const handleThickness = (val: ThicknessType) => {
      setCurrentThickness(val);
   }

   const addCount = () => {
      setSelectedCount(selectedCount + 1);
      console.log(selectedCount);
   }

   return (
      <div className="pizzas__item pizza-item">
         <div className="pizza-item__img">
            <img src={imageUrl} alt="pizza" />
         </div>
         <div className="pizza-item__title">
            {name}
         </div>
         <div className="pizza-item__options">
            <div className="pizza-item__option">
               {optionsA.map(({ type }) => (
                  <div
                     onClick={() => handleThickness(type as ThicknessType)}
                     key={type}
                     className={type === currentThickness
                        ? "pizza-item__select active"
                        : "pizza-item__select"}
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
                        : "pizza-item__select"}
                  >
                     {type}<span> см.</span>
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
               className={selectedCount
                  ? "pizza-item__btn active"
                  : "pizza-item__btn"
               }
            >
               <img
                  src={selectedCount ? plusO : plusW}
                  className="plus-icon"
               />
               <span>Добавить</span>
               {selectedCount
                  ? <div className="count-circle">
                     <span>
                        {selectedCount}
                     </span>
                  </div>
                  : null}
            </button>
         </div>
      </div>
   )
}

export default PizzaItem;

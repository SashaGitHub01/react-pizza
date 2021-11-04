import React, { useState, useEffect, useRef } from "react";
import './SortPopup.scss';
import pop from '../../../assets/pop.svg';

interface ISortPopupProps {
   setSortBy: React.Dispatch<React.SetStateAction<string>>
   sortBy: string,
}

const SortPopup: React.FC<ISortPopupProps> = ({ sortBy, setSortBy }) => {
   const [popup, setPopup] = useState<boolean>(false);

   const ref = useRef<HTMLDivElement>(null);

   const sort = [
      { name: 'популярности' },
      { name: 'по цене' },
      { name: 'по алфавиту' },
   ]

   useEffect(() => {
      const checkClick = (e: Event) => {
         if (popup && ref.current && !ref.current.contains(e.target as Node)) {
            setPopup(false)
         }
      }

      document.addEventListener("click", ((e) => {
         checkClick(e)
      }) as EventListener)

      return () => {
         document.removeEventListener("click", checkClick)
      }
   }, [popup])

   const handlePop = (e: React.MouseEvent<HTMLElement>) => {
      e.stopPropagation();

      setPopup(!popup);
   }

   const handleSort = (name: string) => {
      setSortBy(name);
   }

   return (
      <div className="main-subnav__sort sort-by">
         <div className="sort-by__body">
            <img src={pop} alt=""
               className={popup
                  ? "pop-icon active"
                  : 'pop-icon'}
               onClick={handlePop}
            />
            <span className="sort-by__text">
               Сортировка по:
            </span>
            <span
               onClick={handlePop}
               className="sort-by__selected">
               {sortBy}
            </span>
         </div>
         {popup &&
            <div className="sort-by__popup sort-popup" ref={ref}>
               <ul className="sort-popup__list">
                  {sort.map(({ name }) => (
                     <div
                        className={sortBy === name
                           ? "sort-popup__item active"
                           : "sort-popup__item"}
                        key={name}
                        onClick={() => handleSort(name)}
                     >
                        {name}
                     </div>
                  ))}
               </ul>
            </div>}
      </div>
   )
}

export default SortPopup

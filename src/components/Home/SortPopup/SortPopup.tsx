import React, { useState, useEffect, useRef } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { setSortBy } from "../../../redux/actions/home";
import './SortPopup.scss';
import pop from '../../../assets/pop.svg';

// interface ISortPopupProps {
//    setSortBy: React.Dispatch<React.SetStateAction<string>>
//    sortBy: string,
// }

const sort = [
   { title: 'популярности', id: 0, name: 'rating' },
   { title: 'по цене', id: 1, name: 'price' },
   { title: 'по алфавиту', id: 2, name: 'name' },
]

const SortPopup: React.FC = () => {
   const [popup, setPopup] = useState<boolean>(false);
   const ref = useRef<HTMLDivElement>(null);

   const dispatch = useDispatch();
   const sortBy = useTypedSelector(state => state.homePage.sortBy);

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

   const handleSort = (name: string, id: number, title: string) => {
      setPopup(false);

      if (id === sortBy.id) {
         return;
      }

      dispatch(setSortBy({ name, id, title }));
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
               {sortBy.title}
            </span>
         </div>
         {popup &&
            <div className="sort-by__popup sort-popup" ref={ref}>
               <ul className="sort-popup__list">
                  {sort.map(({ name, title, id }) => (
                     <div
                        className={sortBy.id === id
                           ? "sort-popup__item active"
                           : "sort-popup__item"}
                        key={name}
                        onClick={() => handleSort(name, id, title)}
                     >
                        {title}
                     </div>
                  ))}
               </ul>
            </div>}
      </div>
   )
}

export default SortPopup

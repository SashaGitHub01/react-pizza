import React, { useState, useCallback } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { setFilter } from "../../../redux/actions/home";
import './HomeSubnav.scss';

// interface IHomeSubnavProps {
//    currentNav: string,
//    setCurrentNav: React.Dispatch<React.SetStateAction<string>>
// }

const nav = [
   { name: 'Все' },
   { name: 'Мясные' },
   { name: 'Вегетарианские' },
   { name: 'Гриль' },
   { name: 'Острые' },
   { name: 'Закрытые' },
]

const HomeSubnav: React.FC = () => {
   const dispatch = useDispatch();

   const filter = useTypedSelector(state => state.homePage.filter);

   const handleNav = (i: number, name: string) => {
      if (i === filter.id) return;

      dispatch(setFilter({ id: i, name: name }));
   };

   return (
      <div className="main-subnav__list">
         {nav.map(({ name }, index) => (
            <div
               className={filter.id === index
                  ? "main-subnav__item active"
                  : "main-subnav__item"}
               key={name}
               onClick={() => handleNav(index, name)}
            >
               {name}
            </div>
         ))}
      </div>
   )
}

export default HomeSubnav

import React, { useState } from "react";
import './HomeSubnav.scss';

interface IHomeSubnavProps {
   currentNav: string,
   setCurrentNav: React.Dispatch<React.SetStateAction<string>>
}

const HomeSubnav: React.FC<IHomeSubnavProps> = ({ setCurrentNav, currentNav }) => {

   const nav = [
      { name: 'Все' },
      { name: 'Мясные' },
      { name: 'Вегетарианские' },
      { name: 'Гриль' },
      { name: 'Острые' },
      { name: 'Закрытые' },
   ]

   const handleNav = (name: string) => {
      setCurrentNav(name);
   }

   return (
      <div className="main-subnav__list">
         {nav.map(({ name }) => (
            <div
               className={currentNav === name
                  ? "main-subnav__item active"
                  : "main-subnav__item"}
               key={name}
               onClick={() => handleNav(name)}
            >
               {name}
            </div>
         ))}
      </div>
   )
}

export default HomeSubnav

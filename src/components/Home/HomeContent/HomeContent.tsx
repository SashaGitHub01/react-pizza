import React, { useState, useEffect } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import './HomeContent.scss';

import PizzaItem from "../PizzaItem/PizzaItem";
import { getUsers } from "../../../redux/actions/home";

interface IHomeContentProps {
   currentNav: string
}

const HomeContent: React.FC<IHomeContentProps> = ({ currentNav }) => {
   const dispatch = useDispatch();
   const { error, isFetching, items } = useTypedSelector(state => state.homePage)

   useEffect(() => {
      dispatch(getUsers());
   }, []);
   console.log(items);
   return (
      <div className="main-col__content main-content">
         <div className="main-content__title">
            {currentNav}<span> пиццы</span>
         </div>
         <div className="main-content__pizzas pizzas">
            {items.length && items.map((item) => (
               <PizzaItem {...item} key={item.id} />
            ))}
         </div>
      </div>
   )
}

export default HomeContent;


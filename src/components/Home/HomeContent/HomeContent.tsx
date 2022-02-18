import React, { useRef, useEffect, useCallback } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import './HomeContent.scss';

import PizzaItem from "../PizzaItem/PizzaItem";
import { getPizzas } from "../../../redux/actions/home";
import PizzaPlaceholder from "../../PizzaPlaceholder/PizzaPlaceholder";

// interface IHomeContentProps {
//    currentNav: string
// }

const HomeContent: React.FC = () => {
   const dispatch = useDispatch();
   const { filter, error, isFetching, items, sortBy } = useTypedSelector(state => state.homePage)

   useEffect(() => {
      dispatch(getPizzas(filter.id, sortBy.name));
   }, [filter, sortBy]);

   return (
      <div className="main-col__content main-content">
         <div className="main-content__title">
            <span>{filter.name} пиццы</span>
         </div>
         <div className="main-content__pizzas pizzas">
            {isFetching
               ? Array(9)
                  .fill(1)
                  .map((item, i) => <PizzaPlaceholder key={i} />)
               : items.map((item) => (
                  <PizzaItem {...item} key={item.id} />
               ))}
         </div>
      </div>
   )
}

export default HomeContent;


import { Dispatch } from "react";
import { PizzasService } from "../../API/PizzasService";
import { Actions, ActionTypes, IFilter, IItem, ISort } from "../../types/home";

export const fetchItems = () => (
   { type: Actions.FETCH_ITEMS }
)

export const setItems = (items: IItem[]) => (
   { type: Actions.SET_ITEMS, payload: items }
)

export const setError = (err: string) => (
   { type: Actions.SET_ERROR, payload: err }
)

export const setFilter = (obj: IFilter) => (
   { type: Actions.SET_FILTER, payload: obj }
)

export const setSortBy = (obj: ISort) => (
   { type: Actions.SET_SORTBY, payload: obj }
)

export const getPizzas = (filter: number, sort: string) => {
   return async (dispatch: Dispatch<ActionTypes>) => {
      try {
         dispatch(fetchItems() as ActionTypes)

         const res = await PizzasService.getItems(filter, sort);

         dispatch(setItems(res) as ActionTypes);
      } catch (e) {
         dispatch(setError("Something went wrong...") as ActionTypes)
      }
   }
}
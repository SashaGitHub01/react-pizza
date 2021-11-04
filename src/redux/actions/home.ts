import { Dispatch } from "react";
import { PizzasService } from "../../API/PizzasService";
import { Actions, ActionTypes, IItem } from "../../types/home";

const fetchItems = () => (
   { type: Actions.FETCH_ITEMS }
)

const setItems = (items: IItem[]) => (
   { type: Actions.SET_ITEMS, payload: items }
)

const setError = (err: string) => (
   { type: Actions.SET_ITEMS, payload: err }
)

export const getUsers = () => {
   return async (dispatch: Dispatch<ActionTypes>) => {
      try {
         dispatch(fetchItems() as ActionTypes)

         const res = await PizzasService.getItems();

         dispatch(setItems(res.pizzas) as ActionTypes);
      } catch (e) {
         dispatch(setError("Something went wrong...") as ActionTypes)
      }
   }
}
import { Actions, ISelectedItem } from "../../types/cart";

export const setNewItem = (obj: ISelectedItem) => (
   { type: Actions.SET_NEW_ITEM, payload: obj }
);

export const clearCart = () => (
   { type: Actions.CLEAR_CART }
);

export const deleteItem = (id: number) => (
   { type: Actions.DELETE_ITEM, payload: id }
);

export const addItem = (id: number) => (
   { type: Actions.ADD_ITEM, payload: id }
);

export const removeSection = (id: number) => (
   { type: Actions.REMOVE_SECTION, payload: id }
);


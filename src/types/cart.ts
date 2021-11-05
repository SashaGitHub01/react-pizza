
export enum Actions {
   SET_NEW_ITEM = 'SET_NEW_ITEM',
   CLEAR_CART = 'CLEAR_CART',
   DELETE_ITEM = 'DELETE_ITEM',
   ADD_ITEM = 'ADD_ITEM',
   REMOVE_SECTION = 'REMOVE_SECTION',
}


export interface ISelectedItem {
   id: number,
   imageUrl: string,
   name: string,
   type: number,
   size: number,
   price: number,
}

export interface IItems {
   [i: number]: ISelectedItem[],
}

export interface IStateCart {
   items: IItems,
   totalCount: number,
   totalPrice: number,
}

interface ISetNewItem {
   type: Actions.SET_NEW_ITEM,
   payload: ISelectedItem,
}

interface IClearCart {
   type: Actions.CLEAR_CART,
}

interface IDeleteItem {
   type: Actions.DELETE_ITEM,
   payload: number,
}

interface IAddItem {
   type: Actions.ADD_ITEM,
   payload: number,
}

interface IRemoveSection {
   type: Actions.REMOVE_SECTION,
   payload: number,
}

export type ActionTypesCart = ISetNewItem | IClearCart | IDeleteItem | IAddItem | IRemoveSection;
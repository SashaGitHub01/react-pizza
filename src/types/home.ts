
export enum Actions {
   FETCH_ITEMS = 'FETCH_ITEMS',
   SET_ITEMS = 'SET_ITEMS',
   SET_ERROR = 'SET_ERROR',
}

export interface IItem {
   id: number,
   imageUrl: string,
   name: string,
   types: number[],
   sizes: number[],
   price: number,
   category: number,
   rating: number,
}

export interface IState {
   items: IItem[],
   isFetching: boolean,
   error: string | null
}

interface IFetchItems {
   type: Actions.FETCH_ITEMS,
}

interface ISetItems {
   type: Actions.SET_ITEMS,
   payload: IItem[]
}

interface ISetError {
   type: Actions.SET_ERROR,
   payload: string
}

export type ActionTypes = IFetchItems | ISetItems | ISetError;
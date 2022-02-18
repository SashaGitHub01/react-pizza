
export enum Actions {
   FETCH_ITEMS = 'FETCH_ITEMS',
   SET_ITEMS = 'SET_ITEMS',
   SET_ERROR = 'SET_ERROR',
   SET_FILTER = 'SET_FILTER',
   SET_SORTBY = 'SET_SORTBY',
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

export interface IFilter {
   id: number,
   name: string,
}

export interface ISort {
   id: number,
   name: string,
   title: string,
}

export interface IState {
   items: IItem[],
   isFetching: boolean,
   error: string | null
   filter: IFilter,
   sortBy: ISort,
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

interface ISetFilter {
   type: Actions.SET_FILTER,
   payload: IFilter,
}

interface ISetSortBy {
   type: Actions.SET_SORTBY,
   payload: ISort,
}


export type ActionTypes = IFetchItems | ISetItems | ISetError | ISetFilter | ISetSortBy;
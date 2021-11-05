import { IState, ActionTypes, Actions } from "../../types/home"

const initialState: IState = {
   items: [],
   isFetching: false,
   error: null,
   filter: {
      id: 0,
      name: 'Все'
   },
   sortBy: {
      id: 0,
      name: 'rating',
      title: 'популярности'
   },
}

const homeReducer = (state = initialState, action: ActionTypes) => {
   switch (action.type) {
      case Actions.FETCH_ITEMS:
         return {
            ...state,
            isFetching: true,
         }

      case Actions.SET_ITEMS:
         return {
            ...state,
            items: action.payload,
            isFetching: false,
         }

      case Actions.SET_ERROR:
         return {
            ...state,
            error: action.payload,
         }

      case Actions.SET_FILTER:
         return {
            ...state,
            filter: action.payload,
         }

      case Actions.SET_SORTBY:
         return {
            ...state,
            sortBy: action.payload,
         }


      default:
         return state;
   }
}

export default homeReducer;
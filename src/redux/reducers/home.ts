import { IState, ActionTypes, Actions } from "../../types/home"

const initialState: IState = {
   items: [],
   isFetching: false,
   error: null,
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
         }

      case Actions.SET_ERROR:
         return {
            ...state,
            error: action.payload,
         }

      default:
         return state;
   }
}

export default homeReducer;
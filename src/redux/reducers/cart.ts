import { Actions, ActionTypesCart, IItems, ISelectedItem, IStateCart } from "../../types/cart";

const getNewTotalPrice = (items: IItems) => {   //totalPrice
   const sum = Object.values(items)
      .map((arr) => {
         return arr.map(({ price }: ISelectedItem) => price);
      })
      .reduce((prev, curr) => {
         const itemSum = curr.reduce((prev: number, curr: number) => prev + curr, 0);

         return itemSum + prev;
      }, 0);

   return sum;
}

const getNewTotalCount = (items: IItems) => {   //totalCount
   const sum = Object.values(items)
      .map((arr) => {
         return arr.length;
      })
      .reduce((prev, curr) => {
         return prev + curr;
      }, 0);

   return sum;
}

export const initialState: IStateCart = {
   items: {},
   totalCount: 0,
   totalPrice: 0,
}

// reducer

const cartReducer = (state = initialState, action: ActionTypesCart) => {
   switch (action.type) {
      case Actions.SET_NEW_ITEM:
         let newItems;

         const isExist = state.items[action.payload.id];

         if (!isExist) {
            newItems = {
               ...state.items,
               [action.payload.id]: [action.payload],
            }

         } else {
            newItems = {
               ...state.items,
               [action.payload.id]: [
                  ...state.items[action.payload.id],
                  action.payload,
               ]
            }

         }

         const newTotalPrice = getNewTotalPrice(newItems);
         const newTotalCount = getNewTotalCount(newItems);

         return {
            ...state,
            items: newItems,
            totalPrice: newTotalPrice,
            totalCount: newTotalCount,
         };

      case Actions.CLEAR_CART:
         return {
            totalCount: 0,
            totalPrice: 0,
            items: {}
         }

      case Actions.DELETE_ITEM:
         let itemsAfterDel;

         const isLastItem = state.items[action.payload].length === 1 ? true : false;
         const totalPriceAfterDel = state.totalPrice - state.items[action.payload][0].price;
         const totalCountAfterDel = state.totalCount - 1;

         if (isLastItem) {
            itemsAfterDel = {
               ...state.items,
               [action.payload]: state.items[action.payload].slice(1),
            }

            delete itemsAfterDel[action.payload];

         } else {
            itemsAfterDel = {
               ...state.items,
               [action.payload]: state.items[action.payload].slice(1),
            }
         }

         return {
            ...state,
            items: itemsAfterDel,
            totalCount: totalCountAfterDel,
            totalPrice: totalPriceAfterDel,
         };

      case Actions.ADD_ITEM:
         let itemsAfterAdd;

         const initItem = state.items[action.payload][0];
         const totalPriceAfterAdd = state.totalPrice + initItem.price;
         const totalCountAfterAdd = state.totalCount + 1;

         itemsAfterAdd = {
            ...state.items,
            [action.payload]: [...state.items[action.payload], initItem],
         }

         return {
            ...state,
            items: itemsAfterAdd,
            totalCount: totalCountAfterAdd,
            totalPrice: totalPriceAfterAdd,
         };

      case Actions.REMOVE_SECTION:
         const sectionLength = state.items[action.payload].length;
         const sectionPrice = state.items[action.payload][0].price * sectionLength;

         const totalPriceAfterRem = state.totalPrice - sectionPrice;
         const totalCountAfterRem = state.totalCount - sectionLength;

         const itemsWithoutSection = {
            ...state.items,
            [action.payload]: state.items[action.payload].slice(1),
         }

         delete itemsWithoutSection[action.payload];

         return {
            ...state,
            items: itemsWithoutSection,
            totalCount: totalCountAfterRem,
            totalPrice: totalPriceAfterRem,
         };


      default:
         return state;
   }
}

export default cartReducer;
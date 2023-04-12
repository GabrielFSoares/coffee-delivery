import { itemsInCart } from './reducers'

export enum ActionTypes {
  ADD_ITEM_IN_CART = 'ADD_ITEM_IN_CART',
}

export function addItemInCartAction(itemInCart: itemsInCart) {
  return {
    type: ActionTypes.ADD_ITEM_IN_CART,
    payload: {
      itemInCart,
    },
  }
}

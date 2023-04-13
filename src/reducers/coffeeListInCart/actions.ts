import { itemInCart } from '../../contexts/ItemsInCartContext'

export enum ActionTypes {
  ADD_ITEM_IN_CART = 'ADD_ITEM_IN_CART',
}

export function addItemInCartAction(newItemInCart: itemInCart) {
  return {
    type: ActionTypes.ADD_ITEM_IN_CART,
    payload: {
      newItemInCart,
    },
  }
}

import { itemInCart } from '../../contexts/ItemsInCartContext'

export enum ActionTypes {
  ADD_ITEM_IN_CART = 'ADD_ITEM_IN_CART',
  ADD_ITEM_QUANTITY_TO_CART = 'ADD_ITEM_QUANTITY_TO_CART',
  REMOVE_ITEM_IN_CART = 'REMOVE_ITEM_IN_CART',
  EMPTY_CART = 'EMPTY_CART',
}

export function addItemInCartAction(newItemInCart: itemInCart) {
  return {
    type: ActionTypes.ADD_ITEM_IN_CART,
    payload: {
      newItemInCart,
    },
  }
}

export function addItemQuantityToCartAction(
  newItemQuantityInCart: itemInCart,
  action: string,
) {
  return {
    type: ActionTypes.ADD_ITEM_QUANTITY_TO_CART,
    payload: {
      newItemQuantityInCart,
      action,
    },
  }
}

export function removeItemInCartAction(coffeeId: string, quantity: number) {
  return {
    type: ActionTypes.REMOVE_ITEM_IN_CART,
    payload: {
      coffeeId,
      quantity,
    },
  }
}

export function emptyCartAction() {
  return {
    type: ActionTypes.EMPTY_CART,
  }
}

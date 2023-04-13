import produce from 'immer'
import { itemInCart } from '../../contexts/ItemsInCartContext'
import { ActionTypes } from './actions'

export interface itemsInCartState {
  itemsInCart: itemInCart[]
  quantityOfItemsInCart: number
}

export function CoffeeListInCartReducer(state: itemsInCartState, action: any) {
  if (action.type === ActionTypes.ADD_ITEM_IN_CART) {
    const currentItemIndex = state.itemsInCart.findIndex((item) => {
      return item.coffeeId === action.payload.newItemInCart.coffeeId
    })

    return produce(state, (draft) => {
      if (currentItemIndex < 0) {
        draft.itemsInCart.push(action.payload.newItemInCart)
      } else {
        draft.itemsInCart[currentItemIndex].quantity =
          draft.itemsInCart[currentItemIndex].quantity +
          action.payload.newItemInCart.quantity
      }

      draft.quantityOfItemsInCart =
        draft.quantityOfItemsInCart + action.payload.newItemInCart.quantity
    })
  }

  return state
}

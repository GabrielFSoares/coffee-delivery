import produce from 'immer'
import { itemInCart } from '../../contexts/ItemsInCartContext'
import { ActionTypes } from './actions'

export interface itemsInCartState {
  itemsInCart: itemInCart[]
  quantityOfItemsInCart: number
}

export function CoffeeListInCartReducer(state: itemsInCartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM_IN_CART: {
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

    case ActionTypes.ADD_ITEM_QUANTITY_TO_CART: {
      const currentItemIndex = state.itemsInCart.findIndex((item) => {
        return item.coffeeId === action.payload.newItemQuantityInCart.coffeeId
      })
      return produce(state, (draft) => {
        if (action.payload.action === 'more') {
          draft.itemsInCart[currentItemIndex].quantity++
          draft.quantityOfItemsInCart++
        } else if (action.payload.action === 'less') {
          draft.itemsInCart[currentItemIndex].quantity--
          draft.quantityOfItemsInCart--
        }
      })
    }

    case ActionTypes.REMOVE_ITEM_IN_CART: {
      const currentItemIndex = state.itemsInCart.findIndex((item) => {
        return item.coffeeId === action.payload.coffeeId
      })

      return produce(state, (draft) => {
        draft.quantityOfItemsInCart =
          draft.quantityOfItemsInCart - action.payload.quantity
        draft.itemsInCart.splice(currentItemIndex, 1)
      })
    }
  }

  return state
}

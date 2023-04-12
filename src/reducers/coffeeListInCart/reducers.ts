import { ActionTypes } from './actions'

export interface itemsInCart {
  coffeeId: string
  quantityOfItemsInCart: number
}

export function CoffeeListInCartReducer(state: itemsInCart, action: any) {
  console.log(state, action.type)
  if (action.type === ActionTypes.ADD_ITEM_IN_CART) {
    console.log('chegou')
    return {
      ...state,
      coffeeId: action.payload.itemInCart.coffeeId,
      quantityOfItemsInCart: action.payload.itemInCart.quantity++,
    }
  }
  // const stateJSON = JSON.stringify(itemsInCart)
  // localStorage.setItem('coffee list in cart', JSON.stringify(stateJSON))

  return state
}

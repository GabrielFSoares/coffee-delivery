import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { CoffeeListInCartReducer } from '../reducers/coffeeListInCart/reducers'
import { addItemInCartAction } from '../reducers/coffeeListInCart/actions'

interface ItemsInCartProps {
  quantityOfItemsInCart: number
  setItemsInCart: (quantity: number, coffeeId: string) => void
}

interface ItemsInCartContextProviderProps {
  children: ReactNode
}

export interface itemInCart {
  coffeeId: string | null
  quantity: number
}

export const ItemsInCartContext = createContext({} as ItemsInCartProps)

export function ItemsInCartContextProvider({
  children,
}: ItemsInCartContextProviderProps) {
  const [itemsInCartState, dispach] = useReducer(
    CoffeeListInCartReducer,
    {
      itemsInCart: [],
      quantityOfItemsInCart: 0,
    },
    (initialState) => {
      const storageStateAsJSON = localStorage.getItem(
        '@coffee-delivery:coffee-list-in-cart',
      )
      console.log(storageStateAsJSON)

      if (storageStateAsJSON) {
        return JSON.parse(storageStateAsJSON)
      }

      return initialState
    },
  )

  const { quantityOfItemsInCart } = itemsInCartState

  useEffect(() => {
    const stateJSON = JSON.stringify(itemsInCartState)

    localStorage.setItem('@coffee-delivery:coffee-list-in-cart', stateJSON)
  }, [itemsInCartState])

  function setItemsInCart(quantity: number, coffeeId: string) {
    const newItemInCart: itemInCart = {
      coffeeId,
      quantity,
    }

    dispach(addItemInCartAction(newItemInCart))
  }

  return (
    <ItemsInCartContext.Provider
      value={{ quantityOfItemsInCart, setItemsInCart }}
    >
      {children}
    </ItemsInCartContext.Provider>
  )
}

import { createContext, ReactNode, useState } from 'react'

interface ItemsInCartContextType {
  quantityOfItemsInCart: number
  setItemsInCart: (quantity: number) => void
}

interface ItemsInCartContextProviderProps {
  children: ReactNode
}

// interface ItemsInCartType {
//   quantity: number
//   coffeeId: string
// }

export const ItemsInCartContext = createContext({} as ItemsInCartContextType)

export function ItemsInCartContextProvider({
  children,
}: ItemsInCartContextProviderProps) {
  const [quantityOfItemsInCart, setQuantityOfItemsInCart] = useState(0)

  function setItemsInCart(quantity: number) {
    setQuantityOfItemsInCart(quantityOfItemsInCart + quantity)
  }

  return (
    <ItemsInCartContext.Provider
      value={{ quantityOfItemsInCart, setItemsInCart }}
    >
      {children}
    </ItemsInCartContext.Provider>
  )
}

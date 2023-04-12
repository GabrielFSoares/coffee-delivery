import { createContext, ReactNode, useReducer } from 'react'
import { CoffeeListInCartReducer } from '../reducers/coffeeListInCart/reducers'
import {
  ActionTypes,
  addItemInCartAction,
} from '../reducers/coffeeListInCart/actions'

interface ItemsInCartProps {
  quantityOfItemsInCart: number
  setItemsInCart: (quantity: number, coffeeId: string) => void
}

interface ItemsInCartContextProviderProps {
  children: ReactNode
}

export const ItemsInCartContext = createContext({} as ItemsInCartProps)

export function ItemsInCartContextProvider({
  children,
}: ItemsInCartContextProviderProps) {
  // const [quantityOfItemsInCart, setQuantityOfItemsInCart] = useState(0)
  const [itemsInCartState, dispach] = useReducer(CoffeeListInCartReducer, {
    coffeeId: '',
    quantityOfItemsInCart: 0,
  })

  const { quantityOfItemsInCart } = itemsInCartState

  // useEffect(() => {
  //   const stateJSON = JSON.stringify(itemsInCartState)

  //   console.log(itemsInCartState)

  //   localStorage.setItem('coffee list in cart', JSON.stringify(stateJSON))
  // }, [itemsInCartState])

  function setItemsInCart(quantity: number, coffeeId: string) {
    const itemInCart = {
      coffeeId,
      quantityOfItemsInCart: quantity,
    }

    // console.log(itemInCart)
    dispach(addItemInCartAction(itemInCart))

    // setQuantityOfItemsInCart(quantityOfItemsInCart + quantity)
  }

  return (
    <ItemsInCartContext.Provider
      value={{ quantityOfItemsInCart, setItemsInCart }}
    >
      {children}
    </ItemsInCartContext.Provider>
  )
}

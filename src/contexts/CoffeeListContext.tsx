import { ReactNode, createContext, useEffect, useState } from 'react'
import { CoffeListItemProps } from '../pages/Home/components/coffee-list-item'

interface CoffeeListContextProviderProps {
  children: ReactNode
}

interface CoffeeListProps {
  coffeeList: CoffeListItemProps[]
}

export const CoffeeListContext = createContext({} as CoffeeListProps)

export function CoffeeListContextProvider({
  children,
}: CoffeeListContextProviderProps) {
  const [coffeeList, setCoffeeList] = useState([])

  useEffect(() => {
    fetch('./src/APIs/coffe-list.json')
      .then((res) => res.json())
      .then((res) => {
        setCoffeeList(res.data)
      })
  }, [])

  return (
    <CoffeeListContext.Provider value={{ coffeeList }}>
      {children}
    </CoffeeListContext.Provider>
  )
}

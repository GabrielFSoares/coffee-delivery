import { Minus, Plus, ShoppingCartSimple } from '@phosphor-icons/react'
import { useContext, useState } from 'react'
import { ItemsInCartContext } from '../../../../contexts/ItemsInCartContext'
import {
  CoffeeItemContainer,
  CoffeeItemFooter,
  ItemCategory,
  PutInCartButton,
} from './style'

export interface CoffeListItemProps {
  id: string
  title: string
  subtitle: string
  category: {}
  image: string
  price: string
}

export function CoffeeListItem(item: CoffeListItemProps) {
  const { setItemsInCart } = useContext(ItemsInCartContext)
  const [selectedItemQuantity, setSelectedItemQuantity] = useState(1)

  function handleMoreOrLessInTheAmountOfItems(action: string) {
    if (action === 'more') {
      setSelectedItemQuantity(selectedItemQuantity + 1)
    }

    if (action === 'less' && selectedItemQuantity > 1) {
      setSelectedItemQuantity(selectedItemQuantity - 1)
    }
  }

  function handleSetItemsInCart(quantity: number, coffeeId: string) {
    setItemsInCart(quantity)
    console.log(coffeeId)
  }

  return (
    <CoffeeItemContainer>
      <img src={item.image} alt="coffee icon" />
      <ItemCategory>
        {Object.values(item.category).map((type: any, index) => (
          <span key={index}>{type}</span>
        ))}
      </ItemCategory>
      <h1>{item.title}</h1>
      <p>{item.subtitle}</p>

      <CoffeeItemFooter>
        <div>
          <span>
            R$ <span>{item.price.replace('.', ',')}</span>
          </span>
        </div>
        <div>
          <div>
            <button
              type="button"
              onClick={() => handleMoreOrLessInTheAmountOfItems('less')}
            >
              <Minus size={14} />
            </button>
            <span>{selectedItemQuantity}</span>
            <button
              type="button"
              onClick={() => handleMoreOrLessInTheAmountOfItems('more')}
            >
              <Plus size={14} />
            </button>
          </div>
          <PutInCartButton
            type="button"
            onClick={() => handleSetItemsInCart(selectedItemQuantity, item.id)}
          >
            <ShoppingCartSimple size={22} weight="fill" />
          </PutInCartButton>
        </div>
      </CoffeeItemFooter>
    </CoffeeItemContainer>
  )
}

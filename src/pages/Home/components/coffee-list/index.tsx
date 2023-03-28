import {
  CoffeeListContainer,
  CoffeeListHeader,
  CoffeeItemContainer,
  CoffeeListItems,
  CoffeeItemFooter,
  ItemCategory,
} from './styles'
import { useEffect, useState } from 'react'
import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'

interface ItemCoffeListProps {
  id: string
  title: string
  subtitle: string
  category: {}
  image: string
  price: number
}

export function CoffeeList() {
  const [coffeeList, setCofeeList] = useState([])

  useEffect(() => {
    fetch('./src/APIs/coffe-list.json')
      .then((res) => res.json())
      .then((res) => setCofeeList(res.data))
  })

  return (
    <CoffeeListContainer>
      <CoffeeListHeader>
        <h1>Nossos cafés</h1>
        <nav>
          <button>TRADICIONAL</button>
          <button>ESPECIAL</button>
          <button>COM LEITE</button>
          <button>ALCOÓLICO</button>
          <button>GELADO</button>
        </nav>
      </CoffeeListHeader>
      <CoffeeListItems>
        {coffeeList.map((item: ItemCoffeListProps) => (
          <CoffeeItemContainer key={item.id}>
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
                  R$<span>{item.price.toString()}0</span>
                </span>
              </div>
              <div>
                <div>
                  <button type="button">
                    <Minus size={14} />
                  </button>
                  <span>0</span>
                  <button type="button">
                    <Plus size={14} />
                  </button>
                </div>
                <button>
                  <ShoppingCart size={22} weight="fill" />
                </button>
              </div>
            </CoffeeItemFooter>
          </CoffeeItemContainer>
        ))}
      </CoffeeListItems>
    </CoffeeListContainer>
  )
}

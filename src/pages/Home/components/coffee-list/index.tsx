import {
  CoffeeListContainer,
  CoffeeListHeader,
  CoffeeItemContainer,
  CoffeeListItems,
} from './styles'
import { useEffect, useState } from 'react'

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
        {coffeeList.map((item: any) => (
          <CoffeeItemContainer key={item.id}>
            <img src={item.image} alt="coffee icon" />
            <span>{item.category}</span>
            <h1>{item.title}</h1>
            <p>{item.subtitle}</p>
          </CoffeeItemContainer>
        ))}
      </CoffeeListItems>
    </CoffeeListContainer>
  )
}

import {
  CoffeeListContainer,
  CoffeeListItemContainer,
  HomeContainer,
  InfoContainer,
} from './styles'
import imageHome from '../../assets/Imagem.png'

import { ItemsIntro } from './components/intro-items'

import { useContext, useState } from 'react'
import {
  CoffeeListItem,
  CoffeListItemProps,
} from './components/coffee-list-item'
import { CoffeeListContext } from '../../contexts/CoffeeListContext'

export function Home() {
  const { coffeeList } = useContext(CoffeeListContext)
  const [filter, setFilter] = useState('')

  const filteredCoffeeList =
    filter.length > 0
      ? coffeeList.filter((item) =>
          Object.values(item.category).includes(filter),
        )
      : coffeeList

  function handleFilterCoffeeList(type: string) {
    setFilter(type.toUpperCase())
  }

  return (
    <div>
      <HomeContainer>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <InfoContainer>
            <ItemsIntro
              icon="ShoppingCart"
              text="Compra simples e segura"
              variant="yellow-dark"
            />
            <ItemsIntro
              icon="Package"
              text="Embalagem mantém o café intacto"
              variant="base-text"
            />
            <ItemsIntro
              icon="Timer"
              text="Entrega rápida e rastreada"
              variant="yellow"
            />
            <ItemsIntro
              icon="Coffee"
              text="O café chega fresquinho até você"
              variant="purple"
            />
          </InfoContainer>
        </div>

        <div>
          <img src={imageHome} alt="imagem" />
        </div>
      </HomeContainer>

      <CoffeeListContainer>
        <header>
          <h1>Nossos cafés</h1>
          <nav>
            <input
              type="radio"
              id="traditional"
              name="filterCoffeeList"
              onClick={() => handleFilterCoffeeList('TRADICIONAL')}
            />
            <label htmlFor="traditional">TRADICIONAL</label>
            <input
              type="radio"
              id="special"
              name="filterCoffeeList"
              onClick={() => handleFilterCoffeeList('ESPECIAL')}
            />
            <label htmlFor="special">ESPECIAL</label>
            <input
              type="radio"
              id="withMilk"
              name="filterCoffeeList"
              onClick={() => handleFilterCoffeeList('COM LEITE')}
            />
            <label htmlFor="withMilk">COM LEITE</label>
            <input
              type="radio"
              id="alcoholic"
              name="filterCoffeeList"
              onClick={() => handleFilterCoffeeList('ALCOÓLICO')}
            />
            <label htmlFor="alcoholic">ALCOÓLICO</label>
            <input
              type="radio"
              id="iced"
              name="filterCoffeeList"
              onClick={() => handleFilterCoffeeList('GELADO')}
            />
            <label htmlFor="iced">GELADO</label>
          </nav>
        </header>
        <CoffeeListItemContainer>
          {filteredCoffeeList.map((item: CoffeListItemProps) => {
            return (
              <CoffeeListItem
                key={item.id}
                id={item.id}
                title={item.title}
                subtitle={item.subtitle}
                category={item.category}
                image={item.image}
                price={item.price}
              />
            )
          })}
        </CoffeeListItemContainer>
      </CoffeeListContainer>
    </div>
  )
}

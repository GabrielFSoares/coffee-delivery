import {
  CoffeeListContainer,
  CoffeeListItemContainer,
  FiltersMenu,
  FiltersMenuButton,
  HomeContainer,
  InfoContainer,
} from './styles'
import imageHome from '../../assets/Imagem.png'

import { ItemsIntro } from './components/intro-items'

import { useContext, useState, MouseEvent } from 'react'
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

  function handleFilterCoffeeList(
    type: string,
    event: MouseEvent<HTMLButtonElement>,
  ) {
    if (event.currentTarget.getAttribute('data-state') === 'unchecked') {
      setFilter(type.toUpperCase())
      event.currentTarget.setAttribute('data-state', 'checked')
    } else {
      setFilter('')
      event.currentTarget.setAttribute('data-state', 'unchecked')
    }
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
          <FiltersMenu>
            <FiltersMenuButton
              value="traditional"
              onClick={(e) => handleFilterCoffeeList('TRADICIONAL', e)}
            >
              TRADICIONAL
            </FiltersMenuButton>
            <FiltersMenuButton
              value="special"
              onClick={(e) => handleFilterCoffeeList('ESPECIAL', e)}
            >
              ESPECIAL
            </FiltersMenuButton>
            <FiltersMenuButton
              value="withMilk"
              onClick={(e) => handleFilterCoffeeList('COM LEITE', e)}
            >
              COM LEITE
            </FiltersMenuButton>
            <FiltersMenuButton
              value="alcoholic"
              onClick={(e) => handleFilterCoffeeList('ALCOÓLICO', e)}
            >
              ALCOÓLICO
            </FiltersMenuButton>
            <FiltersMenuButton
              value="iced"
              onClick={(e) => handleFilterCoffeeList('GELADO', e)}
            >
              GELADO
            </FiltersMenuButton>
          </FiltersMenu>
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

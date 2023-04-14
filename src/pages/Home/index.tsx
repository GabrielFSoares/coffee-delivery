import {
  CoffeeListContainer,
  CoffeeListItemContainer,
  HomeContainer,
  InfoContainer,
} from './styles'
import imageHome from '../../assets/Imagem.png'

import { ItemsIntro } from './components/items-intro'

import { useContext, useEffect, useState } from 'react'
import {
  CoffeeListItem,
  CoffeListItemProps,
} from './components/coffee-list-item'
import { CoffeeListContext } from '../../contexts/CoffeeListContext'

export function Home() {
  const { coffeeList } = useContext(CoffeeListContext)

  const [coffeeListFiltered, setCoffeeListFiltered] = useState(
    Array<CoffeListItemProps>,
  )
  const [filter, setFilter] = useState('')

  useEffect(() => {
    if (filter === '') {
      setCoffeeListFiltered(coffeeList)
    } else {
      const filteredCoffeeList = coffeeList.filter((item) => {
        let correctFilter = false
        Object.values(item.category).filter((category) => {
          if (filter === category) {
            correctFilter = true
          }

          return 0
        })

        return correctFilter ? item : 0
      })

      setCoffeeListFiltered(filteredCoffeeList)
    }
  }, [filter, coffeeList])

  function filterCoffeeList(type: string) {
    setFilter(type)
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
            <button onClick={() => filterCoffeeList('TRADICIONAL')}>
              TRADICIONAL
            </button>
            <button onClick={() => filterCoffeeList('ESPECIAL')}>
              ESPECIAL
            </button>
            <button onClick={() => filterCoffeeList('COM LEITE')}>
              COM LEITE
            </button>
            <button onClick={() => filterCoffeeList('ALCOÓLICO')}>
              ALCOÓLICO
            </button>
            <button onClick={() => filterCoffeeList('GELADO')}>GELADO</button>
          </nav>
        </header>
        <CoffeeListItemContainer>
          {coffeeListFiltered.map((item: CoffeListItemProps) => {
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

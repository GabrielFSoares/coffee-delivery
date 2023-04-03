import {
  CoffeeListContainer,
  CoffeeListItemContainer,
  HomeContainer,
  InfoContainer,
} from './styles'
import imageHome from '../../assets/Imagem.png'

import { ItemsIntro } from './components/items-intro'

import { useEffect, useState } from 'react'
import {
  CoffeeListItem,
  CoffeListItemProps,
} from './components/coffee-list-item'

export function Home() {
  const [coffeeList, setCofeeList] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    fetch('./src/APIs/coffe-list.json')
      .then((res) => res.json())
      .then((res) => {
        Object.values(res.data).filter((item) => {
          return 0
        })
      })

    console.log('test')
  }, [filter])

  function filterCoffeeList(type: string) {
    const filteredCoffeeList = coffeeList.filter((item: CoffeListItemProps) => {
      // const itemCategory = Object.values(item.category)
      // const category = itemCategory.filter((category) => {
      //   console.log(category)
      //   return category === 'TRADICIONAL'
      // })
      let test = false

      Object.values(item.category).filter((category) => {
        if (type === category) {
          console.log(category)
          test = true
        }

        return 0
      })

      if (test) {
        return item
      }

      return 0
    })
    console.log(filteredCoffeeList)
    setCofeeList(filteredCoffeeList)
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
          {coffeeList.map((item: CoffeListItemProps) => {
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

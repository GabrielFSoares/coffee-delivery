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
  // const [selectedItemQuantity, setSelectedItemQuantity] = useState(1)

  useEffect(() => {
    fetch('./src/APIs/coffe-list.json')
      .then((res) => res.json())
      .then((res) => setCofeeList(res.data))
  })

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
            <button>TRADICIONAL</button>
            <button>ESPECIAL</button>
            <button>COM LEITE</button>
            <button>ALCOÓLICO</button>
            <button>GELADO</button>
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

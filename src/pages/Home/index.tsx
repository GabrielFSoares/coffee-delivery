import { HomeContainer, InfoContainer } from './styles'
import imageHome from '../../assets/Imagem.png'

import { CoffeeList } from './components/coffee-list'
import { ItemsIntro } from './components/items-intro'

export function Home() {
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

      <CoffeeList />
    </div>
  )
}

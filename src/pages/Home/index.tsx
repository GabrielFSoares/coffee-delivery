import { HomeContainer, InfoContainer } from './styles'
import imageHome from '../../assets/Imagem.png'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'

export function Home() {
  return (
    <HomeContainer>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>

        <InfoContainer>
          <div>
            <span id="item-intro-1">
              <ShoppingCart size={16} weight="fill" />
            </span>
            Compra simples e segura
          </div>
          <div>
            <span id="item-intro-2">
              <Package size={16} weight="fill" />
            </span>
            Embalagem mantém o café intacto
          </div>
          <div>
            <span id="item-intro-3">
              <Timer size={16} weight="fill" />
            </span>
            Entrega rápida e rastreada
          </div>
          <div>
            <span id="item-intro-4">
              <Coffee size={16} weight="fill" />
            </span>
            O café chega fresquinho até você
          </div>
        </InfoContainer>
      </div>

      <div>
        <img src={imageHome} alt="imagem" />
      </div>
    </HomeContainer>
  )
}

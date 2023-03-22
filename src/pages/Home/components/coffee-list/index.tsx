import { CoffeeListContainer, CoffeeListHeader } from './styles'

export function CoffeeList() {
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
    </CoffeeListContainer>
  )
}

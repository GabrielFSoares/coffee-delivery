import { Minus, Plus } from '@phosphor-icons/react'
import { ButtonMoreOrLessContainer } from './styles'

interface ButtonMoreOrLessProps {
  selectedItemQuantity: number
  moreOrLessInTheAmountOfItems: (action: string) => void
}

export function ButtonMoreOrLess({
  selectedItemQuantity,
  moreOrLessInTheAmountOfItems,
}: ButtonMoreOrLessProps) {
  return (
    <ButtonMoreOrLessContainer>
      <button
        type="button"
        onClick={() => moreOrLessInTheAmountOfItems('less')}
      >
        <Minus size={14} />
      </button>
      <span>{selectedItemQuantity}</span>
      <button
        type="button"
        onClick={() => moreOrLessInTheAmountOfItems('more')}
      >
        <Plus size={14} />
      </button>
    </ButtonMoreOrLessContainer>
  )
}

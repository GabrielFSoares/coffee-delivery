import { Minus, Plus } from '@phosphor-icons/react'
import { ButtonMoreOrLessContainer } from './styles'

interface ButtonMoreOrLessProps {
  selectedItemQuantity: number
  setSelectedItemQuantity: (quantity: number) => void
}

export function ButtonMoreOrLess({
  selectedItemQuantity,
  setSelectedItemQuantity,
}: ButtonMoreOrLessProps) {
  function handleMoreOrLessInTheAmountOfItems(action: string) {
    if (action === 'more') {
      setSelectedItemQuantity(selectedItemQuantity + 1)
    }

    if (action === 'less' && selectedItemQuantity > 1) {
      setSelectedItemQuantity(selectedItemQuantity - 1)
    }
  }

  return (
    <ButtonMoreOrLessContainer>
      <button
        type="button"
        onClick={() => handleMoreOrLessInTheAmountOfItems('less')}
      >
        <Minus size={14} />
      </button>
      <span>{selectedItemQuantity}</span>
      <button
        type="button"
        onClick={() => handleMoreOrLessInTheAmountOfItems('more')}
      >
        <Plus size={14} />
      </button>
    </ButtonMoreOrLessContainer>
  )
}

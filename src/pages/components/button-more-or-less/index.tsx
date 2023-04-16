import { Minus, Plus } from '@phosphor-icons/react'
import { ButtonMoreOrLessContainer } from './styles'

interface ButtonMoreOrLessProps {
  selectedItemQuantity: number
  setSelectedItemQuantity: (
    quantity: number,
    id: string,
    action: string,
  ) => void
  height?: string
  id: string
}

export function ButtonMoreOrLess({
  selectedItemQuantity,
  setSelectedItemQuantity,
  height = '2.375rem',
  id,
}: ButtonMoreOrLessProps) {
  function handleMoreOrLessInTheAmountOfItems(action: string) {
    if (action === 'more') {
      setSelectedItemQuantity(selectedItemQuantity + 1, id, action)
    }

    if (action === 'less' && selectedItemQuantity > 1) {
      setSelectedItemQuantity(selectedItemQuantity - 1, id, action)
    }
  }

  return (
    <ButtonMoreOrLessContainer height={height}>
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

import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { itemColorVariant, ItemsIntroContainer } from './style'

interface itemsIntroProps {
  icon: 'ShoppingCart' | 'Package' | 'Timer' | 'Coffee'
  text: string
  variant?: itemColorVariant
}

export function ItemsIntro({
  icon,
  text,
  variant = 'yellow',
}: itemsIntroProps) {
  function iconChange(icon: string) {
    if (icon === 'ShoppingCart') {
      return <ShoppingCart size={16} weight="fill" />
    }

    if (icon === 'Package') {
      return <Package size={16} weight="fill" />
    }

    if (icon === 'Timer') {
      return <Timer size={16} weight="fill" />
    }

    if (icon === 'Coffee') {
      return <Coffee size={16} weight="fill" />
    }
  }

  return (
    <ItemsIntroContainer variant={variant}>
      <span>{iconChange(icon)}</span>
      {text}
    </ItemsIntroContainer>
  )
}

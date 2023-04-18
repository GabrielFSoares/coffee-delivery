import { MapPin } from '@phosphor-icons/react'
import { itemColorVariant } from '../../../Home/components/intro-items/style'

interface SummaryItemsProps {
  icon: 'MapPin'
  variant?: itemColorVariant
}

export function SummaryItems({ icon, variant }: SummaryItemsProps) {
  function iconChange(icon: string) {
    if (icon === 'ShoppingCart') {
      return <MapPin size={16} />
    }
  }
  return <div></div>
}

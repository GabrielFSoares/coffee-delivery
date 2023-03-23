import styled from 'styled-components'

export type itemColorVariant = 'yellow-dark' | 'yellow' | 'purple' | 'gray'

interface ItemsIntroContainerProps {
  variant: itemColorVariant
}

export const ItemsIntroContainer = styled.div<ItemsIntroContainerProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    display: flex;
    align-items: center;

    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    padding: 0.5rem;

    background-color: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};
  }
`

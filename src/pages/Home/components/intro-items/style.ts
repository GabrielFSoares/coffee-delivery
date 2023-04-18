import styled from 'styled-components'

export type itemColorVariant = 'yellow-dark' | 'yellow' | 'purple' | 'base-text'

export interface ItemsContainerProps {
  variant: itemColorVariant
}

export const IntroItemsContainer = styled.div<ItemsContainerProps>`
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

    background-color: ${(props) => props.theme[props.variant]};
    color: ${(props) => props.theme.white};
  }
`

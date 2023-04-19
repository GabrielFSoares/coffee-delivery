import styled from 'styled-components'
import { ItemsContainerProps } from '../../../Home/components/intro-items/style'

export const SummaryItemsContainer = styled.div<ItemsContainerProps>`
  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    > span {
      display: flex;
      align-items: center;

      width: 2rem;
      height: 2rem;
      border-radius: 100%;
      padding: 0.5rem;

      background-color: ${(props) => props.theme[props.variant]};
      color: ${(props) => props.theme.white};
    }

    p {
      font-size: 1rem !important;
      color: ${(props) => props.theme['base-text']};

      span {
        font-weight: bold;
      }
    }
  }
`

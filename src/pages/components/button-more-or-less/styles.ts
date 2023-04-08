import styled from 'styled-components'

export const ButtonMoreOrLessContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  padding: 0.53125rem 0.5rem;

  button {
    border: none;
    background: none;

    color: ${(props) => props.theme.purple};
    cursor: pointer;

    :hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }

  span {
    width: 1.25rem;
    text-align: center;
    color: ${(props) => props.theme['base-title']};
  }
`

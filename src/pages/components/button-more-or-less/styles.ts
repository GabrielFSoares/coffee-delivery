import styled from 'styled-components'

interface ButtonMoreOrLessProps {
  height: string
}

export const ButtonMoreOrLessContainer = styled.div<ButtonMoreOrLessProps>`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  padding: 0.5rem;
  height: ${(props) => props.height};

  button,
  span {
    display: flex;
    justify-content: center;
  }

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
    font-size: 0.875rem;
    width: 1.25rem;
    text-align: center;
    color: ${(props) => props.theme['base-title']};
  }
`

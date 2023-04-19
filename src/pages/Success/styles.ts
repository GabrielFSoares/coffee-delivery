import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 6.375rem;
  margin-top: 5rem;

  img {
    margin-top: 6.25rem;
  }

  div:nth-child(1) {
    h1 {
      font-size: 2rem;
      color: ${(props) => props.theme['yellow-dark']};
    }

    p {
      font-size: 1.25rem;
    }

    > div {
      display: flex;
      flex-direction: column;

      width: 526px;
      gap: 2rem;
      margin-top: 2.5rem;
      padding: 2.5rem;

      border: 1px solid transparent;
      background: linear-gradient(
            ${(props) => props.theme.background},
            ${(props) => props.theme.background}
          )
          padding-box,
        linear-gradient(
            to right,
            ${(props) => props.theme.yellow},
            ${(props) => props.theme.purple}
          )
          border-box;
      border-radius: 6px 36px;
    }
  }
`

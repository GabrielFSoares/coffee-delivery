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
  }
`

export const SummaryItemsContainer = styled.div`
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
`

interface SummaryItemsProps {
  variant: 'yellow-dark' | 'yellow' | 'purple'
}

export const SummaryItemsContent = styled.div<SummaryItemsProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  & > span {
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
`

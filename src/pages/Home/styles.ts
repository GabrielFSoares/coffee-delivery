import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3.5rem;

  margin: 0px 10rem;
  padding: 5.75rem 0px;

  h1 {
    font-size: 3rem;
  }

  #text-intro p {
    margin-top: 1rem;
    margin-bottom: 4.125rem;
    font-size: 1.25rem;
  }
`
export const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 1.25rem 2.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  span {
    display: flex;
    align-items: center;

    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    padding: 0.5rem;

    background-color: ${(prpos) => prpos.theme['yellow-dark']};
    color: ${(props) => props.theme.white};
  }
`

import styled from 'styled-components'

export const Container = styled.div`
  margin: 70px auto 0;
  width: 920px;

  h1 {
    color: ${props => props.theme.colors.title};
  }

  p {
    font-size: 25px;
    font-weight: 300;
    margin-top: 10px;
  }

  @media screen and (max-width: 880px) {
    width: 95%;
  }
`

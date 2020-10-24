import styled from 'styled-components'

export const Container = styled.div`
  margin: 70px auto 0;
  width: 920px;
  padding-right: 120px;
  animation: fadeInTitle 380ms ease-in-out;

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
    padding-right: 0;
  }

  @keyframes fadeInTitle {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`

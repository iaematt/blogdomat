import styled from 'styled-components'

export const Container = styled.footer`
  margin: 70px auto 30px;
  width: 920px;
  padding: 20px 0 0;
  animation: fadeInFooter 380ms ease-in-out;

  @media screen and (max-width: 880px) {
    width: 95%;
    text-align: center;
  }

  @keyframes fadeInFooter {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`

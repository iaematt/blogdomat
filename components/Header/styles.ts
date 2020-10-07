import styled from 'styled-components'

export const Container = styled.header`
  width: 920px;
  margin: 60px auto 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 30px;
    font-weight: 500;
  }

  @media screen and (max-width: 880px) {
    width: 95%;
  }
`

export const Menu = styled.div`
  display: flex;
  align-items: center;

  a {
    margin: 0 12px;
    text-transform: uppercase;
    font-weight: 500;
  }

  a:last-child {
    margin-right: 0;
  }
`

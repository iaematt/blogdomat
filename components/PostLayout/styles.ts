import styled from 'styled-components'

export const Container = styled.article`
  width: 920px;
  margin: 70px auto 10px;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-gap: 15px;

  img {
    max-width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 20px;
  }
`

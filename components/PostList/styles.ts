import styled from 'styled-components'

export const Container = styled.div`
  width: 800px;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-gap: 10px;
  margin: 30px auto 10px;

  img {
    max-width: 100%;
    border-radius: 2px;
    cursor: pointer;
    opacity: 0.9;
    transition: all 0.2s ease-in-out;
  }

  img:hover {
    opacity: 1;
  }
`

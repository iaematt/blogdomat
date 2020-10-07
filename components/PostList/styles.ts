import styled from 'styled-components'

export const Container = styled.div`
  width: 920px;
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 15px;
  margin: 70px auto 10px;

  img {
    max-width: 100%;
    /* border-radius: 5px; */
    cursor: pointer;
    opacity: 0.9;
    transition: all 0.2s ease-in-out;
    /* border: 5px solid #000; */
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  }

  img:hover {
    opacity: 1;
  }

  @media screen and (max-width: 880px) {
    width: 95%;
    grid-template-columns: repeat(1, auto);
  }
`

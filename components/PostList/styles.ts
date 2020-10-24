import styled from 'styled-components'

export const Container = styled.div`
  width: 920px;
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 15px;
  margin: 70px auto 10px;

  @media screen and (max-width: 880px) {
    width: 95%;
    grid-template-columns: repeat(1, auto);
  }
`

export const Image = styled.img`
  max-width: 100%;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  filter: brightness(0.95);
  animation: fadeInImage 480ms ease-in-out;

  &:hover {
    transform: scale(1.05);
    filter: brightness(1);
  }

  @keyframes fadeInImage {
    from {
      opacity: 0;
      margin-top: -15px;
    }

    to {
      opacity: 1;
      margin-top: 0;
    }
  }
`

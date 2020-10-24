import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px 0;

  position: sticky;
  position: --webkit-sticky;
  top: 200px;

  svg {
    border-radius: 2px;
    opacity: 0.8;
    transition: all 0.2s ease-in-out;
    margin: 0 5px;
  }

  svg:hover {
    opacity: 1;
  }

  @media screen and (max-width: 880px) {
    position: static;
  }
`

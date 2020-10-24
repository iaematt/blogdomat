import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  animation: fadeInStatus 380ms ease-in-out;

  @keyframes fadeInStatus {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  span {
    display: block;
    text-align: center;
    margin-top: 65px;
    z-index: 999;
  }
`

export const Error = styled.h1`
  font-size: 150px;
  opacity: 0.04;
  text-align: center;
  z-index: 1;
`

export const Message = styled.p`
  text-align: center;
  font-size: 25px;
  margin-top: -90px;
  z-index: 997;
`

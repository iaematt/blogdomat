import styled from 'styled-components'

export const Container = styled.header`
  width: 920px;
  margin: 60px auto 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  h1 {
    font-size: 30px;
    font-weight: 500;

    a {
      color: ${props => props.theme.colors.primary};
    }
  }
`

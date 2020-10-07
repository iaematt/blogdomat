import styled from 'styled-components'
import { lighten } from 'polished'

export const Container = styled.footer`
  margin: 70px auto 10px;
  width: 920px;
  padding: 20px 0 0;
  border-top: 1px solid
    ${props => lighten(0.03, props.theme.colors.background as string)};

  @media screen and (max-width: 880px) {
    width: 95%;
    text-align: center;
  }
`

import { createGlobalStyle } from 'styled-components'
import { lighten } from 'polished'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }

  body, input, textarea, button {
    font: 400 13px 'Mulish', sans-serif;
  }

  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    transition: all 0.2s ease-in-out;
  }

  a:hover {
    color: ${props => lighten(0.15, props.theme.colors.primary as string)};
  }

  h1, h2, h3, h4, h5, h6 {

  }
`

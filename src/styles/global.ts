import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    //background-color: ${props => props.theme.colors.background};
    background: rgb(24,25,26);
    background: linear-gradient(30deg, rgba(24,25,26,1) 0%, rgba(10,10,11,1) 100%);
    background-attachment: fixed;
    color: ${props => props.theme.colors.text};
  }

  body, input, textarea, button {
    font: 400 14px 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    transition: all 0.2s ease-in-out;
  }

  a:hover {
    color: ${props => props.theme.colors.secondary};
  }

  h1, h2, h3, h4, h5, h6, strong {
    //margin-top: 35px;
    font-weight: 700;
    color: ${props => props.theme.colors.title};
  }

  ::selection {
    background: ${props => props.theme.colors.selectBackground};
    color: ${props => props.theme.colors.selectColor};
  }

  p {
    margin-bottom: 20px;
  }

  pre {
    padding: 10px 15px;
    background: ${props => props.theme.colors.codeBackground};
    font: 400 13px 'Roboto Mono', sans-serif !important;
    margin-bottom: 15px;
    overflow-x: auto;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
    border-radius: 1px;
    word-wrap: break-word;
    width: 100%;
    white-space: nowrap;
  }

  em, strong {
    color: ${props => props.theme.colors.primary};
  }
`

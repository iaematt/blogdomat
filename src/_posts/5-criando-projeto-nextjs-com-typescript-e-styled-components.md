---
title: 'Criando um projeto do zero com Next.js, typescript e styled-components'
description: 'Vamos juntos configurar um projeto do zero, passo a passo, até está pronto para ser usado.'
icon: 'https://cdn.worldvectorlogo.com/logos/typescript.svg'
---

## O que é Next.js?

Next.js é uma estrutura React para desenvolver aplicativos e sites JavaScript de uma e várias páginas.

# Criando o projeto e instalando as dependências

Para criar o projeto utilize o comando

```
yarn create next-app nome-do-projeto

# Acesse a pasta do projeto e adicione suporte ao typescript
cd nome-do-projeto
yarn add typescript @types/react @types/node -D
```

Agora vamos limpar o projeto, deletando os arquivos que não vamos usar, a estrutura de pastas deverá ficar igual a imagem a seguir:

![Como ficará o projeto após deletar os arquivos desncessários](https://api.devbsb.com.br/files/09f724fdb0774b54914029122b1e090b-limpar-projeto.png)

Após você deverá renomear os arquivos _pages/\_app.js_ e _pages/index.js_ para typescript, e fazer as seguintes alterações

Arquivo: _pages/\_app.tsx_ antes:

```
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
```

Arquivo: _pages/\_app.tsx_ depois:

```
import React from 'react'
import { AppProps } from 'next/app'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp

```

Arquivo _pages/index.tsx_:

```
import React from 'react'
import Head from 'next/head'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>

      </main>
    </>
  )
}

export default Home
```

# Vamos instalar o eslint e o prettier

O eslint e prettier vai cuidar para que o código ficar legivel e padronizado

```
# Instale o eslint
yarn add eslint -D

# Instale o prettier
yarn add prettier eslint-plugin-prettier eslint-config-prettier -D

# Inicie o eslint para gerar o arquivo de configurações
yarn eslint --init
```

A seguir tem a imagem de como deverá ser a configuração do eslint

![Configuração do eslint](https://api.devbsb.com.br/files/a93649c0bfbc3abb25c239f23251591e-config-eslint.png)

Confirme a instalação com o npm e aguarde terminar, após delete o arquivo _package-lock.json_ e rode **yarn** para instalar novamente.

Agora abra o arquivo _.eslintrc.json_ e faça as adições a seguir:

```
{
  "env": {
    "browser": true,
    "es2021": true,
    "node": true,
    "jest": true
  },
  "extends": [
    "plugin:react/recommended",
    "standard",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "prettier/standard",
    "prettier/react"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint",
    "prettier"
  ],
  "rules": {
    "prettier/prettier": "error",
    "space-before-function-paren": "off",
    "react/prop-types": "off"
  }
}
```

Crie o arquivo _.eslintignore_ na raiz do projeto com o conteúdo a seguir

```
node_modules
.next
/*.js
```

Crie o arquivo de configuração do prettier _prettier.config.js_

```
module.exports = {
  semi: false,
  singleQuote: true,
  arrowParens: 'avoid',
  trailingComa: 'none',
  endOfLine: 'auto'
}
```

Crie o arquivo de configuração _babel.config.js_

```
module.exports = {
  presets: ['next/babel'],
  plugins: [['styled-components', { ssr: true }]]
}
```

# Instale o editorconfig

Instale no seu vscode a extenção editorconfig, e na raiz do seu projeto crie com o botão direito o arquivo de configuração: **Generate .editorconfig**

```
root = true

[*]
indent_style = space
indent_size = 2
charset = utf-8
end_of_line = lf
trim_trailing_whitespace = true
insert_final_newline = true
```

## Vamos ao styled-components

Faça a instalação do styled-components e das tipagens

```
yarn add styled-components
yarn add @types/styled-components -D
```

Crie um arquivo dentro da pasta _pages_ chamado _\_document.tsx_, com o seguinte conteúdo:

```
import React from 'react'
import Document, {
  DocumentInitialProps,
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
```

Agora crie o arquivo de estilos globais da aplicação dentro da pasta styles: _styles/global.ts_

```
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
```

Crie o arquivo de tema: _styles/theme.ts_

```
const theme = {
  colors: {
    background: '#18191a',
    text: '#e3e3e3',
    primary: '#ed2a4c'
  }
}

export default theme
```

Crie o arquivo de que define os tipos do tema: _styles/styled.d.ts_

```
/* eslint @typescript-eslint/no-empty-interface: "off" */
import 'styled-components'

import theme from './theme'

export type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
```

Importe o ThemeProvider do styled-components no _\_app.tsx_

```
[...]
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

return (
    <ThemeProvider theme={theme}>
      [...]

      <GlobalStyle />
    </ThemeProvider>
)

[...]
```

As variaveis globais já estarão disponíveis para uso no arquivo _styles/global.ts_ e deverá ser utilizada conforme a seguir:

```
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
  }

  a {
    color: ${props => props.theme.colors.background};
    text-decoration: none;
  }
`
```

Pronto! Tudo configurado para ser usado! Até mais.

# Código no GitHub

[Clique aqui](https://github.com/iaematt/nextjs-styled-components) para acessar todo o código no GitHub.

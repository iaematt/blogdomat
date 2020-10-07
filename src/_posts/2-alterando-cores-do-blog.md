---
title: 'Alterando as cores do blog'
description: 'Vou ensinar como alterar as cores do blog para sua as cores de sua preferência'
icon: 'https://styled-components.com/logo.png'
---

## Mágica do styled-components

Esse blog foi desenvolvido usando a mágica do styled-components (serio!!! sou fascinado), e com ele temos a facilidade de alterar as cores do blog editando apenas um arquivo que fica localizado na pasta _src/styles/theme.ts_.

```
const theme = {
  colors: {
    background: '#080808',
    text: '#e3e3e3',
    title: '#c4c4c4',
    primary: '#81D6DB',
    secondary: '#c5c5c5',
    selectBackground: '#ffffff',
    selectColor: '#000000',
    codeBackground: '#111111'
  }
}
[...]
```

## O que cada propriedade altera?

Vou explicar com detalhes o que cada propriedade altera no layout:

```
const theme = {
  colors: {
    // essa é cor de fundo do blog
    background: '#080808',
    // essa é a cor de todo o texto do blog
    text: '#e3e3e3',
    // essa é a cor de todos os titúlos do blog, ex: h1, h2 [...]
    title: '#c4c4c4',
    // essa é a cor primária do site, usada para: links,
    // itálicos, negritos [...]
    primary: '#81D6DB',
    // essa é a cor secundária, usada principalmente para o hover dos links
    secondary: '#c5c5c5',
    // cor de fundo do texto selecionado no blog
    selectBackground: '#ffffff',
    // cor do texto selecionado no blog
    selectColor: '#000000',
    // cor de fundo do bloco de código
    codeBackground: '#111111'
  }
}
[...]
```

_Viu como é fácil??_

Testa essa configuração para usar o blog sem o tema dark:

```
const theme = {
  colors: {
    background: '#eaeaea',
    text: '#141415',
    title: '#222222',
    primary: '#81D6DB',
    secondary: '#c5c5c5',
    selectBackground: '#000000',
    selectColor: '#fafafa',
    codeBackground: '#e1e1e1'
  }
}
[...]
```

## Considerações finais

Viu como é fácil deixar o blog com sua cara? Até mais!!

---
title: 'Usando NProgress em projetos next.js'
description: 'Vou ensinar como instalar e configurar o NProgress em projetos next.js.'
icon: 'https://cdn.worldvectorlogo.com/logos/javascript.svg'
---

## O que é NProgress?

O _NProgress_ é uma barra que mostra ao usuário o carregamento de uma página apartir do clique em um link, olhe a imagem a seguir:

![image](https://api.devbsb.com.br/files/2b8efaeb9385822a5f7ed95535944ed8-nprogress.png)


## Como instalar?

Para instalar você precisa adicionar o NProgress ao projeto com yarn ou npm:

```
yarn add nprogress

npm install --save nprogress
```

Após a instalação você vai acessar o link para [baixar o css](https://unpkg.com/nprogress@0.2.0/nprogress.css) do NProgress,
você deverá salvar o arquivo css dentro da pasta _public/_, ficando assim _public/nprogress.css_, faremos referencia a esse arquivo depois.

Agora abra o arquivo _pages/\_app.tsx_:

```
# Faça a importação do next/router e do NProgress
import Router from 'next/router'
import NProgress from 'nprogress'

# Import também o next/head, você vai precisar dele
import Head from 'next/head'

# Esses são os eventos disparados quando o usuário muda de página
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

# Por último, dentro do return da função,
# faça a importação do css do NProgress
[...]
return (
  <>
    <Head>
      <link rel="stylesheet" type="text/css" href="/nprogress.css" />
    </Head>
[...]
```

Prontinho, o _NProgress_ já está configurado e pronto para ser usado no seu projeto Next.js.

Veja como ficará o arquivo _\_app_:


```
import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
```

## Alterando a cor da barra 💥

Acesse o arquivo anteriormente salvo dentro da pasta _public/nprogress.css_.

```
[...]
#nprogress .bar {
  background: #29d;
[...]
```

Altere todas as cores em hexadecimal (#29d) do arquivo, para de sua escolha, por exemplo: (#f0f)

```
[...]
#nprogress .bar {
  background: #f0f;
[...]
```



Até mais!

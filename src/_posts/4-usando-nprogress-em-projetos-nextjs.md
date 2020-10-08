---
title: 'Usando nprogress em projetos next.js'
description: 'Vou ensinar como instalar e configurar o nprogress em projetos next.js.'
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

Agora abra o arquivo _\_app.tsx_:

```
// FAÇA A IMPORTAÇÃO DO NEXT/ROUTER E DO NPROGRESS
import Router from 'next/router'
import NProgress from 'nprogress'

// IMPORTE TAMBÉM O NEXT/HEAD, VOCÊ VAI PRECISAR PARA REFERENCIAR O CSS
import Head from 'next/head'

// ESSES SÃO OS EVENTOS, QUANDO NPROGRESS SERÁ INICIADO E FINALIZADO
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

// POR ÚLTIMO DENTRO DO RETURN, FAÇA A REFERENCIA AO ARQUIVO CSS
[...]
return (
  <Head>
    <link rel="stylesheet" type="text/css" href="/nprogress.css" />
  </Head>
[...]
```

Prontinho, o NProgress já está configurado e pronto para ser usado.

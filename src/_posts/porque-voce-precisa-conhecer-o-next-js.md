---
title: 'Porque você precisa conhecer o NEXT.js'
description: 'Hello there. Im Augusto Rosa (https://twitter.com/agttrosa) and today, Im going to introduce yourself to react-navigation library on a react-native simple project.'
icon: 'https://cdn.worldvectorlogo.com/logos/nextjs-3.svg'
---

Começar projetos front-end pode ser um parto. Projetos React não são exceções.

Você precisa configurar webpack, pensar na estrutura de pastas, nomenclatura dos componentes, etc, etc. E isso tudo fica mais difícil ainda quando você está começando no React, já que o ecossistema dele é imenso, ao mesmo tempo que o mesmo não possui nenhum tipo de padrão de desenvolvimento, deixando brechas para más decisões.

Felizmente, há ferramentas que nos ajudam nessa fase: uma delas é o NEXT.js.

NEXT.js é mantido pela zeit e pela comunidade open-source, e visa agilizar o processo de construção de um app React oferecendo componentes para rota, suporte a SSR (server side rendering) além de webpack já configurado para React e transpilação de ES6 e ES7 que incluem recursos como async e await. Mesmo com tudo isso, ele mantém o início simples e flexível o bastante pra escalar o projeto para o tamanho que for necessário.

## Criando o projeto do zero

Vamos começar criando a pasta do nosso projeto. Em seguida, vamos inicializa-lo para criar o arquivo package.jsonpara então adicionarmos react e next como dependências:

> mkdir my-next-app && cd my-next-app # cria e acessa a pasta do projeto
> yarn init # cria um arquivo package.json
> yarn add react react-dom next # adiciona dependecias

Aqui utilizamos o Yarn, um gerenciador de pacotes para NodeJS. Saiba mais sobre.
Crie uma pasta chamada pages na raíz do projeto. Esta pasta é a única condição para que o Next funcione, as rotas são definidas baseadas no conteúdo dela. Crie também um arquivo index.js onde será definido o componente da página inicial.

---
title: 'Criando serviços com Node.js'
description: 'Construir serviços é uma tarefa rotineira dos desenvolvedores backend.'
icon: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg'
---

Construir serviços é uma tarefa rotineira dos desenvolvedores backend. É bastante comum expor APIs externa ou internamente utilizando serviços REST. Tendo em vista essa crescente demanda de construção de serviços, elaborei esse post para explicar como, e de forma simples, podemos construir um serviço REST. Existem inúmeras tecnologias que visam facilitar essa tarefa, e nesse post iremos utilizar o Node.js com o Express para construir um serviço CRUD de usuário.

## Requisitos

O leitor deve estar familiarizado com a linguagem Javascript, Node.js e Express. Para saber um pouco mais sobre o Node.js, recomendo a leitura desse post. No que diz respeito ao Express, recomendo a leitura desse post.

## Criação do Projeto

Nesse etapa será necessário utilizar editor para o desenvolvimento. Você pode usar algum de sua preferência, eu irei utilizar aqui o Visual Studio Code, que é uma das mais populares ferramentas para desenvolvimento com Javascript.

Vamos começar então criando uma pasta chamada servico-nodejs no editor:

![image](https://miro.medium.com/max/700/1*DIzoXi21IrO7qaV6L8g4pQ.png)

A estrutura de um projeto no Node.js costuma seguir um padrão, baseado nas boas práticas de desenvolvimento. Vamos adotar o seguinte padrão:

![image](https://miro.medium.com/max/295/1*AdwtSkKb5VMNGs4YkpCQew.png)

💡 Nosso projeto exemplo é simples, por isso sua estrutura ficou pequena. Em serviços mais robustos também poderíamos ter uma pasta middleware, model , utils, entre outras. O importante é manter um padrão lógico de organização do código, para que qualquer desenvolvedor saiba onde encontrar cada artefato do projeto.

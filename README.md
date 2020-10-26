---
title: 'Como usar esse blog minimalista na vercel'
description: 'Vou mostrar como utilizar e configurar esse blog simples e mimalista'
icon: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg'
---

## blogdomat 🌠

Blog simples e minimalista desenvolvido usando Next.js, Reactjs, styled-components e MarkDown.

Utilizado como base a aula no [YouTube da Rockeseat](https://www.youtube.com/watch?v=qvetoR6V5ic), valeu Diego.

## Clone e instalação

Vou mostrar de forma simples como baixar, configurar e hospedar este blog na vercel.

Primeiro você vai clonar o repositório do [github](https://github.com/iaematt/blogdomat), você vai precisar de uma conta da [vercel](https://vercel.com) e esta logado nela:

```
# faça o clone do repositório, e escolha o nome de sua preferência
git clone https://github.com/iaematt/blogdomat.git nomedoseublog

# acesse a pasta
cd nomedoseublog

# instale as dependencias
yarn

# rode a aplicação como desenvolvimento usando a vercel
vercel dev
```

Após isso, você deverá ver um blog identico a esse acessando: [localhost:3000](http://localhost:3000).

## Arquivos a serem editados

Acesse a pasta componentes e visualize a pasta Footer e Header, você deverá alterar o arquivo index.tsx de cada uma, para alterar o nome do blog e links. Faça uma busca por _blogdomat_ e altere para o nome que desejar.

Para alterar os icones de links do header, abra o arquivo index.tsx dentro da pasta Header (em componentes), logo acesse o [react-icons](https://react-icons.github.io/react-icons/) e escolha os icones de sua preferencia e faça o importe do mesmo no arquivo e faça a substituição:

```
# padrão
import { FaGithub, FaInstagram } from 'react-icons/fa'
[...]
<FaInstagram size={24} />

# alterações feitas
import { FaGithub, FaSnapchatGhost } from 'react-icons/fa'
[...]
<FaSnapchatGhost size={24}>

# * não esqueça de editar também os links
[...]
href="https://github.com/iaematt/blogdomat"
```

A última alteração que precisa ser feita é dentro do arquivo _src/pages/api/posts.ts_, você vai precisar alterar a url do seu blog, primeiramente você precisa fazer o deploy dele na vercel para saber qual a url que será disponibilizada.

```
# faça o deploy da sua aplicação
vercel --prod
```

Agora acesse o arquivo _next.config.js_ e altere as variáveis globais, inclusive a url disponibilizada na vercel:

```
[...]
  env: {
    BLOG_NAME: 'blogdomat',
    BLOG_TITLE: "Simples e minimalista, como deve ser.",
    BLOG_DESCRIPTION: "Blog desenvolvido usando Next.js, Typescript, ...",
    BLOG_URL: 'https://blog.devbsb.com.br',
  }
[...]
```

Para alterar o favicon do site, abra o arquivo _src/pages/\_document.tsx_

```
[...]
<link
  rel="icon"
  type="image/png"
  href="https://devbsb.com.br/favicon.png"
/>
[...]
```

## Posts do blog

Os posts do blog usam [MarkDown](https://pt.wikipedia.org/wiki/Markdown), e ficam localizados dentro da pasta _src/\_posts_.

São ordenados em ordem decrecente, de acordo com o número colocado antes do post.
Na listagem o post 2 vem antes do post 1 e assim sucessivamente. Então sempre que criar um post novo lembre de colocar um número maior que o anterior seguido do nome do post.
Lembre-se de não usar espaços na criação do post, separe palavras usando traços (-).

Cada post deve conter: título, descrição e um icone (não obrigatório). Essas informações geram a imagem statica de cada post. [Veja exemplos](https://github.com/iaematt/blogdomat/tree/main/src/_posts) ou acesse a pasta _src/\_posts_ e abra qualquer arquivo.

```
---
title: 'Título do post'
description: 'Descrição do post'
icon: 'url da imagem'
---

[...]
```

## Considerações finais

Pronto, é só publicar novamente seu blog usando _vercel --prod_ e seu blog estara online com os posts.

Qualquer duvida ou sugestão entre em contato pelo [formulário](https://devbsb.com.br/contato) ou por [e-mail](mailto:matheusbastos@outlook.com).

## Licença

_Distribuído sob a licença MIT._

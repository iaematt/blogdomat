---
title: 'Mudando o layout do template da imagem'
description: 'Vou ensinar como alterar o template das imagens geradas'
icon: 'https://cdn.worldvectorlogo.com/logos/html-5.svg'
---

## Alterar o template das imagens geradas

Tendo em mente que a thumbnail é gerada a partir de uma página HTML/CSS, você precisa criar o design da página, como você desejar.

_src/pages/api/\_lib/thumbTemplate.ts_, esse é o arquivo que contém a página que gera a thumbnail.

Primeiro acesse o arquivo _src/pages/api/thumbnail.ts_

```
[...]
# PRODUCTION
const file = await getScreenshot(html, isDev, 1200, 630)

res.setHeader('Content-Type', 'image/png')
res.setHeader(
  'Cache-control',
  'public, immutable, no-transform, s-maxage=31536000, max-age=31536000'
)

return res.end(file)

# DEVELOPMENT
# res.setHeader('Content-Type', 'text/html')
# return res.end(html)
[...]
```

Você deverá alterar como o exemplo a seguir, isso fará que o acesso retorne o HTML e não a imagem.

```
[...]
// PRODUCTION
//const file = await getScreenshot(html, isDev, 1200, 630)

//res.setHeader('Content-Type', 'image/png')
//res.setHeader(
//  'Cache-control',
//  'public, immutable, no-transform, s-maxage=31536000, max-age=31536000'
//)

//return res.end(file)

// DEVELOPMENT
res.setHeader('Content-Type', 'text/html')
return res.end(html)
[...]
```

Execute o servidor usando o comando _vercel dev_.

Agora acesse a url [localhost:3000/api/thumbnail.png?title=exemplo de título](http://localhost:3000/api/thumbnail.png?title=Exemplo%20de%20titulo)

Será retornado uma página HMTL.

Faça as alterações necessárias, como cores as fontes, etc (necessário ter o conhecimento básico de HTML/CSS).
Lembre-se de alterar de volta para produção la no arquivo _src/pages/api/thumbnail.ts_

Até mais!

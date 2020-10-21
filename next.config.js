module.exports = {
  target: 'serverless',

  webpack: (config) => {
    config.module.rules.push({test:  /\.md$/, use: 'raw-loader'})
    return config
  },

  env: {
    BLOG_NAME: 'blogdomat',
    BLOG_TITLE: "Simples e minimalista, como deve ser.",
    BLOG_DESCRIPTION: "Blog desenvolvido usando Next.js, Typescript, React.js, styled-components e markdown... hospedado na famosa vercel.",
    BLOG_URL: 'https://blog.devbsb.com.br',
  }
}

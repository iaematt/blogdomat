export default function getThumbnailTemplate(title: string, icon: string) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Thumbnail</title>

    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap" rel="stylesheet">

    <style>
      body {
        margin: 0;
        font-family: Roboto, sans-serif;
        color: #EDECD8;
        background: rgb(45,199,237);
        background: linear-gradient(30deg, rgba(45,199,237,1) 0%, rgba(83,139,240,1) 100%);
        height: 100vh;
      }

      #wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
      }

      svg {
        height: 40px;
        margin-top: 80px;
      }

      h1 {
        font-size: 62px;
        line-height: 80px;

        max-width: 80%;
      }
    </style>
  </head>
  <body>
    <div id="wrapper">
      <img src=${icon} width="120" />
      <h1>${title}</h1>
    </div>
  </body>
  </html>
  `
}

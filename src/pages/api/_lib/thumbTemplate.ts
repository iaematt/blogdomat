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
        background: #222222;
        // background-image:
        // radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.2) 2%, transparent 0%),
        // radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.2) 2%, transparent 0%);
        background-size: 100px 100px;
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

      .hover-background {
        width: 120%;
        background: #292929;
        height: 200px;
        position: fixed;
        left: -20px;
        bottom: -45px;
        transform: rotate(2deg)
      }
    </style>
  </head>
  <body>
    <div id="wrapper">
      <img src=${icon} width="70" />
      <h1>${title}</h1>
    </div>

    <div class="hover-background"></div>
  </body>
  </html>
  `
}

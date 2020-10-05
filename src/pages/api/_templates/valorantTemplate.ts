export default function getValorantTemplate() {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
        <title>Valorant Theme</title>

        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          html, body {
            height: 100%;
          }

          body {
            background: #101823;
            
          }

          .red-background {
            width: 500px;
            height: 130%;
            background: #ff4654;
            transform: rotate(30deg);
            top: -189px;
            left: -123px;
            position: fixed;
          }

          .live {
            background: #888888;
            border: 4px solid #070606;
            position: fixed;
            top: 20px;
            left: 20px;
            width: 65%;
            height: 70%;
            border-radius: 2px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 30px;
            text-transform: uppercase;
            color: #555555;
          }
        </style>
      </head>

      <body>
        <div class="red-background"></div>

        <div class="live">Live Here</div>
      </body>
    </html>
  `
}
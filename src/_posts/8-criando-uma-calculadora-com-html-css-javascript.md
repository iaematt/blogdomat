---
title: 'Criando uma calculadora simples com: HTML, CSS e JavaScript'
description: 'Vou mostrar o código de como criei uma simples calculadora com o básico.'
icon: 'https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg'
---

## Calculadora 💥

Para um exercício de HTML, CSS e Javascript, desenvolvi uma calculadora, usando o báciso,
sem framework. Segue o código.

![](https://api.devbsb.com.br/files/236a136c407efe888e119ce59faaaf31-calculator.png)

Para visualizar o projeto online, [clique aqui](https://calculadora.devbsb.com.br).

Para acessar o código completo da aplicação, [clique aqui](https://github.com/iaematt/calculator).

# HTML

```
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <!-- META TAGS -->
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- TITLE -->
    <title>Calculadora | DevBSB</title>

    <!-- SEO TAGS -->
    <meta name="description"
        content="Uma simples calculadora com funções báricas: adição, subtração, multiplicação e divisão, desenvolvida em HMTL, CSS e Javascript." />
    <meta name="keywords"
        content="calculadora, devbsb, html, css, javascript, animation, adição, subtração, multiplicação, divisão, projeto" />
    <meta name="robots" content="" />
    <meta name="revisit-after" content="1 day" />
    <meta name="language" content="Portuguese" />
    <meta name="generator" content="N/A" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

    <!-- FAVICON -->
    <link rel="icon" href="/img/favicon.ico" />

    <!-- FONT ROTOBO -->
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet" />

    <!-- STYLE CSS -->
    <link href="/css/style.min.css" rel="stylesheet" />
</head>

<body>

    <!-- CALCULATOR -->
    <div class="calculator">

        <!-- DISPLAY -->
        <div class="display">
            <input id="display" placeholder="0" disabled>
            <h2 id="history"></h2>
        </div>

        <!-- <BUTTONS -->
        <div class="row">
            <button class="button purple-text" onclick="limpar()">AC</button>
            <div></div>
            <div></div>
            <button class="button gray" onclick="add_operador('/')">/</button>
        </div>

        <div class="row">
            <button class="button" onclick="add_numero(7)">7</button>
            <button class="button" onclick="add_numero(8)">8</button>
            <button class="button" onclick="add_numero(9)">9</button>
            <button class="button gray" onclick="add_operador('*')">*</button>
        </div>

        <div class="row">
            <button class="button" onclick="add_numero(4)">4</button>
            <button class="button" onclick="add_numero(5)">5</button>
            <button class="button" onclick="add_numero(6)">6</button>
            <button class="button gray" onclick="add_operador('-')">-</button>
        </div>

        <div class="row">
            <button class="button" onclick="add_numero(1)">1</button>
            <button class="button" onclick="add_numero(2)">2</button>
            <button class="button" onclick="add_numero(3)">3</button>
            <button class="button gray" onclick="add_operador('+')">+</button>
        </div>

        <div class="row">
            <div></div>
            <button class="button" onclick="add_numero(0)">0</button>
            <button class="button" onclick="add_numero('.')">.</button>
            <button class="button purple" onclick="total()">=</button>
        </div>
        <!-- BUTTONS/> -->
    </div>

    <!-- LINK TO GITHUB PROJECT -->
    <div class="github">
        <a href="https://github.com/iaematt/calculator" target="_blank" title="Code in GitHub">
            <img src="/img/github.svg" width="35" />
        </a>
    </div>

    <!-- SCRIPTS -->
    <script type="text/javascript" src="/js/script.js"></script>
    <script type="text/javascript" src="/js/keyboard.min.js"></script>

</body>

</html>
```

# CSS

```
/* DEFAULT CSS */
* {
  box-sizing: border-box;
  margin: 0;
  outline: 0;
  padding: 0;
}

body {
  background: url(/img/background.png) #cfcfcf;
  color: #111111;
  font-size: 16px;

  /* FLEX */
  align-items: center;
  display: flex;
  justify-content: center;
}

body,
input,
textarea,
button {
  font-family: "Roboto", sans-serif;
}

html,
body {
  height: 100%;
}

/* CALCULATOR CONTAINER */
.calculator {
  animation: sideIn 480ms cubic-bezier(0.42, 0, 0.21, 1);
  background-color: #2f2b39;
  border-radius: 2px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  padding: 10px 20px;
  width: 252px;
}

/* DISPLAY */
.display {
  margin: 50px 0 60px;
  text-align: right;
}

.display input {
  background: transparent;
  border: none;
  color: #f2f2f2;
  font-size: 40px;
  font-weight: 400;
  text-align: right;
  width: 100%;
}

.display h2 {
  color: #6d53d6;
  font-size: 15px;
  font-weight: 500;
  height: 18px;
}

/* ROW GRID */
.row {
  display: grid;
  grid-template-columns: repeat(4, 25%);
  margin-bottom: 10px;
}

/* BUTTON */
.button {
  background-color: transparent;
  border: none;
  border-radius: 2px;
  color: #f2f2f2;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  height: 50px;
  margin: 2px;
  transition: all 0.15s ease-in-out;
  width: 50px;
}

.button:hover {
  transform: scale(1.04);
}
.button:active {
  transform: scale(0.97);
}

/* COLORS */
.gray {
  background-color: #eaeaea;
  color: #2f2d38;
}

.purple {
  background-color: #7d5dfe;
  color: #f2f2f2;
}

.purple-text {
  color: #7d5dfe;
}

/* GIT HUB LOGO/LINK */
.github {
  position: fixed;
  bottom: 15px;
  right: 15px;
}

.github a {
  opacity: 0.8;
  transition: all 0.15s ease-in-out;
}

.github a img {
  transform: scale(0.9);
  transition: all 0.15s ease-in-out;
}

.github a:hover {
  opacity: 1;
}

.github a:hover img {
  transform: scale(1);
}

/* ANIMATION */
@keyframes sideIn {
  from {
    transform: translateY(-150px);
    opacity: 0;
  }

  50% {
    transform: translateY(-75px);
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}
```

# Javascript

```
var input = document.querySelector("#display");
var operador = "";
var parar = false;

function limpar() {
  input.value = "";
  document.querySelector("#history").innerHTML = "";
  operador = ""
}

function add_numero(string) {
  if (!parar) {
    if (string === '.' && input.value.indexOf(".") === -1 || string !== '.') {
      input.value = input.value + string;
      history.value = input.value;
    }
  } else {
    if (string === '.' && input.value.indexOf(".") === -1 || string !== '.') {
      input.value = "";
      parar = false;
      document.querySelector("#history").innerHTML = "";
      operador = "";

      input.value = input.value + string;
    }
  }
}

function add_operador(op) {
  if (input.value == "") {
    input.value = "0";
  }

  if (operador == "") {
    operador = op;
    input.value = input.value + op;
  } else {
    total()
    input.value = input.value + op;
    operador = op;
    parar=false;
  }
}

function total() {
  if (!parar) {
    numeros = input.value.split(operador);

    if (numeros[1] == "") {
      input.value = input.value + '0';
      numeros[1] = 0;

    }

    document.querySelector("#history").innerHTML = input.value;

    switch (operador) {
      case "+":
        input.value = Number(numeros[0]) + Number(numeros[1]);
        break;

      case "-":
        input.value = numeros[0] - numeros[1];
        break;

      case "*":
        input.value = numeros[0] * numeros[1];
        break;

      case "/":
        input.value = numeros[0] / numeros[1];
        break;
    }

    parar = true;
  }
}
```

## Conclusão

Para acessar as imagens de fundo e demais coisas, visite o GitHub e clone o projeto.

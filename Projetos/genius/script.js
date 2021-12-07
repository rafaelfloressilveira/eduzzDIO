let order = [];
let clickedOrder = [];
let score = 0;

// 0 - b
// 1 - y
// 2 - r
// 3 - g

const blue = document.querySelector(".blue");
const yellow = document.querySelector(".yellow");
const red = document.querySelector(".red");
const green = document.querySelector(".green");

// cria ordem aleatória de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4)
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

// acende a próxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add("selected");
    }, tempo - 250);
    setTimeout(() => {
        element.classList.remove("selected");
    });    
}

// checa ordem correta de click
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            lose();
            break
        }
    }
    if(clickedOrder.length == order.length) {
        alert("Pontuação: ${score}\nVocê acertou! Próximo nível...");
        nextLevel();
    }
}

// click do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add("selected");

    setTimeout(() => {
        createColorElement(color).classList.remove("selected");
        checkOrder();
    }, 250);

    
}

// retorno de cor
let createColorElement = (color) => {
    if(color == 0) {
        return blue;
    } else if(color == 1) {
        return yellow;
    } else if (color == 2) {
        return red;
    } else if (color == 3) {
        return green;
    }
}

// proximo nível
let nextLevel = () => {
    score++;
    shuffleOrder();
}

// game over
let gameOver = () => {
    alert("Pontuação: ${score}!\nVocê perdeu\nClique em OK para iniciar um novo jogo");
    order = [];
    clickedOrder = [];
    
    playGame();
}

// Inicio de jogo
let playGame = () => {
    alert("Iniciando novo jogo...");
    score = 0;

    nextLevel();
}

// eventos

blue.addEventListener("click", click(0));
yellow.addEventListener("click", click(1));
red.addEventListener("click", click(2));
green.addEventListener("click", click(3));

playGame();
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
        nextlevel();
    }
}

// click do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add("selected");

    setTimeout(() => {
        createColorElement(color).classList.remove("selected");
    })

    checkOrder();
}

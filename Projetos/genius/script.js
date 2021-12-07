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


let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4)
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

lightColor = (element, number) => {
    time = time * 500;
    setTimeout(() => {
        element.classList.add("selected");
    }, tempo - 250);
    setTimeout(() => {
        element.classList.remove("selected");
    });    
}
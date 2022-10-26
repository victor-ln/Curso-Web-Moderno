const HotDog = 100;
const Burger = 200;
const CheeseBurguer = 300;
const doubleCheesePickleBurger = 400;
const Soda = 500;
const Juice = 600;

function calcItemPrice(itemCode, qtd) {
    switch (itemCode) {
        case HotDog:
            return 3 * qtd;
        case Burger:
            return 4 * qtd;
        case CheeseBurguer:
            return 5.5 * qtd;
        case doubleCheesePickleBurger:
            return 7.5 * qtd;
        case Soda:
            return 3.5 * qtd;
        case Juice:
            return 2.8 * qtd;
    }
}

console.log(calcItemPrice(HotDog, 10))
console.log(calcItemPrice(Burger, 7))
console.log(calcItemPrice(CheeseBurguer, 2))
console.log(calcItemPrice(doubleCheesePickleBurger, 5))
console.log(calcItemPrice(Soda, 1))
console.log(calcItemPrice(Juice, 4))

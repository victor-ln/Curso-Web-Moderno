
function Car(maxSpeed = 200, delta = 5) {
    /* To declare private methods/attributes use const or let */

    let speed = 0;

    /* To declare public methods/attributes use 'this' */

    this.accelerate = _ => {
        let newSpeed = speed + delta;

        speed = newSpeed < maxSpeed ? newSpeed : maxSpeed;
    }

    this.getCurrentSpeed = _ => speed;
}

let beetle = new Car;

beetle.accelerate();
console.log(beetle.getCurrentSpeed());

let ferrari = new Car(320, 25);

ferrari.accelerate();
console.log(ferrari.getCurrentSpeed());

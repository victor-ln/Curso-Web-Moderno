{
    /**
     * Prototype chain
     */
    Object.prototype.attr0 = '0'; /** <-- This is not recommended, just an example */
    const grandfather = { attr1: 'A' };
    const father = { __proto__: grandfather, attr2: 'B' };
    const son = { __proto__: father, attr3: 'C' };
    console.log(son.attr0, son.attr1, son.attr2, son.attr3);
    delete Object.prototype.attr0;
}
console.log();
{
    const date = new Date;
    let obj = date;

    do {
        console.log(obj);
        obj = Object.getPrototypeOf(obj);
    } while (obj);
}
console.log();
{
    const car = {
        maxSpeed: 110,
        delta: 5,
        speed: 0,
        accelerate() {
            let newSpeed = this.speed + this.delta;

            this.speed = newSpeed < this.maxSpeed ? newSpeed : this.maxSpeed;
        },
        status() { return `${this.speed}m/h of ${this.maxSpeed}m/h`; }
    }

    const ferrari = {
        maxSpeed: 201.3, /** Shadowing */
        delta: 12,
        model: 'F40',
        year: 1992
    };

    const mcLaren = {
        maxSpeed: 200.8,
        delta: 12,
        model: 'F1',
        year: 1992,
        status() {
            return `${this.model} ${super.status()}`;
        }
    };

    Object.setPrototypeOf(ferrari, car);
    Object.setPrototypeOf(mcLaren, car);

    console.log(ferrari);
    console.log(mcLaren);

    mcLaren.accelerate();
    ferrari.accelerate();
    console.log(mcLaren.status());
    console.log(ferrari.status());
}

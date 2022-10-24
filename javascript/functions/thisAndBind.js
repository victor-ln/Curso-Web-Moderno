const person = {
    greeting: 'Good morning',
    speak() {
        console.log(this.greeting);
    }
}

person.speak();

/* Conflict between paradigms: functional and OO */
const speak = person.speak;
speak();

/**
 * bind() creates a bound function that has the same body as the
 * original function. The this object of the bound function is associated with
 * the specified object, and has the specified initial parameters
*/
const speakFromPerson = person.speak.bind(person);
speakFromPerson();

function counter() {
    this.sec = 0;
    const self = this;
    this.printTime = function() {
        self.sec++;
        console.log(self.sec);
        if (self.sec == 10)
            clearInterval(self.intervalID);
    };/*.bind(this);*/

    self.intervalID = setInterval(self.printTime, 1000);
}

new counter

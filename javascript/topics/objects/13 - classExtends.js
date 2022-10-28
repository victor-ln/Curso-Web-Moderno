class Father {
    constructor(lastname) {
        this.lastname = lastname;
    }
}

class Son extends Father {
    constructor(lastname, occupation = 'Teacher') {
        super(lastname);
        this.occupation = occupation;
    }
}

class GrandSon extends Son {
    constructor() {
        super('Jackson');
    }
}
const grandSon = new GrandSon;

console.log(grandSon);

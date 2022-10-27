const sequence = {
    _id : 1, /* Convention */
    get id() {
        return this._id++;
    },
    set id(newId) {
        if (newId > this._id) {
            this._id = newId;
        }
    }
}

console.log(sequence.id, sequence.id);
sequence.id = 10;
console.log(sequence.id);
sequence.id = 1;
console.log(sequence.id, sequence.id);

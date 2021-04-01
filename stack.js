class Stack {
    #isEmpty = true;
    constructor() {
    }

    get isEmpty() {
        return this.#isEmpty;
    }

    push() {
        this.#isEmpty = false;
    }

    pop() {
        return null;
    }
}
module.exports = { Stack }
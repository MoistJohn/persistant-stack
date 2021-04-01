class Stack {
    #size = 0;
    constructor() {
    }

    get isEmpty() {
        return this.#size === 0;
    }

    push() {
        this.#size++;
    }

    pop() {
        if (this.#size) { this.#size--; }
    }
}
module.exports = { Stack }
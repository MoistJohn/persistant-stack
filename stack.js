class Stack {
    #size = 0;
    #value = null;
    constructor() {
    }

    get isEmpty() {
        return this.#size === 0;
    }

    push(str) {
        this.#size++;
        this.#value = str;
    }

    pop() {
        if (this.isEmpty) { return null; }
        this.#size--;
        return this.#value;
    }

    peek() {
        
    }

    revert() {

    }
}
module.exports = { Stack }
class Stack {
    #size = 0;
    #value = [];
    constructor() {
    }

    get isEmpty() {
        return this.#size === 0;
    }

    push(str) {
        this.#size++;
        this.#value.push(str);
    }

    pop() {
        if (this.isEmpty) { return null; }
        this.#size--;
        return this.#value.pop();
    }

    peek() {
        return this.#value[this.#size - 1];
    }

    revert() {

    }
}
module.exports = { Stack }
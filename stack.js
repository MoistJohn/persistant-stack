class Stack {
    #size = 0;
    #value = [];
    #flipped = false;
    constructor() {
    }

    get isEmpty() {
        return this.#size === 0;
    }

    push(str) {
        this.#size++;
        this.#flipped ? this.#value.unshift(str) : this.#value.push(str);
    }

    pop() {
        if (this.isEmpty) { return null; }
        this.#size--;
        return this.#flipped ? this.#value.shift() : this.#value.pop();
    }

    peek() {
        return this.#value[this.#size - 1];
    }

    revert() {
        this.#flipped = !this.#flipped;
    }
}
module.exports = { Stack }
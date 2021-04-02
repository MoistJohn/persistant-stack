const { databaseFactory } = require("./db.facade");

class Stack {
  #db;
  constructor() {
    this.#db = databaseFactory().createInstance({ stack: [], flipped: false, size: 0 });
  }

  get isEmpty() {
    return this.#size === 0;
  }

  get #stack() {
    return this.#db.get('stack');
  }
  set #stack(value) {
    this.#db.set('stack', value);  
  }

  get #size() {
    return this.#db.get('size');
  }
  set #size(value) {
    this.#db.set('size', value);
  }

  get #flipped() {
    return this.#db.get('flipped');
  }
  set #flipped(value) {
    this.#db.set('flipped', value);
  }

  push(str) {
    this.#size = this.#size + 1;
    const stack = this.#stack; // read from db
    this.#flipped ? stack.unshift(str) : stack.push(str); // modify the value
    this.#stack = stack; // write it back to db
  }

  pop() {
    if (this.isEmpty) {
      return null;
    }
    this.#size = this.#size - 1;
    const stack = this.#stack;
    const value = this.#flipped ? stack.shift() : stack.pop();
    this.#stack = stack;
    return value;
  }

  peek() {
    return this.#stack[this.#size - 1];
  }

  revert() {
    this.#flipped = !this.#flipped;
  }
}
module.exports = { Stack };

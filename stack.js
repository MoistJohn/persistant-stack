const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

class Stack {
  #size = 0;
  #value = [];
  #flipped = false;
  constructor() {

    // TODO refactor db operations to another class
    const adapter = new FileSync("db.json");
    const db = low(adapter);

    // Set some defaults (required if your JSON file is empty)
    db.defaults({ stack: [], flipped: false, size: 0 }).write();

    this.#value = db.get('stack').value();
    this.#flipped = db.get('flipped').value();
    this.#size = db.get('size').value();
  }

  get isEmpty() {
    return this.#size === 0;
  }

  push(str) {
    this.#size++;
    this.#flipped ? this.#value.unshift(str) : this.#value.push(str);
  }

  pop() {
    if (this.isEmpty) {
      return null;
    }
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
module.exports = { Stack };

const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

class Stack {
  #size = 0;
  #stack = [];
  #flipped = false;
  #db;
  constructor() {

    // TODO refactor db operations to another class
    const adapter = new FileSync("db.json");
    this.#db = low(adapter);

    // Set some defaults (required if your JSON file is empty)
    this.#db.defaults({ stack: [], flipped: false, size: 0 }).write();

    this.#stack = this.#db.get('stack').value();
    this.#flipped = this.#db.get('flipped').value();
    this.#size = this.#db.get('size').value();
  }

  get isEmpty() {
    return this.#size === 0;
  }

  updateDB() {
    this.#db
    .set('stack', this.#stack)
    .set('flipped', this.#flipped)
    .set('size', this.#size)
    .write();
  }

  push(str) {
    this.#size++;
    this.#flipped ? this.#stack.unshift(str) : this.#stack.push(str);
    this.updateDB();
  }

  pop() {
    if (this.isEmpty) {
      return null;
    }
    this.#size--;
    const value = this.#flipped ? this.#stack.shift() : this.#stack.pop();
    this.updateDB();
    return value;
  }

  peek() {
    return this.#stack[this.#size - 1];
  }

  revert() {
    this.#flipped = !this.#flipped;
    this.updateDB();
  }
}
module.exports = { Stack };

const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

function databaseFactory() {
    return {
        createInstance: (defaultValue) => new DatabaseFacade(defaultValue)
    }
};

class DatabaseFacade {
  #lowdb;
  constructor(defaultValueIfFileMissing) {
    const adapter = new FileSync("db.json");
    this.#lowdb = low(adapter);
    this.#lowdb.defaults(defaultValueIfFileMissing).write();
  }

  get(key) {
    return this.#lowdb.get(key)?.value();
  }

  set(key, value) {
      this.#lowdb.set(key, value).write();
      return this;
  }
}

module.exports = { DatabaseFacade, databaseFactory };

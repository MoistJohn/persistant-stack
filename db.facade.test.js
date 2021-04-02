const { databaseFactory, DatabaseFacade } = require("./db.facade");

test('databaseFactory function returns a factory object', () => {
    expect(databaseFactory()).toBeDefined();
});

test('databaseFactory function returns a factory with "createInstance" function', () => {
    expect(databaseFactory()).toHaveProperty('createInstance');
});

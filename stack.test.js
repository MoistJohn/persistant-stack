jest.mock("./db.facade");

let stack;
let dbMock;

beforeEach(() => {
    dbMock = {
        size: 0,
        flipped: false,
        stack: []
    };

    const { databaseFactory } = require("./db.facade");
    databaseFactory.mockImplementation(() => ({
        createInstance: () => ({
            get: jest.fn().mockImplementation((key) => dbMock[key]),
            set: jest.fn().mockImplementation((key, value) => dbMock[key] = value)
        })
    }))
})

beforeEach(() => {
  const { Stack } = require("./stack");
  stack = new Stack();
});

test("new stack is empty", () => {
  expect(stack.isEmpty).toBe(true);
});

test("push once on empty stack should set stack to not empty", () => {
  stack.push();
  expect(stack.isEmpty).toBe(false);
});

test("push then pop should be empty", () => {
  stack.push();
  stack.pop();
  expect(stack.isEmpty).toBe(true);
});

test("push twice, pop once, should be not empty", () => {
  stack.push();
  stack.push();
  stack.pop();
  expect(stack.isEmpty).toBe(false);
});

test("pop on an empty stack should stay empty", () => {
  stack.pop();
  expect(stack.isEmpty).toBe(true);
});

test("revert on an empty stack stays empty", () => {
  stack.revert();
  expect(stack.isEmpty).toBe(true);
});

test("revert on a non empty stack, stays not empty", () => {
  stack.push();
  stack.revert();
  expect(stack.isEmpty).toBe(false);
});

test("peek on an empty stack stays empty", () => {
  stack.peek();
  expect(stack.isEmpty).toBe(true);
});

test("peek on a non empty stack, stays not empty", () => {
  stack.push();
  stack.peek();
  expect(stack.isEmpty).toBe(false);
});

test("pop an empty stack should return null", () => {
  expect(stack.pop()).toBeNull();
});

test("push string, pop should return an equal string", () => {
  const str = "hello";
  stack.push(str);
  expect(stack.pop()).toEqual(str);
});

test("push string, peek should return an equal string", () => {
  const str = "1123124";
  stack.push(str);
  expect(stack.peek()).toEqual(str);
});

test("push twice, pop should return last pushed value", () => {
  const str1 = "The quick brown fox";
  const str2 = "jumped over the lazy dog";
  stack.push(str1);
  stack.push(str2);
  expect(stack.pop()).toEqual(str2);
});

test("push twice, peek twice should return the same value", () => {
  const str1 = "To infinity";
  const str2 = "and beyond";
  stack.push(str1);
  stack.push(str2);
  stack.peek();
  expect(stack.peek()).toEqual(str2);
});

test("push twice, pop twice should return 2nd value then 1st value", () => {
  const str1 = "The quick brown fox";
  const str2 = "jumped over the lazy dog";
  stack.push(str1);
  stack.push(str2);
  expect(stack.pop()).toEqual(str2);
  expect(stack.pop()).toEqual(str1);
});

test("push once, revert, pop should return first value", () => {
  const str = "";
  stack.push(str);
  stack.revert();
  expect(stack.pop()).toEqual(str);
});

test("push twice, revert, pop should return 1st value then 2nd value", () => {
  const str1 = "The quick brown fox";
  const str2 = "jumped over the lazy dog";
  stack.push(str1);
  stack.push(str2);
  stack.revert();
  expect(stack.pop()).toEqual(str1);
  expect(stack.pop()).toEqual(str2);
});

test("push twice, revert, revert, pop should return 2nd value then 1st value", () => {
  const str1 = "My name is Inigo Montoya";
  const str2 = "You killed my father";
  stack.push(str1);
  stack.push(str2);
  stack.revert();
  stack.revert();
  expect(stack.pop()).toEqual(str2);
  expect(stack.pop()).toEqual(str1);
});

test("push three times, revert, pop should return 1st value, revert, pop should return 4th value", () => {
  const str1 = "My name is Inigo Montoya";
  const str2 = "You killed my father";
  const str3 = "Prepare to die";
  stack.push(str1);
  stack.push(str2);
  stack.push(str3);
  stack.revert();
  expect(stack.pop()).toEqual(str1);
  stack.revert();
  expect(stack.pop()).toEqual(str3);
});

test("push 1 and 2, revert, push 3 and 4, revert, pop all should be [4,3,1,2]", () => {
  stack.push("1");
  stack.push("2");
  stack.revert();
  stack.push("3");
  stack.push("4");
  stack.revert();
  const expected = ["4", "3", "1", "2"];
  const actual = [];
  while (!stack.isEmpty) {
    actual.unshift(stack.pop());
  }
  expect(actual).toEqual(expected);
});

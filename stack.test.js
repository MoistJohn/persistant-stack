const { Stack } = require('./stack');

let stack;

beforeEach(() => {
    stack = new Stack();
});

test('new stack is empty', () => {
    expect(stack.isEmpty).toBe(true);
});

test('push once on empty stack should set stack to not empty', () => {
    stack.push();
    expect(stack.isEmpty).toBe(false);
});

test('push then pop should be empty', () => {
    stack.push();
    stack.pop();
    expect(stack.isEmpty).toBe(true);
});

test('push twice, pop once, should be not empty', () => {
    stack.push();
    stack.push();
    stack.pop();
    expect(stack.isEmpty).toBe(false);
});

test('pop on an empty stack should stay empty', () => {
    stack.pop();
    expect(stack.isEmpty).toBe(true);
});

test('revert on an empty stack stays empty', () => {
    stack.revert();
    expect(stack.isEmpty).toBe(true);
});

test('revert on a non empty stack, stays not empty', () => {
    stack.push();
    stack.revert();
    expect(stack.isEmpty).toBe(false);
});

test('peek on an empty stack stays empty', () => {
    stack.peek();
    expect(stack.isEmpty).toBe(true);
});

test('peek on a non empty stack, stays not empty', () => {
    stack.push();
    stack.peek();
    expect(stack.isEmpty).toBe(false);
});
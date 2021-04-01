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
})
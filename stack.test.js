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

test('pop an empty stack should return null', () => {
    expect(stack.pop()).toBeNull();
});

test('push string, pop should return an equal string', () => {
    const str = 'hello';
    stack.push(str);
    expect(stack.pop()).toEqual(str);
});

test('push string, peek should return an equal string', () => {
    const str = '1123124';
    stack.push(str);
    expect(stack.peek()).toEqual(str);
});

test('push twice, pop should return last pushed value', () => {
    const str1 = 'The quick brown fox';
    const str2 = 'jumped over the lazy dog';
    stack.push(str1);
    stack.push(str2);
    expect(stack.pop()).toEqual(str2);
});

test('push twice, peek twice should return the same value', () => {
    const str1 = 'To infinity';
    const str2 = 'and beyond';
    stack.push(str1);
    stack.push(str2);
    stack.peek();
    expect(stack.peek()).toEqual(str2);
});

test('push twice, pop twice should return 2nd value then 1st value', () => {
    const str1 = 'The quick brown fox';
    const str2 = 'jumped over the lazy dog';
    stack.push(str1);
    stack.push(str2);
    stack.pop();
    expect(stack.pop()).toEqual(str1);
});
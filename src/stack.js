const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  array = [];
  push(element) {
    this.array = this.array.concat(element);
  }
  pop() {
    if (this.array.length == 0) {
      return undefined;
    }
    const result = this.array[this.array.length - 1];
    this.array = this.array.slice(0, this.array.length - 1);
    return result;
  }
  peek() {
    if (this.array.length == 0) {
      return undefined;
    }
    return this.array[this.array.length - 1];
  }
}

module.exports = {
  Stack
};

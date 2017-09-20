/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.len = 0;
  this.max = -Infinity;
  this.push = (item) => {
    if (item > this.max) this.max = item;
    this[this.len] = item;
    this.len += 1;
    return this.len;
  };
  this.pop = () => {
    const popped = this[this.len - 1];
    delete this[this.len - 1];
    if (popped === this.max) {
      this.max = -Infinity;
      for (let i = 0; i < this.len; i += 1) {
        if (this[i] > this.max) this.max = this[i];
      }
    }
    this.len -= 1;
    return popped;
  };
  this.findMax = () => this.max;
}

module.exports = Stack;

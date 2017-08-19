
class Stack {
  constructor() {
    this.array = [];
    this.length = 0;
  }
  push(value) {
    this.array[this.length] = value;
    this.length += 1;
    return this.length;
  }
  pop() {
    this.length -= 1;
    return this.array[this.length];
  }
  getMax() {
    let max = this.array[0];
    this.array.forEach((ele) => {
      if (ele > max) {
        max = ele;
      }
    });
    return max;
  }
}


module.exports = Stack;

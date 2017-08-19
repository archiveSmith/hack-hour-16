/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
    this.store = {};
    this.count = 0;

    Stack.prototype.push = (value) => {
        this.store[this.count] = value;
        this.count++;
        return this.count;
    };

    Stack.prototype.pop = () => {
        this.count--;
        let poppa = this.store[this.count];
        delete this.store[this.count];
        return poppa;
    };

    Stack.prototype.getMax = () => {
        let containPointsTo = this.store;
        let valuesSorted = Object.keys(containPointsTo).sort(function(a, b) { return containPointsTo[a] - containPointsTo[b] })
        return this.store[valuesSorted[valuesSorted.length - 1]];
        // let biggest = this.store[0];

        // for (let i = 0; i < this.count; i++) {
        //     if (biggest < this.store[i]) {
        //         biggest = this.store[i];
        //     }
        // }
        // return biggest;
    };
}

module.exports = Stack;
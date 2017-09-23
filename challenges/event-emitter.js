'use strict';
/**
 * Make an EventEmitter that
 *
 * Example:
 * var instance = new EventEmitter();
 * var counter = 0;
 * instance.on('increment', function() {
 *   counter++;
 * }); // counter should be 0
 * instance.trigger('increment'); // counter should be 1
 * instance.trigger('increment'); // counter should be 2
 *
 *
 * Caveats:
 * - If we repeatedly call .on with the same event name, it should
 *   continue to call the old function(s) as well. That is to say, we can have multiple
 *   listeners for one event.
 * - If `obj.trigger` is called with additional arguments, pass those to the
 *   listeners.
 * - It is not necessary to write a way to remove listeners.
 */

class EventEmitter {
  constructor() {
    this.counter = 0
  }

  on(funcName, func) {
    // console.log('on')
    this.funcName = func
  }

  trigger(funcName, ...args) {
    // console.log('trigger')
    this.funcName(...args)
    // console.log('counter', this.counter)
  }
}

// var instance = new EventEmitter();
// var counter = 0;
// instance.on('increment', function () {
//   counter++;
//   console.log(counter)
// }); // counter should be 0
// console.log(instance)
// instance.trigger('increment'); // counter should be 1
// instance.trigger('increment'); // counter should be 2


module.exports = EventEmitter;

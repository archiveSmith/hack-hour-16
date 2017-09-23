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

function EventEmitter() {
  this.handlers = {};
}

EventEmitter.prototype.on = function(funcName, func) {
  if (this.handlers[funcName]) this.handlers[funcName].push(func);
  else this.handlers[funcName] = [func];
};

EventEmitter.prototype.trigger = function(funcName, ...args) {
  if (funcName in this.handlers) {
    this.handlers[funcName].forEach(func => func(...args));
  }
};

var instance = new EventEmitter();
var counter = 1;

instance.on('increment', function(a, b) {
  counter += a + b;
}); // counter should be 0

instance.trigger('increment', 1, 2); // counter should be 1
console.log(counter);
instance.trigger('increment', 10, 20); // counter should be 2
console.log(counter)

module.exports = EventEmitter;

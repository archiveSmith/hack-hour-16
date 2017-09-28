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

}

EventEmitter.prototype.on = function(funcName, func) {

};

EventEmitter.prototype.trigger = function(funcName, ...args) {

};

module.exports = EventEmitter;




//
// function EventEmitter() {
//   this.storage = [false];
//
// }
//
// EventEmitter.prototype.on = function(funcName, func) {
//   this.storage[0] = true;
//   let newFunc = function() { func()};
//   this.storage.push(newFunc)
//   console.log(`on counter: ${counter}`)
//   return `on counter: ${counter}`
// };
//
// EventEmitter.prototype.trigger = function(funcName, ...args) {
//   if(this.storage[0]) this.storage[1]()
//   return `counter: ${counter}`
//
// };
//
// var instance = new EventEmitter();
// var counter = 0;
//
// instance.on('increment', function() {
//   counter++;
// }); // counter should be 0
//
// instance.trigger('increment'); // counter should be 1
// // instance.trigger('increment'); // counter should be 2
//








// function EventEmitter() {
//   // dfine 'on' method that takes an event and a callback as parameters
//   on(event, callback) {
//     // if this[event] is undefined, initialize it as an array with callback inside
//     if (!this[event]) this[event] = [callback];
//     // else push callback into this[event]
//     else this[event].push(callback);
//   }
//
//   // difine 'trigger' method that takes event as 1st parameters
//   // use rest operator to capture all remaining arguments
//   trigger(event, ...args) {
//     // if this[event] exists, loop thourgh this[event] using forEach and invoke every callback inside
//     // use
//     if
//   }
// }

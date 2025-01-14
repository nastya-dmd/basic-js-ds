const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.el = []
    this.head = null;

  }

  getUnderlyingList() {
    throw new NotImplementedError('Not implemented');
    // return this.get(value, next)
    
  }

  enqueue(value) {
    this.el.push(value)
  }

  dequeue() {
    if (this.el.length > 0) {
      return this.el.shift();
    }
  }
}

module.exports = {
  Queue
};

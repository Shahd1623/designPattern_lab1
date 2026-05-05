// 1- let's create a counter that will track the number of active instances.

// Singleton
// the counter is created once and only once
class Counter {
  constructor() {
    if (!Counter.count) {
      Counter.count = 0;
    }
    Counter.count++;
  }
}

const c1 = new Counter();
const c2 = new Counter();
const c3 = new Counter();
const c4 = new Counter();

console.log(Counter.count); //4

/* 
An Iterator object is an object that conforms to the iterator protocol by providing a next() method that returns an iterator result object. The Iterator.prototype object is a hidden global object that all built-in iterators inherit from. It provides a @@iterator method that returns the iterator object itself, making the iterator also iterable.

In JavaScript an iterator is an object which defines a sequence and potentially a return value upon its termination.

Specifically, an iterator is any object which implements the Iterator protocol by having a next() method that returns an object with two properties:

value
The next value in the iteration sequence.

done
This is true if the last value in the sequence has already been consumed. If value is present alongside done, it is the iterator's return value.

Built-in iterables
String, Array, TypedArray, Map and Set are all built-in iterables, because their prototype objects all have a Symbol.iterator method.
*/

// iterable
const myArr = [1, 2, 3];
console.dir(myArr);

for (let item of myArr) {
  console.log(item);
}

// not iterable
const person = {
  firstName: "Men3m",
  lastname: "Darweesh",
};
console.dir(person);

const iterator = myArr[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

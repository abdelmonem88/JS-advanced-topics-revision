/* 
Generator
The Generator object is returned by a generator function and it conforms to both the iterable protocol and the iterator protocol.

Generator is a subclass of the hidden Iterator class.

Generator Function
The function* declaration (function keyword followed by an asterisk) defines a generator function, which returns a Generator object.

You can also define generator functions using the GeneratorFunction constructor, or the function expression syntax.
*/

function* firstGeneratorFunc() {
  yield 1;
  yield 2;
  yield 3;
}

const firstGenerator = firstGeneratorFunc();

for (let value of firstGenerator) {
  console.log(value);
}

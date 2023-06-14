// Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).
// Currying doesn’t call a function. It just transforms it.
// With currying you can make custom functions

function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(1, 2, 3)); // 6

// currying
function currySum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(currySum(1)(2)(3)); // 6

// currying with arrow function
const currySum2 = (a) => (b) => (c) => a + b + c;
console.log(currySum2(1)(2)(3)); // 6

// custom functions
const logger = (date) => (perpose) => (message) => {
  console.log(
    `${date.getHours()}:${date.getMinutes()} ${perpose} - ${message}`
  );
};

logger(new Date())("DEBUG")("Just a debug message");

const logNow = logger(new Date());
logNow("Alert")("Just an alert message");

const logAlertNow = logNow("Alert");
logAlertNow("This is just a message");

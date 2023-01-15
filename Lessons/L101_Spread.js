//Lesson: Spread in JS.

console.log("");

function logger(a, b, ...params) {
  console.log(...params);
}

logger(1, 2, 3, 4);

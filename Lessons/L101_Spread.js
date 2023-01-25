//Lesson: Spread in JS.

console.log("");

function logger(a, b, ...params) {
  console.log(...params);
}

logger(1, 2, 3, 4);

var array1 = ["Javascript", "Ruby", "PHP"];
var array2 = ["ReactJS", "Dart"];
var array3 = [...array2, ...array1];

//Happy New Year 2023
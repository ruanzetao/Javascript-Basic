//Lesson: Ternary Operator

console.log("");

var course = {
  name: "Javascript",
  coin: 280,
};

if (course.coin > 0) {
  console.log(`${course.coin} Coins`);
} else {
  console.log("Free");
}

//Ternay Operator
var result = course.coin > 0 ? `${course.coin} Coins` : "Free";
console.log(result);

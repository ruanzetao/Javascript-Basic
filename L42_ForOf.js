//Lesson: For/In

var languages = ["Javascript", "PHP", "Java"];

var myInfo = {
  name: "Sang Nguyen",
  age: 18,
  address: "HCMC, Vietnam",
};
for (var value of languages) {
  console.log(value);
}

for (var value of Object.values(myInfo)) {
  console.log(value);
}

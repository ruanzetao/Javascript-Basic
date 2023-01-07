// MẢNG TRONG JAVASCRIPT

/*
1. forEach
2. every : boolean
3. some
4. find 
5. filter
6. map
7. reduce
8. includes
*/

var courses = [
  {
    id: 1,
    name: "HTML, CSS",
    coin: 100,
  },
  {
    id: 2,
    name: "Javascript",
    coin: 200,
  },
];

var i = 0;
var totalCoin = courses.reduce(function (total, course) {
  // i++;
  // console.log(i);
  return total + course.coin;
}, 0);

//Arrow function
// var totalCoin = courses.reduce((a, b) => a + b.coin, 0);

//BT2: làm phẳng mảng (Flat)
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

var flatArray = depthArray.reduce(function (flatOutput, depthItem) {
  //Something
  return flatOutput.concat(depthItem);
}, []);

console.log(flatArray);

//Dùng map để render ra html

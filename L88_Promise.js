//Lesson: Promise
//- Sync
//- Async

console.log("");

var promise = new Promise(
  //Executor
  function (resolve, reject) {
    //Logic
    //Thành công: resolve
    //Thất bại: reject
  }
);

promise
  .then(function () {})
  .catch(function () {})
  .finally(function () {});

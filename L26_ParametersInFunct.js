//Tham số:
// 1. Tham số
// 2. Truyền tham số
//     - 1 tham số
//     - Nhiều tham số
// 3. Arguments
//     - Đối tượng Arguments
// - Giới thiệu vòng for

function writeLog() {
  var myString = "";
  for (var param of arguments) {
    myString += `${param} - `;
    console.log(myString);
  }
  console.log(myString);
}

writeLog("Log 1", "Log 2", "Log 3");

//LÀM VIỆC VỚI CHUỖI

//Keyword: javascript string methods.

var myString="Hoc JS JS tai F8!";
console.log("My string: ",myString);
// 1. Length
// 2. Find index
console.log(myString.indexOf("JS"));
// 3. Cut String
console.log(myString.slice(4));
console.log(myString.slice(4,6));
console.log(myString.slice(0));
// 4. Replace
console.log(myString.replace("JS","Javascript"));
console.log(myString.replace(/JS/g,"Javascript"));
// 5. Convert to upper case
// 6. Convert to lower case
// 7. Trim
console.log(myString.trim());
// 8. Split
var languages="Javascript, PHP, Ruby";
console.log(languages.split(', '));
// 9. Get a character by index
console.log(myString.charAt(0));


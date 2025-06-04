
let intArray = [2,2,3];

let uniqueNum = intArray.find(item => intArray.indexOf(item) === intArray.lastIndexOf(item));
//find checks for item according to condition: first and last index same meaning the number exists once
console.log(uniqueNum);








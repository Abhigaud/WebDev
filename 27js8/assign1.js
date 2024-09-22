let arr = [1,2,3,4,5,6,7];
let square = arr.map((el) => el * el);

let squareSum = arr.reduce((res,el) => (res + el*el));

let sum = arr.reduce((res,el) => res+el);
let average = sum/arr.length;
console.log(square);
console.log(average);

console.log(squareSum);

let arr = ['a', 'b', 'c'];
let arrCopy = arr;
console.log(arr == arrCopy);
console.log(arr === arrCopy);

arr.push('d');
console.log(arr);
console.log(arrCopy);

arrCopy.pop();
console.log(arr);
console.log(arrCopy);
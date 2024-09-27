console.log(..."Apna college");

arr = [10,2,3,4,5,6,7,2,9,65,7,432,12,54,45123,];
console.log(Math.min(...arr));

let arr1 = [1,2,3,4,5];
let newArr = [...arr1];

let chars = [..."hello"];

let odd = [1,3,5,7,9];
let even = [2,4,6,8];
let nums = [...odd, ...even];

console.log(newArr);
console.log(chars);
console.log(nums);


// spread with object literals
const data = {
    email: "hehehe@ggail.com",
    password: "asdf",
};
 const dataCopy = {
    ...data, 
    id: 123,
    country: "india",
};


let obj1 = {...arr};
console.log(obj1);

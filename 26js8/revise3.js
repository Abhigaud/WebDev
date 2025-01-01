let arr = [2,4,6];
let a = arr.every((el) => (el%2 == 0));

// console.log(a);

// -----------------------------
let b = [1,2,3,4].reduce((res,el) => (res+el));
// console.log(b);

// -----------------------------
let arr1 = [1,2,3,5,6,4,8,12,21,7];

let max = arr1.reduce((max, el) => {
    if (el> max) {
        return el;
    } else {
        return max;
    }
});

console.log(max);

// -----------------------------
let arr2 = [10,40,80,120,21,70];
let multiOf = arr2.every((el) => el % 10 == 0);

console.log(multiOf);

// -----------------------------
let arr3 = [1,2,3,5,6,4,8,12,21,7];

let min = arr3.reduce((min, el) => {
    if (el < min) {
        return el;
    } else {
        return min;
    }
});

console.log(min);
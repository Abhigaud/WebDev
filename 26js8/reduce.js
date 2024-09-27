let arr = [1,2,3,4];
let finalValue = arr.reduce((res, el) => (res + el));
console.log(finalValue);

let arr1 = [1,4,6,3,2,6,8];
let maxNum = arr1.reduce((max, el) => {
    if(max < el){
        return el;
    }else{
        return max;
    }
});

console.log(maxNum);


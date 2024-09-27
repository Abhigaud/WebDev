const arrayAverage = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum+= arr[i];
    }
    let avg = sum / arr.length;
    return avg;
};

let arr = [10,20,30];
console.log(arrayAverage(arr));

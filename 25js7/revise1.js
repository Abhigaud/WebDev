let arr = [2,3,4,5,6,7,8];

let arrayAverage = (arr) => {
    let sum = 0;
    let avg = 0; 
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        
    }
    avg = sum /arr.length;
    return avg;
}

console.log(arrayAverage(arr));

let arr = [2,4,7,22,66,21,12,45,78];
let largest = 0;
for(let i = 0; i < arr.length; i++){
    if (largest < arr[i]) {
        largest = arr[i];
    }
}
console.log(largest);

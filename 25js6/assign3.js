let country = ["Australia", "Germany", "United States of America"];

function longestCountryName(arr) {
    let ansIdx = 0;
    for (let i = 0; i < arr.length; i++) {
        let ansLen = arr[ansIdx].length;
        let currLen = arr[i].length
        if (currLen > ansLen) {
            ansIdx = i;
        }
    }
    return arr[ansIdx];
    
}

let ans = longestCountryName(country);
console.log(ans);

// let arr = [1,2,3,4,5,6,7,8,9,11,23,41,15];
// let num = 21; 

function largerThanN(num, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            console.log(arr[i]);
            
        }
    }
}

// largerThanN(num, arr);

// -----------------------------------------
// let str = "abcdabcdefgggh";

function getUnique(str) {
    let ans = "";
    for (let i = 0; i < str.length; i++) {
        let currChar = str[i];
        if(ans.indexOf(currChar) == -1){
            ans += currChar;
        }
    }
    return ans;
}

// console.log(getUnique(str));

// ------------------------------------------
let country = ["Australia", "Germany", "United States of America"];

function longestName(country) {
    let ansIdx = 0;
    for (let i = 0; i<country.length; i++) {
        let ansLen = country[ansIdx].length;
        let currLen = country[i].length;
        if(currLen > ansLen){
            ansIdx = i;
        }
    }
    return country[ansIdx];
}

console.log(longestName(country));


function sum1toN(n){
    let sum = 0;
    for (let i = 1; i <=n; i++) {
        sum += i;
    }
    return sum;
}

console.log(sum1toN(900));

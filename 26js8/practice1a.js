let num = [100,20,30,50];
let multipleOf10 = num.every((el) => el%10 ==0);
console.log(multipleOf10);

let minNum = num.reduce((min, el) => {
    if(min < el ){
        return min;
    }else{
        return el;
    }
});

console.log(minNum);

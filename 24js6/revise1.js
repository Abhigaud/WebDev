function DiceRoll(){
    console.log(Math.floor(Math.random()*6)+1);
}

function AverageOf3(a,b,c) {
    let avg = (a+b+c)/3;
    console.log(avg);
}

function table(n) {
    for (let i = n ; i <= n*10; i= i+n){ 
        console.log(i);
    }
}


DiceRoll();
AverageOf3(2,3,4);
table(8);
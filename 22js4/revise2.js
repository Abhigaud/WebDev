// let num = Math.random();
// num = num *10;

// num = Math.floor(num);
// num = num + 1;
// console.log(num);

let max = prompt("Enter the max number");

let random = Math.floor(Math.random()*max) + 1;

let guess = prompt("guess the number");

// console.log(random);
while (true) {
    if (guess == "quit") {
        console.log("User quit");
        break
    }
    if (guess == random) {
        console.log("you are right!");
        break;
    }else if (guess < random) {
        guess = prompt("your guess was too small, please try again");
    }else if(guess > random){
        guess = prompt("your guess was large, please try again");
    }
    // else{
    //     guess = prompt("your guess was wrong, Please try again");
    // }
}
 
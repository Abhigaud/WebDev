let favMovie = "Avatar";
let guess = prompt("guess movie : ");
while (guess != favMovie) {
    if (guess == "quit") {
        break;
    }
    guess = prompt('wrong guess. please try again : ');   
}

if (guess == favMovie) {
    console.log("congrats ");
}

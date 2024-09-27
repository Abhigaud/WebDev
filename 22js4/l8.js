let favMovie = "Avatar";
let guess = prompt("guess movie : ");
while ((guess != "quit") && (guess != favMovie)) {
    guess = prompt('wrong guess. please try again : ');   
}

if (guess == favMovie) {
    console.log("congrats ");
}


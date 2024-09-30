let btn = document.querySelector("button");

// btn.addEventListener("click", function (event){
//     console.log(event);
//     console.log("button clicked");
// })

// btn.addEventListener("dblclick", function (event){
//     console.log(event);
//     console.log("button clicked");
// })


// -----------------keyup and keydown------------
let inp = document.querySelector("input");
// inp.addEventListener("keydown", function () {
//     console.log("key was pressed");
// });

// inp.addEventListener("keyup", function () {
//     console.log("key was pressed");
// });


// ----------------- keyup and keydown------------
// inp.addEventListener("keydown", function (event) {
//     console.log("key = ", event.key);
//     console.log("code = ", event.code);
//     console.log("key was pressed");     
// });



// ----------------- like a game ------------
inp.addEventListener("keydown", function (event){
console.log("code = ", event.code);
if (event.code == "ArrowUp") {
    console.log("character moves forward");
    
} else if (event.code == "ArrowDown") {
    console.log("character moves backward");
    
} else if (event.code == "ArrowLeft") {
    console.log("character moves left");
    
} else if (event.code == "ArrowRight") {
    console.log("character moves right");
    
} 
    
    
});
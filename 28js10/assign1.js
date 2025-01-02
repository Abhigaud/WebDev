let btn = document.querySelector("button");
let input = document.querySelector("input");
let div = document.querySelector("div");
let load = document.querySelector("#load");
//// ------------- mouseout ------------------------------------
btn.addEventListener("mouseout" , function () {
    console.log("mouseout");
    
});


// // ------------- keypress -----------------------------------
input.addEventListener("keypress" , function () {
    console.log("keypress");
});

// // ------------- Scroll -----------------------------------
div.addEventListener("scroll", function(){
  console.log("scrolled");
});

window.addEventListener("load", function () {
  load.textContent += "load\n";
})
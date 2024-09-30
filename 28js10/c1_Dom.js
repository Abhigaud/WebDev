// -------For single button ------------------------------------
// let btn = document.querySelector("button");
// console.dir(btn);

// function cliced () {
//     alert("button was clicked");    
// }
// btn.onclick = cliced;



// ------- For multiple button ------------------------------------
// let btns = document.querySelectorAll("button");
// for (btn of btns) {
//     btn.onclick = sayHello;    
//     btn.onmouseenter = entering;
// }

// function entering(){
//     // alert("area 57");
//     console.log("area 57");
    
// }
// function sayHello() {
//     alert("hello");
// }


// ------- event listner ------------------------------------
let btns = document.querySelectorAll("button");
for (btn of btns) {
    // btn.addEventListener("click", sayHello );
    // btn.addEventListener("click", sayName);
    btn.addEventListener("dblclick", saySome);
}

function sayHello() {
    alert("hello");
}

function sayName() {
    alert("Apna College");
}

function saySome() {
    alert("double click");
}

// ---------------- This keyword ------------------
let p = document.querySelector("p");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");

function changeClr() {
    console.dir(this.innerText);
    this.style.backgroundColor = "yellow";
}

btn.addEventListener("click", changeClr);
p.addEventListener("click", changeClr);
h1.addEventListener("click", changeClr);
h3.addEventListener("click", changeClr);


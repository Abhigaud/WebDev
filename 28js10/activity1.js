let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    // console.log("generate random color");
    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.innerText = randomColor;
    
    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;
    console.log("color updated");
    
});

function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    
    let color = `rgb(${red},${green},${blue})`;
    return color;
}

// ------------------ event listener for elements -----------------
let h3 = document.querySelector("h3");
let div = document.querySelector("div");
h3.addEventListener("click", sayName);
div.addEventListener("mouseenter", function () {
    // alert("get out");   
    console.log(this);
    
})


function sayName() {
    alert("click on button");
}
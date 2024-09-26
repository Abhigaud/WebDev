// let smallImages = document.getElementsByClassName("oldImg");

// for (let i = 0; i < smallImages.length; i++) {
//     // console.dir(smallImages[i].src);
//     smallImages[i].src = "assets/spiderman_img.png";
//     console.log(`value of image no. ${i} is changed`);   
// }

// query selector-----------------------------

// console.dir(document.querySelector("h1"));
// console.dir(document.querySelector("#description"));
// console.dir(document.querySelector(".oldImg"));
// console.dir(document.querySelector("div a"));


// query selector-----------------------------
// console.dir(document.querySelectorAll("div a"));
// console.dir(document.querySelectorAll("p"));




let heading = document.querySelector("h1");
// --------------------------
console.log(heading);
heading.innerHTML = `<u>${heading.innerText}</u>`

// getter & setter --------------------------
let img = document.querySelector('img');
console.log(img);
console.log(img.getAttribute('id'));
// img.setAttribute('id', 'spiderman');

//  manipulating style --------------------------
// console.log(heading.style);
// heading.style.color = 'purple'; 
// heading.style.backgroundColor = "blue";

// --------------------------
let links = document.querySelectorAll(".box a");
for (const link of links) {
    link.style.color = 'red';
}

// for (let i = 0; i < links.length; i++) {
    //     links[i].style.color = "green"
// }


// --------------------------
console.log(heading.classList);
heading.classList.add('green');
heading.classList.add('blue');
console.log(heading.classList);
heading.classList.remove('green');
console.log(heading.classList);
console.log(heading.classList.contains('green'));
console.log(heading.classList.contains('blue'));
heading.classList.toggle("green");
console.log(heading.classList);
heading.classList.toggle("green");
console.log(heading.classList);
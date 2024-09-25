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


// --------------------------
let heading = document.querySelector("h1");
console.log(heading.style);
heading.style.color = 'purple'; 


// --------------------------
console.log(heading);
heading.innerHTML = `<u>${heading.innerText}</u>`
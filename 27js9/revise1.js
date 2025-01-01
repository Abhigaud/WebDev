// document.getElementById("mainImg");

let smallImages = document.getElementsByClassName("oldImg");

for (let i = 0; i < smallImages.length; i++) {
    smallImages[i].src = "assets/spiderman_img.png";
    console.log(`value of Image no. ${i} is changed.`);    
}

// console.dir(document.querySelector('h1'));
// console.dir(document.querySelector('#description'));
// console.dir(document.querySelector('.oldImg'));
// console.dir(document.querySelector("div a"));
// console.dir(document.querySelectorAll("p"));

let para = document.querySelector("p");
// para.innerText = "abc";
para.innerHTML = "hi, I am <b>spiderman</b>";

let heading = document.querySelector("h1");
heading.innerHTML = `<u>${heading.innerText} </u>`;

let img = document.querySelector("img");
console.log(img.getAttribute('id'));

img.setAttribute('id', 'spidermanImg');

img.setAttribute('src', "assets/creation_1.png");

heading.style.color = 'purple';
heading.style.backgroundColor = 'yellow';

let links = document.querySelectorAll(".box a");
for (link of links) {
    link.style.color = "red";    
};

console.log(img.classList);
console.log(heading.classList);
heading.classList.add("green");
console.log(heading.classList);
heading.classList.remove('green');
console.log(heading.classList);


let h4 = document.querySelector('h4');
console.log(h4.parentElement);

let box = document.querySelector('.box');
console.log(box.children);
console.log(box.childElementCount);

let newP = document.createElement('p');
newP.innerText = "hi , i am a new P";
box.appendChild(newP);
newP.append(" This is new text");

//--------- Navigation -----------------------------------------
let h4 = document.querySelector('h4');
console.log(h4.parentElement);

console.log(h4.children);
let box = document.querySelector('.box');
console.log(box.children);

let ul = document.querySelector('ul');
console.log(ul.parentElement);
console.log(ul.childElementCount);
console.log(ul.children);
console.log(ul.children[0]);
console.log(ul.children[1]);
console.log(ul.children[2]);
console.log(ul.children[2].previousElementSibling);
console.log(ul.children[0].nextElementSibling);



//--------- adding elements -----------------------------------------
console.log(document.createElement('p'));
let newP = document.createElement('p');
console.dir(newP);
newP.innerText = "hi , I am a new p";
let body = document.querySelector('body');
body.appendChild(newP);
box.appendChild(newP);

let btn = document.createElement('button');
console.dir('btn');

btn.innerText = 'click me!';
box.appendChild(btn);

newP.append("this is new text");
newP.append(btn);
newP.append("this is new btn");

box.prepend(newP)

let p = document.querySelector('p');
let btn1 = document.createElement('button');
btn1.innerHTML = "new Button!!!";
p.insertAdjacentElement('beforebegin', btn1);
p.insertAdjacentElement('afterbegin', btn1);
p.insertAdjacentElement('beforeend', btn1);
p.insertAdjacentElement('afterend', btn1);

body.insertAdjacentElement("afterend", btn1);
btn1.remove();
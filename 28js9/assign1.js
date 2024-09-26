//------------------------ question 1 
let input = document.createElement("input");
let btn = document.createElement('button');
btn.innerText = "click me";

document.querySelector('body').append(input);
document.querySelector('body').append(btn);

//------------------------ question 2
input.setAttribute("placeholder", "username");
btn.setAttribute("id", "btn");

//------------------------ question 3
document.querySelector('#btn').classList.add('clr');

//------------------------ question 4
let h1 = document.createElement('h1');
h1.innerHTML = '<u>DOM Practice</u>';
document.querySelector('body').append(h1);
h1.style.color = 'purple';

//------------------------ question 5
let p = document.createElement('p');
p.innerHTML = 'Apna College <b> Delta </b> Practice';
document.querySelector('body').append(p);


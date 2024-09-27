let body = document.querySelector('body');
let p = document.createElement('p');
p.innerText = "Hey I'm red!";
body.append(p);
p.style.color = 'red';

let h3 = document.createElement('h3');
h3.innerText = "Hey I'm blue h3!";
body.append(h3);
h3.style.color = 'blue';

let div = document.createElement('div');
let h1 = document.createElement('h1');
let p1 = document.createElement('p');
body.append(div);
div.style.backgroundColor = 'pink';
div.classList.add('border');

h1.innerText = "I'm in a div";
p1.innerText = "me too!";
div.append(h1);
div.append(p1);

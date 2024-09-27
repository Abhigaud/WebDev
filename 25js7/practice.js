const square = (n) => ( n*n );
console.log(square(3));

let id = setInterval(() => {
    console.log("Hello world");
}, 2000);

setTimeout(() => {
    clearInterval(id);
    console.log("clear interval ran");
    
}, 10000);

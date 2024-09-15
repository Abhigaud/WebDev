let primary = ["red", "yellow", "blue"];

console.log(primary.indexOf("red"));
console.log(primary.indexOf("blue"));
console.log(primary.indexOf("Blue"));

console.log(primary.includes("audi"));
console.log(primary.includes("yellow"));

let secondary = ["orange", "green", "violet"];
let allCol = primary.concat(secondary);
console.log(allCol);

secondary.reverse();
console.log(secondary);

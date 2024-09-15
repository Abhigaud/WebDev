let primary = ["red", "yellow", "blue"];

console.log(primary.indexOf("red"));
console.log(primary.indexOf("blue"));
console.log(primary.indexOf("Blue"));

console.log(primary.includes("audi"));
console.log(primary.includes("yellow"));

let secondary = ["orange", "green", "violet"];
let colors = primary.concat(secondary);
console.log(colors);

secondary.reverse();
console.log(secondary);

console.log(colors.slice());
console.log(colors.slice(2));
console.log(colors.slice(2,4));
console.log(colors.slice(-2));


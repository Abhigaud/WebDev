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

// Splice--------
console.log("--------splice");
console.log(colors.splice(4));
console.log(colors.splice(0,1));
console.log(colors.splice(0,0,"black","grey"));
console.log(colors);

console.log("--------sort");
console.log(colors.sort());

let Marks = [99, 89, 67, 42, 100];
console.log(Marks.sort());

// --- indexOf()
let str = "ILoveCoding";
console.log(str.indexOf("ove"));

// -------method Chaining
let msg = "    hello      ";
let newMsg = msg.trim().toUpperCase();
console.log(newMsg);


// -------Slice
console.log(str.slice(5));
console.log(str.slice(-5));
console.log(str.slice(5,7));

// ------- replace
console.log(str.replace("Love","hate"));

// ------- repeat
console.log(str.repeat(5));
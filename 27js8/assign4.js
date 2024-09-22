let arr = [2,5,6,2,8,9,13];

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map((v) => v*2),];

console.log(doubleAndReturnArgs(arr, 10,31));

let arr = [1,2,3,4,5];
console.log(Math.min(...arr));

// -----------------------------------------
let newArr = [...arr];

console.log(newArr);

// -----------------------------------------
let data ={
    email : "abc@gmail.com",
    password : 12345,
};

let newData = {...data, id:123}; 
console.log(newData);

// -----------------------------------------
function sum(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log("you gave us: ", args[i]);
    }
}
sum(2,3,45,5);

let names = ["annu","dhanu", "golu", "sonu" ];
let [winner, runnerUp, ...others] = names;
console.log(winner);
console.log(runnerUp);
console.log(others);


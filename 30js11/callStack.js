function hello(){
    console.log("inside hello fnx");
    console.log("hello");
}

function demo(){
    console.log("inside demo fnx");
    hello();
}

console.log("calling demo fnx");
demo();
console.log("done, bye!");


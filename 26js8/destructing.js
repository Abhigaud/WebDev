let names = ["tony", "bruce", "hulk", "clint","natasha", "hawkaye"];
let [winner, runnerup, ...others] = names;

console.log(winner);
console.log(runnerup);
console.log(others);

const student = {
    name: "karan",
    age:12,
    class:9,
    subject : ["hindi", "english", "maths", "science"],
    username: "karan@123",
    password : "abcd",
};

let {username:user, password, city : place = "mumbai", age = 11} = student;
console.log(user);

console.log(place);
console.log(age);



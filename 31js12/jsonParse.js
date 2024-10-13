let jsonRes = '{"fact":"In Japan, cats are thought to have the power to turn into super spirits when they die. This may be because according to the Buddhist religion, the body of the cat is the temporary resting place of very spiritual people.i","length":220}';

// console.log(jsonRes);
let validRes = JSON.parse(jsonRes);
console.log(validRes.fact);

let student = {
    name : "abhishek",
    marks : 95,
};

// let convToJson = JSON.stringify(student);
// console.log(convToJson);

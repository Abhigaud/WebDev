let num = [1,2,3,4];

let double = num.map((el) => {
    return el *2;
})

console.log(double);

let students = [
    {
        name : "aman",
        marks : 95,
    },
    {
        name : "shradha",
        marks : 94.4,
    },
    {
        name : "rajat",
        marks : 92,
    },
];

let gpa = students.map((el) => {
    return el.marks / 10;
});

console.log(gpa);

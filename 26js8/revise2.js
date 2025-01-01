let num = [1,2,3,4];
let double = num.map((el) => {
    return el * 2;
});

// console.log(double);
// ------------------

let students = [
    {
        name : "aman",
        marks : 95,
    },
    {
        name : "Shradha",
        marks : 93,
    },
    {
        name : "rajat dalal",
        marks : 91,
    },
];

let gpa = students.map((el) => {
    return el.marks / 10;
}) ;

// console.log(gpa);

// --------------------------------------------

let nums1 = [2,,54,1,5, 78,22,7,8,34,12,17,23];

let ans = nums1.filter((el) => {
    return el % 2 != 0; 
})

console.log(ans);

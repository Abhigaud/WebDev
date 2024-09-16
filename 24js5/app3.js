let student = {
    name : "shradha",
    age : 23,
    marks : 94.4,
    city : "delhi"
};

console.log(student);
student.city = 'mumbai';
console.log(student);

student.gender = 'female';
console.log(student);
student.marks = 'a';
console.log(student);

delete student.city;
console.log(student);
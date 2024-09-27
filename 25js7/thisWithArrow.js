const student = {
    name : "aman",
    marks : 95,
    prop : this, //global scope
    getName : function () {
        console.log(this);
        return this.name;
    },
    getMarks : () => {
        console.log(this);
        return this.marks; //parent's scope
    },
    getInfo : function () {
        setTimeout(() => {
            console.log(this);
        }, 2000);
    },
    getInfo2 : () => {
        setTimeout(() => {
            console.log(this);
        }, 2000); 
    },
}
// console.log(student);
// console.log(student.getName());
// console.log(student.getMarks());
console.log(student.getInfo());
console.log(student.getInfo2());

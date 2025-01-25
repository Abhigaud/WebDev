// let arr = [1,2,3];
// let arr2 = [1,2,3];
// arr.sayHello = () => {
//     console.log("hello, I am arr");  
// };

// // -------------------------------
// // ________factory function------------
// function PersonMaker(name, age) {
//     const person = {
//         name: name,
//         age: age,
//         talk(){
//             console.log(`Hi, my name is ${this.name}`);            
//         },
//     };
//     return person;
// }

// let p1 = PersonMaker("adam", 24); 
// let p2 = PersonMaker("arnav", 21); 

// // -------------------------------
// // ----- Constuctors(doesn't return anything & start with capital) ------------
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.talk = function () {
//     console.log(`Hi, my name is ${this.name}`); 
// }

// let p1 = new Person("adam", 24); 
// let p2 = new Person("adam", 24); 
 

// // -------------------------------
// // ----- classes ------------
// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     talk(){
//         console.log(`Hi, my name is ${this.name}`);
        
//     }
// }

// let p1 = new Person("adam", 24); 
// let p2 = new Person("adam", 24); 
 
// -------------------------------
// ----- Inheritance ------------
class Person{
    constructor(name, age){
        console.log("Person class constuctor");
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi, my name is ${this.name}`);
    }
}

class Student extends Person{
    constructor(name, age, marks){
        console.log("student class constuctor");
        super(name, age);
        this.marks = marks;
    }
}

let p1 = new Student("adam", 24, 67); 
let p2 = new Student("ahari", 29, 78); 

class Teacher extends Person{
    constructor(name, age, subject){
        console.log("student class constuctor");
        super(name, age);
        this.subject = subject;
    }
}

let t1 = new Teacher("ramesh", 45, "maths");
let t2 = new Teacher("rajesh", 56, "Science");
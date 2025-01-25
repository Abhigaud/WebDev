class Mammal {
    constructor(name) {
        this.name = name;
        this.type = "warm-blooded";
    }

    eat(){
        console.log("i am eating");
    }
}

class Dog extends Mammal {
    constructor(name){
        super(name);
    }
    bark(){
        console.log("woof...");
        
    }
}

class Cat extends Mammal {
    constructor(name){
        super(name);
    }
    meow(){
        console.log("meow...");
        
    }
}

let billi = new Cat ("persion");
console.log(billi.meow());
 
// let t1 = new Teacher("ramesh", 45, "maths");
const calculator = {
    num : 33,
    add : function (a, b) {
        return a+b;
    },
    sub : function (a, b) {
        return a-b;
    },
    mul : function (a, b) {
        return a*b;
    }
};

console.log(calculator);
console.log(calculator.num);
console.log(calculator.add);
console.log(calculator.add(8,2));

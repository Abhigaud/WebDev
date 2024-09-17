function oddEvenTest(request) {
    if (request == "odd") {
        let odd = function (n) {
            console.log(!(n%2 == 0));
        }
        return odd;
    }else if (request == "even") {
        let even = function (n) {
            console.log((n%2 == 0));
        }
        return even;
    }else{
        console.log("wrong  request");
    }
}

let request ='odd';
let func = oddEvenTest(request);
console.log(func);
console.log(func(3));

request ='even';
let func1 = oddEvenTest(request);
console.log(func1);
console.log(func1(3));

// higher order function
function multipleGreet(func, count) {
    for (let i = 1; i <= count; i++) {
        func();
    }
}
let greet = function () {
    console.log("hello");
}

multipleGreet(greet, 3);
multipleGreet(function(){console.log("namaste");
}, 3);
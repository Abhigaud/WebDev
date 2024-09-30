// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     alert("form submitted");    
// });


// ----------------------Extracting form data - - - - - - - - - - - - - - - - - 
// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//     event.preventDefault();
    
//     let inp = document.querySelector("input");
//     console.dir(inp);
//     console.log(inp.value);
// });


// ----------------------Extracting form  - - - - - - - - - - - - - - - - - 
// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//     event.preventDefault();
    
//     let user = document.querySelector("#user");
//     let pass = document.querySelector("#pass");
//     console.log(user.value);
//     console.log(pass.value);

//     alert(`Hi ${user.value}, your password is set to ${pass.value}`);
// });


// ----------------------Extracting form  - - - - - - - - - - - - - - - - - 
// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//     event.preventDefault();
    
//     let user = this.elements[0];
//     let pass = this.elements[1];
//     console.log(user.value);
//     console.log(pass.value);

//     alert(`Hi ${user.value}, your password is set to ${pass.value}`);
// });


// ---------------------- change event  - - - - - - - - - - - - - - - - - 
// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//     event.preventDefault();
// });

// let user = document.querySelector("#user");

// user.addEventListener("change", function () {
//     console.log("input changed");
//     console.log("final value = ", this.value);
        
// });


// ---------------------- input event  - - - - - - - - - - - - - - - - - 
let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
});

let user = document.querySelector("#user");

user.addEventListener("input", function () {
    console.log("input changed");
    console.log("final value = ", this.value);
        
})
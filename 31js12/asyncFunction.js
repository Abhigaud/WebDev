async function greet() {
    // console.log("hello");

    throw " random error";
    return "hello";
}

greet()
    .then((result) => {
        console.log("promise was resolved");
        console.log("result was :", result);
    })
    .catch((err)=>{
        console.log("promise was rejected with err :", err);
        
    });


let demo = async () => {
    return 5;
}
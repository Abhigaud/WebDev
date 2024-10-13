// function saveToDb(data) {
//     let internetSpeech = Math.ceil(Math.random()*10);
//     if (internetSpeech > 4) {
//         console.log("your data was saved : ", data);
//     } else {
//         console.log("weak connection. data not saved");
//     }
// }

// saveToDb("apna college");


// function saveToDb(data, success, failure) {
//     let internetSpeech = Math.ceil(Math.random()*10);
//     if (internetSpeech > 4) {
//         success();
//     } else {
//         failure(); 
//     }
// }

// saveToDb("apna college", 
//     ()=>{
//     console.log("success: your data was saved");
//     saveToDb("hello world", 
//         () => {
//         console.log("success2: data2 saved");
//         saveToDb("shradha",
//             ()=>{
//             console.log("success3: data saved");
//         }, 
//         ()=> {
//             console.log("failure3: weak connection");
//         })
//     }, 
//     ()=> {
//         console.log("failure2: weak connection");
//     });
    
// }, 
// ()=>{
//     console.log("failure: weak connection ");
    
// });


//----------optimise with promise 

function saveToDb(data) {
    return new Promise((resolve, reject)=> {
        let internetSpeech = Math.ceil(Math.random()*10);
        if (internetSpeech > 4) {
            resolve("success : data was saved");
        } else {
            reject("failure : weak connection"); 
        }
    });
}

// saveToDb("apna college");

// -------------------------------- then() & catch()

// saveToDb("apna sapna").then(()=>{
//     console.log("promise was resolved");
// })
// .catch(()=>{
//     console.log("promise was rejected");
    
// });
    
    
    
    
// // -------------------------------- promise chaining -  -- - - - - - - -   

// saveToDb("apna sapna").then(()=>{
//     console.log("data1 saved");
//     saveToDb("helloworld").then(()=>{
//         console.log("data2 saved");
        
//     });
// })
// .catch(()=>{
//     console.log("promise was rejected");
    
// });


// -------------------------------- promise chaining -  -- - - - - - - -   improved version

// saveToDb("apna sapna")
// .then(()=>{
//     console.log("data1 saved");
//     return saveToDb("helloworld");
// })
// .then(()=>{
//     console.log("data2 saved");
//     return saveToDb("shradha");
// })
// .then(()=>{
//     console.log("data3 saved");
// })
// .catch(()=>{
//     console.log("promise was rejected");
    
// });


// -------------------------------- result & error in promise


saveToDb("apna sapna")
.then((result)=>{
    console.log("data1 saved");
    console.log("result of promise: ", result);
    return saveToDb("helloworld");
})
.then((result)=>{
    console.log("data2 saved");
    console.log("result of promise: ", result);
    return saveToDb("shradha");
})
.then((result)=>{
    console.log("data3 saved");
    console.log("result of promise: ", result);
})
.catch((error)=>{
    console.log("promise was rejected");
    console.log("error of promise: ", error);
    
});


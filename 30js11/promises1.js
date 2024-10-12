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
    return new Promise((success, failure)=> {
        let internetSpeech = Math.ceil(Math.random()*10);
        if (internetSpeech > 4) {
            success("success : data was saved");
        } else {
            failure("failure : weak connection"); 
        }
    });
}

// saveToDb("apna college");
const express = require("express");
const app = express();

// console.dir(app);

let port = 8080;
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);    
});


// ----------------- (1) ------------------
// app.use((req, res) => {
//     // console.log(req);
//     console.log(" request received ");
    
//     // res.send("this is a basic response");
    
//     // res.send({
//         //     name: "apple",
//         //     color: "red", 
//         // });
        
//         let code = "<h1>Fruits</h1> <ul> <li>apple</li> <li>orange</li> <li>banana</li> </ul>"
        
//         res.send(code);
//     });
// ----------------- (1) ------------------

// ----------------- (2) ------------------
app.get("/", (req, res)=>{
    res.send("hello root path");
});

// app.get("/apple", (req, res)=>{
//     res.send("you contacted apple path");
// });

// app.get("/orange", (req, res)=>{
//     res.send("you contacted orange path");
// });

// app.get("*", (req, res)=>{
//     res.send("this page does not exist");
// });

// app.post("/", (req, res)=>{
//     res.send("you contacted post path");
// });
// ----------------- (2) ------------------


// ----------------- (3) ------------------
app.get("/:username/:id", (req, res) => {
    let {username, id} = req.params;
    let htmlStr = `<h1>welcome to the page of @${username}!</h1>`;
    res.send(htmlStr);
});

// ----------------- (3) ------------------


// ----------------- (4) ------------------
app.get("/search", (req, res) => {
    let {q} = req.query;
    if (!q) {
        res.send(`<h1> Nothing Searched </h1>`);
    }
    res.send(`<h1>Search results for query: ${q}</h1>`);
}) ;
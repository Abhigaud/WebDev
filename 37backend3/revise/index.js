const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

// app.use(express.static("public"));
app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// //-------------------------------------------
// app.get("/",(req, res) => {
    //     res.send("this is home");
    // });
    // app.get("/app",(req, res) => {
        //     res.send("this is app");
        // });
        // //-------------------------------------------
        
        app.get("/",(req, res) => {
            res.render("home.ejs");
        });
        
app.get("/rolldice",(req, res) => {
    res.render("rolldice.ejs");
});

app.get("/diceroll",(req, res) => {
    let diceVal = Math.floor(Math.random() *6) + 1;
    res.render("diceroll.ejs", {num : diceVal});
});

app.get("/randomnum",(req, res) => {
    let randomNum = Math.floor(Math.random() *100) + 1;
    res.render("randomNum.ejs", {randomNum});
});

// //-------------------------------------------
// app.get("/ig/:username", (req, res) => {
//     let followers = ["aman", "raman", "chaman", "khushi", "annu"];
//     let { username } = req.params;
//     res.render("instagram.ejs", {username, followers});
//     // console.log(username);
// });
// //-------------------------------------------

app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    const instaData = require ("./data.json");
    const data = instaData[username];
    // console.log(data.name);
    res.render("insta.ejs",{data});
    
});

app.listen (port, () => {
console.log(`listening on port ${port}`);
});
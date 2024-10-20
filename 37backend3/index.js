const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

// -----using EJS----------------
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"/views"))

app.get("/", (req, res)=>{
    // res.send("this is home ");
    res.render("home.ejs");
});

app.get("/hello", (req, res)=>{
    res.send("hello");
    
});

// app.get("/ig/:username", (req, res)=>{
//     const followers = ["rajesh","mahesh", "shiva", "loki" ];
//     let {username} = req.params;
//     res.render("instagram.ejs", {username, followers});
// });

app.get("/ig/:username", (req, res)=>{
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    console.log(data);
    
    res.render("instagram1.ejs", {data});
});

app.get("/rolldice", (req, res)=>{
    // res.send("hello");
    let diceVal = Math.ceil(Math.random()*6);
    res.render("rolldice.ejs", {diceVal});
});

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
    
})
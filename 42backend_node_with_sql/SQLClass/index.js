const { faker } = require('@faker-js/faker');
const mysql = require ('mysql2');
const express = require("express");
const app = express();
const path = require("path");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "delta_app",
    password: "A6091401g",
})

let getRandomUser = () => {
    return [
      faker.string.uuid(),
      faker.internet.username(), 
      faker.internet.email(),
      faker.internet.password()
    ];
}

// let q = "SHOW TABLES";

// --------------------------------------------------
// // insert NEW data
// let q = "INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?) ";
// let user = ["123", "123_newuser", "abc@gmail.com", "abc"];

// --------------------------------------------------
// // insert multiple data in the form of array
// let q = "INSERT INTO user (id, username, email, password) VALUES ?";
// let users = [
    //     ["123b", "123_newuserb", "abc@gmail.comb", "abcb"],
    //     ["123c", "123_newuserc", "abc@gmail.comc", "abcc"]
    // ];
    
// // --------------------------------------------------
// // insert bulk data with faker
// let q = "INSERT INTO user (id, username, email, password) VALUES ?";
// let data = [];
// for (let i = 1; i <= 100; i++) {
//     data.push(getRandomUser());
    
// }


// try{
//     connection.query(q, [data] ,(err, result) => {
//         if(err) throw err;
//         console.log(result);
//     });
// }catch (err){
//     console.log(err);
// }

// connection.end();


//   console.log(getRandomUser());

// Home page route
app.get("/", (req, res) => {
    let q = `SELECT count(*) FROM user`;
    try{
            connection.query(q, (err, result) => {
                if(err) throw err;
                let count = result[0]["count(*)"];
                // res.send(result);
                // res.send("success");
                res.render("home.ejs", {count});
            });
        }catch (err){
            console.log(err);
            res.send("some error in DB");
        }
});

// Show route
app.get("/user", (req, res) => {
    let q = `SELECT * FROM user`;
    try{
            connection.query(q, (err, users) => {
                if(err) throw err;
                
                // res.send(users);
                res.render("showusers.ejs", {users}) ;
            });
        }catch (err){
            console.log(err);
            res.send("some error in DB");
        }
});

  app.listen("8080", () => {
    console.log("server is listening to port 8080");
    
  })
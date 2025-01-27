const { faker } = require('@faker-js/faker');
const mysql = require ('mysql2');

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
    
// --------------------------------------------------
// insert bulk data with faker
let q = "INSERT INTO user (id, username, email, password) VALUES ?";
let data = [];
for (let i = 1; i <= 100; i++) {
    data.push(getRandomUser());
    
}

try{
    connection.query(q, [data] ,(err, result) => {
        if(err) throw err;
        console.log(result);
    });
}catch (err){
    console.log(err);
}

connection.end();


//   console.log(getRandomUser());


  
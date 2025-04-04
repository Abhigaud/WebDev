const mongoose = require('mongoose');

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
    name : String,
    email: String,
    age: Number,
});

const User = mongoose.model("User", userSchema);
// const Employee = mongoose.model("Employee", userSchema);

User.deleteOne({ name :"Bruce"})
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);        
    });

//     // ---------------------------------------------------

// User.findByIdAndUpdate({ name :"Bruce"}, {age: 35}, {new : true})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);        
//     });

//     // ---------------------------------------------------

// User.updateMany({age : {$gt: 48}}, {age: 55})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);        
//     });

//     // ---------------------------------------------------
// User.findById('67e96d118b414c7f9c2799e5')
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);        
//     });

//     // --------------------------------------------
// User.find({age: {$gt : 47}})
//     .then((res) => {
//         console.log(res[0].name);
//     })
//     .catch((err) => {
//         console.log(err);        
//     });

// ---------------------------------------------------------------------------------------------------------------------------------- 
// User.insertMany([
//     {name:"Tony", email:"tony@gmail.com", age:50},
//     {name:"Peter", email:"peter@gmail.com", age:30},
//     {name:"Bruce", email:"bruce@gmail.com", age:47},
// ]).then((res) => {
//     console.log(res);
// });

// -----------------------
// const user1 = new User({
//     name:"adam",
//     email:"adam@yahoo.in",
//     age: 48,
// }) ;

// user1.save()
//     .then((res) =>{
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

//----------------------------------------------------------
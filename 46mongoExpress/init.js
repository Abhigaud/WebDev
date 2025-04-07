const mongoose = require("mongoose");
const Chat = require("./models/chat.js");


main()
    .then(() => {
        console.log("connection successful");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allchats = [
    {
        from: "neha",
        to: "priya",
        msg: "send me your exam sheets",
        created_at: new Date(),    
    },
    {
        from: "rohit",
        to: "mohit",
        msg: "send me your DSA sheets",
        created_at: new Date(),    
    },
    {
        from: "sneha",
        to: "priyam",
        msg: "where is your exam sheets",
        created_at: new Date(),    
    },
    {
        from: "amit",
        to: "sumit",
        msg: "give back my money",
        created_at: new Date(),    
    },
];

Chat.insertMany(allchats);



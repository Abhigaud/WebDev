const { default: mongoose } = require("mongoose");
const mongoos  = require("mongoose");

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch((err) => console.log());

    async  function main() {
        await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
    }

const bookSchema = new mongoose.Schema({
    title : {
        type : String,
        required: true,
        maxLength : 40,
    },
    author : {
        type : String,
    },
    price : {
        type : Number,
        min: [1, "price is too low for Amazon Selling"],
    },
    discount :{
        type : Number,
        default :0,
    },
    category: {
        type: String,
        enum : ["fiction", "non-fiction"],
    }
});

const Book = mongoose.model("Book", bookSchema);

Book.findByIdAndUpdate("67e98dfaca4bab272c79e03b", {price: -100}, {runValidators : true })
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err.errors.price.properties.message);
    });

// ----------------------------------------------
// let book1 = new Book({
//     title:"marvel comics isuue 1",
//     author : "stan lee", 
//     price : 700,
//     category: "fiction",
// });

// book1.save().then(res => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });
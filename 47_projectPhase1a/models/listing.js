const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title :{
        type: String,
        required :true
    },
    description :{
        type: String
    },
    image: {
        filename: {
          type: String,
        },
        url: {
          type: String,
        }
      },
    // image :{
    //     type: String,
    //     default : "https://images.unsplash.com/photo-1741230297079-55b8133ab5ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTR8fHxlbnwwfHx8fHw%3D",
    //     set : (v) => v === ""? "https://images.unsplash.com/photo-1741230297079-55b8133ab5ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTR8fHxlbnwwfHx8fHw%3D" : v,
    // },
    price :{
        type: Number
    },
    location: String,
    country : String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
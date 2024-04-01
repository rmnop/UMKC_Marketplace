const mongoose = require("mongoose");

const ListingSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    images: [String], // Array of image URLs
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserInfo'
    }
}, {
    collection: "Listings",
});

module.exports = mongoose.model("Listing", ListingSchema);

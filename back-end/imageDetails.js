const mongoose = require("mongoose");

const ImageDetailsSchema = new mongoose.Schema(
    {
        image: String,
        profilePicture: { type: String, default: "https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg" } 
    },
    {
        collection: "ImageDetails",
    }
);

mongoose.model("ImageDetails", ImageDetailsSchema);
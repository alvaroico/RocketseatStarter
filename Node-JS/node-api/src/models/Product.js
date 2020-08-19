const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description:{
        type: String,
        require: true,
    },
    url:{
        type: String,
        require: true,
    },
    createAr: {
        type: String,
        default: Date.now,
    },
});

mongoose.model("Product", ProductSchema);
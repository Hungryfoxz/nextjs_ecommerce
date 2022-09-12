// const mongoose = require('mongoose');
import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title : {type: String, required: true },
    slug : {type: String, required: true , unique: true},
    desc : {type: String, required: true },
    image : {type: String, required: true },
    category : {type: String, required: true },
    gender : {type: String, required: true },
    size : {type: String},
    color : {type: String},
    price : {type: Number, required: true },
    quantity : {type: Number, required: true },
    reviews : {type: Number },
    soldunits : {type: Number},
}, {timestamps: true})

// export default mongoose.model("Product", ProductSchema);
const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema);

export default Product;
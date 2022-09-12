// const mongoose = require('mongoose');
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{type: String, required: true },
    email:{type: String, required: true , unique:true},
    password:{type: String, required: true},
    cart:[],
    favourite:[],
    ordered:[]

}, {timestamps: true})

// export default mongoose.model("User", UserSchema);
const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;
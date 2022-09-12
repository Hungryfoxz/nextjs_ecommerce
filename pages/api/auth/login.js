import User from "../../../models/user";
import connectMongo from "../../../middleware/mongoose";
import CryptoJS from "crypto-js";
var jwt = require('jsonwebtoken');

const handler = async (req, res) =>{
    if(req.method == 'POST'){
        let user = await User.findOne({'email': req.body.email})
        console.log(user)
        var bytes  = CryptoJS.AES.decrypt(user.password, 'mysecretkey123');
        var originalText = bytes.toString(CryptoJS.enc.Utf8);
        console.log(JSON.parse(originalText))
        if(user){
            if(req.body.email == user.email && req.body.password ==  JSON.parse(originalText) ){
                var token = jwt.sign({email:user.email, name:user.name}, 'mySecretKey')
                res.status(200).json({ success : true, token})
            }else{
                res.status(200).json({success : false, error: 'Invalid credentials'})
            }
        }else{
            res.status(200).json({success : false , error: 'No user Found'})
        }
    }
    else{
        res.status(400).json({error: 'The method is not allowed!'})
    }
}

export default connectMongo(handler)
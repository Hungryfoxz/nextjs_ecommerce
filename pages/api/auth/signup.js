import connectMongo from "../../../middleware/mongoose";
import User from "../../../models/user";
import CryptoJS from "crypto-js";

const handler = async (req,res) =>{
    if(req.method==='POST'){
        const { name, email, password } = req.body;
        let user = new User({name, email, password: CryptoJS.AES.encrypt(JSON.stringify(password), "mysecretkey123").toString()})
        await user.save()

        res.status(200).json({success: 'success'})
    }else{
        res.status(400).json({error:'This method id not allowed'})
    }
}

export default connectMongo(handler)
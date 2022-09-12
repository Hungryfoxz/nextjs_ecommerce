import User from "../../../../models/user";
import connectMongo from "../../../../middleware/mongoose";
var base64 = require('base-64');
var utf8 = require('utf8');

const handler = async (req,res) =>{

    const { slug } = req.query;

    var baseDecoded = base64.decode(slug);
    var utfDecoded = utf8.decode(baseDecoded);

    if(req.method=='GET'){
        let user = await User.findOne({email: utfDecoded});
        res.status(200).json(user)
    }else{
        res.status(400).json({message: "Only GET request accepted"})
    }
}

export default connectMongo(handler)
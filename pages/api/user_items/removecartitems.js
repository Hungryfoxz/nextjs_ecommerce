import connectMongo from "../../../middleware/mongoose";
import User from "../../../models/user";

const handler = async (req,res) =>{
    if(req.method == 'POST'){
        if(req.body._id===''){
            res.status(200).json({success: "User Id not found!"})
        }else{
            let user = await User.findByIdAndUpdate(req.body._id, { "$pull": { "cart": req.body.product_id } },{ "safe": true, "upsert": true },)
            res.status(200).json({success: user, message: 'Item has been removed from the cart Successfully'})
        }
    }else{
        res.status(400).json({error:'This method is not allowed'})
    }
}

export default connectMongo(handler)
import connectMongo from "../../middleware/mongoose";
import Product from "../../models/product"; 

const handler = async (req,res) =>{
    if(req.method == 'POST'){
        for (let i = 0; i < req.body.length; i++) {
        await Product.findByIdAndUpdate(req.body[i]._id, req.body[i])
        }
        res.status(200).json({success: "Updated Successfully"})
    }else{
        res.status(400).json({error:'This method id not allowed'})
    }
}

export default connectMongo(handler)
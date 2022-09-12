import connectMongo from "../../middleware/mongoose";
import Product from "../../models/product"; 

const handler = async (req,res) =>{
    if(req.method == 'POST'){
        for (let i = 0; i < req.body.length; i++) {
        let product = new Product({
            title : req.body[i].title,
            slug : req.body[i].slug,
            image : req.body[i].image,
            gender : req.body[i].gender,
            desc : req.body[i].desc,
            category : req.body[i].category,
            size : req.body[i].size,
            color : req.body[i].color,
            price : req.body[i].price,
            quantity : req.body[i].quantity,
            reviews : req.body[i].reviews,
            soldunits : req.body[i].soldunits,
        })
        await product.save();
        }
        res.status(200).json({success: "success"})
    }else{
        res.status(400).json({error:'This method id not allowed'})
    }
}

export default connectMongo(handler)
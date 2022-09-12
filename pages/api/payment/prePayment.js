import connectMongo from "../../../middleware/mongoose";
import Order from '../../../models/order'

const handler = async (req,res) =>{
    if(req.method==='POST'){
        const { id,order_id,address,cart,amount } = req.body;
        const cartObject = Object.assign({}, cart)
        if(address.length<4){
            res.status(200).json({error: 'Address must be more than 4 characters' })
        }

        let order = new Order({
                                user_id:id,
                                orderId:order_id,
                                products:cartObject,
                                address:address,
                                amount:amount,
                            })
        await order.save()

        res.status(200).json({success: 'success' , status: true})
    }else{
        res.status(400).json({error:'This method id not allowed'})
    }
}

export default connectMongo(handler)
import connectMongo from "../../../middleware/mongoose";
import Order from '../../../models/order'

const handler = async (req,res) =>{
    if(req.method==='POST'){
        let order = await Order.findOneAndUpdate({orderId:req.body.order_id},{status: 'Paid'})
        // Order.findByIdAndUpdate(order._id, {status: 'Paid'})
        // const { id,order_id,address,cart,amount } = req.body;
        // let order = new Order({
        //                         user_id:id,
        //                         orderId:order,
        //                         products:cart,
        //                         address:address,
        //                         amount:amount,
        //                     })
        // await order.save()

        res.status(200).json({success: 'success' })
    }else{
        res.status(400).json({error:'This method id not allowed'})
    }
}

export default connectMongo(handler)
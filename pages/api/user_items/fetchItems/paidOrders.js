import connectMongo from "../../../../middleware/mongoose";
import Order from '../../../../models/order'

const handler = async (req,res) =>{
    if(req.method==='POST'){
        if(req.body.user_id === null){
            res.status(400).json({error: 'Empty Request Body', status: false})
        }
        else{
            let order = await Order.find({user_id:req.body.user_id})
            if(order.length === 0){
                res.status(200).json({error: 'No corresponding data for the user found', status : false })
            }else{
                let array = []
                order.map((item) => {
                    if(item.status === 'Paid'){
                        array.push(item)
                    }
                })
                if(array.length === 0){
                    res.status(200).json({error: 'No Pending Request', status:false })
                }else{
                    res.status(200).json({success: 'success', orders : array , status: true})
                }
            }
            }
        }else{
            res.status(400).json({error:'This method id not allowed'})
        }
    }


export default connectMongo(handler)
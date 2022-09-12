// const mongoose = require('mongoose');
import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    user_id:{type: String, required: true },
    orderId:{type: String, required:true},
    paymentInfo:{type: String, default:'To be fetched from the Payment Gateway'},
    products:{type: Object, required: true},
    address:{type: String, required: true},
    amount:{type: Number, required: true},
    status:{type: String, default:'Pending' ,required: true},
}, {timestamps: true})

// export default mongoose.model("Order", OrderSchema);
const Order = mongoose.models.Order || mongoose.model('Order', OrderSchema);

export default Order;
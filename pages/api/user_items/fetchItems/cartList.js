// import Product from "../../../../models/product";
import connectMongo from "../../../../middleware/mongoose";

const handler = async (req,res) =>{

    let product_ids = req.body.cart_items;
    let products = product_ids
    console.log(product_ids.length)
    // for (let i = 0; i < product_ids.length; i++) {
    //     const element = product_ids[i];
    //     console.log(element.toString())
    //     products.push(await Product.findById(element))
    // }
    // let products = await Product.find();
    // let tshirts = {}
    // for(let item of products){
    //     if(item.title in tshirts){
    //         if(!tshirts[item.title].color.includes(item.color) && item.quantity > 0){
    //             tshirts[item.title].color.push(item.color)
    //         }
    //         if(!tshirts[item.title].size.includes(item.size) && item.quantity > 0){
    //             tshirts[item.title].size.push(item.size)
    //         }
    //     }else{
    //         tshirts[item.title] = JSON.parse(JSON.stringify(item));
    //         if(item.quantity > 0){
    //             tshirts[item.title].color = [item.color];
    //             tshirts[item.title].size = [item.size]
    //         }
    //     }
    // }
    
    // res.status(200).json({ tshirts })
    res.status(200).json({ success: "Success" , len: products.length, type: typeof products})
}

export default connectMongo(handler)
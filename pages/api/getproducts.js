import Product from "../../models/product";
import connectMongo from "../../middleware/mongoose";

const handler = async (req,res) =>{
    let products = await Product.find();
    let tshirts = {}
    for(let item of products){
        if(item.image in tshirts){
            if(!tshirts[item.image].color.includes(item.color) && item.quantity > 0){
                tshirts[item.image].color.push(item.color)
            }
            if(!tshirts[item.image].size.includes(item.size) && item.quantity > 0){
                tshirts[item.image].size.push(item.size)
            }
        }else{
            tshirts[item.image] = JSON.parse(JSON.stringify(item));
            if(item.quantity > 0){
                tshirts[item.image].color = [item.color];
                tshirts[item.image].size = [item.size]
            }
        }
    }
    
    res.status(200).json({ tshirts })
}

export default connectMongo(handler)

// export default async function addTest(req, res) {
//     try {
//       console.log('CONNECTING TO MONGO');
//       await connectMongo();
//       console.log('CONNECTED TO MONGO');
  
//       console.log('CREATING DOCUMENT');
//       const products = await Product.find();
//       console.log('CREATED DOCUMENT');
  
//       res.status(200).json({ products });

//     } catch (error) {
//       console.log(error);
//       res.status(401).json({ error });
//     }
//   }
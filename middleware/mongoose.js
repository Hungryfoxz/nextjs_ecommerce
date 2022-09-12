// import mongoose from 'mongoose';

// const connectMongo = async () => mongoose.connect(process.env.MONGO_URI);

// export default connectMongo;


import mongoose from 'mongoose';

const connectMongo = handler => async (req,res) => {
    if(mongoose.connections[0].readyState){
        return handler(req,res)
    }
    mongoose.connect(process.env.MONGO_URI)
    return handler(req, res);
}

export default connectMongo;
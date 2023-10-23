import mongoose from "mongoose";
const { Schema } = mongoose


const Product = new Schema({
    name: {
        type: String,
        required: true
    },
    price:{
        type:Number,
        required:true
    },
    desc: {
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    category:{ type: Schema.ObjectId, ref: 'Category' }
    
    
})

export default mongoose.model("Product",Product) 
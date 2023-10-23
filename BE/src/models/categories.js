import mongoose from "mongoose";
const { Schema } = mongoose


const Category = new Schema({
    name: {
        type: String,
        required: true
    },
    products: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Product",
        },
    ],
})

export default mongoose.model("Category",Category) 
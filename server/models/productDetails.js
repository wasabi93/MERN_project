import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    name: String,
    description: String,
    album: String,
    type: String,
    url: String,
    price: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

const ProductDetails = mongoose.model('ProductDetails', productSchema);

export default ProductDetails;
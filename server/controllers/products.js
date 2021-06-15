import express from 'express';
import mongoose from 'mongoose';

import ProductDetails from '../models/productDetails.js';

const router = express.Router();

export const getProducts = async (req, res) => { 
    try {
        const pDetails = await ProductDetails.find();
                
        res.status(200).json(pDetails);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getProduct = async (req, res) => { 
    const { id } = req.params;

    try {
        const product = await ProductDetails.findById(id);
        
        res.status(200).json(product);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createProduct = async (req, res) => {
    const { name, description, album, type, url, price } = req.body;

    const newProductDetails = new ProductDetails({ name, description, album, type, url, price  })

    try {
        await newProductDetails.save();

        res.status(201).json(newProductDetails );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, description, album, type, url, price  } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No product with id: ${id}`);

    const updateProduct = { name, description, album, type, url, price , _id: id };

    await ProductDetails.findByIdAndUpdate(id, updateProduct, { new: true });

    res.json(updateProduct);
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No product with id: ${id}`);

    await ProductDetails.findByIdAndRemove(id);

    res.json({ message: "Product deleted successfully." });
}


export default router;
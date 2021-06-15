import express from 'express';

import { getProducts, getProduct, createProduct, updateProduct, deleteProduct } from '../controllers/products.js';

const router = express.Router();

router.get('/', getProducts);
router.post('/', createProduct);
router.get('/:id', getProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;
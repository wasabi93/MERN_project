import axios from 'axios';

const productUrl = 'http://localhost:5000/admin';

export const fetchProducts = () => axios.get(productUrl);
export const createProduct = (newProduct) => axios.post(productUrl, newProduct);
export const updateProduct = (id, updatedProduct) => axios.patch(`${productUrl}/${id}`, updatedProduct);
export const deleteProduct = (id) => axios.delete(`${productUrl}/${id}`);

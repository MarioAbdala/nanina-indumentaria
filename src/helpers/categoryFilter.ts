import { products } from "../data";
import { Product } from "../interfaces";

export const categoryFilter = (category: string):Product[] => {
    const filteredProducts = products.filter(product => product.category === category);
    return filteredProducts;
};
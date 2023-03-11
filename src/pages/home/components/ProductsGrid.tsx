import { ProductsGridProps } from "../../../interfaces";
import { Product } from "./Product";
import './ProductsGrid.css';

export const ProductsGrid = ({ products }: ProductsGridProps) => {
    return (
    <div>
        {
            products.map(product => (
                <Product key={product.name} product={product} />
            ))
        }
    </div>
    )
};
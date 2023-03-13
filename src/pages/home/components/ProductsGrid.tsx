import { ProductsGridProps } from "../../../interfaces";
import { Product } from "./Product";
import './ProductsGrid.css';

export const ProductsGrid = ({ products }: ProductsGridProps) => {
    return (
    <div className="products-grid">
        {
            products.map(product => (
                <Product key={product.name} product={product} />
            ))
        }
    </div>
    )
};
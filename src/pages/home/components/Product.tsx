import { ProductProps } from '../../../interfaces';
import './Product.css';

export const Product = ({ product }: ProductProps) => {
    return (
    <a href={`productos/${product.category.toLowerCase()}/${product.link}`} className="product">
        <img src={product.img} alt={product.name} className="product-image" />
        <p className="product-name">{product.name}</p>
        <p className="product-price">${product.price}</p>
    </a>
    )
};
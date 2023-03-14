import { colors } from '../../../data';
import { ProductProps } from '../../../interfaces';
import { ColorsGrid } from './';
import './Product.css';

export const Product = ({ product }: ProductProps) => {
    return (
    <div className="product">
        <a href={`productos/${product.category.toLowerCase()}/${product.link}`}>
            <img src={product.img} alt={product.name} className="product-image" />
        </a>
        <a className="product-name-container" href={`productos/${product.category.toLowerCase()}/${product.link}`}>
            <p className="product-name">{product.name}</p>
        </a>
        <p className="product-price">${product.price}</p>
        <ColorsGrid colors={colors} />
    </div>
    )
};
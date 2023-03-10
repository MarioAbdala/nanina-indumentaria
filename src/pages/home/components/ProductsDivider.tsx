import { ProductsDividerProps } from "../../../interfaces";
import './ProductsDivider.css';

export const ProductsDivider = ({ title, subtitle }:ProductsDividerProps) => {
    return (
    <div className="category-divider">
        <div className="category-title">
            <span className="divider-line"></span>
            <h2>{title}</h2>
            <span className="divider-line"></span>
        </div>
        {!!subtitle && (<p className="category-subtitle">{subtitle}</p>)}
    </div>
    )
};
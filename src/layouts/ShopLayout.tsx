import { ShopLayoutProps } from "../interfaces";
import './ShopLayout.css';

export const ShopLayout = ({ children } : ShopLayoutProps) => {
    return (
    <div className="shop-container">
        <div className="shop-banner">
            <h2>Shop Category</h2>
        </div>
        <div className="shop-inner">
            <div className="shop-bar">
                
            </div>
            <div className="shop-content">
                {children}
            </div>
        </div>
    </div>
    )
};
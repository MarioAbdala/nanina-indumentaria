import { NavLink } from "react-router-dom";
import { ShopLayoutProps } from "../interfaces";
import './ShopLayout.css';

export const ShopLayout = ({ children, category } : ShopLayoutProps) => {
    return (
    <div className="shop-container">
        <div className="shop-banner">
            <h2>{category}</h2>
        </div>
        <div className="shop-nav">
            <p><NavLink to="/">Home</NavLink> {">"} {category}</p>
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
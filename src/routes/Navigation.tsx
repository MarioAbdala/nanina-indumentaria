import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Cliente, Home, Products } from "../pages";
import { NavigationProps } from "../interfaces";
import { categoryFilter } from '../helpers';
import { categories } from "../data";
import { Product } from "../pages/productos/Product";

export const Navigation = ({children}: NavigationProps) => {
    return (
    <BrowserRouter>
        {children}
        <Routes>
            <Route path="" element={<Home />} />
            <Route path="cliente" element={<Cliente />} />
            <Route path="productos">
                {
                    categories.map(category => (
                        <Route key={category} path={`${category.toLowerCase()}`} element={<Products category={category} />}>
                            {categoryFilter(category).map(product => (
                                <Route key={product.id} path={`${product.link}`} element={<Product product={product} />} />
                            ))}
                        </Route>
                    ))
                }
            </Route>
            <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
    </BrowserRouter>
    )
};
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Cliente, Home, Products } from "../pages";
import { categoryFilter } from '../helpers';
import { categories } from "../data";
import { Product } from "../pages/productos/Product";
import { MainLayout } from '../layouts';

export const Navigation = () => {
    return (
    <BrowserRouter>
        <MainLayout>
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="cliente" element={<Cliente />} />
                <Route path="productos">
                    {
                        categories.map(category => (
                            <React.Fragment key={category[1]}>
                                <Route path={`${category[0].toLowerCase()}`} element={<Products category={category[0]} />} />
                                <Route path={`${category[0].toLowerCase()}`}>
                                    {categoryFilter(category[0]).map(product => (
                                       <Route key={product.id} path={`${product.link}`} element={<Product product={product} />} />
                                    ))}
                                </Route>
                            </React.Fragment>
                        ))
                    }
                </Route>
                <Route path="/*" element={<Navigate to="/" replace />} />
            </Routes>
        </MainLayout>
    </BrowserRouter>
    )
};
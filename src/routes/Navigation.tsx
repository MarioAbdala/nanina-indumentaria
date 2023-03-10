import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NavigationProps } from "../interfaces";
import { Bombachas, Cliente, Corpiños, Home, Mallas, Productos } from "../pages";

export const Navigation = ({children}: NavigationProps) => {
    return (
    <BrowserRouter>
        {children}
        <Routes>
            <Route path="" element={<Home />} />
            <Route path="cliente" element={<Cliente />} />
            <Route path="productos">
                <Route path="bombachas" element={<Productos children={<Bombachas />} />} />
                <Route path="corpiños" element={<Productos children={<Corpiños />} />} />
                <Route path="mallas" element={<Productos children={<Mallas />} />} />
            </Route>
            <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
    </BrowserRouter>
    )
};
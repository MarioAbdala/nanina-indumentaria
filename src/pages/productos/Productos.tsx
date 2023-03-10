import { ProductosProps } from "../../interfaces";

export const Productos = ({children}: ProductosProps) => {
    return (
    <>
        <h1>Productos</h1>
        {children}
    </>
    )
};
import { ProductPageProps } from "../../interfaces";

export const Product = ({ product }: ProductPageProps) => {
    return (
    <>
        <h1>{product.name}</h1>
    </>
    )
};
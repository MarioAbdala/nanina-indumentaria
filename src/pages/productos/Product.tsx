import { ProductPageProps } from "../../interfaces";

export const Product = ({ product }: ProductPageProps) => {
    return (
    <div className="product-page">
        <h1>{product.name}</h1>
    </div>
    )
};
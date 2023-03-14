import { ProductsPageProps } from "../../interfaces";

export const Products = ({ category }: ProductsPageProps) => {
    return (
    <div className="products-page">
        <h1>{category}</h1>
    </div>
    )
};
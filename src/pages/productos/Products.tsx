import { ProductsPageProps } from "../../interfaces";

export const Products = ({ category }: ProductsPageProps) => {
    return (
    <>
        <h1>{category}</h1>
    </>
    )
};
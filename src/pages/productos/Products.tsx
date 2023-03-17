import { ProductsPageProps } from "../../interfaces";
import { ShopLayout } from "../../layouts";

export const Products = ({ category }: ProductsPageProps) => {
    return (
    <div className="products-page">
        <ShopLayout>
            <h1>{category}</h1>
        </ShopLayout>
    </div>
    )
};
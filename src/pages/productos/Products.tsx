import { categoryFilter } from "../../helpers";
import { ProductsPageProps } from "../../interfaces";
import { ShopLayout } from "../../layouts";
import { ProductsGrid } from "../home/components";
import './Products.css';

export const Products = ({ category }: ProductsPageProps) => {
    return (
    <div className="products-page">
        <ShopLayout category={category}>
            <ProductsGrid products={categoryFilter(category)} />
        </ShopLayout>
    </div>
    )
};
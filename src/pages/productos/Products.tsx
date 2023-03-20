import { ProductsPageProps } from "../../interfaces";
import { ShopLayout } from "../../layouts";

export const Products = ({ category }: ProductsPageProps) => {
    return (
    <div className="products-page">
        <ShopLayout category={category}>
            
        </ShopLayout>
    </div>
    )
};
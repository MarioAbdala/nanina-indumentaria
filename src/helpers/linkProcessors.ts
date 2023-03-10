import { Product } from "../interfaces";

export const generateLink = (id: number): string => {
    return `articulo-${id}`;
};

type PreProduct = Omit<Product, "link">;

export const generateProduct = ({ id, img, name, price, colors, isNew, category }: PreProduct):Product => {
    const link = `articulo-${id}`;
    return {
        id, img, name, price, colors, isNew, link, category
    };
};
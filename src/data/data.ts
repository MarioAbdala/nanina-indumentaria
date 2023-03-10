import { Category, Product, Section } from "../interfaces";
import { generateProduct } from "../helpers";

export const slides: string[] = ['https://lamasonerialenceria.com/media/wysiwyg/la-masoneria/banner2_1.jpg', 'https://lamasonerialenceria.com/media/wysiwyg/la-masoneria/banner3.jpg', 'https://lamasonerialenceria.com/media/wysiwyg/la-masoneria/bannerprincipal.jpg'];

export const sections: Section[] = [
    {
        name: 'Mallas',
        img: 'http://calisto.besol.com.ar/img/ImagenProducto/43cd1f9542a5440b8cf7dfad1b964b58.jpg',
        url: 'mallas'
    },
    {
        name: 'Corpiños',
        img: 'https://coconutlenceria.com.ar/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/6/0/6011.jpg',
        url: 'corpiños'
    },
    {
        name: 'Bombachas',
        img: 'https://d2r9epyceweg5n.cloudfront.net/stores/410/265/products/culotteless-de-encaje-tiro-alto1-e2c3a5e781525de05f16205995282408-640-0.jpg',
        url: 'bombachas'
    }
];

export const products: Product[] = [
    generateProduct({
      id: 420,
      name: "Cancán Algodón y Lycra",
      img: "https://www.milanmayorista.com.ar/img/productos/grandes/1193-1.jpg",
      price: 0,
      category: "Medias"
    })
];

// export const categories: Category[] = ["Bombachas", "Corpiños", "Mallas", "Medias"];

export const categories: Array<[Category, number]> = [["Bombachas", 1], ["Corpiños", 2], ["Mallas", 3], ["Medias", 4]];
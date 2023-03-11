// Generic

export type Category = "Mallas" | "Corpiños" | "Bombachas" | "Medias";

export interface Section {
    name: Category;
    img: string;
    url: string;
};

export interface ProductColor {
    name: string;
    color: string;
};

export interface Product {
    id: number;
    name: string;
    img: string;
    price: number;
    category: Category;
    link: string;
    colors?: ProductColor[];
    isNew?: boolean;
};

// Routes

export interface NavigationProps {
    children: JSX.Element | JSX.Element[];
};

// Home components

export interface CarouselProps {
    slides: string[];
    autoPlay?: boolean;
};

export interface SectionContainerProps {
    sections: Section[];
};

export interface SectionProps {
    section: Section;
    [x: string]: any;
};

export interface ProductsDividerProps {
    title: string;
    subtitle?: string;
};

export interface ProductsGridProps {
    products: Product[];
};

export interface ProductProps {
    product: Product;
};

// Products components

export interface ProductsPageProps {
    category: Category;
};

export interface ProductPageProps {
    product: Product;
};
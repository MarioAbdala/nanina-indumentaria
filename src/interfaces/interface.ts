// Generic

export type Category = "Mallas" | "Corpiños" | "Bombachas" | "Medias";

export interface Color {
    name: string;
    hex: string;
}

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

// Layout

export interface MainLayoutProps {
    children: JSX.Element | JSX.Element[];
};

// Main components

export interface FooterColumnProps {
    title: string;
    links: [string, string][];
};

// Home components

export interface CarouselProps {
    slides: string[];
    autoPlay?: boolean;
};

export interface SectionContainerProps {
    sections: [Section, Section, Section];
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

export interface ColorsGridProps {
    colors: Color[];
};

export interface ColorProps {
    color: Color;
};

// Products components

export interface ProductsPageProps {
    category: Category;
};

export interface ProductPageProps {
    product: Product;
};
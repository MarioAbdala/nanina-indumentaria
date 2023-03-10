import { Carousel, ProductsDivider, SectionsContainer } from './components';
import { slides, sections, products } from '../../data';
import './Home.css';
import { ProductsGrid } from './components/ProductsGrid';

export const Home = () => {
    
    return (
        <div className="home-page">
            <Carousel slides={slides} />
            <SectionsContainer sections={sections} />
            <ProductsDivider title="Novedades" subtitle="Todo lo nuevo, para vos" />
            <ProductsGrid products={products} />
        </div>
    )
};
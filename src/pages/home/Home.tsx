import { Carousel, ProductsDivider, SectionsContainer } from './components';
import { slides, sections, products } from '../../data';
import './Home.css';
import { ProductsGrid } from './components/ProductsGrid';
import { categoryFilter } from '../../helpers';

export const Home = () => {
    
    return (
        <div className="home-page">
            <Carousel slides={slides} />
            <SectionsContainer sections={sections} />
            <ProductsDivider title="Medias" />
            <ProductsGrid products={categoryFilter("Medias")} />
        </div>
    )
};
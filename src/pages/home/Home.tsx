import { Carousel, ProductsDivider, SectionsContainer, ProductsGrid } from './components';
import { slides, sections } from '../../data';
import { categoryFilter } from '../../helpers';
import './Home.css';

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
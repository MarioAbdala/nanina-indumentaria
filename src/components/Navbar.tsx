import { NavLink } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
    return (
    <>
        <div className="pre-navbar">
            <a className="pre-navbar-mail" href="mailto:naninaindumentaria@gmail.com">naninaindumentaria@gmail.com</a>
            <a className="pre-navbar-phone" href="#"><span className="material-icons">call</span> 03455-42297</a>
            <a className="pre-navbar-store" href="#"><span className="material-icons">store</span> Nuestro local</a>
        </div>
        <nav>
            <NavLink to="/" className="logo-container"><h1 className="logo">NANINA</h1></NavLink>
            <ul>
                <li>
                    <NavLink to="/productos/mallas" className={({isActive}) => isActive ? 'nav-active' : ''}>Ofertas</NavLink>
                </li>
                <li>
                    <NavLink to="/productos/bombachas" className={({isActive}) => isActive ? 'nav-active' : ''}>Productos</NavLink>
                </li>
                <li>
                    <NavLink to="/productos/corpiños" className={({isActive}) => isActive ? 'nav-active' : ''}>Catálogo</NavLink>
                </li>
                <li>
                    <NavLink to="/productos/medias" className={({isActive}) => isActive ? 'nav-active' : ''}>Conocenos</NavLink>
                </li>
            </ul>
        </nav>
    </>
    )
};
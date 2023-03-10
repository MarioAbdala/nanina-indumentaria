import { NavLink } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
    return (
    <nav>
        <ul>
            <li>
                <NavLink to="/" className={({isActive}) => isActive ? 'nav-active' : ''}>Home</NavLink>
            </li>
            <li>
                <NavLink to="/cliente" className={({isActive}) => isActive ? 'nav-active' : ''}>Cliente</NavLink>
            </li>
            <li>
                <NavLink to="/productos/corpiños" className={({isActive}) => isActive ? 'nav-active' : ''}>Corpiños</NavLink>
            </li>
            <li>
                <NavLink to="/productos/bombachas" className={({isActive}) => isActive ? 'nav-active' : ''}>Bombachas</NavLink>
            </li>
            <li>
                <NavLink to="/productos/mallas" className={({isActive}) => isActive ? 'nav-active' : ''}>Mallas</NavLink>
            </li>
        </ul>
    </nav>
    )
};
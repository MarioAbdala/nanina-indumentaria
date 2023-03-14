import { FooterColumnProps } from '../interfaces';
import './FooterColumn.css';

export const FooterColumn = ({ title, links }:FooterColumnProps) => {
    return (
    <div className="footer-column">
        <p className="footer-column-title">{title}</p>
        {links.map(link => (
            <a className="footer-column-link" key={link[0]} href={link[1]}>{link[0]}</a>
        ))}
    </div>
    )
};
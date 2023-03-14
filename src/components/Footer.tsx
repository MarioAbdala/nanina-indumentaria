import './Footer.css';
import { FooterColumn } from './FooterColumn';

export const Footer = ({...props}) => {
    return (
    <div className="footer" style={props.style}>
        <div className="footer-contact">
            
        </div>
        <FooterColumn title={"Categorías"} links={[["Corpiños","/productos/corpiños"], ["Bombachas", "/productos/bombachas"]]} />
    </div>
    )
};
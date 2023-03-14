import { FooterColumn } from './';
import { accesosLinks, infoLinks, links } from '../data';
import './Footer.css';

export const Footer = () => {
    return (
    <div className="footer">
        <div className="footer-contact">
            <h3>NANINA INDUMENTARIA</h3>
            <div className="footer-icon-dual-text-container">
                <span className="material-icons footer-icon">place</span>
                <div className="location">
                    <p>San Martín 575</p>
                    <p>Villaguay, Entre Ríos</p>
                </div>
            </div>
            <div className="footer-icon-text-container">
                <span className="material-icons footer-icon">mail_outline</span>
                <a className="footer-link" href="mailto:naninaindumentaria@gmail.com">naninaindumentaria@gmail.com</a>
            </div>
            <div className="footer-icon-text-container">
                <span className="material-icons footer-icon">phone_iphone</span>
                <p>03455 422297</p>
            </div>
            <div className="footer-logos-container">
                <a className="footer-logo-container" href="https://www.instagram.com/nanina_lenceria/"><img className="footer-logo" src="https://cdn.iconscout.com/icon/free/png-256/instagram-1464521-1239436.png" alt="instagram logo" /></a>
            </div>
        </div>
        <FooterColumn title={"Categorías"} links={links} />
        <FooterColumn title={"Información"} links={infoLinks} />
        <FooterColumn title={"Accesos rápidos"} links={accesosLinks} />
    </div>
    )
};
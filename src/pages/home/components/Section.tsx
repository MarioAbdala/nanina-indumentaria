import { NavLink } from "react-router-dom";
import { SectionProps } from "../../../interfaces";
import './Section.css';

export const Section = ({section: { name, img, url }, ...props}: SectionProps) => {
    const sectionStyle = {
        backgroundImage: `url(${img})`
    };
    return (
    <NavLink to={url} className={`section-link ${props.className}`}>
        <div className="section" style={sectionStyle}>
            <h2 className="section-title">{name}</h2>
        </div>
    </NavLink>
    )
};
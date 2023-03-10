import { Section } from "./Section";
import { SectionContainerProps } from "../../../interfaces";
import './SectionsContainer.css';

export const SectionsContainer = ({ sections }:SectionContainerProps) => {
    return (
    <div className="section-container">
        {sections.map((section, index) => (
            <Section section={section} key={section.name} className={index % 3 === 0 ? "main-section" : "secondary-section"} />
        ))}
    </div>
    )
};
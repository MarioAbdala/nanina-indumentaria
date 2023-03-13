import { ColorsGridProps } from "../../../interfaces";
import { Color } from "./Color";
import './ColorsGrid.css';

export const ColorsGrid = ({ colors }: ColorsGridProps) => {
    return (
    <div className="colors-grid">
        {colors.map((color) => (
            <Color key={color.name} color={color} />
        ))}
    </div>
    )
};
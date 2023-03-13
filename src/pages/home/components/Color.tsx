import { useState } from "react";
import { ColorProps } from "../../../interfaces";
import './Color.css';

export const Color = ({ color } : ColorProps) => {
    const [isHovering, setIsHovering] = useState(false);
    const handleMouseOver = () => {
        setIsHovering(true);
    };
    const handleMouseOut = () => {
        setIsHovering(false);
    };
    return (
        <div className="color" style={{"backgroundColor": color.hex}} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            {isHovering && (
                <div className="color-text">
                    <p>{color.name}</p>
                </div>
            )}
        </div>
    )
};
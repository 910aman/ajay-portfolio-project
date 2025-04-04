import React, { useEffect, useState } from "react";
import "./style.css";

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        const moveCursor = (event) => {
            if (!isDisabled) {
                setPosition({ x: event.clientX, y: event.clientY });
            }
        };

        document.addEventListener("mousemove", moveCursor);
        document.addEventListener("mouseout", () => setIsDisabled(true));
        document.addEventListener("mouseover", () => setIsDisabled(false));

        return () => {
            document.removeEventListener("mousemove", moveCursor);
            document.removeEventListener("mouseout", () => setIsDisabled(true));
            document.removeEventListener("mouseover", () => setIsDisabled(false));
        };
    }, [isDisabled]);

    useEffect(() => {
        const elements = document.querySelectorAll("a, button");

        const addHoverEffect = () => setIsHovered(true);
        const removeHoverEffect = () => setIsHovered(false);

        elements.forEach((el) => {
            el.addEventListener("mouseenter", addHoverEffect);
            el.addEventListener("mouseleave", removeHoverEffect);
        });

        return () => {
            elements.forEach((el) => {
                el.removeEventListener("mouseenter", addHoverEffect);
                el.removeEventListener("mouseleave", removeHoverEffect);
            });
        };
    }, []);

    return (
        <div
            className={`custom-cursor ${isHovered ? "hovered" : ""} ${isDisabled ? "disabled" : ""}`}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}
        />
    );
};

export default CustomCursor;

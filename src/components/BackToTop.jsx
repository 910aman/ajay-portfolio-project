import { useState, useEffect } from "react";
import "./style.css";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollPercent, setScrollPercent] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const bodyHeight = document.body.scrollHeight;
            const windowHeight = window.innerHeight;
            const scrollEndPos = bodyHeight - windowHeight;
            const totalScrollPercent = (window.scrollY / scrollEndPos) * 100;

            setScrollPercent(totalScrollPercent.toFixed(0));
            setIsVisible(totalScrollPercent > 5);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            className={`back-top-btn ${isVisible ? "show" : ""}`}
            aria-label="Back to top"
            onClick={scrollToTop}
        >
            {scrollPercent}%
        </button>
    );
};

export default BackToTop;

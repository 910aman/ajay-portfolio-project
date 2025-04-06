import { useEffect } from "react";

const useScrollAnimation = () => {
    useEffect(() => {
        const elements = document.querySelectorAll("[data-scroll]");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate");
                    }
                });
            },
            { threshold: 0.2 } // 20% of the element should be visible to trigger animation
        );

        elements.forEach((el) => observer.observe(el));

        return () => elements.forEach((el) => observer.unobserve(el));
    }, []);
};

export default useScrollAnimation;

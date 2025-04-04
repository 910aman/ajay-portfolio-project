import { useEffect } from "react";

const useScrollReveal = () => {
    useEffect(() => {
        const revealElements = document.querySelectorAll("[data-reveal]");

        const scrollReveal = () => {
            revealElements.forEach((element) => {
                if (element.getBoundingClientRect().top < window.innerHeight / 1.15) {
                    element.classList.add("revealed");
                } else {
                    element.classList.remove("revealed");
                }
            });
        };

        window.addEventListener("scroll", scrollReveal);
        scrollReveal();

        return () => window.removeEventListener("scroll", scrollReveal);
    }, []);
};

export default useScrollReveal;

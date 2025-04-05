import { useEffect, useRef } from "react";
import './style.css'; // Assuming your styles live here

const Hero = () => {
    const letterRefs = useRef([]);
    const activeLetterBoxIndex = useRef(0);
    const lastActiveLetterBoxIndex = useRef(0);

    const setLetterEffect = () => {
        let totalLetterBoxDelay = 0;

        letterRefs.current.forEach((box, i) => {
            let delay = 0;
            const text = box.dataset.text;
            box.innerHTML = "";

            for (let j = 0; j < text.length; j++) {
                const span = document.createElement("span");
                span.style.animationDelay = `${delay}s`;
                span.className = i === activeLetterBoxIndex.current ? "in" : "out";
                span.textContent = text[j];
                if (text[j] === " ") span.classList.add("space");
                box.appendChild(span);

                if (j < text.length - 1) delay += 0.05;
            }

            if (i === activeLetterBoxIndex.current) {
                totalLetterBoxDelay = Number(delay.toFixed(2));
            }

            box.classList.toggle("active", i === lastActiveLetterBoxIndex.current);
        });

        setTimeout(() => {
            lastActiveLetterBoxIndex.current = activeLetterBoxIndex.current;
            activeLetterBoxIndex.current =
                activeLetterBoxIndex.current >= letterRefs.current.length - 1 ? 0 : activeLetterBoxIndex.current + 1;
            setLetterEffect();
        }, totalLetterBoxDelay * 1000 + 3000);
    };

    useEffect(() => {
        letterRefs.current = Array.from(document.querySelectorAll("[data-letter-effect]"));
        letterRefs.current.forEach((el) => el.setAttribute("data-text", el.textContent.trim()));
        setLetterEffect();
    }, []);

    return (
        <section className="section hero" id="home" aria-label="home">
            <div className="container">
                <img
                    src="./assets/images/hero-banner.png"
                    width="322"
                    height="322"
                    alt=""
                    className="hero-banner"
                />

                <div className="hero-content">
                    <h1 className="h1 hero-title">Ajay Rajput</h1>

                    <div className="wrapper h2">
                        <strong className="strong" data-letter-effect>Photographer</strong>
                        <strong className="strong" data-letter-effect>Shutterbug</strong>
                        <strong className="strong" data-letter-effect>Cameraman</strong>
                        <strong className="strong" data-letter-effect>Pacific Portraits</strong>
                    </div>

                    <p className="hero-text">15+ Years Of Experience</p>
                </div>
            </div>

            <img
                src="./assets/images/hero-shape.svg"
                width="211"
                height="189"
                alt=""
                className="shape"
            />
        </section>
    );
};

export default Hero;

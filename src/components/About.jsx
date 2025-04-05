import "./style.css"; // Ensure CSS file is linked

const AboutSection = () => {


    return (
        <section className="section about" id="about" aria-label="about me" >
            <div className="container">
                <div className="about-content">
                    <h2 className="h2 section-title">
                        Hi. I’m <br />
                        Ajay Rajput
                    </h2>
                    <div className="wrapper has-before" >
                        <p className="section-text">
                            A passionate <em className="em">photographer</em> who has been working in this field for{" "}
                            <em className="em">the last 10 years.</em> I’m ready to give you my best.
                        </p>
                        <img src="./assets/images/signature.png" width="151" height="92" loading="lazy" alt="signature" className="img" />
                    </div>
                </div>

                <figure className="about-banner">
                    <div className="img-holder has-before" >
                        <img
                            src="./assets/images/about-banner.jpg"
                            width="512"
                            height="684"
                            loading="lazy"
                            alt="Ajay Rajput"
                            className="img-cover"
                        />
                    </div>
                    <img src="./assets/images/about-shape-1.png" alt="" width="178" height="178" loading="lazy" className="shape shape-1" />
                    <img src="./assets/images/about-shape-2.svg" alt="" width="659" height="653" loading="lazy" className="shape shape-2" />
                </figure>

                <img src="./assets/images/about-shape-3.svg" alt="" width="239" height="232" loading="lazy" className="shape shape-3" />
            </div>
        </section>
    );
};

export default AboutSection;

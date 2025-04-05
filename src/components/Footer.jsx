
import "./style.css"; // Ensure you have this CSS file

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top section" id="contact">
                <div className="container">
                    <p className="section-subtitle" >Contact Us</p>

                    <h2 className="h2 section-title" >
                        Work inquiry, Job opportunities? Send Message.
                    </h2>

                    <a href="#" className="btn-icon" >
                        <img src="./assets/images/arrow-forward.svg" width="43" height="20" loading="lazy" alt="arrow-forward icon" />
                    </a>

                    {/* Absolute Images */}
                    {[1, 2, 3, 4].map((num) => (
                        <img
                            key={num}
                            src={`./assets/images/footer-${num}.jpg`}
                            width={num === 2 ? 265 : num === 3 ? 303 : num === 4 ? 175 : 159}
                            height={num === 2 ? 275 : num === 3 ? 272 : num === 4 ? 175 : 176}
                            loading="lazy"
                            alt="photography"
                            className={`abs-img abs-img-${num}`}
                            
                        />
                    ))}

                    <img src="./assets/images/footer-shape.svg" width="185" height="134" loading="lazy" alt="" className="shape" />
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <a href="#" className="logo">
                        <img src="./assets/images/logo.svg" width="40" height="40" loading="lazy" alt="Ajay home" />
                    </a>

                    <ul className="social-list">
                        {["Fa.", "Insta.", "Tw."].map((platform, index) => (
                            <li key={index}>
                                <a href="#" className="social-link">{platform}</a>
                            </li>
                        ))}
                    </ul>

                    <p className="copyright">Made with 🧡</p>
                </div>
            </div>

            <div className="footer-bg has-before">
                <img src="./assets/images/footer-bg.jpg" width="1920" height="1135" loading="lazy" alt="photography" className="img-cover" />
            </div>
        </footer>
    );
};

export default Footer;

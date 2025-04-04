
import "./style.css"; // Ensure you have this CSS file

const portfolioData = [
    {
        imgSrc: "./assets/images/portfolio-1.jpg",
        imgAlt: "Shoe Promo",
        title: "Shoe Promo",
        category: "Product",
        width: 700,
        height: 605,
    },
    {
        imgSrc: "./assets/images/portfolio-2.jpg",
        imgAlt: "Wedding Shot",
        title: "Wedding Shot",
        category: "Wedding",
        width: 700,
        height: 1091,
    },
    {
        imgSrc: "./assets/images/portfolio-3.jpg",
        imgAlt: "Fashion Show",
        title: "Fashion Show",
        category: "Fashion, Model",
        width: 700,
        height: 1000,
    },
    {
        imgSrc: "./assets/images/portfolio-4.jpg",
        imgAlt: "Jumbo Barger",
        title: "Jumbo Barger",
        category: "Food",
        width: 700,
        height: 850,
    },
];

const Portfolio = () => {
    return (
        <section className="section portfolio" id="portfolio" aria-labelledby="portfolio-label">
            <div className="container">
                <div className="portfolio-list">
                    <div className="wrapper">
                        <h2 className="h2 section-title" id="portfolio-label" >
                            My Recent Work.
                        </h2>

                        {portfolioData.slice(0, 2).map((item, index) => (
                            <div className="portfolio-card"  key={index}>
                                <figure
                                    className="card-banner img-holder has-before"
                                    style={{ "--width": item.width, "--height": item.height }}
                                >
                                    <img
                                        src={item.imgSrc}
                                        width={item.width}
                                        height={item.height}
                                        loading="lazy"
                                        alt={item.imgAlt}
                                        className="img-cover"
                                    />
                                </figure>

                                <div className="card-content">
                                    <h3 className="h4">
                                        <a href="#" className="card-title">{item.title}</a>
                                    </h3>
                                    <p className="card-tag">{item.category}</p>
                                </div>

                                <a href="#" className="btn-icon" aria-label="See more">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="43" height="20" viewBox="0 0 43 20" fill="none">
                                        <path d="M0 10H41" stroke="black" strokeWidth="2" />
                                        <path d="M33 1L41.9 10.2727L33 19" stroke="black" strokeWidth="2" />
                                    </svg>
                                </a>
                            </div>
                        ))}
                    </div>

                    <div className="wrapper">
                        {portfolioData.slice(2, 4).map((item, index) => (
                            <div className="portfolio-card"  key={index + 2}>
                                <figure
                                    className="card-banner img-holder has-before"
                                    style={{ "--width": item.width, "--height": item.height }}
                                >
                                    <img
                                        src={item.imgSrc}
                                        width={item.width}
                                        height={item.height}
                                        loading="lazy"
                                        alt={item.imgAlt}
                                        className="img-cover"
                                    />
                                </figure>

                                <div className="card-content">
                                    <h3 className="h4">
                                        <a href="#" className="card-title">{item.title}</a>
                                    </h3>
                                    <p className="card-tag">{item.category}</p>
                                </div>

                                <a href="#" className="btn-icon" aria-label="See more">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="43" height="20" viewBox="0 0 43 20" fill="none">
                                        <path d="M0 10H41" stroke="black" strokeWidth="2" />
                                        <path d="M33 1L41.9 10.2727L33 19" stroke="black" strokeWidth="2" />
                                    </svg>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                <img src="./assets/images/portfolio-shape.svg" width="286" height="232" loading="lazy" alt="" className="shape" />
            </div>
        </section>
    );
};

export default Portfolio;

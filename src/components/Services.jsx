
import "./style.css"; // Ensure you have this CSS file

const servicesData = [
    {
        imgSrc: "./assets/images/service-1.jpg",
        imgAlt: "Wedding Photography",
        title: "Wedding Photography",
        subtitle: "Aut temporibus qui vero.",
    },
    {
        imgSrc: "./assets/images/service-2.jpg",
        imgAlt: "Event Organiser",
        title: "Event Organiser",
        subtitle: "Nobis, magni modi ipsa culpa.",
    },
    {
        imgSrc: "./assets/images/service-3.jpg",
        imgAlt: "Product Marketing",
        title: "Product Marketing",
        subtitle: "Tenetur porro repellendus!",
    },
    {
        imgSrc: "./assets/images/service-4.jpg",
        imgAlt: "Videography",
        title: "Videography",
        subtitle: "Amet consectetur adipisicing elit.",
    },
];

const Services = () => {
    return (
        <section className="section service" id="service" aria-labelledby="service-label">
            <p className="section-subtitle container" id="service-label">
                My Services
            </p>

            <ul className="service-list">
                {servicesData.map((service, index) => (
                    <li key={index} >
                        <div className="service-card container">
                            <img
                                src={service.imgSrc}
                                width="340"
                                height="380"
                                loading="lazy"
                                alt={service.imgAlt}
                                className="img"
                            />

                            <div>
                                <h3 className="h3 card-title">{service.title}</h3>
                                <p className="card-subtitle">{service.subtitle}</p>
                            </div>

                            <a href="#" className="btn-icon" aria-label="See more">
                                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="20" viewBox="0 0 43 20" fill="none">
                                    <path d="M0 10H41" stroke="white" strokeWidth="2" />
                                    <path d="M33 1L41.9 10.2727L33 19" stroke="white" strokeWidth="2" />
                                </svg>
                            </a>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Services;

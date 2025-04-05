import React from 'react';
import './style.css'; // Assuming you have styles

const galleryData = [
    [
        {
            src: './assets/images/gallery-1.jpg',
            alt: 'The Drunken',
            title: 'The Drunken',
            tag: 'Food, Event',
        },
        {
            src: './assets/images/gallery-2.jpg',
            alt: 'Lettuce Entertain',
            title: 'Lettuce Entertain',
            tag: 'Landscape',
        },
    ],
    [
        {
            src: '../assets/images/gallery-3.jpg',
            alt: 'Leaping Lizard',
            title: 'Leaping Lizard',
            tag: 'Model, Fashion',
        },
        {
            src: '../assets/images/gallery-4.jpg',
            alt: 'Juan More Taco',
            title: 'Juan More Taco',
            tag: 'Architecture, Event',
        },
    ],
    [
        {
            src: '../assets/images/gallery-5.jpg',
            alt: 'Goldilox Bagels',
            title: 'Goldilox Bagels',
            tag: 'People, Film',
        },
        {
            src: '../assets/images/gallery-6.jpg',
            alt: 'Cookie Monstah',
            title: 'Cookie Monstah',
            tag: 'Wedding, Event',
        },
    ],
    [
        {
            src: '../assets/images/gallery-7.jpg',
            alt: 'Divine Pastabilities',
            title: 'Divine Pastabilities',
            tag: 'Wedding, Model',
        },
        {
            src: '../assets/images/gallery-8.jpg',
            alt: 'The Lockhart Bar',
            title: 'The Lockhart Bar',
            tag: 'Health & Wellness',
        },
    ],
];

const Gallery = () => {
    return (
        <section className="section gallery" id="gallery">
            <div className="container">
                <ul className="gallery-list">
                    {galleryData.map((pair, index) => (
                        <li className="gallery-item" data-reveal key={index}>
                            {pair.map((item, subIndex) => (
                                <div className="gallery-card" key={subIndex}>
                                    <figure
                                        className="card-banner img-holder has-before"
                                        style={{ '--width': 450, '--height': 625 }}
                                    >
                                        <img
                                            src={item.src}
                                            width="450"
                                            height="625"
                                            loading="lazy"
                                            alt={item.alt}
                                            className="img-cover"
                                        />
                                    </figure>

                                    <div className="card-content">
                                        <h3 className="h6">
                                            <a href="#" className="card-title">{item.title}</a>
                                        </h3>
                                        <span className="card-tag">{item.tag}</span>
                                    </div>

                                    <a href="#" className="btn-icon">
                                        <img
                                            src="./assets/images/arrow-forward.svg"
                                            width="43"
                                            height="20"
                                            loading="lazy"
                                            alt="arrow-forward icon"
                                        />
                                    </a>
                                </div>
                            ))}
                        </li>
                    ))}
                </ul>

                <a href="#service" className="scroll-down">
                    <img
                        src="./assets/images/scroll-down.svg"
                        width="40"
                        height="66"
                        loading="lazy"
                        alt="mouse scroll"
                    />
                </a>

                <img
                    src="./assets/images/gallery-shape.svg"
                    width="220"
                    height="78"
                    loading="lazy"
                    alt=""
                    className="shape"
                />
            </div>
        </section>
    );
};

export default Gallery;

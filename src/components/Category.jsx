// import { useEffect, useRef } from "react";
import "./style.css"; // Ensure CSS file is linked

const categories = [
    { title: "Landscape", image: "category-1.jpg", alt: "Landscape" },
    { title: "Model", image: "category-2.jpg", alt: "Model" },
    { title: "Street", image: "category-3.jpg", alt: "Street" },
    { title: "Product", image: "category-4.jpg", alt: "Product" },
    { title: "Fashion", image: "category-2.jpg", alt: "Fashion" },
    { title: "Film", image: "category-5.jpg", alt: "Film" },
    { title: "Architecture", image: "category-6.jpg", alt: "Architecture" },
    { title: "Event", image: "category-7.jpg", alt: "Event" },
    { title: "Wedding", image: "category-8.jpg", alt: "Wedding" },
    { title: "People", image: "category-9.jpg", alt: "People" },
    { title: "Food", image: "category-10.jpg", alt: "Food" },
    { title: "Health & Wellness", image: "category-11.jpg", alt: "Health & Wellness" },
];

const Category = () => {
    return (
        <section className="category">
            <div className="container">
                <ul className="category-list">
                    {categories.map((category, index) => {
                        const isLast = index === categories.length - 1;
                        const titleEnding = isLast ? '.' : ',';
                        return (
                            <li className="category-item" key={index} data-reveal>
                                <span className="category-card">
                                    <h3 className="h4 card-title">{category.title}{titleEnding}</h3>
                                    <figure className="card-banner img-holder">
                                        <img
                                            src={`/assets/images/${category.image}`}
                                            alt={category.title}
                                            className="img-cover"
                                            loading="lazy"
                                        />
                                    </figure>
                                </span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    );
};

export default Category;

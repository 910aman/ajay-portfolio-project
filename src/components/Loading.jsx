import { useEffect, useState } from 'react';
import './style.css'; // Assuming you have a CSS file for styles

const Loading = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Simulating page load
        window.addEventListener('load', () => {
            setIsLoaded(true);
            document.body.classList.remove('active');
        });
    }, [1000]);

    return (
        <div className={`loading ${isLoaded ? 'loaded' : ''}`} data-loading>
            <img src="./assets/images/loading.svg" width="55" height="55" alt="loading" className="img" />
            <img src="./assets/images/loading-circle.svg" width="70" height="70" alt="" className="circle" />
        </div>
    );
};

export default Loading;

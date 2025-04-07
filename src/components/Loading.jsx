import { useEffect, useState } from 'react';
import './style.css'; // Assuming you have a CSS file for styles

const Loading = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Wait for window load event to simulate page load completion
        const handleLoad = () => {
            setIsLoaded(true);
            document.body.classList.remove('active');
        };
        window.addEventListener('load', handleLoad);
        // Cleanup function to remove event listener when component unmounts
        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    return (
        <div className={`loading ${isLoaded ? 'loaded' : ''}`} data-loading>
            <img src="./assets/images/loading.svg" width="55" height="55" alt="loading" className="img" />
            <img src="./assets/images/loading-circle.svg" width="70" height="70" alt="" className="circle" />
        </div>
    );
};

export default Loading;

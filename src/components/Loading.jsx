import { useEffect, useState } from 'react';
import './style.css'; // Assuming you have a CSS file for styles

const Loading = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Set a timeout of 2 seconds to hide the loader
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 2000); // 2000ms = 2 seconds

        // Cleanup timeout if component unmounts before timeout is triggered
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`loading ${isLoaded ? 'loaded' : ''}`} data-loading >
            <img src="/assets/images/loading.svg" width="55" height="55" alt="loading" className="img" />
            <img src="/assets/images/loading-circle.svg" width="70" height="70" alt="" className="circle" />
        </div>
    );
};

export default Loading;

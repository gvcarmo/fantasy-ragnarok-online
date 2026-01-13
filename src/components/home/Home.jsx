import { useEffect, useRef, useState } from 'react';
import './Home.css'

export const Home = () => {
    const homeRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { treshold: 0.1 }
        );

        if (homeRef.current) {
            observer.observe(homeRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={homeRef} className={`home ${isVisible ? 'visible' : ''}`}>
            <img src="./logo.png" alt="Logo" />
        </div>
    )
}
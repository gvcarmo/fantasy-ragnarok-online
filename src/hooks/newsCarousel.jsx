import { useState, useEffect } from 'react';

export const newsCarousel = (items = []) => {

    const totalItems = items.length;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsVisible, setItemsVisible] = useState(3);

    const getItemsVisible = () => {
        if (typeof window === 'undefined') return 3;
        const width = window.innerWidth;
        if (width < 640) return 1;
        if (width < 1120) return 2;
        return 3;
    };

    useEffect(() => {
        const handleResize = () => {
            const visible = getItemsVisible();
            setItemsVisible(visible);
            setCurrentIndex((prev) => {
                const max = Math.max(0, totalItems - visible);
                return prev > max ? max : prev;
            });
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [totalItems]);

    const maxIndex = Math.max(0, totalItems - itemsVisible);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };
    const prevSlide = () => { if (currentIndex > 0) setCurrentIndex(prev => prev - 1); };

    return {
        currentIndex,
        itemsVisible,
        maxIndex,
        nextSlide,
        prevSlide,
        canNext: currentIndex < maxIndex,
        canPrev: currentIndex > 0
    };
}
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { newsCarousel } from '../../hooks/newsCarousel';
import { useRef, useEffect } from "react";
import './Review.css'

const reviewCard = [
    { stars: '5', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, unde ut, nulla expedita soluta, illum velit omnis nesciunt ipsum aut asperiores? Assumenda inventore dolorum at ad. Cupiditate.', avatar: './review/avatar1.png', avatarNick: 'nickname', date: 'DD-MM-YYYY', ballom: './ballom_bottom.png' },
    { stars: '5', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, unde ut, nulla expedita soluta, illum velit omnis nesciunt ipsum aut asperiores? Assumenda inventore dolorum at ad. Cupiditate.', avatar: './review/avatar2.png', avatarNick: 'nickname', date: 'DD-MM-YYYY', ballom: './ballom_bottom.png' },
    { stars: '5', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, unde ut, nulla expedita soluta, illum velit omnis nesciunt ipsum aut asperiores? Assumenda inventore dolorum at ad. Cupiditate.', avatar: './review/avatar3.png', avatarNick: 'nickname', date: 'DD-MM-YYYY', ballom: './ballom_bottom.png' },
    { stars: '5', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, unde ut, nulla expedita soluta, illum velit omnis nesciunt ipsum aut asperiores? Assumenda inventore dolorum at ad. Cupiditate.', avatar: './review/avatar1.png', avatarNick: 'nickname', date: 'DD-MM-YYYY', ballom: './ballom_bottom.png' },
    { stars: '5', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, unde ut, nulla expedita soluta, illum velit omnis nesciunt ipsum aut asperiores? Assumenda inventore dolorum at ad. Cupiditate.', avatar: './review/avatar2.png', avatarNick: 'nickname', date: 'DD-MM-YYYY', ballom: './ballom_bottom.png' },
    { stars: '5', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, unde ut, nulla expedita soluta, illum velit omnis nesciunt ipsum aut asperiores? Assumenda inventore dolorum at ad. Cupiditate.', avatar: './review/avatar3.png', avatarNick: 'nickname', date: 'DD-MM-YYYY', ballom: './ballom_bottom.png' },
]

export const Review = () => {

    const {
        currentIndex,
        nextSlide,
        prevSlide,
        canNext,
        canPrev
    } = newsCarousel(reviewCard);

    const containerRef = useRef(null);

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 4000);

        return () => clearInterval(timer);
    }, [currentIndex]);


    return (
        <div className="review">

            {reviewCard.map((reviewCard, index) => (
                <div
                    key={index}
                    className={`${reviewCard}`}
                />
            ))}

            <div className="review-title" />

            <div className="review-window">
                <button
                    onClick={prevSlide}
                    disabled={!canPrev}
                    className={`button buttonPrev`}>
                    <ChevronLeft className="text-white w-6 h-6" />
                </button>

                <div className="carousel-review" ref={containerRef}>
                    <div
                        className="review-cards"
                        style={{ transform: `translateX(-${currentIndex * (350 + 45)}px)` }}
                    >
                        {reviewCard.map((reviewCard, index) => (
                            <div
                                className="review-card"
                                key={index}
                                style={{ flex: `0 0 350px` }}
                            >
                                <div className="stars">
                                    {Array.from({ length: Number(reviewCard.stars) }).map((_, i) => (
                                        <img key={i} className="h-4 my-2" src="./star.png" alt="Stars" />
                                    ))}
                                </div>
                                <p>{reviewCard.description}</p>

                                <div className="ballom">
                                    <img src={reviewCard.ballom} alt="Balão de conversa" />
                                </div>

                                <div className="avatar">
                                    <img src={reviewCard.avatar} alt="Avatar" />
                                    <div>
                                        <p className="nickname">{reviewCard.avatarNick}</p>
                                        <p>{reviewCard.date}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    onClick={nextSlide}
                    disabled={!canNext}
                    className={`buttonNext button ${!canNext ? 'opacity-20 cursor-not-allowed' : 'opacity-100'}`}
                >
                    <ChevronRight className="text-white w-6 h-6" />
                </button>
            </div>
        </div>
    )
}
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { newsCarousel } from '../../hooks/newsCarousel';
import { motion } from "framer-motion";
import { useRef } from "react";
import './News.css';

export const cards = [
    {
        img: './cards/news-07-01-26.png', date: '2026 Jan 07', name: 'LOREM IPSUM DOLOR SIT AMET', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi facere laudantium laboriosam ea fuga ipsum iste explicabo, repudiandae omnis eaque incidunt odio doloremque voluptatem pariatur dolore illum magnam sed exercitationem!', styles: { backgroundColor: '#E1EAFF' }, type: { backgroundColor: '#7D82B0', width: '79px' }, typeName: 'NEWS'
    },
    {
        img: './cards/event-07-01-26.png', date: '2026 Jan 07', name: 'LOREM IPSUM DOLOR SIT AMET', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi facere laudantium laboriosam ea fuga ipsum iste explicabo, repudiandae omnis eaque incidunt odio doloremque voluptatem pariatur dolore illum magnam sed exercitationem!', styles: { backgroundColor: '#FFDCBB' }, type: { backgroundColor: '#DD8863', width: '79px' }, typeName: 'EVENT'
    },
    {
        img: './cards/maintance-07-01-26.png', date: '2026 Jan 07', name: 'LOREM IPSUM DOLOR SIT AMET', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi facere laudantium laboriosam ea fuga ipsum iste explicabo, repudiandae omnis eaque incidunt odio doloremque voluptatem pariatur dolore illum magnam sed exercitationem!', styles: { backgroundColor: '#FFBBBB' }, type: { backgroundColor: '#DD6363', width: '144px' }, typeName: 'MAINTANCE'
    },
    {
        img: './cards/news-07-01-26.png', date: '2026 Jan 07', name: 'LOREM IPSUM DOLOR SIT AMET', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi facere laudantium laboriosam ea fuga ipsum iste explicabo, repudiandae omnis eaque incidunt odio doloremque voluptatem pariatur dolore illum magnam sed exercitationem!', styles: { backgroundColor: '#E1EAFF' }, type: { backgroundColor: '#7D82B0', width: '79px' }, typeName: 'NEWS'
    },
    {
        img: './cards/event-07-01-26.png', date: '2026 Jan 07', name: 'LOREM IPSUM DOLOR SIT AMET', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi facere laudantium laboriosam ea fuga ipsum iste explicabo, repudiandae omnis eaque incidunt odio doloremque voluptatem pariatur dolore illum magnam sed exercitationem!', styles: { backgroundColor: '#FFDCBB' }, type: { backgroundColor: '#DD8863', width: '79px' }, typeName: 'EVENT'
    },
    {
        img: './cards/maintance-07-01-26.png', date: '2026 Jan 07', name: 'LOREM IPSUM DOLOR SIT AMET', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi facere laudantium laboriosam ea fuga ipsum iste explicabo, repudiandae omnis eaque incidunt odio doloremque voluptatem pariatur dolore illum magnam sed exercitationem!', styles: { backgroundColor: '#FFBBBB' }, type: { backgroundColor: '#DD6363', width: '144px' }, typeName: 'MAINTANCE'
    },
]

export const News = () => {

    const {
        currentIndex,
        itemsVisible,
        nextSlide,
        prevSlide,
        canNext,
        canPrev
    } = newsCarousel(cards);

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: -100
        },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.2 + i * 0.2,
                type: "spring",
                stiffness: 50,
                damping: 15
            }
        }),
        hover: {
            scale: 0.97,
            transition: { type: "spring", stiffness: 400, damping: 10 }
        },
        tap: { scale: 1.0 }
    };

    const containerRef = useRef(null);

    return (
        <div className="content" id="news">
            <img className="news-title" src="./titles/news.png" alt="News Title" />

            <div className="news">
                <button
                    onClick={prevSlide}
                    disabled={!canPrev}
                    className={`button buttonPrev`}>
                    <ChevronLeft className="text-white w-6 h-6" />
                </button>

                <div className="carousel-window" ref={containerRef}>
                    <motion.div
                        className="news-track"
                        style={{ transform: `translateX(-${currentIndex * (350 + 45)}px)` }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                    >
                        {cards.map((card, i) => (
                            <motion.div
                                className="card-wrapper"
                                key={i}
                                style={{ flex: `0 0 ${100 / itemsVisible}%` }}
                                custom={i}
                                variants={itemVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false }}
                                whileHover="hover"
                                whileTap="tap"
                            >

                                <div className="card" style={card.styles}>

                                    <img src={card.img} alt={card.name} />

                                    <div className="type">
                                        <p className="date">{card.date}</p>
                                        <p className="type-bg" style={card.type}>{card.typeName}</p>
                                    </div>

                                    <h4>{card.name}</h4>
                                    <p className="description">{card.description}</p>

                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
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
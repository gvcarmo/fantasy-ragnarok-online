import { motion } from "framer-motion";
import { useRef } from "react";
import './Foot.css'

const links = [
    { name: 'NOTÍCIAS', link: '#news' },
    { name: 'INFORMAÇÕES', link: '#infos' },
    { name: 'DOWNLOADS', link: '#downs' },
    { name: 'CADASTRE-SE', link: '#register' },
    { name: 'DOAR', link: '#' },
    { name: 'ENTRAR', link: '#' },
]

export const Foot = () => {
    const itemVariants = {
        hidden: {
            opacity: 0,
            y: -100
        },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.4 + i * 0.2,
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
        <div className="foot" ref={containerRef}>
            <div className="menu-foot">
                <motion.div className="links"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                >
                    {links.map((link, i) => (
                        <div className="links-foot" key={i}>
                            <motion.a custom={i} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: false }} whileHover="hover" whileTap="tap" href={link.link}>{link.name}</motion.a>
                            <p className="bars">|</p>
                        </div>
                    ))}
                </motion.div>
                <div className="social-links">
                    <a href="#" className="social">
                        <img src="./foot/discord.png" alt="Discord" />
                        <p>Discord</p>
                    </a>
                    <a href="#" className="social">
                        <img src="./foot/instagram.png" alt="Instagram" />
                        <p>Instagram</p>
                    </a>
                    <a href="#" className="social">
                        <img src="./foot/wiki.png" alt="Wiki" />
                        <p>Wiki</p>
                    </a>
                </div>
            </div>

            <div className="copy">
                <p>All other copyrights and Trademarks are property of Gravity and their respective owners. <br />
                    Copyright © 2026 Fantasy Ragnarok Online. All rights Reserved.<br />
                    Created by Giovanni Vittorazze do Carmo.</p>
            </div>
        </div>
    )
}
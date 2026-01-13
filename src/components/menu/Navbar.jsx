import './Navbar.css'
import React, { useState } from 'react';

const menu = [
    { name: 'NOTÍCIAS', img: './icons/home.svg', link: '#news' },
    { name: 'INFORMAÇÕES', img: './icons/infos.svg', link: '#infos' },
    { name: 'DOWNLOADS', img: './icons/downloads.svg', link: '#downs' },
    { name: 'CADASTRE-SE', img: './icons/cadastro.svg', link: '#register' },
    { name: 'WIKI', img: './icons/wiki.svg', link: '#' },
    { name: 'DOAR', img: './icons/doar.svg', link: '#' },
    { name: 'ENTRAR', img: './icons/entrar.svg', link: '#' },
]

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                {menu.map((menu, index) => (
                    <div className="menu" key={index}>
                        <a href={menu.link} className="link" onClick={() => setIsOpen(false)}><img src={menu.img} alt={menu.name} /><span>{menu.name}</span></a>
                    </div>
                ))}
            </div>
        </header>
    )
}


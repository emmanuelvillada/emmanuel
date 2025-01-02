'use client'

import { useState, useEffect } from 'react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 transition-all duration-300 z-50
            ${isScrolled
                ? 'bg-gray-800/70 backdrop-blur-md'
                : 'bg-gray-800'
            } text-white p-4`}>
            <nav className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Emmanuel Villada Suárez</h1>
                <ul className="flex space-x-4">
                    <li><a href="#skills" className="hover:text-gray-300">Skills</a></li>
                    <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
                    <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
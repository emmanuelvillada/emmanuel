'use client'
import Slider from "react-slick";
import { Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Projects() {
    const projects = [
        {
            title: 'Sistema de Negociacion',
            description: 'Platform for managing business negotiations and deals tracking',
            image: '/projects/negotiation.jpg',
            technologies: ['React', 'Node.js', 'PostgreSQL'],
            github: 'https://github.com/yourusername/negotiation-system',
            demo: 'https://demo-link.com',
        },
        {
            title: 'Sistema de Gestión de Proyectos',
            description: 'Comprehensive project management solution with real-time updates',
            image: '/projects/project-management.jpg',
            technologies: ['TypeScript', 'Next.js', 'MongoDB'],
            github: 'https://github.com/yourusername/project-management',
            demo: 'https://demo-link.com',
        },
        {
            title: 'Bingo Virtual',
            description: 'Interactive online bingo game with multiplayer support',
            image: '/projects/bingo.jpg',
            technologies: ['JavaScript', 'Socket.io', 'Express'],
            github: 'https://github.com/yourusername/virtual-bingo',
            demo: 'https://demo-link.com',
        },
        {
            title: 'Website Fundación Good Kidz',
            description: 'Non-profit organization website with donation integration',
            image: '/projects/foundation.jpg',
            technologies: ['React', 'Tailwind CSS', 'Stripe'],
            github: 'https://github.com/yourusername/good-kidz',
            demo: 'https://demo-link.com',
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <section id="projects" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
                    Featured Projects
                </h2>

                <Slider {...settings} className="project-slider">
                    {projects.map((project, index) => (
                        <div key={index} className="px-4">
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                                <div className="relative h-48">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-3 text-gray-900">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex space-x-4">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center text-gray-600 hover:text-gray-900"
                                        >
                                            <Github size={20} className="mr-2" />
                                            Code
                                        </a>
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center text-gray-600 hover:text-gray-900"
                                        >
                                            <ExternalLink size={20} className="mr-2" />
                                            Demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}
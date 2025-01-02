import { Github, Linkedin, Mail, MapPinned } from 'lucide-react';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import ContactForm from '@/components/ContactForm';
import Skills from '@/components/Skills';

export default function MainContent() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-200">
                <div className="container mx-auto px-4 py-20">
                    <div className="max-w-3xl mx-auto text-center space-y-8">
                        <h1 className="text-6xl font-bold text-gray-900 animate-fade-in">
                            Hello, I&apos;m Emmanuel Villada Suárez
                        </h1>
                        <p className="text-2xl text-gray-600 leading-relaxed animate-fade-in-delay">
                            A passionate programmer with expertise in web development and software engineering.
                        </p>
                        <div className="flex justify-center space-x-6 pt-8 animate-fade-in-delay-2">
                            <SocialLink href="https://github.com/emmanuelvillada" icon={<Github size={28} />} label="GitHub" />
                            <SocialLink href="https://linkedin.com/in/emmanuel-villada-suárez-288622275" icon={<Linkedin size={28} />} label="LinkedIn" />
                            <SocialLink href="mailto:emmanuelvillada1903@gmail.com" icon={<Mail size={28} />} label="Email" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Location Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center space-y-6">
                        <h2 className="text-4xl font-bold text-gray-900">Location</h2>
                        <div className="flex items-center justify-center space-x-3 text-gray-600">
                            <MapPinned size={24} />
                            <p className="text-xl">Medellín, Colombia</p>
                        </div>
                        <a
                            href="https://maps.app.goo.gl/4R6xHVSWShZJLj117"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 bg-gray-100 hover:bg-gray-200 hover:border- rounded-lg transition-colors duration-200 text-black"
                        >
                            View on Map
                        </a>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <Skills />
                </div>
            </section>

            {/* Projects Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <Projects />
                </div>
            </section>

            {/* Experience Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <Experience />
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <ContactForm />
                </div>
            </section>
        </main>
    );
}

// Helper component for social links
const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors duration-200"
        title={label}
    >
        {icon}
    </a>
);
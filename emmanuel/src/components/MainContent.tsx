import { Github, Linkedin, Mail, MapPinHouse } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
export default function MainContent() {
    return (
        <div className="container mx-auto px-4 ">
            <section id="about" className="py-20">
                <h2 className="text-4xl font-bold mb-4 text-black">Hello, I&apos;m Emmanue l Villlada Suárez</h2>
                <p className="text-xl mb-8 text-black">A passionate programmer with expertise in web development and software engineering.</p>
                <div className="flex space-x-4">
                    <a href="https://github.com/emmanuelvillada" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800" title="GitHub">
                        <Github size={24} />
                    </a>
                    <a href="www.linkedin.com/in/emmanuel-villada-suárez-288622275" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800" title="LinkedIn">
                        <Linkedin size={24} />
                    </a>
                    <a href="mailto:emmanuelvillada1903@gmail.com" className="text-gray-600 hover:text-gray-800" title="Email">
                        <Mail size={24} />
                    </a>
                </div>
            </section>
            <section id='ubication' className="py-10">
                <h2 className="text-4xl font-bold mb-4 text-black">Ubication</h2>
                <p className="text-xl mb-8 text-black">Medellin, Colombia</p>
                <div className="flex space-x-4">
                    <a href="https://maps.app.goo.gl/4R6xHVSWShZJLj117" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800" title="Ubication">
                        <MapPinHouse size={24} />
                    </a>
                </div>

            </section>


            <Projects />
            <Experience />
            <ContactForm />

        </div>
    );
}
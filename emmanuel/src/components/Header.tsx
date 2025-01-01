

const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <nav className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Emmanuel Villada Suárez</h1>
                <ul className="flex space-x-4">
                    <li><a href="#about" className="hover:text-gray-300">About</a></li>
                    <li><a href="#skills" className="hover:text-gray-300">Skills</a></li>
                    <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
                    <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
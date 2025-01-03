export default function Footer() {
    const getYear = () => {
        const date = new Date();
        return date.getFullYear();
    };
    return (
        <footer className="bg-gray-800 text-white p-4">
            <div className="container mx-auto text-center">
                <p>&copy; {getYear()} Emmanuel Villada Suárez. All rights reserved.</p>
            </div>
        </footer>
    );
}

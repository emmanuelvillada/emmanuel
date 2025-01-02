import { Star } from 'lucide-react';

export default function Skills() {
    const Skills = {
        "JavaScript": 5,
        "TypeScript": 5,
        "React": 5,
        "Node.js": 5,
        "Python": 4,
        "SQL": 4,
        "Git": 4
    };

    const renderStars = (level: number) => {
        return Array.from({ length: 5 }).map((_, index) => (
            <Star
                key={index}
                size={20}
                className={`${index < level
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'fill-gray-200 text-gray-200'
                    } transition-colors duration-200`}
            />
        ));
    };

    return (
        <section id="skills" className="py-20">
            <h2 className="text-3xl font-bold mb-8 text-center text-black">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {Object.entries(Skills).map(([skill, level]) => (
                    <div
                        key={skill}
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                    >
                        <h3 className="text-lg font-semibold mb-3 text-center text-gray-800">
                            {skill}
                        </h3>
                        <div className="flex justify-center space-x-1">
                            {renderStars(level)}
                        </div>
                        <div className="text-center mt-2 text-sm text-gray-500">
                            Level: {level}/5
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
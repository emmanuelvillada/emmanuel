export default function Skills() {
    return (
        <section id="skills" className="py-20">
            <h2 className="text-3xl font-bold mb-8 text-black">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 shadow-md">
                {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'SQL', 'Git', 'Docker'].map((skill) => (
                    <div key={skill} className="bg-gray-100 p-4 rounded-lg text-center text-black">
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    );
}
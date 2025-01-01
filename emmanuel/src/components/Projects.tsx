export default function Projects() {
    return (
        <section id="projects" className="py-20">
            <h2 className="text-3xl font-bold mb-8 text-bold text-black">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    { title: 'Project 1', description: 'A brief description of project 1' },
                    { title: 'Project 2', description: 'A brief description of project 2' },
                    { title: 'Project 3', description: 'A brief description of project 3' },
                ].map((project, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md text-black">
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p>{project.description}</p>
                        <a href="#" className="text-blue-500 hover:underline mt-4 inline-block">Learn more</a>
                    </div>
                ))}
            </div>
        </section>
    );
}
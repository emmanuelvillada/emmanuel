export default function Experience() {

    return (
        <section id="experience" className="py-20">
            <h2 className="text-3xl font-bold mb-8 text-black">Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    { title: 'Job 1', description: 'A brief description of job 1' },

                ].map((job, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md text-black">
                        <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                        <p>{job.description}</p>
                        <a href="#" className="text-blue-500 hover:underline mt-4 inline-block">Learn more</a>
                    </div>
                ))}
            </div>
        </section>
    );
}
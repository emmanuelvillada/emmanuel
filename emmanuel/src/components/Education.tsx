export default function Education() {
    const degrees = [
        { title: 'Tecnologo en Desarrollo de Software', description: 'Tecnologia de desarrollo de Software en el Instituto Tecnologico Metropolitano de Medellin', time: '2020-2024' },
        { title: 'Ingenieria de Software', description: 'Pregrado de Ingenieria de Software en la Institución Universitaria Pascual Bravo', time: '2024 - currently' },
        { title: 'Degree 3', description: 'A brief description of degree 3' },
    ];
    return (
        <section id="education" className="py-20">
            <h2 className="text-3xl font-bold mb-8 text-black">Education</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {degrees.map((degree, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md text-black">
                        <h3 className="text-xl font-semibold mb-2">{degree.title}</h3>
                        <p className="mb-2">{degree.description}</p>
                        <p className="text-gray-600">{degree.time}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
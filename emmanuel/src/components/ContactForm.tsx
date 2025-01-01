export default function ContactForm() {

    return (
        <section id="contact" className=" shadow-md py-20">
            <h2 className="text-3xl font-bold mb-8 text-black">Contact Me</h2>
            <form className="max-w-md mx-auto bg-gray-300 p-6 rounded-lg shadow-md" name="contact" method="POST" data-netlify="true">
                <div className="mb-4">
                    <label htmlFor="name" className="block mb-2 text-black">Name</label>
                    <input type="text" id="name" name="name" className="w-full p-2 border rounded" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-2 text-black">Email</label>
                    <input type="email" id="email" name="email" className="w-full p-2 border rounded" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block mb-2 text-black">Message</label>
                    <textarea id="message" name="message" rows={4} className="w-full p-2 border rounded text-black" required></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Send Message</button>
            </form>
        </section>
    );
}
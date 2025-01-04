import { Phone, Mail, User, MessageSquare, Send } from 'lucide-react';

export default function ContactForm() {
    return (
        <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-start justify-between max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="w-full md:w-1/3 mb-12 md:mb-0">
                        <h2 className="text-4xl font-bold mb-8 text-gray-900">Let &apos; s Connect</h2>
                        <p className="text-gray-600 mb-8">Feel free to reach out for collaborations or just a friendly hello</p>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <Phone className="w-5 h-5 text-blue-500 mr-4" />
                                <a href="tel:+573229050523" className="text-gray-700 hover:text-blue-500 transition-colors">
                                    +57 322 905 0523
                                </a>
                            </div>
                            <div className="flex items-center">
                                <Mail className="w-5 h-5 text-blue-500 mr-4" />
                                <a href="mailto:emmanuelvillada1903@gmail" className="text-gray-700 hover:text-blue-500 transition-colors">
                                    emmanuelvillada1903@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="w-full md:w-2/3 md:pl-12">
                        <form
                            className="bg-white p-8 rounded-2xl shadow-lg"
                            name="contact"
                            method="POST"
                            data-netlify="true"
                        >
                            <div className="mb-6">
                                <label htmlFor="name" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                                    <User className="w-4 h-4 mr-2" />
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    required
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="email" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                                    <Mail className="w-4 h-4 mr-2" />
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    required
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                                    <MessageSquare className="w-4 h-4 mr-2" />
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition-all duration-300 flex items-center justify-center"
                            >
                                <Send className="w-4 h-4 mr-2" />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
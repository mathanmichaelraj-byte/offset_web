import { useState } from "react";

function Contact(){
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const mailtoLink = `mailto:orders@offsetprinting.com?subject=Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
        window.location.href = mailtoLink;
    };

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h2>
                    <p className="text-lg text-gray-600">Contact us for quotes, orders, or any printing inquiries</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-gray-900 font-medium mb-2 text-sm">Name</label>
                                <input 
                                    type="text" 
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all" 
                                    placeholder="Your name" 
                                />
                            </div>
                            <div>
                                <label className="block text-gray-900 font-medium mb-2 text-sm">Email</label>
                                <input 
                                    type="email" 
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all" 
                                    placeholder="your@email.com" 
                                />
                            </div>
                            <div>
                                <label className="block text-gray-900 font-medium mb-2 text-sm">Message</label>
                                <textarea 
                                    rows={5} 
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all resize-none" 
                                    placeholder="Tell us about your printing requirements..."
                                ></textarea>
                            </div>
                            <button type="submit" className="w-full bg-brand text-brand hover:text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">Send Inquiry</button>
                        </form>
                    </div>

                    <div className="space-y-5">
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-brand/50 transition-colors">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                                    <p className="text-gray-600 text-sm">orders@offsetprinting.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-brand/50 transition-colors">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                                    <p className="text-gray-600 text-sm">+91 1234567890</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-brand/50 transition-colors">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Visit Us</h3>
                                    <p className="text-gray-600 text-sm">Printing Press, Industrial Area</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                            <p className="text-sm text-gray-700"><span className="font-semibold text-gray-900">Note:</span> Orders and payments are handled offline. Contact us for pricing and availability.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
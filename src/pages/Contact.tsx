import { useState } from "react";
import ContactInfoCard from "../components/ContactInfoCard";
import { contactConfig } from "../config";

function Contact(){
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const contactInfo = [
        {
            icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
            title: "Email",
            content: contactConfig.email
        },
        {
            icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
            title: "Phone",
            content: contactConfig.phone
        },
        {
            icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
            title: "Visit Us",
            content: contactConfig.address
        },
        {
            icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
            title: "GST No",
            content: contactConfig.gstNo
        }        
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const mailtoLink = `mailto:${contactConfig.email}?subject=Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
        window.location.href = mailtoLink;
    };

    return (
        <section id="contact" className="py-12 md:py-20 bg-white px-4 sm:px-6">
            <div className="max-w-screen-xl mx-auto">
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">Get In Touch</h2>
                    <p className="text-base md:text-lg text-gray-600">Contact us for quotes, orders, or any printing inquiries</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                    <div>
                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                            <div>
                                <label className="block text-gray-900 font-medium mb-2 text-sm">Name</label>
                                <input 
                                    type="text" 
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    className="w-full px-4 py-3 md:py-4 rounded-lg bg-white border border-gray-300 text-gray-900 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all text-base" 
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
                                    className="w-full px-4 py-3 md:py-4 rounded-lg bg-white border border-gray-300 text-gray-900 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all text-base" 
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
                                    className="w-full px-4 py-3 md:py-4 rounded-lg bg-white border border-gray-300 text-gray-900 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all resize-none text-base" 
                                    placeholder="Tell us about your printing requirements..."
                                ></textarea>
                            </div>
                            <p className="text-xs text-gray-500 italic">This will open your email app</p>
                            <button type="submit" className="w-full text-white py-4 rounded-lg font-semibold bg-blue-700 transition-colors shadow-lg hover:scale-105 transform transition duration-500">Get a Quote</button>
                        </form>
                    </div>

                    <div className="space-y-4 md:space-y-5">
                        {contactInfo.map((info, index) => (
                            <ContactInfoCard key={index} icon={info.icon} title={info.title} content={info.content} />
                        ))}
                        <div className="bg-blue-50 p-4 md:p-6 rounded-xl border border-blue-200">
                            <p className="text-xs md:text-sm text-gray-700"><span className="font-semibold text-gray-900">Note:</span> Orders and payments are handled offline. Contact us for pricing and availability.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
import { useState } from "react";
import PricingModal from "../components/Pricing";
import ServiceCard from "../components/ServiceCard";
import sampleImage from "../assets/image/sample.jpg";

function Service(){
    const [selectedService, setSelectedService] = useState<{id: string, title: string, pricing: any[]} | null>(null);

    const services = [
        { 
            id: "diaries",
            title: "Diaries & Planners", 
            desc: "Custom diaries and planners with personalized designs and branding",
            image: sampleImage,
            pricing: [
                { size: "A5 Size", qty: "100-500", price: "₹80-120/piece" },
                { size: "A5 Size", qty: "500+", price: "₹60-90/piece" },
                { size: "A4 Size", qty: "100-500", price: "₹120-180/piece" },
                { size: "A4 Size", qty: "500+", price: "₹90-140/piece" },
            ]
        },
        { 
            id: "notebooks",
            title: "Notebooks & Notes", 
            desc: "High-quality notebooks for schools, offices, and personal use",
            pricing: [
                { size: "Single Line (80 pages)", qty: "100-500", price: "₹25-40/piece" },
                { size: "Single Line (80 pages)", qty: "500+", price: "₹18-30/piece" },
                { size: "Four Line (100 pages)", qty: "100-500", price: "₹30-50/piece" },
                { size: "Four Line (100 pages)", qty: "500+", price: "₹22-38/piece" },
            ],
            image:sampleImage
        },
        { 
            id: "registers",
            title: "Registers", 
            desc: "Professional registers for businesses, schools, and institutions",
            pricing: [
                { size: "200 Pages", qty: "50-200", price: "₹120-180/piece" },
                { size: "200 Pages", qty: "200+", price: "₹90-140/piece" },
                { size: "300 Pages", qty: "50-200", price: "₹180-250/piece" },
                { size: "300 Pages", qty: "200+", price: "₹140-200/piece" },
            ],
            image:sampleImage
        },
        { 
            id: "cards",
            title: "Visiting Cards", 
            desc: "Premium business cards with various finishes and designs",
            pricing: [
                { size: "Standard (300 GSM)", qty: "100-500", price: "₹200-350/100 cards" },
                { size: "Standard (300 GSM)", qty: "500+", price: "₹150-250/100 cards" },
                { size: "Premium (400 GSM)", qty: "100-500", price: "₹300-500/100 cards" },
                { size: "Premium (400 GSM)", qty: "500+", price: "₹250-400/100 cards" },
            ],
            image:sampleImage
        },
        { 
            id: "custom",
            title: "Custom Printing", 
            desc: "Tailored offset printing solutions for your unique requirements",
            pricing: [
                { size: "Brochures/Flyers", qty: "Contact us", price: "Custom Quote" },
                { size: "Catalogs", qty: "Contact us", price: "Custom Quote" },
                { size: "Booklets", qty: "Contact us", price: "Custom Quote" },
            ],
            image:sampleImage
        },
        { 
            id: "bulk",
            title: "Bulk Orders", 
            desc: "Cost-effective bulk printing services with quick turnaround",
            pricing: [
                { size: "Any Product", qty: "1000+", price: "Special Rates" },
                { size: "Corporate Orders", qty: "Contact us", price: "Negotiable" },
            ],
            image:sampleImage
        }
    ];

    return (
        <>
        <section id="services" className="py-12 md:py-20 bg-gray-50 px-4 sm:px-6">
            <div className="max-w-screen-xl mx-auto">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">Our Services</h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">Professional offset printing - Click to view pricing</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {services.map((service) => (
                        <ServiceCard 
                            key={service.id}
                            service={service}
                            onClick={() => setSelectedService(service)}
                        />
                    ))}
                </div>

                <div className="mt-8 md:mt-10 text-center bg-white p-4 md:p-6 rounded-xl border border-gray-200 max-w-2xl mx-auto shadow-sm">
                    <p className="text-xs md:text-sm text-gray-600"><span className="font-semibold text-gray-900">Note:</span> Prices vary based on paper quality, customization, and finishing. Contact us for exact quotes.</p>
                </div>

                <div className="mt-8 md:mt-12 text-center">
                    <a href="#contact" className="inline-block w-full sm:w-auto bg-brand text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
                        Get a Quote
                    </a>
                </div>
            </div>
        </section>

        <PricingModal service={selectedService} onClose={() => setSelectedService(null)} />
        </>
    )
}

export default Service
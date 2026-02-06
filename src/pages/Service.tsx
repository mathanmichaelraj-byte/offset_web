import { useState } from "react";
import PricingModal from "../components/Pricing";
import ServiceCard from "../components/ServiceCard";

function Service(){
    const [selectedService, setSelectedService] = useState<{id: string, title: string, pricing: any[]} | null>(null);

    const services = [
        { 
            id: "diaries",
            title: "Diaries & Planners", 
            desc: "Custom diaries and planners with personalized designs and branding",
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
            ]
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
            ]
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
            ]
        },
        { 
            id: "custom",
            title: "Custom Printing", 
            desc: "Tailored offset printing solutions for your unique requirements",
            pricing: [
                { size: "Brochures/Flyers", qty: "Contact us", price: "Custom Quote" },
                { size: "Catalogs", qty: "Contact us", price: "Custom Quote" },
                { size: "Booklets", qty: "Contact us", price: "Custom Quote" },
            ]
        },
        { 
            id: "bulk",
            title: "Bulk Orders", 
            desc: "Cost-effective bulk printing services with quick turnaround",
            pricing: [
                { size: "Any Product", qty: "1000+", price: "Special Rates" },
                { size: "Corporate Orders", qty: "Contact us", price: "Negotiable" },
            ]
        }
    ];

    return (
        <>
        <section id="services" className="py-20 bg-neutral-primary">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-heading mb-4">Our Services</h2>
                    <p className="text-lg text-body max-w-2xl mx-auto">Professional offset printing services - Click to view pricing</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <ServiceCard 
                            key={service.id}
                            service={service}
                            onClick={() => setSelectedService(service)}
                        />
                    ))}
                </div>

                <div className="mt-10 text-center bg-neutral-secondary-soft p-6 rounded-xl border border-default max-w-2xl mx-auto">
                    <p className="text-sm text-body"><span className="font-semibold text-heading">Note:</span> Prices vary based on paper quality, customization, and finishing. Contact us for exact quotes.</p>
                </div>
            </div>
        </section>

        <PricingModal service={selectedService} onClose={() => setSelectedService(null)} />
        </>
    )
}

export default Service
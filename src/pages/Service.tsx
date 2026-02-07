import { useState } from "react";
import PricingModal from "../components/Pricing";
import ServiceCard from "../components/ServiceCard";
import { servicesData } from "../config";

function Service(){
    const [selectedService, setSelectedService] = useState<{id: string, title: string, pricing: any[]} | null>(null);

    return (
        <>
        <section id="services" className="py-12 md:py-20 bg-gray-50 px-4 sm:px-6">
            <div className="max-w-screen-xl mx-auto">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">Our Services</h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">Professional offset printing - Click to view pricing</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {servicesData.map((service) => (
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
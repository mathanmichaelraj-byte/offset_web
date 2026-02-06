import { useState } from "react";

function Pricing() {
    const [selectedService, setSelectedService] = useState<string | null>(null);

    const services = [
        {
            id: "diaries",
            title: "Diaries & Planners",
            icon: "📔",
            pricing: [
                { size: "A5 Size", qty: "100-500", price: "₹80-120/piece" },
                { size: "A5 Size", qty: "500+", price: "₹60-90/piece" },
                { size: "A4 Size", qty: "100-500", price: "₹120-180/piece" },
                { size: "A4 Size", qty: "500+", price: "₹90-140/piece" },
            ],
            features: ["Custom cover design", "Multiple binding options", "Quality paper"]
        },
        {
            id: "notebooks",
            title: "Notebooks & Notes",
            icon: "📓",
            pricing: [
                { size: "Single Line (80 pages)", qty: "100-500", price: "₹25-40/piece" },
                { size: "Single Line (80 pages)", qty: "500+", price: "₹18-30/piece" },
                { size: "Four Line (100 pages)", qty: "100-500", price: "₹30-50/piece" },
                { size: "Four Line (100 pages)", qty: "500+", price: "₹22-38/piece" },
            ],
            features: ["Various ruling options", "Durable binding", "Bulk discounts"]
        },
        {
            id: "registers",
            title: "Registers",
            icon: "📕",
            pricing: [
                { size: "200 Pages", qty: "50-200", price: "₹120-180/piece" },
                { size: "200 Pages", qty: "200+", price: "₹90-140/piece" },
                { size: "300 Pages", qty: "50-200", price: "₹180-250/piece" },
                { size: "300 Pages", qty: "200+", price: "₹140-200/piece" },
            ],
            features: ["Hard cover binding", "Numbered pages", "Custom branding"]
        },
        {
            id: "cards",
            title: "Visiting Cards",
            icon: "💳",
            pricing: [
                { size: "Standard (300 GSM)", qty: "100-500", price: "₹200-350/100 cards" },
                { size: "Standard (300 GSM)", qty: "500+", price: "₹150-250/100 cards" },
                { size: "Premium (400 GSM)", qty: "100-500", price: "₹300-500/100 cards" },
                { size: "Premium (400 GSM)", qty: "500+", price: "₹250-400/100 cards" },
            ],
            features: ["Matte/Glossy finish", "Full color printing", "Quick delivery"]
        },
        {
            id: "custom",
            title: "Custom Printing",
            icon: "🎨",
            pricing: [
                { size: "Brochures/Flyers", qty: "Contact", price: "Custom Quote" },
                { size: "Catalogs", qty: "Contact", price: "Custom Quote" },
                { size: "Booklets", qty: "Contact", price: "Custom Quote" },
            ],
            features: ["Tailored solutions", "Any quantity", "Flexible designs"]
        },
        {
            id: "bulk",
            title: "Bulk Orders",
            icon: "📦",
            pricing: [
                { size: "Any Product", qty: "1000+", price: "Special Rates" },
                { size: "Corporate Orders", qty: "Contact", price: "Negotiable" },
            ],
            features: ["Maximum discounts", "Priority service", "Dedicated support"]
        },
    ];

    return (
        <section id="pricing" className="py-20 bg-neutral-primary-soft">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-heading mb-4">Pricing</h2>
                    <p className="text-lg text-body">Click on any service to view detailed pricing</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
                            className="bg-neutral-primary p-6 rounded-xl border border-default hover:border-brand transition-all cursor-pointer"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-semibold text-heading">{service.title}</h3>
                                <svg className={`w-5 h-5 text-brand transition-transform ${selectedService === service.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>

                            {selectedService === service.id && (
                                <div className="mt-4 space-y-4 animate-fadeIn">
                                    <div className="space-y-2">
                                        {service.pricing.map((item, idx) => (
                                            <div key={idx} className="bg-neutral-secondary-soft p-3 rounded-lg">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <p className="text-sm font-medium text-heading">{item.size}</p>
                                                        <p className="text-xs text-body">Qty: {item.qty}</p>
                                                    </div>
                                                    <p className="text-sm font-semibold text-brand">{item.price}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="pt-3 border-t border-default">
                                        <p className="text-xs font-medium text-heading mb-2">Features:</p>
                                        <ul className="space-y-1">
                                            {service.features.map((feature, idx) => (
                                                <li key={idx} className="text-xs text-body flex items-center">
                                                    <span className="text-brand mr-2">✓</span>{feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-10 text-center bg-neutral-primary p-6 rounded-xl border border-default max-w-2xl mx-auto">
                    <p className="text-sm text-body">💡 <span className="font-semibold text-heading">Note:</span> Prices vary based on paper quality, customization, and finishing. Contact us for exact quotes and bulk discounts.</p>
                </div>
            </div>
        </section>
    );
}

export default Pricing;

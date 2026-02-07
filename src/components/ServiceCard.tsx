interface PricingItem {
    size: string;
    qty: string;
    price: string;
}

interface ServiceCardProps {
    service: {
        id: string;
        title: string;
        desc: string;
        image: string;
        pricing: PricingItem[];
    };
    onClick: () => void;
}

const ServiceCard = ({ service, onClick }: ServiceCardProps) => {
    return (
        <div 
            onClick={onClick}
            className="group bg-white rounded-xl border border-gray-200 shadow-sm hover:border-brand hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden h-full flex flex-col"
        >
            <div className="relative h-40 sm:h-48 bg-gray-100 overflow-hidden">
                <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>
            <div className="p-4 sm:p-6 flex-1 flex flex-col">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">{service.desc}</p>
                <button className="text-brand text-sm font-semibold hover:underline flex items-center gap-1 mt-auto">
                    View Pricing 
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ServiceCard;
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
            className="group bg-neutral-secondary-soft rounded-xl border border-default hover:border-brand transition-all duration-300 cursor-pointer overflow-hidden"
        >
            <div className="relative h-48 bg-neutral-tertiary overflow-hidden">
                <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-semibold text-heading mb-2">{service.title}</h3>
                <p className="text-body text-sm leading-relaxed mb-4">{service.desc}</p>
                <button className="text-brand text-sm font-semibold hover:underline">View Pricing →</button>
            </div>
        </div>
    );
};

export default ServiceCard;
interface PricingItem {
    size: string;
    qty: string;
    price: string;
}

interface PricingModalProps {
    service: {
        title: string;
        pricing: PricingItem[];
    } | null;
    onClose: () => void;
}

const PricingModal = ({ service, onClose }: PricingModalProps) => {
    if (!service) return null;

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
            <div className="bg-white rounded-2xl border border-gray-200 max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
                <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="p-6 space-y-3 bg-gray-50">
                    {service.pricing.map((item, idx) => (
                        <div key={idx} className="bg-white p-4 rounded-lg hover:border-brand border border-gray-200 transition-colors shadow-sm">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="font-semibold text-gray-900 mb-1">{item.size}</p>
                                    <p className="text-sm text-gray-600">Quantity: {item.qty}</p>
                                </div>
                                <p className="text-lg font-bold text-brand">{item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="p-6 border-t border-gray-200 bg-blue-50">
                    <p className="text-sm text-gray-700 text-center">💡 Contact us for bulk discounts and custom requirements</p>
                </div>
            </div>
        </div>
    );
};

export default PricingModal;

const TrustElements = () => {
    const features = [
        "✓ Bulk order support",
        "✓ Quality check before delivery",
        "✓ On-time delivery guaranteed",
        "✓ Custom print options available",
        "✓ 10+ years printing experience"
    ];

    return (
        <section className="py-12 md:py-16 bg-white px-4 sm:px-6">
            <div className="max-w-screen-xl mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8 md:mb-12">Why Choose Us</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-blue-50 p-4 md:p-6 rounded-lg text-center border border-blue-100">
                            <p className="text-sm md:text-base text-gray-800 font-medium">{feature}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustElements;

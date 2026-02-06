const Hero = () => {
    return (
        <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-white min-h-screen flex items-center">
            <div className="max-w-screen-xl mx-auto px-4 text-center">
                <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
                    Quality Offset Printing
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10">
                    Professional printing services for diaries, notebooks, registers, and custom print works
                </p>
                <div className="flex gap-4 justify-center">
                    <a href="#contact" className="bg-brand text-brand hover:text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-xl">
                        Get a Quote
                    </a>
                    <a href="#services" className="border-2 border-brand text-brand px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transition-all shadow-xl">
                        View Services
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;

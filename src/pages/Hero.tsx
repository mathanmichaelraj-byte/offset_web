const Hero = () => {
    return (
        <section className="pt-32 pb-16 md:pb-20 bg-gradient-to-br from-blue-50 to-white min-h-screen flex items-center px-4 sm:px-6">
            <div className="max-w-screen-xl mx-auto w-full text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 md:mb-6">
                    Quality Offset Printing
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 md:mb-10 px-4">
                    Professional printing for diaries, notebooks, registers & custom works
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                    <a href="#contact" className="w-full sm:w-auto bg-brand text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg text-center">
                        Get a Quote
                    </a>
                    <a href="#services" className="w-full sm:w-auto border-2 border-brand text-brand px-8 py-4 rounded-lg font-semibold hover:bg-brand hover:text-white transition-all text-center">
                        View Services
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;

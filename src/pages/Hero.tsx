const Hero = () => {
    return (
        <section className="pt-32 pb-20 bg-gradient-to-b from-neutral-primary to-neutral-secondary-soft min-h-screen flex items-center">
            <div className="max-w-screen-xl mx-auto px-4 text-center">
                <h1 className="text-6xl md:text-7xl font-bold text-heading mb-6">
                    Quality Offset Printing
                </h1>
                <p className="text-xl md:text-2xl text-body max-w-3xl mx-auto mb-10">
                    Professional printing services for diaries, notebooks, registers, and custom print works
                </p>
                <div className="flex gap-4 justify-center">
                    <a href="#contact" className="bg-brand text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                        Get a Quote
                    </a>
                    <a href="#services" className="border-2 border-brand text-heading px-8 py-4 rounded-lg font-semibold hover:bg-brand hover:text-white transition-all">
                        View Services
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;

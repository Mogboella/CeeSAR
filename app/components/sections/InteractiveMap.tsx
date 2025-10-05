export function InteractiveMap() {
    return (
        <section id="interactive-map" className="snap-section half px-6 bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-12">Interactive Map</h2>
                <div className="relative w-full h-96">
                    <img
                        src="/public/maps/2023.jpg"
                        alt="Interactive Map"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">Explore</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

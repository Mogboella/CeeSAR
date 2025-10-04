export function Hero() {
    return (
        <section id="hero" className="snap-section bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 px-6">
            <div className="max-w-5xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-300">
                    Build Data-Driven Space Insights
                </h1>
                <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Turn raw satellite feeds into actionable intelligence with a modular, extensible platform.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#features" className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition">
                        Explore Features
                    </a>
                    <a href="#pricing" className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                        View Pricing
                    </a>
                </div>
            </div>
        </section>
    );
}

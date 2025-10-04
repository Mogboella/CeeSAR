export function RiverHero() {
    return (
        <section id="river-hero" className="snap-section bg-gradient-to-b from-sky-100 via-white to-white dark:from-sky-950 dark:via-gray-950 dark:to-gray-950 px-6">
            <div className="max-w-5xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-sky-800 dark:text-sky-300">
                    Shannon River Flood Intelligence
                </h1>
                <p className="mt-6 text-lg md:text-xl text-sky-900/80 dark:text-sky-200 max-w-2xl mx-auto text-justify">
                    A decade of Synthetic Aperture Radar (SAR) insights tracking flood dynamics,
                    hydrological shifts, and risk signals across Ireland's longest river.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#map-timeline" className="px-6 py-3 rounded-lg bg-sky-700 text-white font-medium shadow hover:bg-sky-800 transition">
                        View Timeline
                    </a>
                    <a href="#sar-method" className="px-6 py-3 rounded-lg border border-sky-300 dark:border-sky-700 font-medium text-sky-800 dark:text-sky-200 hover:bg-sky-50 dark:hover:bg-sky-900/40 transition">
                        How It Works
                    </a>
                </div>
            </div>
        </section>
    );
}

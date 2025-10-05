export function RiverHero() {
    return (
        <section id="river-hero" className="snap-section px-6 relative overflow-hidden">
            {/* ==== VIDEO BG ==== */}
            <video
                className="absolute inset-0 w-full h-full object-cover z-0"
                autoPlay
                loop
                muted
                playsInline
            >
            <source src="https://res.cloudinary.com/dgdsc8fxf/video/upload/v1759626621/vd_bg_m9kbnu.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video>
            {/* ==== CONTENT ==== */}
            <div className="relative z-10 max-w-5xl mx-auto text-center pt-70">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-sky-800 dark:text-sky-300">
                Shannon River Flood Intelligence
            </h1>
            <p className="mt-6 text-lg md:text-xl text-sky-900/80 dark:text-sky-200 max-w-2xl mx-auto text-justify">
                A decade of Synthetic Aperture Radar (SAR) insights tracking flood dynamics,
                hydrological shifts, and risk signals across Ireland's longest river.
            </p>
            {/* ==== SCROLL DOWN ICON ==== */}
            <div className="mt-50 flex flex-col sm:flex-row gap-4 justify-center">
                <span className="flex justify-center w-full">
                <svg
                    className="animate-bounce h-16 w-16 text-sky-600 dark:text-sky-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
                </span>
            </div>
            </div>
            {/* ==== TEXT FILTER ==== */}
            <div className="absolute inset-0 bg-white/60 dark:bg-sky-950/60 z-0 pointer-events-none" />
        </section>
    );
}

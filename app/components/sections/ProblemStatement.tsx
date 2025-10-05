export function ProblemStatement() {
    return (
        <section id="problem" className="snap-section px-6 pattern-base pattern-petals pattern-softer bg-white dark:bg-gray-950">
            <div className="max-w-4xl mx-auto text-center py-16">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-sky-700 dark:text-sky-300">
                    Problem Statement
                </h2>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-8 text-justify">
                    The River Shannon experiences frequent winter flooding, exacerbated by heavy rainfall, leading to widespread 
                    inundation of adjacent lands. This was notably severe during the 2015–2016 floods, affecting areas like 
                    Limerick, Galway, Mayo, Roscommon, and Offaly (e.g., Shannonbridge), 
                    with maximum extents reaching <b>~24,356 hectares</b>. SAR satellites enable rapid, high-resolution (10m) 
                    mapping of flood extents, persistence (e.g., tracking unchanged flood levels over months), and dynamics, 
                    even under persistent cloud cover that hinders optical imaging.
                </p>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-8 text-justify">
                    Leveraging Synthetic Aperture Radar data allows consistent, high-resolution flood mapping and temporal analysis, regardless of weather or daylight conditions.
                    This project aims to identify and track emerging flood hotspots along the Shannon River, supporting proactive risk management and resilience planning.
                </p>
            </div>
            {/* SCROLL DOWN ICON */}
                <div className="mt-5 flex flex-col sm:flex-row gap-4 justify-center">
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
        </section>
    );
}

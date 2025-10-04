export function ProblemStatement() {
    return (
        <section id="problem" className="snap-section px-6 pattern-base pattern-petals pattern-softer bg-white dark:bg-gray-950">
            <div className="max-w-4xl mx-auto text-center py-16">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-sky-700 dark:text-sky-300">
                    Problem Statement
                </h2>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-8">
                    The River Shannon experiences recurrent winter flooding, intensified by heavy rainfall and prolonged saturation of surrounding lands.
                    During severe events like the 2015–2016 floods, water levels expanded across counties such as Limerick, Galway, Mayo, Roscommon, and Offaly—impacting thousands of hectares.
                    Conventional monitoring methods face limitations from persistent cloud cover and delayed ground reports, hindering timely flood assessment and response.
                </p>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-8">
                    Leveraging Synthetic Aperture Radar (SAR) data allows consistent, high-resolution flood mapping and temporal analysis, regardless of weather or daylight conditions.
                    This project aims to identify and track emerging flood hotspots along the Shannon River, supporting proactive risk management and resilience planning.
                </p>
                {/* <ul className="text-left mx-auto max-w-2xl space-y-4 text-base text-gray-600 dark:text-gray-300">
                    <li><strong>Challenge:</strong> Persistent flooding, poor visibility, and lagging situational awareness.</li>
                    <li><strong>Goal:</strong> Deliver real-time, year-round flood intelligence for the Shannon basin.</li>
                    <li><strong>Approach:</strong> Multi-temporal SAR analysis, hotspot detection, and dynamic visualizations.</li>
                </ul> */}
            </div>
        </section>
    );
}

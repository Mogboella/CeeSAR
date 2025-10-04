import { useEffect, useRef, useState } from "react";
import { RIVER_YEARS } from "../../data/riverYears";

interface MapTimelineProps {
    autoAdvanceMs?: number;
    pauseOnHover?: boolean;
}

export function MapTimeline({ autoAdvanceMs = 3500, pauseOnHover = true }: MapTimelineProps) {
    const [index, setIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const years = RIVER_YEARS;
    const containerRef = useRef<HTMLDivElement | null>(null);

    // Auto-advance
    useEffect(() => {
        if (isPaused) return;
        const id = setTimeout(() => {
            setIndex((i) => (i + 1) % years.length);
        }, autoAdvanceMs);
        return () => clearTimeout(id);
    }, [index, years.length, autoAdvanceMs, isPaused]);

    return (
        <section
            id="map-timeline"
            className="snap-section px-6 bg-white dark:bg-gray-950 flex flex-col"
        >
            <div className="max-w-6xl mx-auto w-full flex flex-col h-full">
                <header className="mb-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">
                        Decadal Flood Extent Timeline
                    </h2>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Scroll or watch the sequence: yearly SAR-derived flood composites along the Shannon.
                    </p>
                </header>
                <div
                    className="relative flex-1 flex flex-col md:flex-row gap-6 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 shadow"
                    ref={containerRef}
                    onMouseEnter={() => pauseOnHover && setIsPaused(true)}
                    onMouseLeave={() => pauseOnHover && setIsPaused(false)}
                >
                    {/* Image / map region */}
                    <div className="relative flex-1 min-h-[300px] flex items-center justify-center bg-black/5 dark:bg-black/40">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-full flex items-center justify-center p-4">
<<<<<<< Updated upstream
                                <div className="w-full h-full rounded-lg overflow-hidden shadow-lg bg-gray-200 dark:bg-gray-800">
                                    {/* Placeholder; replace with <img /> or map canvas */}
                                    <img
                                        src={years[index].image}
                                        alt={`Flood extent map for year ${years[index].year}`}
                                        className="object-cover w-full h-full rounded-lg"
=======
                                <div className="w-full h-full rounded-lg shadow-lg ">
                                    <img
                                        className="w-full h-full object-cover"
                                        src={years[index].image}
                                        alt={`Flood extent map for year ${years[index].year}`}
>>>>>>> Stashed changes
                                    />
                                </div>
                            </div>
                        </div>
                        <YearBadge year={years[index].year} />
                    </div>

                    {/* Mini year scrub bar */}
                    <div className="md:w-64 w-full md:border-l border-t md:border-t-0 border-gray-200 dark:border-gray-800 flex flex-col">
                        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1 text-sm custom-scrollbar">
                            {years.map((y, i) => {
                                const active = i === index;
                                return (
                                    <button
                                        key={y.year}
                                        onClick={() => setIndex(i)}
                                        className={`w-full text-left px-3 py-2 rounded-md transition flex items-center justify-between ${active
                                                ? "bg-sky-600 text-white shadow"
                                                : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                                            }`}
                                    >
                                        <span>{y.year}</span>
                                        <span className="text-xs opacity-70">
                                            {y.floodExtentKm2.toFixed(0)} km²
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <p className="mt-4 text-xs text-gray-500 dark:text-gray-500 text-center">
                    Data illustrative; integrate SAR composite tiles or dynamic map for production.
                </p>
            </div>
            <div className="mt-25 flex flex-col sm:flex-row gap-4 justify-center">
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

function YearBadge({ year }: { year: number }) {
    return (
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-sky-700 text-white text-sm shadow">
            {year}
        </div>
    );
}

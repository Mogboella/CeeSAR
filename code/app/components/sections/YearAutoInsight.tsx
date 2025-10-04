import { useEffect, useState } from "react";
import { RIVER_YEARS } from "../../data/riverYears";

interface YearAutoInsightProps {
    autoAdvanceMs?: number;
}

export function YearAutoInsight({ autoAdvanceMs = 4000 }: YearAutoInsightProps) {
    const [index, setIndex] = useState(0);
    const years = RIVER_YEARS;

    useEffect(() => {
        const id = setTimeout(() => {
            setIndex((i) => (i + 1) % years.length);
        }, autoAdvanceMs);
        return () => clearTimeout(id);
    }, [index, years.length, autoAdvanceMs]);

    const current = years[index];

    return (
        <section id="year-insight" className="snap-section half px-6 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-stretch">
                <div className="flex-1 flex items-center justify-center">
                    <div className="w-full aspect-video rounded-xl bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 text-sm md:text-base">
                        {/* Replace with <img src={current.image} alt=... /> once assets available */}
                        {current.year} Detail Image Placeholder
                    </div>
                </div>
                <div className="flex-1 flex flex-col gap-4">
                    <header>
                        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-1">
                            Year {current.year} Snapshot
                        </h2>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            {current.summary}
                        </p>
                    </header>
                    <ul className="grid grid-cols-2 gap-4 text-sm">
                        <Metric label="Flood Extent" value={`${current.floodExtentKm2.toFixed(1)} km²`} />
                        <Metric label="Avg Level" value={`${current.avgWaterLevelM.toFixed(2)} m`} />
                        <Metric label="Peak Level" value={`${current.peakWaterLevelM.toFixed(2)} m`} />
                        <Metric
                            label="Rainfall Anomaly"
                            value={`${current.rainfallAnomalyPct > 0 ? "+" : ""}${current.rainfallAnomalyPct}%`}
                        />
                    </ul>
                    <TimelineProgress index={index} total={years.length} />
                    <div className="flex gap-2 mt-2">
                        {years.map((y, i) => (
                            <button
                                key={y.year}
                                onClick={() => setIndex(i)}
                                aria-label={`Go to year ${y.year}`}
                                className={`h-2 flex-1 rounded-full transition ${i === index ? "bg-sky-600" : "bg-gray-300 dark:bg-gray-700 hover:bg-sky-400"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function Metric({ label, value }: { label: string; value: string }) {
    return (
        <li className="p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col">
            <span className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                {label}
            </span>
            <span className="text-lg font-semibold mt-1 text-gray-800 dark:text-gray-200">
                {value}
            </span>
        </li>
    );
}

function TimelineProgress({ index, total }: { index: number; total: number }) {
    const pct = ((index + 1) / total) * 100;
    return (
        <div className="mt-2">
            <div className="h-2 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                <div
                    className="h-full bg-sky-600 transition-all"
                    style={{ width: pct + "%" }}
                />
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1 text-right">
                {index + 1} / {total}
            </p>
        </div>
    );
}

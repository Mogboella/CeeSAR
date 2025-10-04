const STEPS = [
    { step: 1, title: "Ingest", desc: "Connect satellite and external data providers." },
    { step: 2, title: "Process", desc: "Normalize, tile, and enrich imagery + telemetry." },
    { step: 3, title: "Analyze", desc: "Deploy ML models and run custom pipelines." },
    { step: 4, title: "Distribute", desc: "Expose insights via API, dashboards, and alerts." },
];

export function HowItWorks() {
    return (
        <section id="how" className="snap-section px-6 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-12">How It Works</h2>
                <ol className="relative border-s border-gray-200 dark:border-gray-700 ml-4 space-y-10">
                    {STEPS.map((s) => (
                        <li key={s.step} className="ms-8">
                            <span className="absolute -start-4 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-medium ring-4 ring-white dark:ring-gray-900 shadow">
                                {s.step}
                            </span>
                            <h3 className="font-medium text-lg mb-1">{s.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-md">{s.desc}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}

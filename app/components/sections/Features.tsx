const FEATURES = [
    {
        title: "Unified Data Pipeline",
        desc: "Ingest multi-spectral, radar, and telemetry sources with zero-copy transforms.",
    },
    { title: "Real-time Alerts", desc: "Configure anomaly triggers and stream notifications." },
    { title: "AI Model Hub", desc: "Deploy, version, and A/B test geospatial ML models." },
    { title: "Collaboration", desc: "Shared workspaces, annotation layers, and audit trails." },
    { title: "Edge Processing", desc: "On-satellite preprocessing to reduce downlink bandwidth." },
    { title: "Security & Compliance", desc: "Granular roles, encryption, and compliance reporting." },
];

export function Features() {
    return (
        <section id="features" className="snap-section half px-6 bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-10">Platform Features</h2>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {FEATURES.map((f) => (
                        <div
                            key={f.title}
                            className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 shadow-sm hover:shadow transition"
                        >
                            <h3 className="font-medium text-lg mb-2">{f.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

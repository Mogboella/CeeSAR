const PLANS = [
    { name: "Starter", price: "$0", tagline: "Evaluate core capabilities", features: ["5 GB ingestion", "1 model slot", "Community support"] },
    { name: "Pro", price: "$199", tagline: "Scale operational insights", features: ["2 TB ingestion", "10 models", "Priority support", "Alert webhooks"] },
    { name: "Enterprise", price: "Custom", tagline: "Mission-critical & compliance", features: ["Unlimited ingestion", "Custom SLAs", "Dedicated cluster", "FedRAMP / ITAR options"] },
];

export function Pricing() {
    return (
        <section id="pricing" className="snap-section half px-6 bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-12">Pricing</h2>
                <div className="grid gap-8 md:grid-cols-3">
                    {PLANS.map((p) => (
                        <div
                            key={p.name}
                            className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 shadow-sm flex flex-col"
                        >
                            <h3 className="text-lg font-medium mb-1">{p.name}</h3>
                            <p className="text-3xl font-bold mb-2">{p.price}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{p.tagline}</p>
                            <ul className="text-sm space-y-2 flex-1">
                                {p.features.map((f) => (
                                    <li key={f} className="flex items-start gap-2">
                                        <span className="text-blue-600">•</span>
                                        <span className="text-gray-600 dark:text-gray-400">{f}</span>
                                    </li>
                                ))}
                            </ul>
                            <a
                                href="#cta"
                                className="mt-6 inline-block w-full text-center px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
                            >
                                {p.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

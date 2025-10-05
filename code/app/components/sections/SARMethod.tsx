export function SARMethod() {
    return (
        <section
            id="sar-method"
            className="snap-section px-6 bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 text-gray-100"
        >
            <div className="max-w-5xl mx-auto flex flex-col gap-10">
                <header>
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-sky-300">
                        How We Derive Flood Intelligence with SAR
                    </h2>
                    <p className="text-gray-300 max-w-2xl text-sm md:text-base leading-relaxed">
                        Synthetic Aperture Radar (SAR) penetrates cloud cover and operates independent of daylight. We combine calibrated backscatter, coherence change detection, and temporal compositing to produce a robust flood extent signal even under persistent Atlantic weather systems.
                    </p>
                </header>
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                    <MethodCard
                        title="Radiometric Calibration"
                        body="Standardize backscatter (sigma nought) to compare multi-orbit acquisitions across years." />
                    <MethodCard
                        title="Speckle & Noise Reduction"
                        body="Multi-temporal filtering + adaptive Lee refinement stabilizes water surface signatures." />
                    <MethodCard
                        title="Water Classification"
                        body="Hybrid threshold + ML segmentation separates open water, saturated soil, and emergent vegetation." />
                    <MethodCard
                        title="Change Detection"
                        body="Coherence + differential backscatter highlight rapid inundation vs gradual expansion." />
                    <MethodCard
                        title="Time-Series Composites"
                        body="Windowed aggregation reduces false positives and seasonal noise for annual snapshots." />
                    <MethodCard
                        title="Metric Extraction"
                        body="Flood extent polygons + hydrodynamic indices feed trend analytics and risk scoring." />
                </div>
                <p className="text-xs text-gray-500">
                    Toolchain: Sentinel-1 IW GRD → ESA SNAP pre-processing → Python (rasterio, xarray) → Model inference → Vectorization.
                </p>
            </div>
        </section>
    );
}

function MethodCard({ title, body }: { title: string; body: string }) {
    return (
        <div className="p-5 rounded-xl bg-gray-800/60 border border-gray-700 backdrop-blur shadow-sm hover:shadow transition">
            <h3 className="font-medium text-sky-300 mb-2 text-sm uppercase tracking-wide">
                {title}
            </h3>
            <p className="text-gray-300 leading-relaxed text-xs md:text-sm">{body}</p>
        </div>
    );
}

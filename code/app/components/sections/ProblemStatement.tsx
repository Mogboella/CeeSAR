export function ProblemStatement() {
  return (
    <section id="problem" className="snap-section px-6 pattern-base pattern-petals pattern-softer bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto text-center py-16">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-sky-700 dark:text-sky-300">
          Problem Statement
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-8">
          Flooding along the Shannon River in Ireland poses recurring risks to communities, infrastructure, and agriculture. Traditional monitoring methods struggle with cloud cover, rapid changes, and data latency. Our solution leverages Synthetic Aperture Radar (SAR) to deliver timely, high-resolution flood intelligence, enabling better prediction, response, and resilience planning.
        </p>
        <ul className="text-left mx-auto max-w-2xl space-y-4 text-base text-gray-600 dark:text-gray-300">
          <li><strong>Challenge:</strong> Persistent flooding, limited visibility, slow ground reporting.</li>
          <li><strong>Goal:</strong> Provide actionable, year-round flood insights for the Shannon basin.</li>
          <li><strong>Approach:</strong> SAR-based mapping, multi-year analytics, and intuitive visualizations.</li>
        </ul>
      </div>
    </section>
  );
}

export function CTA() {
    return (
        <section id="cta" className="snap-section px-6 bg-gradient-to-br from-indigo-600 to-blue-600 text-white">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
                    Ready to Launch Your Space Intelligence Platform?
                </h2>
                <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8">
                    Start free today or talk to us about advanced compliance and deployment options.
                </p>
                <form
                    className="max-w-md mx-auto flex flex-col sm:flex-row gap-4"
                    onSubmit={(e) => {
                        e.preventDefault();
                        const data = new FormData(e.currentTarget);
                        alert(`Submitted: ${data.get("email")}`);
                    }}
                >
                    <input
                        name="email"
                        type="email"
                        required
                        placeholder="Work email"
                        className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder:text-gray-500"
                    />
                    <button
                        type="submit"
                        className="px-6 py-3 rounded-lg bg-white text-blue-700 font-medium hover:bg-blue-50 transition"
                    >
                        Get Started
                    </button>
                </form>
                <p className="mt-4 text-xs text-blue-200">No credit card required.</p>
            </div>
        </section>
    );
}

import { useEffect, useState } from "react";

export interface ScrollSpyConfig {
    sectionIds: string[];
    rootMargin?: string;
    threshold?: number | number[];
}

export function useScrollSpy({
    sectionIds,
    rootMargin = "-40% 0px -50% 0px",
    threshold = 0,
}: ScrollSpyConfig) {
    const [activeId, setActiveId] = useState<string | null>(sectionIds[0] ?? null);

    useEffect(() => {
        const elements = sectionIds
            .map((id) => document.getElementById(id))
            .filter((el): el is HTMLElement => !!el);
        if (!elements.length || !("IntersectionObserver" in window)) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { root: null, rootMargin, threshold }
        );

        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [sectionIds, rootMargin, threshold]);

    return activeId;
}

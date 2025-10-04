import type { Route } from "./+types/home";
import { ProblemStatement } from "../components/sections/ProblemStatement";
import { RiverHero } from "../components/sections/RiverHero";
import { MapTimeline } from "../components/sections/MapTimeline";
import { SARMethod } from "../components/sections/SARMethod";
import { YearAutoInsight } from "../components/sections/YearAutoInsight";
import { Footer } from "../components/sections/Footer";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { useEffect, useState } from "react";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Space Intelligence Platform" },
    { name: "description", content: "Modular platform for satellite data insights." },
  ];
}

const SECTIONS = [
  { id: "river-hero", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "map-timeline", label: "Timeline" },
  { id: "sar-method", label: "Method" },
  { id: "year-insight", label: "Year View" },
];

export default function Home() {
  const activeId = useScrollSpy({ sectionIds: SECTIONS.map((s) => s.id) });
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative">
      {/* Top Nav */}
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-gray-900/60 ${scrolled ? "shadow-sm" : ""
          }`}
      >
        <div className="mx-auto max-w-7xl px-4 flex items-center h-14 gap-8">
          <a href="#river-hero" className="font-semibold tracking-tight text-lg">
            Cea-SAR
          </a>
          <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={`px-1 py-1 border-b-2 -mb-px transition-colors ${activeId === s.id
                    ? "border-blue-600 text-blue-600 dark:text-blue-400"
                    : "border-transparent text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    }`}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="ml-auto flex items-center gap-3">
            <a
              href="#map-timeline"
              className="hidden md:inline-block px-4 py-2 rounded-lg bg-sky-700 text-white text-sm font-medium hover:bg-sky-800 transition"
            >
              Explore
            </a>
          </div>
        </div>
      </nav>

      {/* Scroll Snap Container */}
      <div className="snap-y-container">
        <RiverHero />
        <ProblemStatement />
        <MapTimeline />
        <SARMethod />
        <YearAutoInsight />
      </div>
      <Footer />
    </div>
  );
}

import { useState, useEffect, useRef } from "react";

const projects = [
  {
    id: 1,
    year: "2022 - 2023",
    title:
      "Crafted unified experiences across touch points for Cisco's IoT-based SaaS Platform",
    tag: "SaaS / IoT",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    accent: "from-[#0ea5e9] to-[#0c4a6e]",
    mockupBg: "bg-slate-800",
  },
  {
    id: 2,
    year: "2021 - 2022",
    title:
      "Redesigned the end-to-end onboarding flow for a fintech startup serving 2M+ users",
    tag: "Fintech / UX",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    accent: "from-[#6366f1] to-[#1e1b4b]",
    mockupBg: "bg-indigo-950",
  },
  {
    id: 3,
    year: "2023 - 2024",
    title:
      "Built a real-time analytics dashboard for a global e-commerce brand's operations team",
    tag: "Analytics / E-Commerce",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    accent: "from-[#14b8a6] to-[#042f2e]",
    mockupBg: "bg-teal-950",
  },
  {
    id: 4,
    year: "2020 - 2021",
    title:
      "Launched an AI-driven content personalization engine for a media conglomerate",
    tag: "AI / Media",
    image:
      "https://images.unsplash.com/photo-1677756119517-756a188d2d94?w=800&q=80",
    accent: "from-[#f59e0b] to-[#451a03]",
    mockupBg: "bg-amber-950",
  },
];

export default function ProjectSection() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("next");
  const intervalRef = useRef(null);

  const goTo = (index, dir = "next") => {
    if (animating || index === active) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setActive(index);
      setAnimating(false);
    }, 400);
  };

  const next = () => {
    const nextIndex = (active + 1) % projects.length;
    goTo(nextIndex, "next");
  };

  const prev = () => {
    const prevIndex = (active - 1 + projects.length) % projects.length;
    goTo(prevIndex, "prev");
  };

  useEffect(() => {
    intervalRef.current = setInterval(next, 5000);
    return () => clearInterval(intervalRef.current);
  }, [active]);

  const project = projects[active];

  const slideStyle = {
    opacity: animating ? 0 : 1,
    transform: animating
      ? direction === "next"
        ? "translateX(32px)"
        : "translateX(-32px)"
      : "translateX(0)",
    transition: "opacity 0.4s ease, transform 0.4s ease",
  };

  return (
    <section
      style={{
        background: "#111111",
        minHeight: "100vh",
      }}
      className="flex flex-col items-center justify-center px-6 py-20"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-xs uppercase tracking-wider text-gray-400 mb-3">
          Portfolio
        </p>
        <h2 className="text-5xl md:text-6xl font-bold text-white leading-none tracking-tight">
          Our Projects
        </h2>
      </div>

      {/* Card */}
      <div className="w-full max-w-5xl">
        <div
          style={{
            borderRadius: "20px",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.07)",
            background: "#111111",
          }}
          className="grid grid-cols-1 md:grid-cols-2"
        >
          {/* Left: Info Panel */}
          <div
            className="p-8 md:p-12 flex flex-col justify-between min-h-[380px]"
            style={{
              ...slideStyle,
              background: `linear-gradient(135deg, ${
                project.accent.includes("0ea5e9")
                  ? "#0ea5e9, #0c4a6e"
                  : project.accent.includes("6366f1")
                    ? "#6366f1, #1e1b4b"
                    : project.accent.includes("14b8a6")
                      ? "#14b8a6, #042f2e"
                      : "#f59e0b, #451a03"
              })`,
            }}
          >
            <div>
              <span className="inline-block text-sm tracking-widest uppercase mb-5 px-3 py-1 rounded-full font-medium text-white/90 bg-white/20">
                {project.tag}
              </span>

              <p className="text-white/60 text-lg tracking-wide mb-4 font-[400]">
                {project.year}
              </p>

              <h3 className="text-lg md:text-4xl font-bold leading-snug tracking-tight">
                {project.title}
              </h3>
            </div>

            {/* Arrow Button */}
            <button
              onClick={next}
              style={{
                marginTop: "36px",
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                border: "1.5px solid rgba(255,255,255,0.4)",
                background: "transparent",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "background 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.15)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.8)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Right: Mockup/Image Panel */}
          <div
            style={{
              ...slideStyle,
              background: "#1a1a1a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "32px",
              position: "relative",
              overflow: "hidden",
              minHeight: "380px",
            }}
          >
            {/* Subtle grid background */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)",
                backgroundSize: "28px 28px",
              }}
            />

            {/* Laptop mockup */}
            <div
              style={{
                position: "relative",
                zIndex: 1,
                width: "100%",
                maxWidth: "340px",
              }}
            >
              <div
                style={{
                  background: "#0f172a",
                  borderRadius: "12px 12px 0 0",
                  padding: "8px 8px 0",
                  border: "1.5px solid rgba(255,255,255,0.1)",
                  boxShadow: "0 24px 64px rgba(0,0,0,0.6)",
                }}
              >
                {/* Topbar */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "6px 10px 8px",
                  }}
                >
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#ef4444",
                    }}
                  />
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#f59e0b",
                    }}
                  />
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#22c55e",
                    }}
                  />
                </div>

                {/* Screen */}
                <div
                  style={{
                    borderRadius: "6px",
                    overflow: "hidden",
                    aspectRatio: "16/10",
                    background: "#1e293b",
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>

              {/* Laptop base */}
              <div
                style={{
                  height: "10px",
                  background: "#0f172a",
                  borderRadius: "0 0 6px 6px",
                  border: "1.5px solid rgba(255,255,255,0.08)",
                  borderTop: "none",
                }}
              />
              <div
                style={{
                  height: "4px",
                  background: "#1e293b",
                  borderRadius: "0 0 12px 12px",
                  width: "70%",
                  margin: "0 auto",
                }}
              />
            </div>
          </div>
        </div>

        {/* Bottom Controls */}
        <div className="flex items-center justify-between mt-8">
          {/* Dot indicators */}
          <div className="flex gap-3">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > active ? "next" : "prev")}
                style={{
                  width: i === active ? "28px" : "8px",
                  height: "8px",
                  borderRadius: "100px",
                  background:
                    i === active ? "#e5e7eb" : "rgba(255,255,255,0.2)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  padding: 0,
                }}
              />
            ))}
          </div>

          {/* Prev / Next */}
          <div className="flex gap-3">
            <button
              onClick={prev}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.15)",
                background: "transparent",
                color: "rgba(255,255,255,0.7)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={next}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.15)",
                background: "transparent",
                color: "rgba(255,255,255,0.7)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Counter */}
          <p
            style={{
              color: "rgba(255,255,255,0.3)",
              fontSize: "13px",
              letterSpacing: "0.05em",
            }}
          >
            <span style={{ color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>
              {String(active + 1).padStart(2, "0")}
            </span>{" "}
            / {String(projects.length).padStart(2, "0")}
          </p>
        </div>
      </div>
    </section>
  );
}

export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "They have most creative and passionate people in their team. Best digital marketing and designs firm in India.",
      name: "Sourabh Dutta",
      role: "CEO, Green Tech",
    },
    {
      text: "They have most creative and passionate people in their team. Best digital marketing and designs firm in India.",
      name: "Sourabh Dutta",
      role: "CEO, Green Tech",
    },
    {
      text: "They have most creative and passionate people in their team. Best digital marketing and designs firm in India.",
      name: "Sourabh Dutta",
      role: "CEO, Green Tech",
    },
  ];

  return (
    <section className="py-16 px-6" style={{ backgroundColor: "#111111" }}>
      <h2 className="text-5xl md:text-6xl font-bold text-white leading-none tracking-tight mb-12 text-center">
        What Our Client Says
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-gray-800 rounded-xl p-6 flex flex-col justify-between"
          >
            {/* Quote Icon */}
            <div>
              <span className="text-yellow-400 text-5xl font-serif leading-none select-none">
                "
              </span>
              <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                {t.text}
              </p>
            </div>

            {/* Author */}
            <div className="flex items-center gap-3 mt-6">
              {/* Avatar circle */}
              <div className="w-10 h-10 rounded-full bg-gray-500 flex-shrink-0 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 rounded-full" />
              </div>
              <div>
                <p className="text-white text-xl font-semibold">{t.name}</p>
                <p className="text-gray-400 text-xs">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

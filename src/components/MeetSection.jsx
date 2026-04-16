import { useState, useEffect } from "react";

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const EmailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-5 h-5"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const DribbbleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073a42.153 42.153 0 0 0-.767-1.68c2.31-1 4.165-2.358 5.548-4.082a9.863 9.863 0 0 1 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68a46.287 46.287 0 0 0-3.168-4.874 9.927 9.927 0 0 1 8.154 1.194zm-13.transparan 1.443a44.994 44.994 0 0 1 3.218 4.951c-2.563.981-5.391 1.462-8.479 1.442a9.926 9.926 0 0 1 5.261-6.393zM2.179 13.25c3.526.028 6.724-.523 9.585-1.651.254.533.5 1.07.737 1.609-3.32 1.072-6.018 3.074-8.066 6.015A9.898 9.898 0 0 1 2.18 13.25zm3.908 7.441c1.868-2.786 4.407-4.695 7.59-5.722.87 2.257 1.56 4.597 2.057 7.028a9.923 9.923 0 0 1-9.647-1.306zm11.81.616a52.507 52.507 0 0 0-1.983-6.768c1.994-.3 4.19-.254 6.584.196a9.935 9.935 0 0 1-4.601 6.572z" />
  </svg>
);

const BehanceIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-.18 1.35-.51.35-1.1.6-1.77.75-.67.14-1.37.22-2.1.22H0V4.52h6.938v-.017zm-.34 5.86c.59 0 1.07-.14 1.44-.42.37-.28.55-.73.55-1.33 0-.34-.06-.62-.18-.84-.12-.22-.29-.4-.5-.53-.21-.13-.45-.22-.72-.27-.27-.05-.55-.08-.84-.08H3.5v3.47h3.1zm.16 6.18c.32 0 .62-.03.9-.1.28-.06.53-.17.74-.32.21-.15.38-.35.5-.6.12-.25.18-.57.18-.96 0-.76-.21-1.3-.63-1.61-.42-.31-.97-.47-1.66-.47H3.5v4.06h3.26zm10.07-9.12h6.23v1.42h-6.23V7.42zm3.04-3.38c.67 0 1.27.11 1.8.34.53.22.97.54 1.33.95.36.41.63.9.81 1.47.18.57.27 1.2.27 1.9H16.1c0 .8.24 1.42.72 1.85.48.43 1.1.65 1.85.65.58 0 1.08-.15 1.5-.44.42-.29.68-.6.78-.93h2.67c-.43 1.3-1.08 2.23-1.96 2.77-.88.55-1.95.82-3.2.82-.87 0-1.65-.14-2.35-.43-.7-.29-1.3-.7-1.78-1.23-.48-.53-.85-1.16-1.1-1.9-.25-.74-.38-1.56-.38-2.44 0-.85.13-1.65.4-2.38.27-.73.65-1.36 1.14-1.9.5-.53 1.1-.94 1.8-1.23.7-.29 1.48-.43 2.34-.43zm.07 1.97c-.68 0-1.23.18-1.65.55-.42.37-.68.93-.78 1.66h4.74c-.06-.72-.29-1.27-.69-1.65-.4-.37-.93-.56-1.62-.56z" />
  </svg>
);

export default function MeetSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f5f0] font-sans">
      {/* Main CTA Section */}
      <main
        className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        {/* Eyebrow */}
        <p className="text-lg text-gray-900 tracking-wide mb-3">
          That's a wrap? Maybe not.
        </p>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl font-black text-black leading-tight mb-6 max-w-2xl tracking-wide">
          Great things start with 'Meet'!{" "}
          <span role="img" aria-label="party face" className="not-italic">
            🤩
          </span>
        </h1>

        {/* Sub-description */}
        <p className="text-gray-600 text-base max-w-md leading-relaxed mb-10">
          Open to{" "}
          <span>
            <span role="img" aria-label="speech">
              💬
            </span>{" "}
            conversations
          </span>
          ,{" "}
          <span>
            <span role="img" aria-label="handshake">
              🤝
            </span>{" "}
            collabs
          </span>
          ,{" "}
          <span>
            <span role="img" aria-label="palette">
              🎨
            </span>{" "}
            creative
          </span>{" "}
          challenges,{" "}
          <span>
            <span role="img" aria-label="puzzle">
              🧩
            </span>{" "}
            puzzles
          </span>
          —or just a friendly game of{" "}
          <span>
            <span role="img" aria-label="chess">
              ♟️
            </span>{" "}
            Chess
          </span>
          .
        </p>

        {/* CTA Button */}
        <button className="bg-black text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-gray-800 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl tracking-wide">
          Let's Meet →
        </button>

        {/* Connect through */}
        <p className="text-gray-400 text-xs mt-4 mb-6 tracking-wide">
          or connect through..
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-5 text-gray-700">
          <a
            href="#"
            aria-label="LinkedIn"
            className="hover:text-black hover:scale-110 transition-all duration-200"
          >
            <LinkedInIcon />
          </a>
          <a
            href="#"
            aria-label="X / Twitter"
            className="hover:text-black hover:scale-110 transition-all duration-200"
          >
            <XIcon />
          </a>
          <a
            href="#"
            aria-label="Email"
            className="hover:text-black hover:scale-110 transition-all duration-200"
          >
            <EmailIcon />
          </a>
          <a
            href="#"
            aria-label="Dribbble"
            className="hover:text-black hover:scale-110 transition-all duration-200"
          >
            <DribbbleIcon />
          </a>
          <a
            href="#"
            aria-label="Behance"
            className="hover:text-black hover:scale-110 transition-all duration-200"
          >
            <BehanceIcon />
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 px-8 py-4 flex items-center justify-between text-xs text-gray-400">
        <span>© Copyright &amp; stuff...</span>
        <p className="hidden md:block max-w-sm text-center leading-relaxed">
          Created with{" "}
          <span role="img" aria-label="fire">
            🔥
          </span>{" "}
          curiosity{" "}
          <span role="img" aria-label="coffee">
            ☕
          </span>{" "}
          coffee{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>
          love,{" "}
          <span role="img" aria-label="person">
            🙃
          </span>
          some peer pressure, and{" "}
          <span role="img" aria-label="laptop">
            💻
          </span>
          way too many open tabs. Thanks for stopping by—don't forget to blink
          and drink (water ofc)!
        </p>
        <span className="font-medium text-gray-500">Behance</span>
      </footer>
    </div>
  );
}

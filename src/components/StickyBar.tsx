"use client";

interface StickyBarProps {
  show: boolean;
}

export default function StickyBar({ show }: StickyBarProps) {
  return (
    <div className={`sticky-bar ${show ? "visible" : ""}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold gradient-text">GlowUp Course</div>
        <a href="#inscricao" className="glow-button text-sm py-2 px-6">
          Quero me inscrever agora!
        </a>
      </div>
    </div>
  );
}

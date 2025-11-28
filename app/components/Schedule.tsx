import React from "react";

const Schedule: React.FC = () => {
  return (
    <section id="schedule" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Schedule a Meeting</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Book a 15 min discovery call. I build Next.js websites, SaaS dashboards,
              performance‑optimized UIs and on‑page SEO for businesses.
            </p>
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 overflow-hidden bg-surface">
          <iframe
            src="https://cal.com/imran-ansari/15min"
            title="Schedule with Imran Ansari"
            className="w-full h-[720px] bg-black"
          />
        </div>
      </div>
    </section>
  );
};

export default Schedule;
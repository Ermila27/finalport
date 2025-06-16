import React from "react";
import { motion } from "framer-motion";

// Paste `marqueeItemsTop`, `marqueeItemsBottom` here (same as in your current file)
const marqueeItemsTop = [
  {
    title: "API Documentation",
    icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-blue-400"><path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm3 3h6v2H9V9zm0 4h4v2H9v-2z" fill="currentColor"/></svg>,
    description: "Complete API references with real-world use cases, interactive testing, and secure auth flows for rapid integration."
  },
  {
    title: "Payment Systems",
    icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-teal-400"><path d="M3 6a1 1 0 011-1h16a1 1 0 011 1v2H3V6zm0 4h18v8a1 1 0 01-1 1H4a1 1 0 01-1-1v-8zm5 4a2 2 0 100 4 2 2 0 000-4z" fill="currentColor"/></svg>,
    description: "Robust infrastructure for handling global payments, fraud detection, reconciliation, and compliance all in one place."
  },
  {
    title: "Performance Metrics",
    icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-purple-400"><path d="M4 12h4v8H4v-8zm6-6h4v14h-4V6zm6 8h4v6h-4v-6z" fill="currentColor"/></svg>,
    description: "Real-time observability dashboards showing uptime, error rates, bottlenecks, and historical insights with alerting."
  },
  {
    title: "Cloud Infrastructure",
    icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-cyan-400"><path d="M17 16a4 4 0 100-8 5.5 5.5 0 10-9.9 3.3A4 4 0 007 20h10a4 4 0 000-8z" fill="currentColor"/></svg>,
    description: "Multi-region Kubernetes deployments with autoscaling, load balancing, failover systems, and IaC provisioning."
  },
];

const marqueeItemsBottom = [
  {
    title: "Data Pipelines",
    icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-yellow-400"><path d="M4 4h6v6H4V4zm0 10h6v6H4v-6zm10-10h6v6h-6V4zm0 10h6v6h-6v-6z" fill="currentColor"/></svg>,
    description: "Real-time and batch pipelines using Kafka, Airflow, Spark, and DBT to streamline ML, analytics, and ETL workflows."
  },
  {
    title: "AI Integration",
    icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-pink-400"><path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm1 14h-2v-2h2zm0-4h-2V7h2z" fill="currentColor"/></svg>,
    description: "Deploy AI/ML models into production with scalable endpoints, usage metering, throttling, and model version control."
  },
  {
    title: "Security & Compliance",
    icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-red-400"><path d="M12 2L4 6v6c0 5.25 3.9 9.74 8 11 4.1-1.26 8-5.75 8-11V6l-8-4z" fill="currentColor"/></svg>,
    description: "Built-in support for ISO 27001, SOC2, GDPR. Full audit logs, user access control, and encryption in transit and at rest."
  },
  {
    title: "Developer Tools",
    icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-green-400"><path d="M12 2L1 21h22L12 2zm1 15h-2v2h2v-2zm0-8h-2v6h2V9z" fill="currentColor"/></svg>,
    description: "CLI, SDKs, test environments, and CI/CD integrations built to supercharge development speed and productivity."
  },
];
const MarqueeRow = ({ items, reverse = false }) => (

  <div className="overflow-hidden py-8 relative">
    
    <div className={`flex gap-6 whitespace-nowrap animate-marquee${reverse ? "-reverse" : ""}`}>
      {[...items, ...items].map((item, idx) => (
        <div
          key={idx}
          className="min-w-[300px] max-w-sm bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-lg text-white hover:scale-[1.02] transition-transform"
        >
          <div className="mb-3">{item.icon}</div>
          <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
        <p className="text-sm text-white/80 leading-snug break-words whitespace-normal">
  {item.description}
</p>

        </div>
        
      ))}
    </div>
    <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-black to-transparent pointer-events-none" />
    <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-black to-transparent pointer-events-none" />
  </div>
);

const MarqueeShowcase = () => {
  return (
    <section className="bg-black py-16 px-6">
      
      <div className="max-w-7xl mx-auto">
        <MarqueeRow items={marqueeItemsTop} />
        <MarqueeRow items={marqueeItemsBottom} reverse />
      </div>
    </section>
  );
};

export default MarqueeShowcase;

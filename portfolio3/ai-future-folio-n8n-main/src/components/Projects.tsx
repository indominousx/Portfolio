
import React from "react";
import { Cpu, Network, Sparkle } from "lucide-react";

const projects = [
  {
    title: "ML Pipeline Optimizer",
    icon: Cpu,
    description: "End-to-end platform for data ingestion, model training, and deployment (FastAPI, Docker, AWS).",
    url: "#",
    tech: ["Python", "FastAPI", "Docker", "AWS"],
  },
  {
    title: "Real-Time AI Dashboard",
    icon: Network,
    description: "Live monitoring of ML models in production, with anomaly alerts and drift detection.",
    url: "#",
    tech: ["React", "Recharts", "scikit-learn"],
  },
  {
    title: "Generative Text Engine",
    icon: Sparkle,
    description: "Fine-tuned LLM for business document automation, with explainable AI outputs.",
    url: "#",
    tech: ["Transformers", "OpenAI API", "Streamlit"],
  },
];

const Projects: React.FC = () => (
  <section id="projects" className="relative z-10 py-16 w-full max-w-5xl mx-auto">
    <h2 className="text-3xl font-semibold text-white mb-10 text-center tracking-wide">
      Projects
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {projects.map(({ icon: Icon, title, description, url, tech }) => (
        <a
          key={title}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#181e26] border border-cyan-900/30 rounded-xl p-6 hover:shadow-lg hover:border-cyan-400 group flex flex-col hover-scale transition"
        >
          <div className="flex items-center gap-2 mb-4">
            <Icon size={30} className="text-cyan-300 group-hover:text-cyan-400" />
            <h3 className="text-lg font-semibold text-cyan-100">{title}</h3>
          </div>
          <p className="text-gray-300 flex-1 text-sm mb-3">{description}</p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {tech.map(t => (
              <span key={t} className="text-xs font-mono px-2 py-1 bg-cyan-900/30 text-cyan-300 rounded-md">
                {t}
              </span>
            ))}
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default Projects;

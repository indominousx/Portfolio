
import React from "react";
import { BarChart3, BrainCircuit, DatabaseZap, MessageCircle } from "lucide-react";

const skills = [
  {
    icon: BrainCircuit,
    title: "Deep Learning",
    desc: "Expertise in CNNs, RNNs, and modern transformer architectures.",
  },
  {
    icon: MessageCircle,
    title: "Natural Language Processing",
    desc: "Advanced NLP: text classification, generative AI, language understanding, and transformers.",
  },
  {
    icon: DatabaseZap,
    title: "Data Engineering",
    desc: "Design and optimization of robust data pipelines & ETL processes.",
  },
  {
    icon: BarChart3,
    title: "Data Visualization",
    desc: "Interactive dashboards with Recharts, Plotly, and custom visual UIs.",
  },

];

const Skills: React.FC = () => (
  <section id="skills" className="relative z-10 py-16 w-full max-w-5xl mx-auto">
    <h2 className="text-3xl font-semibold text-white mb-10 text-center tracking-wide">
      AI/ML Skills
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {skills.map(({ icon: Icon, title, desc }) => (
        <div key={title} className="bg-[#171c25] border border-cyan-900/40 rounded-xl p-6 text-center shadow-md hover:shadow-cyan-800/40 transition-all duration-200 hover-scale">
          <Icon size={36} className="mb-3 mx-auto text-cyan-300" />
          <h3 className="text-lg font-semibold text-cyan-200 mb-2">{title}</h3>
          <p className="text-gray-300 text-[15px] leading-snug">{desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;

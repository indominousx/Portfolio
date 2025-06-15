
import React from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact: React.FC = () => (
  <section id="contact" className="relative z-10 py-16 w-full max-w-xl mx-auto mb-14">
    <div className="bg-[#161a23] border border-cyan-800/50 rounded-xl px-8 py-10 shadow-md text-center">
      <h2 className="text-2xl font-semibold text-white mb-2">
        Let's Connect
      </h2>
      <p className="text-gray-300 mb-6">
        Open to collaborations, AI/ML projects, and workflow automation consulting.<br />
        Reach out and let's build something powerful.
      </p>
      <a
        href="mailto:your@email.com"
        className="inline-flex items-center gap-2 hover-scale"
      >
        <Button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold shadow-sm transition gap-2">
          <Mail size={20} /> Email me
        </Button>
      </a>
    </div>
  </section>
);

export default Contact;

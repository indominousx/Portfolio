import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/indominousx",
    // <-- Replace with your GitHub
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/krishna-gandhi-9281aa28b/",
    // <-- Replace with your LinkedIn
    icon: Linkedin,
  },
  {
    name: "Email",
    url: "https://mail.google.com/mail/?view=cm&fs=1&to=krishnagandhi020@gmail.com",
    // <-- Replace with your email
    icon: Mail,
  },
];

const Hero: React.FC = () => (
  <section className="relative z-10 pt-32 pb-20 w-full flex flex-col items-center text-center md:text-left">
    <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-5xl mx-auto gap-8 px-4">
      {/* Text Content */}
      <div className="flex-1">
        <h1 className="text-7xl font-extrabold text-white tracking-tight mb-2">
          Krisna Gandhi
        </h1>
        <h2 className="text-4xl font-medium mb-5 text-emerald-300">
          Gen AI Developer | Data Scientist 
        </h2>
        <p className="mb-8 max-w-xl text-xl text-gray-300 font-light">
          Building intelligent solutions with Machine Learning & Automated Workflows. Passionate about scalable, transparent, and creative AI.
        </p>
        <div className="flex gap-4 justify-center md:justify-start bg-transparent">
          {socialLinks.map(({ name, url, icon: Icon }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-scale"
            >
              <Button
                variant="outline"
                size="icon"
                className="border-cyan-400 transition bg-teal-950 hover:bg-teal-800"
              >
                <Icon size={24} className="text-cyan-300" />
              </Button>
            </a>
          ))}
        </div>
      </div>
      {/* Portrait Image */}
      <div className="flex-shrink-0 mb-8 md:mb-0 md:ml-8">
        <img
          src="https://i.postimg.cc/3N9gsMPG/Screenshot-2025-04-28-222128.png"
          alt="Your portrait"
          className="w-64 h-80 rounded-3xl border-4 border-cyan-400 shadow-lg object-cover transform rotate-90"
        />
      </div>
    </div>
  </section>
);

export default Hero;

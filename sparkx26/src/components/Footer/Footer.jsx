import { Github, Linkedin, Instagram, Heart } from "lucide-react";
import logo from "/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-[#060606] border-t border-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 text-center lg:text-left">
          <a href="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Spark Logo"
              className="w-16 h-16 object-contain rounded-full"
            />
            <span className="text-white text-2xl md:text-3xl font-semibold tracking-tight">
              | SPARK
            </span>
          </a>

          <div className="flex flex-col items-center">
            <p className="text-white/80 text-2xl">Follow us on</p>
            <div className="flex gap-7 mt-2">
              <a
                href="https://github.com"
                aria-label="GitHub"
                target="_blank"
                rel="noreferrer"
                className="text-white/60 hover:text-white w-7 h-7 transition-all duration-300 hover:scale-110"
              >
                <Github className="w-7 h-7" />
              </a>
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
                className="text-white/60 hover:text-white w-7 h-7 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-7 h-7" />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
                className="text-white/60 hover:text-white w-7 h-7 transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-7 h-7" />
              </a>
            </div>
          </div>

          <p className="text-white/70 text-lg lg:text-right">
            Made with <Heart className="inline-block w-5 h-5 mx-1 text-white-500 fill-white-500" aria-hidden="true" /> by OSS Club
          </p>
        </div>
      </div>
    </footer>
  );
};
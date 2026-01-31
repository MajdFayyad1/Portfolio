import React, { useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { ArrowDown, Download, Mail } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleContactClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollDown = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left space-y-6 md:pr-8">
            <div className="fade-in visible">
              <p className="text-emerald-500 font-medium text-lg mb-2">Hello, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                Majd <span className="gradient-text">Fayyad</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-slate-400 font-light mb-6">
                Software Developer | Programmer
              </h2>
            </div>

            <p className="fade-in visible text-slate-300 text-lg max-w-xl mx-auto md:mx-0" style={{ animationDelay: '0.2s' }}>
              Motivated and detail-oriented Computer Science junior. Eager to apply technical knowledge
              in a real-world environment and contribute to collaborative software development projects.
            </p>

            <div className="fade-in visible flex flex-wrap gap-4 justify-center md:justify-start" style={{ animationDelay: '0.4s' }}>
              <Button
                size="lg"
                onClick={handleContactClick}
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-6 text-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/50"
              >
                <Mail className="mr-2" size={20} />
                Get In Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white font-semibold px-8 py-6 text-lg transition-all hover:scale-105"
              >
                <Download className="mr-2" size={20} />
                Download CV
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="scale-in visible relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-2xl blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative aspect-square w-72 md:w-96 rounded-2xl overflow-hidden border-4 border-emerald-500/50 shadow-2xl shadow-emerald-500/20 transition-transform hover:scale-105 hover:rotate-2 duration-500 mx-auto">
                <img
                  src="https://customer-assets.emergentagent.com/job_8b5c0440-b52b-451b-9d1d-741b35537510/artifacts/82ifdwf8_WhatsApp%20Image%202026-01-24%20at%2019.52.22.jpeg"
                  alt="Majd Fayyad"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <button
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:text-emerald-500 transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;

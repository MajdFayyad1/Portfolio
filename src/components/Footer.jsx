import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:majd_fayyad@icloud.com', label: 'Email' },
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-12 pb-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-white">Majd</span>
              <span className="text-emerald-500"> Fayyad</span>
            </h3>
            <p className="text-slate-400 mb-4">
              Software Developer passionate about creating innovative solutions and building impactful applications.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    aria-label={link.label}
                    className="p-3 bg-slate-900 rounded-lg text-slate-400 hover:text-emerald-500 hover:bg-slate-800 transition-all hover:scale-110"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-emerald-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Contact</h4>
            <ul className="space-y-2 text-slate-400">
              <li>Hasbaya, El-Janoub, Lebanon</li>
              <li>
                <a href="tel:+96176498957" className="hover:text-emerald-500 transition-colors">
                  +961 76 498 957
                </a>
              </li>
              <li>
                <a href="mailto:majd_fayyad@icloud.com" className="hover:text-emerald-500 transition-colors">
                  majd_fayyad@icloud.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-slate-400 text-sm">
            © {currentYear} Majd Fayyad. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm flex items-center">
            Made with <Heart className="mx-2 text-emerald-500" size={16} fill="currentColor" /> by Majd Fayyad
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

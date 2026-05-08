import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-20">
      <div className="container mx-auto py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Shreepad logo" className="h-12 w-16" />
            <div>
              <div className="font-bold">Shreepad</div>
              <div className="text-xs text-white/60 uppercase tracking-widest">Communication</div>
            </div>
          </div>
          <p className="text-sm text-white/70 leading-relaxed">
            Empowering Connectivity. Securing Your World.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg">
            <span className="text-xs font-semibold text-accent">ISO Certified</span>
            <span className="text-sm font-bold">9001:2015</span>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-accent">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/" className="hover:text-accent transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-accent transition">About Us</Link></li>
            <li><Link to="/services" className="hover:text-accent transition">Services</Link></li>
            <li><Link to="/plans" className="hover:text-accent transition">Broadband Plans</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-accent">Get in Touch</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /> 82370 00031</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /> 91460 64270</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /> info@shreepadcommunication.com</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 text-accent mt-1" /> Shreepad Communication - PCMC & Pune, Maharashtra</li>
          </ul>
        </div>

      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Shreepad Communication Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

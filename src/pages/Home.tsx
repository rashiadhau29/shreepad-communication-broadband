import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Wifi, Shield, Zap, Headphones, CheckCircle2, Users, Award, Cable, Star, Building2, Camera, Lock, Wrench } from "lucide-react";
import heroImg from "@/assets/hero-network.jpg";
import { homePlans } from "@/data/plans";
import constroExpo from "@/assets/constro-expo.png.jpeg";
import sakshiTool from "@/assets/sakshi-tool.png.jpeg";
import dyPatil from "@/assets/dy-patil.png.jpeg";
import orchidsSchool from "@/assets/orchids-international-school.png.jpeg";
import antonWaste from "@/assets/anton-waste.png";
import kisan from "@/assets/kisan.png.jpeg";

const features = [
  { icon: Wifi, title: "Fiber to Home", desc: "Pure fiber optic technology delivering unmatched speeds straight to your door." },
  { icon: Headphones, title: "24/7 Support", desc: "Our dedicated support engineers are available round the clock." },
  { icon: Shield, title: "Secure Network", desc: "Enterprise-grade network security with continuous monitoring." },
  { icon: Zap, title: "Affordable Plans", desc: "Premium connectivity at prices that fit every household & business." },
];

const why = [
  "High-speed reliable internet",
  "Truly unlimited data plans",
  "Fast same-day installation",
  "Strong technical support team",
  "Service across Maharashtra",
  "Own fiber infrastructure",
];

const testimonials = [
  { name: "Rohan Patil", role: "Home User, Pimpri", text: "Switched from another ISP and the difference is night & day. Stable speeds and quick support.", rating: 4.5 },
  { name: "Priya Sharma", role: "Business Owner, Pune", text: "Their leased line keeps our office running flawlessly. Zero downtime in over a year.", rating: 4 },
  { name: "Amit Deshmukh", role: "Society Secretary", text: "Installed CCTV and broadband for our entire society. Professional, on-time and reliable.", rating: 3.5 },
];

const clientLogos = [
  { src: constroExpo, alt: "Constro Expo" },
  { src: sakshiTool, alt: "Sakshi Tool" },
  { src: dyPatil, alt: "D Y Patil" },
  { src: orchidsSchool, alt: "Orchids International School" },
  { src: antonWaste, alt: "Anton Waste" },
  { src: kisan, alt: "Kisan" },
];

const Home = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
        <img src={heroImg} alt="Fiber optic network" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-transparent" />
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary-glow/20 blur-3xl animate-pulse-glow" />

        <div className="container mx-auto relative z-10 pt-24 pb-16">
          <div className="flex justify-center sm:justify-end mb-6 mt-8 text-white max-w-full">
            <span className="inline-flex max-w-full items-center gap-2 px-3 py-1.5 sm:px-4 rounded-full bg-white/10 border border-white/20 backdrop-blur text-[10px] sm:text-xs font-medium uppercase tracking-wider sm:tracking-widest text-center">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              Maharashtra's trusted ISP
            </span>
          </div>
          <div className="max-w-3xl text-white animate-fade-up min-w-0">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 break-words">
              Reliable Internet & <span className="text-gradient">Security Solutions</span> for Every Need
            </h1>
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/20 backdrop-blur-sm text-xs sm:text-sm font-medium uppercase tracking-wide sm:tracking-widest text-white shadow-lg shadow-white/10">
                ISO Certified 9001:2015
              </span>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 max-w-2xl break-words">
              High-Speed Broadband, Leased Lines & CCTV Services — built on our own fiber infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Button asChild variant="hero" size="xl" className="w-full sm:w-auto">
                <Link to="/contact">Get Connection <ArrowRight className="ml-1" /></Link>
              </Button>
              <Button asChild variant="outlineHero" size="xl" className="w-full sm:w-auto">
                <Link to="/plans">View Plans</Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 mt-14 max-w-xl">
              {[
                { n: "15+", l: "Years Experience" },
                { n: "1500+", l: "Active Customers" },
                { n: "99.9%", l: "Uptime" },
              ].map((s) => (
                <div key={s.l} className="min-w-0 text-center sm:text-left">
                  <div className="text-3xl md:text-4xl font-bold text-accent">{s.n}</div>
                  <div className="text-xs md:text-sm text-white/70 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 bg-background">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">About Us</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6">A decade of trusted connectivity in Maharashtra</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Shreepad Communication Pvt. Ltd. is a trusted provider of high-speed internet and CCTV surveillance solutions for residential and commercial users across Maharashtra.
            </p>
            <div className="space-y-3">
              {["15+ years of industry experience", "1500+ active happy customers", "Own end-to-end fiber infrastructure"].map((p) => (
                <div key={p} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{p}</span>
                </div>
              ))}
            </div>
            <Button asChild variant="hero" size="lg" className="mt-8">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 min-w-0">
            {[
              { icon: Award, n: "15+", l: "Years" },
              { icon: Users, n: "1500+", l: "Customers" },
              { icon: Cable, n: "Own", l: "Fiber Network" },
              { icon: Building2, n: "Shreepad Communication", l: "PCMC & Pune Coverage" },
            ].map((s, i) => (
              <Card key={s.l} className="p-6 bg-gradient-card shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all min-w-0" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                  <s.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold break-words leading-tight">{s.n}</div>
                <div className="text-sm text-muted-foreground">{s.l}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">Our Services</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3">Connectivity & Security, end to end</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Wifi, title: "Home Broadband", desc: "Unlimited fiber plans 50–200 Mbps for streaming, gaming and work-from-home." },
              { icon: Building2, title: "Business Internet", desc: "ILL leased lines up to 1 Gbps and corporate broadband 50–300 Mbps." },
              { icon: Camera, title: "CCTV Installation", desc: "Professional installation of indoor & outdoor surveillance systems." },
              { icon: Lock, title: "Access Control", desc: "Biometric, card and remote-monitored access systems for your premises." },
            ].map((s) => (
              <Card key={s.title} className="p-7 bg-card hover:shadow-elegant hover:-translate-y-1 transition-all border-t-4 border-t-primary">
                <div className="h-14 w-14 rounded-2xl bg-gradient-tech flex items-center justify-center mb-5">
                  <s.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link to="/services">Explore All Services <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section className="py-20 bg-background">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">Broadband Plans</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3">Truly unlimited home internet</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {homePlans.map((p) => (
              <Card key={p.speed} className={`p-7 relative overflow-hidden hover:-translate-y-2 transition-all ${p.popular ? "shadow-elegant border-2 border-primary" : "shadow-card"}`}>
                {p.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-accent text-accent-foreground text-xs font-bold px-4 py-1 rounded-bl-xl uppercase tracking-wider">Popular</div>
                )}
                <div className="text-sm text-muted-foreground uppercase tracking-widest">{p.type}</div>
                <div className="text-4xl font-bold text-gradient mt-2">{p.speed}</div>
                                <ul className="space-y-2 mb-6">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />{f}
                    </li>
                  ))}
                </ul>
                <Button asChild variant={p.popular ? "hero" : "outline"} className="w-full">
                  <Link to="/contact">Choose Plan</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 h-80 w-80 rounded-full bg-primary-glow/40 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent/30 blur-3xl" />
        </div>
        <div className="container mx-auto relative">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">Why Choose Us</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3">Built on trust. Powered by fiber.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {why.map((w) => (
              <div key={w} className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:bg-white/10 transition">
                <div className="h-10 w-10 rounded-full bg-gradient-accent flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-accent-foreground" />
                </div>
                <span className="font-medium">{w}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-background">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">Highlights</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3">Engineered for performance</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="text-center p-6 rounded-3xl bg-gradient-card shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all">
                <div className="h-16 w-16 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-5 animate-float">
                  <f.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUABLE CLIENTS */}
      <section className="py-20 bg-muted/40 overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">Our Valuable Clients</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3">Trusted by leading organizations</h2>
          </div>

          <div className="relative">
            <div className="flex w-max animate-client-scroll gap-6 py-2">
              {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map((logo, index) => (
                <Card
                  key={`${logo.src}-${index}`}
                  className="h-28 w-48 sm:h-32 sm:w-56 bg-white border border-border/60 shadow-card rounded-2xl px-5 py-4 flex items-center justify-center"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-28 w-48 sm:h-32 sm:w-56 object-contain object-center"
                    loading="lazy"
                  />
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">Testimonials</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3">Trusted by 1500+ customers</h2>
            <p className="text-muted-foreground mt-4">Trusted by 1500+ Home & Business Customers by Shreepad Communication in PCMC & Pune Area</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <Card key={t.name} className="p-7 bg-gradient-card shadow-card hover:shadow-elegant transition-all">
                <div className="flex gap-1 mb-4 text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < Math.floor(t.rating) ? 'fill-current' : i < t.rating ? 'fill-current opacity-50' : ''}`} 
                    />
                  ))}
                </div>
                <p className="text-foreground/80 italic leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto">
          <div className="rounded-3xl bg-gradient-hero p-10 md:p-16 text-center text-white shadow-elegant relative overflow-hidden">
            <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-primary-glow/30 blur-3xl" />
            <div className="relative">
              <Wrench className="h-12 w-12 mx-auto mb-4 text-accent" />
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready for blazing-fast internet?</h2>
              <p className="text-white/80 mb-8 max-w-xl mx-auto">Get your new connection installed within 24 hours. Speak to our team today.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild variant="accent" size="xl"><Link to="/contact">Get Connection</Link></Button>
                <Button asChild variant="outlineHero" size="xl"><a href="tel:8237000031">Call 82370 00031</a></Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
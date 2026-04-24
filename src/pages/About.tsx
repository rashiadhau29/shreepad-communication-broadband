import PageHeader from "@/components/PageHeader";
import { Card } from "@/components/ui/card";
import { Award, Users, Cable, Building2, Target, Eye, Heart } from "lucide-react";

const About = () => (
  <>
    <PageHeader title="About Shreepad Communication" subtitle="A decade of delivering trusted internet & security solutions across Maharashtra." />
    <section className="py-20 container mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Who we are</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">Connecting homes & businesses since over a decade</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Shreepad Communication Pvt. Ltd. is a trusted provider of high-speed internet and CCTV surveillance solutions for residential and commercial users across Maharashtra.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            With our own end-to-end fiber infrastructure, expert in-house engineers and 24/7 customer support, we ensure that every customer enjoys reliable connectivity and complete peace of mind.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5">
          {[
            { icon: Award, n: "10+", l: "Years Experience" },
            { icon: Users, n: "600+", l: "Active Customers" },
            { icon: Cable, n: "100%", l: "Own Fiber Network" },
            { icon: Building2, n: "PCMC", l: "& Pune Coverage" },
          ].map((s) => (
            <Card key={s.l} className="p-6 bg-gradient-card shadow-card hover:shadow-elegant transition-all">
              <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                <s.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="text-3xl font-bold">{s.n}</div>
              <div className="text-sm text-muted-foreground">{s.l}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-muted/40">
      <div className="container mx-auto grid md:grid-cols-3 gap-6">
        {[
          { icon: Target, title: "Our Mission", text: "Empower every home and business in Maharashtra with reliable, high-speed connectivity at honest prices." },
          { icon: Eye, title: "Our Vision", text: "To be the most loved regional ISP, known for fiber-grade speeds and best-in-class customer service." },
          { icon: Heart, title: "Our Values", text: "Reliability, transparency and customer-first thinking guide every connection we deliver." },
        ].map((b) => (
          <Card key={b.title} className="p-8 bg-card shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all">
            <div className="h-14 w-14 rounded-2xl bg-gradient-tech flex items-center justify-center mb-5">
              <b.icon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">{b.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{b.text}</p>
          </Card>
        ))}
      </div>
    </section>
  </>
);
export default About;

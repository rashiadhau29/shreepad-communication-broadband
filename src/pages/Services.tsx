import PageHeader from "@/components/PageHeader";
import { Card } from "@/components/ui/card";
import { Wifi, Building2, Camera, Lock, Eye, Wrench, Cable, Server, CheckCircle2 } from "lucide-react";

const groups = [
  {
    title: "Internet Services",
    items: [
      { icon: Wifi, title: "Home Broadband", desc: "Unlimited fiber plans 50, 100, 150 & 200 Mbps." },
      { icon: Server, title: "ILL Leased Line", desc: "Dedicated 1:1 bandwidth up to 1 Gbps with SLA." },
      { icon: Building2, title: "Corporate Broadband", desc: "Reliable 50–300 Mbps connections for offices." },
      { icon: Cable, title: "Fiber to the Home", desc: "End-to-end fiber for unmatched speed & stability." },
    ],
  },
  {
    title: "CCTV & Security",
    items: [
      { icon: Camera, title: "CCTV Installation", desc: "Indoor & outdoor IP / HD camera systems." },
      { icon: Eye, title: "Remote Monitoring", desc: "View your premises from anywhere on mobile." },
      { icon: Lock, title: "Access Control", desc: "Biometric, RFID and smart access systems." },
      { icon: Wrench, title: "AMC Support", desc: "Annual maintenance contracts for total peace of mind." },
    ],
  },
];

const Services = () => (
  <>
    <PageHeader title="Our Services" subtitle="A complete portfolio of internet and security solutions, tailored for homes and businesses." />
    {groups.map((g, gi) => (
      <section key={g.title} className={`py-20 ${gi % 2 ? "bg-muted/40" : "bg-background"}`}>
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">{g.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {g.items.map((s) => (
              <Card key={s.title} className="p-7 bg-gradient-card shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all border-t-4 border-t-primary">
                <div className="h-14 w-14 rounded-2xl bg-gradient-tech flex items-center justify-center mb-5">
                  <s.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="flex items-center gap-2 text-xs text-primary font-semibold mt-4">
                  <CheckCircle2 className="h-4 w-4" /> Included with our plans
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    ))}
  </>
);
export default Services;

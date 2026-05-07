import { Link } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { homePlans, businessPlans } from "@/data/plans";

const Plans = () => (
  <>
    <PageHeader title="Broadband Plans" subtitle="Truly unlimited fiber plans for every home and business need." />

    <section className="py-20 container mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Home Broadband</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {homePlans.map((p) => (
          <Card key={p.speed} className={`p-7 relative overflow-hidden hover:-translate-y-2 transition-all ${p.popular ? "shadow-elegant border-2 border-primary" : "shadow-card"}`}>
            {p.popular && <div className="absolute top-0 right-0 bg-gradient-accent text-accent-foreground text-xs font-bold px-4 py-1 rounded-bl-xl uppercase tracking-wider">Popular</div>}
            <div className="text-sm text-muted-foreground uppercase tracking-widest">{p.type}</div>
            <div className="text-4xl font-bold text-gradient mt-2">{p.speed}</div>
                        <ul className="space-y-2 mb-6">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />{f}</li>
              ))}
            </ul>
            <Button asChild variant={p.popular ? "hero" : "outline"} className="w-full"><Link to="/contact">Choose Plan</Link></Button>
          </Card>
        ))}
      </div>
    </section>

    <section className="py-20 bg-muted/40">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Business Internet</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {businessPlans.map((p) => (
            <Card key={p.period} className="p-8 bg-gradient-card shadow-card hover:shadow-elegant transition-all border-t-4 border-t-primary">
              <div className="text-sm text-muted-foreground uppercase tracking-widest">{p.type}</div>
              <div className="text-3xl md:text-4xl font-bold text-gradient mt-2">{p.speed}</div>
              <div className="text-sm font-semibold text-primary mt-1">{p.period}</div>
              <ul className="space-y-2 my-6">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />{f}</li>
                ))}
              </ul>
              <Button asChild variant="hero" className="w-full"><Link to="/contact">Get Quote</Link></Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  </>
);
export default Plans;

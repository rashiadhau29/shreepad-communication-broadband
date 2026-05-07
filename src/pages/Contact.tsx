// import { useState } from "react";
// import { z } from "zod";
// import PageHeader from "@/components/PageHeader";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import { toast } from "@/hooks/use-toast";
// import { Phone, Mail, MapPin, Clock } from "lucide-react";
// import emailjs from "@emailjs/browser";


// const schema = z.object({
//   name: z.string().trim().min(2, "Name is too short").max(100),
//   phone: z.string().trim().regex(/^[0-9+\-\s]{7,15}$/, "Enter a valid phone number"),
//   message: z.string().trim().min(5, "Message is too short").max(1000),
// });

// const Contact = () => {
//   const [form, setForm] = useState({ name: "", phone: "", message: "" });
//   const [errors, setErrors] = useState<Record<string, string>>({});

//   const submit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const res = schema.safeParse(form);
//     if (!res.success) {
//       const fieldErrors: Record<string, string> = {};
//       res.error.issues.forEach((i) => { fieldErrors[i.path[0] as string] = i.message; });
//       setErrors(fieldErrors);
//       return;
//     }
//     setErrors({});
//     toast({ title: "Message sent!", description: "Our team will contact you shortly." });
//     setForm({ name: "", phone: "", message: "" });
//   };

//   return (
//     <>
//       <PageHeader title="Get in Touch" subtitle="Talk to us about a new connection, business plan or CCTV installation." />
//       <section className="py-20 container mx-auto grid lg:grid-cols-2 gap-10">
//         <div className="space-y-5">
//           {[
//             { icon: Phone, title: "Call Us", lines: ["82370 00031", "91460 64270"] },
//             { icon: Mail, title: "Email", lines: ["info@shreepadcommunication.com"] },
//             { icon: MapPin, title: "Service Area", lines: ["Shreepad Communication - PCMC & Pune, Maharashtra"] },
//             { icon: Clock, title: "Support Hours", lines: ["24 / 7 customer support"] },
//           ].map((c) => (
//             <Card key={c.title} className="p-6 flex items-start gap-5 bg-gradient-card shadow-card hover:shadow-elegant transition-all">
//               <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
//                 <c.icon className="h-6 w-6 text-primary-foreground" />
//               </div>
//               <div>
//                 <h3 className="font-bold mb-1">{c.title}</h3>
//                 {c.lines.map((l) => <div key={l} className="text-sm text-muted-foreground">{l}</div>)}
//               </div>
//             </Card>
//           ))}
//         </div>

//         <Card className="p-8 shadow-elegant bg-card">
//           <h2 className="text-2xl font-bold mb-2">Send us a message</h2>
//           <p className="text-sm text-muted-foreground mb-6">Fill out the form and we'll respond within a few hours.</p>
//           <form onSubmit={submit} className="space-y-5">
//             <div>
//               <Label htmlFor="name">Name</Label>
//               <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name" maxLength={100} />
//               {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
//             </div>
//             <div>
//               <Label htmlFor="phone">Phone</Label>
//               <Input id="phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Your phone number" maxLength={15} />
//               {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
//             </div>
//             <div>
//               <Label htmlFor="message">Message</Label>
//               <Textarea id="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="How can we help you?" rows={5} maxLength={1000} />
//               {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
//             </div>
//             <Button type="submit" variant="hero" size="lg" className="w-full">Send Message</Button>
//           </form>
//         </Card>
//       </section>
//     </>
//   );
// };

// export default Contact; 



import { useState } from "react";
import { z } from "zod";
import PageHeader from "@/components/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import emailjs from "@emailjs/browser";

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(100),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s]{7,15}$/, "Enter a valid phone number"),
  message: z.string().trim().min(5, "Message is too short").max(1000),
});

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = schema.safeParse(form);

    if (!res.success) {
      const fieldErrors: Record<string, string> = {};

      res.error.issues.forEach((i) => {
        fieldErrors[i.path[0] as string] = i.message;
      });

      setErrors(fieldErrors);
      return;
    }

    setErrors({});

    try {
  await emailjs.send(
  "service_cd1119c",
  "template_k9i4ubb",
  {
    name: form.name,
    phone: form.phone,
    message: form.message,
    email: "sujitkhojare24@gmail.com",
  },
  "3JMQFLMX48ya0o5wB"
);

      toast({
        title: "Message sent!",
        description: "Our team will contact you shortly.",
      });

      setForm({
        name: "",
        phone: "",
        message: "",
      });

    } catch (error) {
      toast({
        title: "Failed to send",
        description: "Please try again later.",
      });

      console.error(error);
    }
  };

  return (
    <>
      <PageHeader
        title="Get in Touch"
        subtitle="Talk to us about a new connection, business plan or CCTV installation."
      />

      <section className="py-20 container mx-auto grid lg:grid-cols-2 gap-10">

        <div className="space-y-5">
          {[
            {
              icon: Phone,
              title: "Call Us",
              lines: ["82370 00031", "91460 64270"],
            },
            {
              icon: Mail,
              title: "Email",
              lines: ["info@shreepadcommunication.com"],
            },
            {
              icon: MapPin,
              title: "Service Area",
              lines: ["Shreepad Communication - PCMC & Pune, Maharashtra"],
            },
            {
              icon: Clock,
              title: "Support Hours",
              lines: ["24 / 7 customer support"],
            },
          ].map((c) => (
            <Card
              key={c.title}
              className="p-6 flex items-start gap-5 bg-gradient-card shadow-card hover:shadow-elegant transition-all"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                <c.icon className="h-6 w-6 text-primary-foreground" />
              </div>

              <div>
                <h3 className="font-bold mb-1">{c.title}</h3>

                {c.lines.map((l) => (
                  <div
                    key={l}
                    className="text-sm text-muted-foreground"
                  >
                    {l}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 shadow-elegant bg-card">
          <h2 className="text-2xl font-bold mb-2">
            Send us a message
          </h2>

          <p className="text-sm text-muted-foreground mb-6">
            Fill out the form and we'll respond within a few hours.
          </p>

          <form onSubmit={submit} className="space-y-5">

            <div>
              <Label htmlFor="name">Name</Label>

              <Input
                id="name"
                value={form.name}
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value,
                  })
                }
                placeholder="Your full name"
                maxLength={100}
              />

              {errors.name && (
                <p className="text-xs text-destructive mt-1">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="phone">Phone</Label>

              <Input
                id="phone"
                value={form.phone}
                onChange={(e) =>
                  setForm({
                    ...form,
                    phone: e.target.value,
                  })
                }
                placeholder="Your phone number"
                maxLength={15}
              />

              {errors.phone && (
                <p className="text-xs text-destructive mt-1">
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="message">Message</Label>

              <Textarea
                id="message"
                value={form.message}
                onChange={(e) =>
                  setForm({
                    ...form,
                    message: e.target.value,
                  })
                }
                placeholder="How can we help you?"
                rows={5}
                maxLength={1000}
              />

              {errors.message && (
                <p className="text-xs text-destructive mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              variant="hero"
              size="lg"
              className="w-full"
            >
              Send Message
            </Button>

          </form>
        </Card>
      </section>
    </>
  );
};

export default Contact;



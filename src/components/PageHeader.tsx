import { ReactNode } from "react";

interface Props {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}
const PageHeader = ({ title, subtitle, children }: Props) => (
  <section className="relative pt-40 pb-16 bg-gradient-hero text-white overflow-hidden">
    <div className="absolute inset-0 opacity-30">
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-primary-glow/30 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
    </div>
    <div className="container mx-auto relative text-center animate-fade-up">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-1 break-words">{title}</h1>
      {subtitle && <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto px-1 break-words">{subtitle}</p>}
      {children}
    </div>
  </section>
);
export default PageHeader;

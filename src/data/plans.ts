export interface Plan {
  speed: string;
  type: "Home" | "Business";
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
}

export const homePlans: Plan[] = [
  { speed: "50 Mbps", type: "Home", price: "₹499", period: "/month", features: ["Truly Unlimited Data", "Free Installation", "Wi-Fi Router Included", "24/7 Support"] },
  { speed: "100 Mbps", type: "Home", price: "₹699", period: "/month", features: ["Truly Unlimited Data", "Free Installation", "Dual-Band Router", "Priority Support"], popular: true },
  { speed: "150 Mbps", type: "Home", price: "₹899", period: "/month", features: ["Truly Unlimited Data", "Free Installation", "OTT Bundle Available", "Priority Support"] },
  { speed: "200 Mbps", type: "Home", price: "₹1099", period: "/month", features: ["Truly Unlimited Data", "Free Installation", "Premium Router", "Dedicated Engineer"] },
];

export const businessPlans: Plan[] = [
  { speed: "Up to 1 Gbps", type: "Business", price: "Custom", period: "ILL Leased Line", features: ["1:1 Dedicated Bandwidth", "99.9% Uptime SLA", "Static IP Included", "24x7 NOC Support"] },
  { speed: "50–300 Mbps", type: "Business", price: "Custom", period: "Corporate Broadband", features: ["High-Speed Symmetric", "Multiple Static IPs", "Priority Restoration", "Dedicated Manager"] },
];

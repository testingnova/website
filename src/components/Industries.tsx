import { motion } from "motion/react";
import { HardHat, Landmark, Rocket, HeartPulse, ShoppingCart, GraduationCap, Plane, Cloud, Truck } from "lucide-react";

export function Industries() {
  const industriesList = [
    {
      title: "Civil & Construction",
      description: "QA for civil engineering, EPC, and construction-tech platforms — estimation, scheduling, and site-management tools.",
      icon: HardHat,
    },
    {
      title: "Banking & Financial Services",
      description: "Testing for BFSI platforms — payments, core banking, lending, and insurance systems handling sensitive transactions.",
      icon: Landmark,
    },
    {
      title: "Aerospace & Defense",
      description: "Rigorous, standards-driven testing for aerospace and defense software where reliability and precision are non-negotiable.",
      icon: Rocket,
    },
    {
      title: "Healthcare & Life Sciences",
      description: "Testing for health-tech, EHR/EMR, and life sciences platforms with a focus on data integrity and patient safety.",
      icon: HeartPulse,
    },
    {
      title: "E-commerce & Retail",
      description: "End-to-end validation of storefronts, checkout, and payment flows across devices and traffic conditions.",
      icon: ShoppingCart,
    },
    {
      title: "Education & EdTech",
      description: "QA for learning management systems, assessment platforms, and virtual classroom applications.",
      icon: GraduationCap,
    },
    {
      title: "Travel & Hospitality",
      description: "Testing for booking engines, reservation systems, and itinerary management across web and mobile.",
      icon: Plane,
    },
    {
      title: "SaaS & Enterprise Software",
      description: "Quality assurance for B2B platforms, internal tools, and multi-tenant enterprise applications.",
      icon: Cloud,
    },
    {
      title: "Logistics & Supply Chain",
      description: "Testing for tracking, fleet management, and fulfillment systems that keep goods moving reliably.",
      icon: Truck,
    },
  ];

  return (
    <section id="industries" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-semibold tracking-wider uppercase text-sm mb-3">Who We Serve</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
            Industries We Serve
          </h3>
          <p className="text-slate-600 text-lg">
            From civil engineering to aerospace, our QA team adapts to the compliance, risk, and quality standards of your industry.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industriesList.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="p-6 rounded-2xl bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center shrink-0 group-hover:bg-brand-600 transition-colors">
                  <Icon className="w-6 h-6 text-brand-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-1.5">{industry.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{industry.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

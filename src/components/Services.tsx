import { motion } from "motion/react";
import { Bug, Cpu, Zap, Smartphone, PenTool } from "lucide-react";

export function Services() {
  const servicesList = [
    {
      title: "Manual Testing",
      description: "Our team is experienced in identifying critical defects, validating functionality, and ensuring end-to-end application quality.",
      icon: Bug,
      features: [
        "Functional, Regression, Sanity & Smoke Testing",
        "Cross-browser & Cross-platform Validation",
        "Test Case Design & Detailed Defect Reporting",
        "Exploratory Testing for Real User Scenarios"
      ]
    },
    {
      title: "Automation Testing",
      description: "We build modern automation frameworks that are fast, stable, and scalable.",
      icon: Cpu,
      features: [
        "Playwright automation (primary skill)",
        "Selenium WebDriver",
        "POM & Hybrid frameworks",
        "API automation",
        "CI/CD pipeline integration"
      ]
    },
    {
      title: "Performance Testing",
      description: "We evaluate how your application performs under load to ensure optimal performance and stability.",
      icon: Zap,
      features: [
        "Load & stress testing",
        "Performance bottleneck analysis",
        "Scalability & reliability evaluation"
      ]
    },
    {
      title: "Mobile App Testing",
      description: "We test mobile apps across multiple devices and environments.",
      icon: Smartphone,
      features: [
        "Android/iOS testing",
        "UI/UX validation",
        "Real-device compatibility testing"
      ]
    },
    {
      title: "UI/UX Design",
      description: "Our team of designers creates engaging and user-friendly interfaces that deliver a seamless user experience.",
      icon: PenTool,
      features: [
        "Wireframing to prototyping",
        "Engaging and user-friendly interfaces",
        "Latest design tools and methodologies"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-semibold tracking-wider uppercase text-sm mb-3">🛠️ SERVICES PAGE</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
            Our Expertise
          </h3>
          <p className="text-slate-600 text-lg">
            We offer comprehensive quality assurance and testing services to ensure that your software is reliable and performs optimally.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all flex flex-col group"
              >
                <div className="w-14 h-14 rounded-xl bg-brand-50 flex items-center justify-center mb-6 group-hover:bg-brand-600 transition-colors shrink-0">
                  <Icon className="w-7 h-7 text-brand-600 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mt-auto">
                    {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="text-sm text-slate-600 flex items-start gap-2">
                           <span className="text-brand-500 mt-0.5">•</span>
                           <span>{feature}</span>
                        </li>
                    ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

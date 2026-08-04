import { motion } from "motion/react";
import { Check, Star } from "lucide-react";

export function Pricing() {
  const plans = [
    {
      name: "Manual Testing",
      description: "Thorough manual testing for small to mid-size applications",
      price: "₹18,000–20,000",
      unit: "/project",
      popular: false,
      features: [
        "Manual Testing (up to 20 test cases)",
        "Basic Functional Testing",
        "Test Case Documentation",
        "Bug Reports with Screenshots",
        "Email Support",
        "2 Rounds of Testing",
      ],
    },
    {
      name: "Automation Testing",
      description: "Automation framework setup for growing businesses",
      price: "₹50,000",
      unit: "/project",
      popular: true,
      features: [
        "Manual Testing (up to 100 test cases)",
        "Automation Testing Setup",
        "Performance Testing",
        "Cross-browser Testing",
        "Mobile App Testing",
        "Detailed Test Reports",
        "Priority Support",
        "3 Rounds of Testing",
      ],
    },
    {
      name: "Complete Project Testing",
      description: "End-to-end testing coverage for large, complex applications",
      price: "₹1,20,000",
      unit: "/project",
      popular: false,
      features: [
        "Comprehensive Manual Testing",
        "Full Automation Testing Suite",
        "Advanced Performance Testing",
        "Mobile & Web Testing",
        "UI/UX Review",
        "Dedicated QA Manager",
        "Priority Support",
        "Unlimited Testing Rounds",
      ],
    },
  ];

  const aLaCarte = [
    { name: "Test Automation Setup", price: "₹50,000", unit: "/one-time" },
    { name: "Performance Testing Only", price: "₹30,000", unit: "/per application" },
    { name: "Mobile App Testing", price: "₹35,000", unit: "/per app" },
    { name: "UI/UX Design Review", price: "₹20,000", unit: "/per application" },
  ];

  return (
    <section id="pricing" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-semibold tracking-wider uppercase text-sm mb-3">Pricing</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
            Transparent Pricing Plans
          </h3>
          <p className="text-slate-600 text-lg">
            Choose the perfect testing plan for your project. No hidden costs, just quality assurance.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.popular
                  ? "bg-slate-900 text-white shadow-2xl shadow-brand-900/20 lg:-translate-y-4 border border-slate-800"
                  : "bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-brand-500 to-accent-500 text-white text-xs font-semibold tracking-wide">
                  <Star className="w-3.5 h-3.5 fill-current" /> Most Popular
                </span>
              )}
              <h4 className={`text-xl font-bold font-display mb-1 ${plan.popular ? "text-white" : "text-slate-900"}`}>
                {plan.name}
              </h4>
              <p className={`text-sm mb-6 ${plan.popular ? "text-slate-300" : "text-slate-500"}`}>
                {plan.description}
              </p>
              <div className="mb-6">
                <span
                  className={`font-display font-bold ${plan.popular ? "text-white" : "text-slate-900"} ${
                    plan.price.length > 10 ? "text-3xl" : "text-4xl"
                  }`}
                >
                  {plan.price}
                </span>
                <span className={plan.popular ? "text-slate-400" : "text-slate-500"}> {plan.unit}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${plan.popular ? "text-accent-400" : "text-brand-600"}`} />
                    <span className={plan.popular ? "text-slate-200" : "text-slate-600"}>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`w-full py-3.5 rounded-lg text-center font-medium transition-colors ${
                  plan.popular
                    ? "bg-white text-slate-900 hover:bg-slate-100"
                    : "bg-slate-900 text-white hover:bg-brand-600"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-brand-50 rounded-2xl p-8 md:p-10"
        >
          <h4 className="text-xl font-display font-bold text-slate-900 mb-1">À La Carte Services</h4>
          <p className="text-slate-600 text-sm mb-8">Need a specific testing service? Choose individual components.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {aLaCarte.map((service) => (
              <div key={service.name} className="bg-white rounded-xl p-5 border border-slate-100">
                <h5 className="font-semibold text-slate-900 text-sm mb-2">{service.name}</h5>
                <div className="mb-3">
                  <span className="text-xl font-display font-bold text-slate-900">{service.price}</span>
                  <span className="text-slate-500 text-xs"> {service.unit}</span>
                </div>
                <a href="#contact" className="text-brand-600 hover:text-brand-900 font-medium text-sm transition-colors">
                  Get Quote →
                </a>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

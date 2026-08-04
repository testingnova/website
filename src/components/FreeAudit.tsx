import { motion } from "motion/react";
import { ShieldCheck, FileCheck, Clock, BadgeCheck, Sparkles } from "lucide-react";

export function FreeAudit() {
  const benefits = [
    {
      icon: ShieldCheck,
      title: "Bugs & Vulnerabilities",
      description: "Identify functional issues and potential security risks in your application.",
    },
    {
      icon: FileCheck,
      title: "Detailed Report",
      description: "A clear audit report with actionable, prioritized recommendations.",
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "Fast, reliable turnaround on your audit results.",
    },
    {
      icon: BadgeCheck,
      title: "No Obligations",
      description: "Completely free audit — no strings attached, ever.",
    },
  ];

  const analyzeItems = [
    "UI/UX Issues",
    "Security Vulnerabilities",
    "Performance Issues",
    "Functionality Bugs",
    "Browser Compatibility",
    "Mobile Responsiveness",
  ];

  const steps = [
    { n: "1", title: "Share Your Details", description: "Tell us about your application and testing needs" },
    { n: "2", title: "We Analyze", description: "Our QA team conducts a thorough audit of your application" },
    { n: "3", title: "Get Your Report", description: "Receive detailed findings and actionable recommendations" },
  ];

  return (
    <section id="free-audit" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/10 text-accent-500 font-medium text-sm mb-6">
            <Sparkles className="w-4 h-4" />
            100% Free, No Credit Card Required
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
            Get Your Free QA Audit
          </h2>
          <p className="text-slate-600 text-lg">
            Discover hidden issues in your application before they impact your users. Our QA team will review your software and share a detailed audit — at no cost.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-brand-600" />
                </div>
                <h4 className="text-base font-semibold text-slate-900 mb-2">{benefit.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-slate-900 to-brand-950 rounded-3xl p-8 md:p-14 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/4 opacity-30">
            <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-br from-brand-500 to-accent-400 blur-3xl mix-blend-screen" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                Ready for Your Free Audit?
              </h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Get started with a comprehensive QA audit of your application. Our team will analyze your software and share detailed recommendations to improve quality and security.
              </p>

              <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">What We'll Analyze</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {analyzeItems.map((item) => (
                  <span key={item} className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-slate-200 text-xs font-medium">
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gradient-to-r from-brand-500 to-accent-500 text-white font-medium hover:opacity-90 transition-opacity"
                >
                  Request Free Audit
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Simple 3-Step Process</p>
              {steps.map((step) => (
                <div key={step.n} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center shrink-0 font-display font-bold text-white">
                    {step.n}
                  </div>
                  <div>
                    <h5 className="text-white font-semibold mb-1">{step.title}</h5>
                    <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

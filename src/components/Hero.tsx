import { motion } from "motion/react";
import { CheckCircle2, ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 bg-brand-50" />
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-20">
        <div className="w-[800px] h-[800px] rounded-full bg-gradient-to-br from-brand-300 to-accent-300 blur-3xl mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-600 font-medium text-sm mb-6"
          >
            <span className="flex h-2 w-2 rounded-full bg-brand-600"></span>
            Software QA Services
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl lg:text-7xl font-display font-bold text-slate-900 tracking-tight mb-8"
          >
            Welcome to TestingNova <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-500">
              Your Trusted Software Testing Partner
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            TestingNova is powered by a skilled QA team with 7+ years of real industry experience. We specialize in Manual Testing, Automation, Performance Testing, API Testing, and Mobile App Testing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-lg bg-brand-600 text-white font-medium hover:bg-brand-900 transition-colors flex items-center justify-center gap-2 group"
            >
              Contact Us
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto px-8 py-4 rounded-lg bg-white text-slate-700 font-medium hover:bg-slate-50 transition-colors border border-slate-200 flex items-center justify-center"
            >
              View Our Services
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 pt-8 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-slate-500 font-medium content-center flex-wrap"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent-500" />
              <span>Quality First</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent-500" />
              <span>Transparency</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent-500" />
              <span>Timely Deliveries</span>
            </div>
             <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent-500" />
              <span>Customer Satisfaction</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

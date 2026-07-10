import { motion } from "motion/react";
import { Target, Lightbulb, ShieldCheck } from "lucide-react";

export function WhyUs() {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-950 opacity-50 transform skew-x-12 translate-x-32" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-accent-400 font-semibold tracking-wider uppercase text-sm mb-3">About Us</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold mb-6">
              About TestingNova
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              We are a globally trusted QA partner providing innovative and efficient testing solutions. Our expertise ensures high-quality deliveries, faster releases, and bug-free user experiences.
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 backdrop-blur-sm"
            >
                <div className="w-12 h-12 rounded-lg bg-brand-500/20 flex items-center justify-center mb-6">
                    <Target className="w-6 h-6 text-brand-400" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-white">Our Mission</h4>
                <p className="text-slate-300 leading-relaxed text-sm">
                    At Testing nova Software QA Services, our mission is to provide top-quality, reliable software testing solutions to businesses of all sizes that improve user experience and reduce production defects.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 backdrop-blur-sm"
            >
                <div className="w-12 h-12 rounded-lg bg-accent-500/20 flex items-center justify-center mb-6">
                    <Lightbulb className="w-6 h-6 text-accent-400" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-white">Our Vision</h4>
                <p className="text-slate-300 leading-relaxed text-sm">
                    To become a globally trusted QA partner providing innovative and efficient testing solutions. We aim to stay at the forefront of automation methodologies to support agile teams globally.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 backdrop-blur-sm"
            >
                <div className="w-12 h-12 rounded-lg bg-pink-500/20 flex items-center justify-center mb-6">
                    <ShieldCheck className="w-6 h-6 text-pink-400" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-white">Our Expertise</h4>
                <p className="text-slate-300 leading-relaxed text-sm">
                    TestingNova is powered by a skilled QA team with 7+ years of real industry experience. We specialize in Manual Testing, Automation (Playwright, Selenium), Performance Testing, API Testing, and Mobile App Testing.
                </p>
            </motion.div>
        </div>

        <div className="mt-16 pt-12 border-t border-slate-800 grid lg:grid-cols-2 gap-12 items-center">
            <div>
                <h3 className="text-2xl font-bold mb-4 font-display">End-to-End Software Testing Solutions</h3>
                <p className="text-slate-300 leading-relaxed text-sm mb-6">
                  Ensure your software's success with Testing nova Software QA Services's comprehensive testing services. Our meticulous approach guarantees that your application is free from bugs and glitches. We conduct various testing types, including functional, performance, and security testing, to ensure that your software meets all quality requirements before launch.
                </p>
                <a href="#services" className="text-brand-400 hover:text-brand-300 font-medium text-sm transition-colors flex items-center gap-1">
                    Discover our methods <span>→</span>
                </a>
            </div>
            <div>
                <h3 className="text-2xl font-bold mb-4 font-display">Streamlined Business Processes</h3>
                <p className="text-slate-300 leading-relaxed text-sm mb-6">
                 Transform your business operations with automation solutions from Testing nova Software QA Services. We analyze your processes and implement custom automation tools that increase efficiency and reduce manual effort. This not only saves time but also minimizes errors, allowing your team to focus on more strategic tasks.
                </p>
                <a href="#contact" className="text-brand-400 hover:text-brand-300 font-medium text-sm transition-colors flex items-center gap-1">
                    Contact our experts <span>→</span>
                </a>
            </div>
        </div>
      </div>
    </section>
  );
}

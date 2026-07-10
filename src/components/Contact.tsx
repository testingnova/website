import { motion } from "motion/react";
import { Mail, Phone, MessageCircle } from "lucide-react";

export function Contact() {
  const today = new Date().getDay();
  const currentDayIndex = today === 0 ? 6 : today - 1;
  const hoursOfOperation = [
    { day: "Mon", time: "09:00 am – 05:00 pm" },
    { day: "Tue", time: "09:00 am – 05:00 pm" },
    { day: "Wed", time: "09:00 am – 05:00 pm" },
    { day: "Thu", time: "09:00 am – 05:00 pm" },
    { day: "Fri", time: "09:00 am – 05:00 pm" },
    { day: "Sat", time: "Closed" },
    { day: "Sun", time: "Closed" },
  ];

  return (
    <section id="contact" className="py-24 bg-brand-50 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-brand-600 font-semibold tracking-wider uppercase text-sm mb-3">Contact Us</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">
              Send an Enquiry
            </h3>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              We love our customers, so feel free to reach out or visit during normal business hours to discuss your software quality requirements.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-lg">Email Us</h4>
                  <a href="mailto:info@testingnova.com" className="text-slate-600 hover:text-brand-600 transition-colors">info@testingnova.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-lg">Call Us</h4>
                  <a href="tel:+918805089851" className="text-slate-600 hover:text-brand-600 transition-colors">+91 8805089851</a>
                </div>
              </div>
               <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#25D366]/10 shadow-sm flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-lg">WhatsApp</h4>
                  <a href="https://wa.me/918805089851" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-[#25D366] transition-colors">Message us on WhatsApp</a>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                <h4 className="text-2xl font-light text-slate-800 mb-6">Hours</h4>
                <div className="space-y-3">
                  {hoursOfOperation.map((item, idx) => (
                    <div 
                      key={item.day} 
                      className={`flex gap-6 text-base ${idx === currentDayIndex ? 'font-bold text-slate-700' : 'font-light text-slate-500'}`}
                    >
                        <span className="w-10">{item.day}</span>
                        <span>{item.time}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-400 mt-8 leading-relaxed">
                    This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-xl shadow-brand-900/5 border border-slate-100"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Name*</label>
                <input type="text" id="name" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors outline-none" placeholder="Your Name" />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email*</label>
                <input type="email" id="email" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors outline-none" placeholder="you@company.com" />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">Company Name*</label>
                <input type="text" id="company" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors outline-none" placeholder="Your Company" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors outline-none resize-none" placeholder="Let us know how we can help..."></textarea>
              </div>
              <button type="submit" className="w-full py-4 px-6 rounded-lg bg-brand-600 hover:bg-brand-900 text-white font-medium transition-colors shadow-lg shadow-brand-500/25">
                Send
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

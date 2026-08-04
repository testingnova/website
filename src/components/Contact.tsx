import { useState, useMemo, type FormEvent } from "react";
import { motion } from "motion/react";
import { Mail, ShieldCheck } from "lucide-react";

function useCaptchaChallenge() {
  const [a, b] = useMemo(() => [1 + Math.floor(Math.random() * 8), 1 + Math.floor(Math.random() * 8)], []);
  return { a, b, answer: a + b };
}

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

  const captcha = useCaptchaChallenge();
  const [captchaInput, setCaptchaInput] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [error, setError] = useState("");

  const captchaSolved = captchaInput.trim() !== "" && Number(captchaInput) === captcha.answer;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (honeypot.trim() !== "") {
      return;
    }
    if (!captchaSolved) {
      setError("Please solve the verification question correctly.");
      return;
    }

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const company = (form.elements.namedItem("company") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const subject = encodeURIComponent(`Enquiry from ${name} (${company})`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\n${message}`);
    window.location.href = `mailto:info@testingnova.com?subject=${subject}&body=${body}`;
  };

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
                <p className="text-xs text-slate-400 mt-8 leading-relaxed flex items-start gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 shrink-0 mt-0.5 text-brand-500" />
                    This form is protected against automated spam submissions.
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
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Name*</label>
                <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors outline-none" placeholder="Your Name" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email*</label>
                <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors outline-none" placeholder="you@company.com" />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">Company Name*</label>
                <input type="text" id="company" name="company" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors outline-none" placeholder="Your Company" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea id="message" name="message" rows={5} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors outline-none resize-none" placeholder="Let us know how we can help..."></textarea>
              </div>

              {/* Honeypot field — hidden from real users, catches bots that auto-fill every input */}
              <div className="absolute -left-[9999px] opacity-0" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="captcha" className="block text-sm font-medium text-slate-700 mb-2">
                  Verify you're human: what is {captcha.a} + {captcha.b}?*
                </label>
                <input
                  type="text"
                  inputMode="numeric"
                  id="captcha"
                  name="captcha"
                  required
                  value={captchaInput}
                  onChange={(e) => setCaptchaInput(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors outline-none"
                  placeholder="Your answer"
                />
              </div>

              {error && <p className="text-sm text-red-600">{error}</p>}

              <button
                type="submit"
                disabled={!captchaSolved}
                className="w-full py-4 px-6 rounded-lg bg-brand-600 hover:bg-brand-900 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-medium transition-colors shadow-lg shadow-brand-500/25 disabled:shadow-none"
              >
                Send
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

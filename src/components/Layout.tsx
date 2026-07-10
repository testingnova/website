export function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-brand-600 flex items-center justify-center">
            <span className="text-white font-display font-bold text-lg leading-none">T</span>
          </div>
          <span className="font-display font-bold text-xl text-slate-900 tracking-tight">TestingNova</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">About</a>
          <a href="#services" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Services</a>
          <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Contact</a>
        </nav>

        <a 
          href="#contact" 
          className="hidden md:inline-flex px-5 py-2.5 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-brand-600 transition-colors"
        >
          Contact Us
        </a>
      </div>
    </header>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-950 px-6 py-12 text-slate-400">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
             <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded bg-brand-600 flex items-center justify-center">
                <span className="text-white font-display font-bold text-lg leading-none">T</span>
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight">TestingNova</span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed mb-6">
              We provide top-quality, reliable software testing solutions to businesses of all sizes that improve user experience and reduce production defects.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-brand-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-brand-400 transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-brand-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {currentYear} Testing nova Software QA Services - All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

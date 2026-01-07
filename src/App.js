import React, { useState, useEffect, useRef } from 'react';
import { 
  Wrench, 
  Tv, 
  CalendarCheck, 
  Package, 
  CheckCircle2, 
  Star, 
  Clock, 
  Smartphone, 
  ShieldCheck, 
  Navigation, 
  Mail, 
  Phone,
  Menu,
  X,
  ChevronRight,
  ClipboardList,
  Eye,
  Users,
  MapPin,
  Award,
  ArrowRight,
  Shield,
  Gem
} from 'lucide-react';

// Custom Hook for Scroll Animations
const useScrollReveal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    });
    if (domRef.current) observer.observe(domRef.current);
    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, []);

  return [domRef, isVisible];
};

const RevealSection = ({ children, className }) => {
  const [ref, isVisible] = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {children}
    </div>
  );
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: "Quick Repairs & Small Fixes",
      description: "Precise adjustments and repairs to maintain the integrity of your residence.",
      icon: <Wrench className="w-5 h-5" />
    },
    {
      title: "Art & Tech Installations",
      description: "Museum-grade mounting, smart home integration, and bespoke assembly.",
      icon: <Tv className="w-5 h-5" />
    },
    {
      title: "Concierge 'Reset' Visits",
      description: "A comprehensive maintenance sweep to restore your home to peak condition.",
      icon: <CalendarCheck className="w-5 h-5" />
    },
    {
      title: "Logistics & Errands",
      description: "High-priority pickups and returns handled with total discretion.",
      icon: <Package className="w-5 h-5" />
    },
    {
      title: "Executive Property Oversight",
      description: "Professional check-ins and security sweeps during your global travel.",
      icon: <Shield className="w-5 h-5" />
    },
    {
      title: "Vendor Proxy Services",
      description: "We manage high-level contractors so your professional focus remains unbroken.",
      icon: <Users className="w-5 h-5" />
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('success');
    setTimeout(() => setFormStatus(null), 5000);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-amber-200 selection:text-black">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled ? 'bg-black/95 backdrop-blur-xl py-4 border-b border-white/10' : 'bg-transparent py-8'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          <div className="flex flex-col group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <span className="text-2xl font-light tracking-[0.3em] uppercase leading-none group-hover:text-amber-400 transition-colors">
              Premium <span className="font-bold">Concierge</span>
            </span>
            <span className="text-[10px] font-bold tracking-[0.5em] text-amber-500 uppercase mt-1">DMV • Bethesda</span>
          </div>
          
          <div className="hidden lg:flex items-center space-x-12">
            {['About', 'Services', 'Bethesda Exclusive', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-xs font-bold uppercase tracking-[0.2em] hover:text-amber-400 transition-colors text-white/70">
                {item}
              </a>
            ))}
            <a href="#contact" className="bg-amber-500 hover:bg-amber-400 text-black px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl shadow-amber-500/20">
              Book Miloud
            </a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-amber-500">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-black z-[90] transition-transform duration-700 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden flex flex-col justify-center items-center space-y-8 p-12`}>
          {['About', 'Services', 'Bethesda Exclusive', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} onClick={() => setIsMenuOpen(false)} className="text-3xl font-light tracking-widest hover:text-amber-500 transition-colors">
              {item}
            </a>
          ))}
          <div className="pt-8 border-t border-white/10 w-full text-center">
             <p className="text-amber-500 font-bold mb-2">Miloud Afass</p>
             <p className="text-white/50">(1646) 271-1565</p>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute top-0 right-0 -z-10 w-full h-full">
           <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-amber-500/10 blur-[150px] rounded-full animate-pulse" />
           <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/5 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 relative z-10">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/70">Now Accepting New Clients in Bethesda</span>
            </div>

            <h1 className="text-6xl lg:text-8xl font-extralight tracking-tight leading-[1.1]">
              The Gold Standard of <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-500 to-amber-200">Home Care.</span>
            </h1>
            
            <p className="text-xl text-white/60 font-light leading-relaxed max-w-xl">
              A bespoke concierge service tailored for the DMV's most discerning professionals. From complex installations to meticulous property oversight—we handle the details, you handle the legacy.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <a href="#contact" className="group flex items-center justify-center space-x-3 px-10 py-5 bg-white text-black font-black uppercase tracking-widest rounded-full hover:bg-amber-400 transition-all shadow-2xl shadow-white/10">
                <span>Request Access</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </a>
              <a href="tel:16462711565" className="flex items-center justify-center space-x-3 px-10 py-5 border border-white/20 rounded-full font-bold tracking-widest uppercase hover:bg-white/5 transition-all">
                <Phone className="w-4 h-4 text-amber-500" />
                <span>Call Miloud</span>
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/5">
              {[
                { label: "Lead Time", val: "2hr Response" },
                { label: "Coverage", val: "Bonded & Insured" },
                { label: "Protocol", val: "Discreet" },
                { label: "Base", val: "Bethesda, MD" }
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-500 mb-1">{stat.label}</p>
                  <p className="text-sm font-light text-white/80">{stat.val}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="relative z-10 rounded-3xl overflow-hidden aspect-[4/5] border border-white/10 shadow-2xl bg-slate-900">
               <img 
                 src="Screenshot 2026-01-06 at 17.56.17.jpg" 
                 alt="Premium Concierge DMV Showcase" 
                 className="w-full h-full object-cover opacity-95"
                 onError={(e) => { 
                   e.target.src = 'Screenshot 2026-01-06 at 17.16.22.jpg'; 
                 }}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
               <div className="absolute bottom-8 left-8 right-8 p-8 bg-black/60 backdrop-blur-md rounded-2xl border border-white/10">
                 <p className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-2">Director's Note</p>
                 <p className="text-sm font-light italic leading-relaxed">
                   "We don't just fix homes; we curate environments where successful people can breathe."
                 </p>
                 <p className="text-xs font-bold mt-4 tracking-widest uppercase">— Miloud Afass</p>
               </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-12 -right-12 w-64 h-64 border border-amber-500/20 rounded-full animate-[spin_20s_linear_infinite]" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 bg-[#050505] overflow-hidden">
        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full pointer-events-none z-0 overflow-hidden">
          <img 
            src="Miloud-22.jpg" 
            alt="Miloud Afass Portfolio" 
            className="w-full h-full object-cover object-top opacity-70 grayscale-[0.1] brightness-[0.85] contrast-[1.1] transition-all duration-1000"
            onError={(e) => { 
              e.target.src = 'Miloud-7.jpg'; 
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#050505]/80 to-[#050505]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/20" />
          <div className="absolute inset-0 bg-amber-500/5 mix-blend-color" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <RevealSection className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <span className="text-amber-500 font-bold uppercase tracking-[0.4em] text-xs">Excellence in Motion</span>
              <h2 className="text-5xl font-light mt-6 mb-8 tracking-tight">One Dependable Partner. <br/><span className="italic font-serif text-white/40">Zero Compromises.</span></h2>
              <div className="space-y-6 text-lg text-white font-light leading-relaxed">
                <p>
                  In the corridors of Washington DC and the estates of Potomac, time is the ultimate luxury. Premium Concierge DMV was founded to protect that resource.
                </p>
                <p>
                  Under the direct leadership of <strong>Miloud Afass</strong>, we provide a unified solution for residential management. Whether it's a high-stakes event prep or a silent travel check-in, our protocol is rooted in punctuality and precision.
                </p>
                <div className="pt-8 flex items-center space-x-4">
                  <div className="w-12 h-[1px] bg-amber-500" />
                  <span className="text-sm font-bold uppercase tracking-[0.3em] text-amber-500">Based in Bethesda, MD</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6 pt-12">
                <div className="bg-black/70 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-amber-500/50 transition-all group shadow-2xl">
                  <Award className="text-amber-500 w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-xl font-bold mb-2">Artisan Focus</h4>
                  <p className="text-sm text-white/60">Details matter—from the torque of a screw to the level of a frame.</p>
                </div>
                <div className="bg-black/70 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-amber-500/50 transition-all group shadow-2xl">
                  <ShieldCheck className="text-amber-500 w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-xl font-bold mb-2">Discrete</h4>
                  <p className="text-sm text-white/60">Professional presence that respects your privacy and property.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-amber-500 p-8 rounded-3xl text-black shadow-2xl shadow-amber-500/30 group cursor-default">
                  <Clock className="w-8 h-8 mb-4 group-hover:rotate-12 transition-transform" />
                  <h4 className="text-xl font-black mb-2">Punctual</h4>
                  <p className="text-sm font-bold opacity-80">Arrival windows that are honored, not estimated.</p>
                </div>
                <div className="bg-black/70 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-amber-500/50 transition-all group shadow-2xl">
                  <MapPin className="text-amber-500 w-8 h-8 mb-4 group-hover:translate-y-[-4px] transition-transform" />
                  <h4 className="text-xl font-bold mb-2">Local Root</h4>
                  <p className="text-sm text-white/60">Native understanding of the DMV's unique architecture.</p>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none grayscale brightness-50">
           <img src="533fe8cb-d64a-455a-882f-c3085c2c83df.jpg" alt="" className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
             <h2 className="text-amber-500 font-bold uppercase tracking-[0.4em] text-xs mb-6">Bespoke Solutions</h2>
             <h3 className="text-5xl font-light tracking-tight">A Portfolio of Precision.</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10 backdrop-blur-sm">
            {services.map((service, idx) => (
              <div key={idx} className="bg-black/85 p-12 hover:bg-white/10 transition-all group relative">
                <div className="text-amber-500 mb-8 group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-light mb-4 group-hover:text-amber-200 transition-colors">{service.title}</h4>
                <p className="text-white/40 font-light leading-relaxed">{service.description}</p>
                <div className="absolute bottom-8 right-12 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="text-amber-500 w-5 h-5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bethesda Exclusive Section */}
      <section id="bethesda-exclusive" className="py-32 bg-[#050505] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <RevealSection className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 rounded-[60px] p-12 lg:p-24 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-12 opacity-10">
              <Gem size={120} className="text-amber-500" />
            </div>
            
            <div className="max-w-3xl">
              <span className="text-amber-500 font-bold uppercase tracking-[0.4em] text-xs">Platinum Tier Access</span>
              <h2 className="text-5xl lg:text-7xl font-light mt-8 mb-10 tracking-tighter leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-amber-200">
                Bethesda <br/>Exclusive Protocol.
              </h2>
              <p className="text-xl text-white/50 font-light leading-relaxed mb-12">
                For residents of Bethesda, Chevy Chase, and Potomac, we offer an elevated engagement protocol. This includes priority scheduling for immediate "Reset" visits and direct, encrypted communication windows with Miloud Afass.
              </p>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <h4 className="text-amber-500 font-bold uppercase tracking-widest text-sm flex items-center">
                    <CheckCircle2 className="w-4 h-4 mr-2" />
                    Hyper-Local Focus
                  </h4>
                  <p className="text-sm text-white/40 font-light">Rapid response times specifically tuned for Bethesda's premier neighborhoods.</p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-amber-500 font-bold uppercase tracking-widest text-sm flex items-center">
                    <CheckCircle2 className="w-4 h-4 mr-2" />
                    White-Glove Logistics
                  </h4>
                  <p className="text-sm text-white/40 font-light">Handling of complex estate errands and sensitive property deliveries.</p>
                </div>
              </div>

              <div className="mt-16">
                <a href="#contact" className="inline-flex items-center space-x-4 px-12 py-6 bg-amber-500 text-black font-black uppercase tracking-widest rounded-full hover:scale-105 transition-all shadow-2xl shadow-amber-500/20">
                  <span>Apply for Exclusive Access</span>
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="bg-white/5 rounded-[40px] overflow-hidden border border-white/10 shadow-3xl">
            <div className="grid lg:grid-cols-2">
              <div className="p-12 lg:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10">
                <h2 className="text-5xl font-light mb-8 tracking-tighter">Your home, <br/><span className="text-amber-500 font-bold italic">Handled.</span></h2>
                <p className="text-xl text-white/40 font-light mb-12">
                  Request a consultation or a specific maintenance window. Miloud will personally review your request.
                </p>

                <div className="space-y-10">
                  <div className="flex items-center space-x-6 group">
                    <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-amber-500 transition-all group-hover:text-black">
                      <Phone />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-1">Direct Line</p>
                      <a href="tel:16462711565" className="text-2xl font-light tracking-tight">(1646) 271-1565</a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6 group">
                    <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-amber-500 transition-all group-hover:text-black">
                      <MapPin />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-1">HQ Base</p>
                      <p className="text-2xl font-light">Bethesda, Maryland</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-12 lg:p-20 bg-white/[0.02]">
                {formStatus === 'success' ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                    <div className="w-24 h-24 bg-amber-500 rounded-full flex items-center justify-center text-black">
                      <CheckCircle2 size={48} />
                    </div>
                    <h4 className="text-3xl font-light">Request Submitted</h4>
                    <p className="text-white/50">Miloud will contact you within the hour.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-4">
                      <input required type="text" className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-amber-500 transition-colors text-xl font-light" placeholder="Full Name" />
                      <input required type="email" className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-amber-500 transition-colors text-xl font-light" placeholder="Email Address" />
                      <input required type="tel" className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-amber-500 transition-colors text-xl font-light" placeholder="Mobile Number" />
                      <select className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-amber-500 transition-colors text-xl font-light text-white/50">
                        <option className="bg-black">Location: Bethesda, MD</option>
                        <option className="bg-black">Location: Washington, DC</option>
                        <option className="bg-black">Location: Northern VA</option>
                        <option className="bg-black">Location: Other</option>
                      </select>
                      <textarea required rows="4" className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-amber-500 transition-colors text-xl font-light resize-none" placeholder="How can we assist you?"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-amber-500 hover:bg-amber-400 text-black py-6 rounded-2xl font-black uppercase tracking-[0.3em] transition-all hover:shadow-2xl hover:shadow-amber-500/20 active:scale-95">
                      Send Request
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0">
            <div className="flex flex-col items-center md:items-start">
               <span className="text-3xl font-light tracking-[0.3em] uppercase leading-none">Premium <span className="font-bold">Concierge</span></span>
               <p className="text-[10px] tracking-[0.5em] text-amber-500 uppercase mt-2 font-bold">Executive Residential Support</p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-2 italic underline underline-offset-8 decoration-amber-500/50">Director of Operations</p>
              <p className="text-2xl font-light tracking-tight">Miloud Afass</p>
              <p className="text-amber-500 font-bold">(1646) 271-1565</p>
            </div>
          </div>
          
          <div className="mt-20 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-white/30 font-bold tracking-[0.3em] uppercase space-y-4 md:space-y-0">
            <p>© {new Date().getFullYear()} Premium Concierge DMV, LLC. All Rights Reserved.</p>
            <div className="flex space-x-8">
               <span className="hover:text-amber-500 transition-colors cursor-pointer">Privacy</span>
               <span className="hover:text-amber-500 transition-colors cursor-pointer">Terms</span>
               <span className="text-amber-500">Licensed • Bonded • Insured</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

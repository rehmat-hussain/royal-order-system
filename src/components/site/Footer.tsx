import logo from "@/assets/logo-qila.png";

export function Footer() {
  return (
    <footer id="visit" className="bg-royal text-primary-foreground mt-24">
      <div className="container mx-auto px-4 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-12 w-12" />
            <div>
              <div className="font-display text-2xl text-gold">Lahore Shahi Qila</div>
              <div className="text-xs tracking-[0.3em] uppercase opacity-70">Since the heart of Lahore</div>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm opacity-80 leading-relaxed">
            Three generations of Mughlai mastery — from the charcoal pits of Old Lahore to your table. Slow-cooked, hand-ground, royally served.
          </p>
        </div>
        <div>
          <h4 className="text-gold font-display text-lg mb-4">Visit</h4>
          <p className="text-sm opacity-80 leading-relaxed">
            42 Food Street, Gawalmandi<br />
            Lahore, Pakistan
          </p>
          <p className="text-sm opacity-80 mt-3">+92 423 500 0000</p>
        </div>
        <div>
          <h4 className="text-gold font-display text-lg mb-4">Hours</h4>
          <p className="text-sm opacity-80">Daily — 12:00 PM to 1:00 AM</p>
          <p className="text-sm opacity-80 mt-3">Friday Brunch from 10 AM</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs opacity-60">
        © {new Date().getFullYear()} Lahore Shahi Qila Restaurant. All rights reserved.
      </div>
    </footer>
  );
}

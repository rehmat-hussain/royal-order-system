import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo-qila.png";

export function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="Lahore Shahi Qila" className="h-11 w-11 drop-shadow-[0_2px_8px_oklch(0.7_0.16_70/0.5)] group-hover:scale-105 transition-transform" />
          <div className="leading-tight">
            <div className="font-display text-lg md:text-xl text-primary font-semibold">Lahore Shahi Qila</div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Royal Pakistani Cuisine</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "text-primary" }} className="hover:text-primary transition-colors">Home</Link>
          <Link to="/menu" activeProps={{ className: "text-primary" }} className="hover:text-primary transition-colors">Menu</Link>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#visit" className="hover:text-primary transition-colors">Visit</a>
        </nav>
        <a href="tel:+924235000000" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-gradient text-gold-foreground text-sm font-semibold shadow-gold hover:scale-[1.03] transition-transform">
          Reserve a Table
        </a>
      </div>
    </header>
  );
}

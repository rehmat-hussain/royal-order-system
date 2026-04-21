import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-feast.jpg";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MenuCard } from "@/components/site/MenuCard";
import { menu } from "@/data/menu";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const featured = menu.filter((m) => m.badge === "Signature" || m.badge === "Chef's Pick").slice(0, 6);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Royal Pakistani feast" width={1920} height={1080} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        <div className="relative container mx-auto px-4 py-24 md:py-36 lg:py-44 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-card/60 backdrop-blur text-xs tracking-[0.25em] uppercase text-primary font-semibold">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Established in Old Lahore
          </div>
          <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] text-foreground">
            Taste the <span className="text-primary italic">royal</span> flavours of <span className="bg-gold-gradient bg-clip-text text-transparent">Lahore</span>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Hand-ground masalas. Charcoal-fired tandoors. Recipes guarded for three generations — served in copper handis and brass platters fit for kings.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link to="/menu" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold shadow-royal hover:shadow-gold hover:scale-[1.03] transition-all">
              Explore the Menu
              <span aria-hidden>→</span>
            </Link>
            <a href="#about" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-foreground/20 text-foreground font-medium hover:bg-foreground hover:text-background transition-colors">
              Our Story
            </a>
          </div>
          <div className="mt-14 grid grid-cols-3 gap-6 max-w-md">
            {[
              { k: "60+", v: "Years of legacy" },
              { k: "120+", v: "Royal recipes" },
              { k: "4.9★", v: "Guest rating" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-3xl text-primary">{s.k}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIGNATURE */}
      <section className="container mx-auto px-4 py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto">
          <div className="ornament-divider text-xs uppercase tracking-[0.4em] font-semibold">Signature Dishes</div>
          <h2 className="mt-6 font-display text-4xl md:text-5xl text-foreground">From the royal kitchen</h2>
          <p className="mt-4 text-muted-foreground">A handpicked selection of the dishes our guests return for, time and again.</p>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((item) => <MenuCard key={item.id} item={item} />)}
        </div>
        <div className="text-center mt-12">
          <Link to="/menu" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all">
            View the full menu <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-secondary/40 border-y border-border/60">
        <div className="container mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.4em] font-semibold text-primary">Our Story</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-foreground leading-tight">
              Forged in the alleys of <em className="text-primary not-italic">Old Lahore</em>.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              In 1962, a young cook from Gawalmandi opened a single charcoal grill on Food Street. Today, Lahore Shahi Qila stands as one of the city's most beloved institutions — a place where the recipes have not changed, the masalas are still hand-pounded, and every karahi still meets an open flame.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We don't chase trends. We protect a legacy.
            </p>
          </div>
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-royal">
            <img src={heroImg} alt="Inside the restaurant" width={800} height={1000} loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute bottom-6 left-6 right-6 bg-card/95 backdrop-blur rounded-xl p-5 border border-gold/30">
              <div className="text-xs uppercase tracking-widest text-primary font-semibold">Master Chef</div>
              <div className="font-display text-xl mt-1">Ustad Bashir Ahmed</div>
              <div className="text-sm text-muted-foreground">Third-generation custodian of the family recipes</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

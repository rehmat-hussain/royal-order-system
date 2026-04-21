import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MenuCard } from "@/components/site/MenuCard";
import { categories, menu, type Category } from "@/data/menu";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Lahore Shahi Qila Restaurant" },
      { name: "description", content: "Browse our full menu: Starters, BBQ, Soups, Tandoor, and royal Mughlai Main Courses from Lahore Shahi Qila." },
      { property: "og:title", content: "Menu — Lahore Shahi Qila" },
      { property: "og:description", content: "Authentic Pakistani BBQ, biryani, karahi, tandoor and starters." },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [active, setActive] = useState<Category | "All">("All");
  const filtered = active === "All" ? menu : menu.filter((m) => m.category === active);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="relative bg-royal text-primary-foreground py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "radial-gradient(circle at 30% 20%, oklch(0.78 0.14 75) 0px, transparent 40%), radial-gradient(circle at 80% 80%, oklch(0.55 0.22 35) 0px, transparent 40%)",
        }} />
        <div className="relative container mx-auto px-4 text-center">
          <div className="text-xs uppercase tracking-[0.4em] text-gold font-semibold">Our Menu</div>
          <h1 className="mt-4 font-display text-5xl md:text-7xl">A royal feast awaits</h1>
          <p className="mt-5 max-w-xl mx-auto opacity-80">From smoky kebabs to slow-cooked nihari — every dish is prepared the way it has been for over sixty years.</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-center gap-2 sticky top-[68px] z-30 bg-background/85 backdrop-blur-md py-4 -mx-4 px-4 border-b border-border/60">
          {(["All", ...categories] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                active === cat
                  ? "bg-primary text-primary-foreground shadow-royal"
                  : "bg-card text-foreground hover:bg-secondary border border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => <MenuCard key={item.id} item={item} />)}
        </div>
      </section>

      <Footer />
    </div>
  );
}

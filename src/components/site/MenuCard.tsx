import type { MenuItem } from "@/data/menu";

const badgeStyles: Record<NonNullable<MenuItem["badge"]>, string> = {
  Signature: "bg-gold-gradient text-gold-foreground",
  Spicy: "bg-ember text-primary-foreground",
  New: "bg-primary text-primary-foreground",
  "Chef's Pick": "bg-foreground text-background",
};

export function MenuCard({ item }: { item: MenuItem }) {
  return (
    <article className="group relative overflow-hidden rounded-xl bg-card shadow-card border border-border/60 hover:shadow-royal hover:-translate-y-1 transition-all duration-300">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          width={800}
          height={600}
          className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {item.badge && (
          <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase ${badgeStyles[item.badge]} shadow-md`}>
            {item.badge}
          </span>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl text-foreground leading-tight">{item.name}</h3>
          <span className="font-display text-lg text-primary whitespace-nowrap">Rs {item.price.toLocaleString()}</span>
        </div>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
      </div>
    </article>
  );
}

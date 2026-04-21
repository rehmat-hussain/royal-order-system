import seekh from "@/assets/dish-seekh.jpg";
import karahi from "@/assets/dish-karahi.jpg";
import biryani from "@/assets/dish-biryani.jpg";
import naan from "@/assets/dish-naan.jpg";
import malai from "@/assets/dish-malai.jpg";
import soup from "@/assets/dish-soup.jpg";
import pakora from "@/assets/dish-pakora.jpg";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: Category;
  badge?: "Signature" | "Spicy" | "New" | "Chef's Pick";
};

export type Category = "Starters" | "BBQ" | "Soups" | "Tandoor" | "Main Course";

export const categories: Category[] = ["Starters", "BBQ", "Soups", "Tandoor", "Main Course"];

export const menu: MenuItem[] = [
  // Starters
  { id: "s1", name: "Chicken Pakora", description: "Crispy spiced chicken fritters with mint chutney.", price: 650, image: pakora, category: "Starters" },
  { id: "s2", name: "Vegetable Samosa", description: "Golden pastry filled with spiced potatoes and peas.", price: 350, image: pakora, category: "Starters" },
  { id: "s3", name: "Dahi Bhalla", description: "Lentil dumplings in chilled yoghurt with tamarind drizzle.", price: 550, image: pakora, category: "Starters" },

  // BBQ
  { id: "b1", name: "Chicken Seekh Kebab", description: "Hand-minced chicken on skewers, charcoal grilled.", price: 950, image: seekh, category: "BBQ", badge: "Signature" },
  { id: "b2", name: "Beef Bihari Boti", description: "Tender beef marinated overnight in a secret spice blend.", price: 1250, image: seekh, category: "BBQ", badge: "Spicy" },
  { id: "b3", name: "Mutton Chapli Kebab", description: "Peshawari-style minced mutton patties with pomegranate.", price: 1150, image: seekh, category: "BBQ" },

  // Soups
  { id: "so1", name: "Hot & Sour Chicken", description: "Classic chicken broth with corn and a tangy kick.", price: 480, image: soup, category: "Soups" },
  { id: "so2", name: "Yakhni Shorba", description: "Slow-simmered mutton bone broth with whole spices.", price: 650, image: soup, category: "Soups", badge: "Chef's Pick" },

  // Tandoor
  { id: "t1", name: "Chicken Malai Boti", description: "Creamy yoghurt-marinated chicken from the tandoor.", price: 1050, image: malai, category: "Tandoor", badge: "Chef's Pick" },
  { id: "t2", name: "Tandoori Naan", description: "Fluffy bread baked in clay oven, brushed with butter.", price: 120, image: naan, category: "Tandoor" },
  { id: "t3", name: "Garlic Roghni Naan", description: "Saffron-touched naan with roasted garlic and sesame.", price: 180, image: naan, category: "Tandoor", badge: "New" },

  // Main Course
  { id: "m1", name: "Lahori Chicken Karahi", description: "Wok-tossed chicken in tomato, ginger and green chili.", price: 1850, image: karahi, category: "Main Course", badge: "Signature" },
  { id: "m2", name: "Mutton Yakhni Pulao", description: "Aromatic basmati cooked in mutton stock, slow dum style.", price: 1650, image: biryani, category: "Main Course" },
  { id: "m3", name: "Shahi Mutton Biryani", description: "Royal layered biryani with saffron and tender mutton.", price: 1750, image: biryani, category: "Main Course", badge: "Signature" },
  { id: "m4", name: "Nihari Special", description: "Eight-hour slow-cooked beef shank stew, Lahori style.", price: 1450, image: karahi, category: "Main Course", badge: "Spicy" },
];

import { useState } from "react";
import { ArrowRight, Beef, ChefHat, Sandwich, Cookie, Beer, Camera, X } from "lucide-react";
import menuChianina from "@/assets/menu-chianina.jpg";
import menuCinta from "@/assets/menu-cinta.jpg";
import menuColazione from "@/assets/menu-colazione.jpg";
import menuTiramisu from "@/assets/menu-tiramisu.jpg";
import menuFries from "@/assets/menu-fries.jpg";
import menuBeer from "@/assets/menu-beer.jpg";
import menuPollo from "@/assets/menu-pollo.jpg";
import menuVeggie from "@/assets/menu-veggie.jpg";
import menuPiadina from "@/assets/menu-piadina.jpg";
import menuWings from "@/assets/menu-wings.jpg";
import menuSchiacciata from "@/assets/menu-schiacciata.jpg";
import galleryInterior from "@/assets/gallery-interior.jpg";
import galleryGrill from "@/assets/gallery-grill.jpg";
import gallerySauces from "@/assets/gallery-sauces.jpg";

type Category = "tutti" | "panini" | "schiacciate" | "contorni" | "dolci" | "bevande";

interface MenuItem {
  image: string;
  name: string;
  desc: string;
  price: string;
  category: Category;
  badge?: string;
}

const categories: { id: Category; label: string; icon: React.ReactNode }[] = [
  { id: "tutti", label: "Tutti", icon: <ChefHat className="w-4 h-4" /> },
  { id: "panini", label: "Panini & Burger", icon: <Beef className="w-4 h-4" /> },
  { id: "schiacciate", label: "Schiacciate & Piadine", icon: <Sandwich className="w-4 h-4" /> },
  { id: "contorni", label: "Contorni", icon: <Cookie className="w-4 h-4" /> },
  { id: "dolci", label: "Dolci", icon: <Cookie className="w-4 h-4" /> },
  { id: "bevande", label: "Bevande", icon: <Beer className="w-4 h-4" /> },
];

const menuItems: MenuItem[] = [
  {
    image: menuChianina,
    name: "Panino Chianina Classic",
    desc: "Manzo chianino, cheddar, salsa ai funghi, salsa rustica, pomodori secchi, lattuga, pomodoro.",
    price: "€10.50",
    category: "panini",
    badge: "Best Seller",
  },
  {
    image: menuCinta,
    name: "Panino Cinta Senese",
    desc: "Maiale di Cinta Senese, formaggi misti, BBQ, pomodori secchi, salsa olive, lattuga.",
    price: "€11.00",
    category: "panini",
    badge: "Premium",
  },
  {
    image: menuPollo,
    name: "Panino Pollo & Tacchino",
    desc: "Polpetta pollo e tacchino, pomodori secchi, salsa funghi, formaggi misti, rucola.",
    price: "€9.50",
    category: "panini",
  },
  {
    image: menuVeggie,
    name: "Veggie Burger",
    desc: "Polpetta di ceci, verdure grigliate, salsa rustica, olive, rucola, pomodori secchi.",
    price: "€8.50",
    category: "panini",
  },
  {
    image: menuChianina,
    name: "Chianina Spicy",
    desc: "Manzo chianino, salsa piccante, tabasco, pomodori secchi, BBQ, lattuga, formaggi misti.",
    price: "€11.50",
    category: "panini",
    badge: "Piccante",
  },
  {
    image: menuColazione,
    name: "Colazione dell'Operaio",
    desc: "Salsiccia, hot dog DOC, uovo bio, cipolla grigliata, bacon croccante, patatine, lattuga, pomodoro, toast.",
    price: "€14.90",
    category: "panini",
    badge: "XL",
  },
  {
    image: menuSchiacciata,
    name: "Schiacciata Toscana",
    desc: "Schiacciata croccante farcita con affettati toscani, formaggi e salse artigianali.",
    price: "€8.50",
    category: "schiacciate",
  },
  {
    image: menuPiadina,
    name: "Piadina Classica",
    desc: "Piadina romagnola con affettati, formaggio e salse a scelta.",
    price: "€7.50",
    category: "schiacciate",
  },
  {
    image: menuSchiacciata,
    name: "Schiacciata Chianina",
    desc: "Schiacciata croccante con carne di Chianina di prima scelta e condimenti premium.",
    price: "€9.50",
    category: "schiacciate",
    badge: "Top",
  },
  {
    image: menuPiadina,
    name: "Piadina Vegetariana",
    desc: "Piadina con verdure grigliate, formaggio fresco e salsa alle erbe.",
    price: "€7.00",
    category: "schiacciate",
  },
  {
    image: menuFries,
    name: "Patatine Fritte",
    desc: "Patatine dorate e croccanti, servite calde.",
    price: "€3.50",
    category: "contorni",
  },
  {
    image: menuWings,
    name: "Alette di Pollo",
    desc: "Alette croccanti con salsa a scelta.",
    price: "€6.50",
    category: "contorni",
  },
  {
    image: menuWings,
    name: "Fiori di Zucca Fritti",
    desc: "Fiori di zucca in pastella leggera, fritti al momento.",
    price: "€5.50",
    category: "contorni",
  },
  {
    image: menuTiramisu,
    name: "Tiramisù",
    desc: "Il dolce che ha conquistato Firenze. Fatto in casa ogni giorno.",
    price: "€4.50",
    category: "dolci",
    badge: "Fatto in Casa",
  },
  {
    image: menuBeer,
    name: "Birra alla Spina",
    desc: "Birra artigianale alla spina, media o grande.",
    price: "da €4.00",
    category: "bevande",
  },
  {
    image: menuBeer,
    name: "Birra in Bottiglia",
    desc: "Selezione di birre artigianali e commerciali in bottiglia.",
    price: "da €3.50",
    category: "bevande",
  },
];

const galleryImages = [
  { src: galleryInterior, alt: "L'atmosfera di Da Tommy", caption: "L'atmosfera" },
  { src: galleryGrill, alt: "La griglia in azione", caption: "La Griglia" },
  { src: gallerySauces, alt: "Le nostre salse artigianali", caption: "Le Salse" },
  { src: menuChianina, alt: "I nostri panini gourmet", caption: "I Panini" },
  { src: menuColazione, alt: "Piatti speciali Da Tommy", caption: "Piatti Speciali" },
  { src: menuCinta, alt: "Cinta Senese di prima scelta", caption: "Cinta Senese" },
];

const DELIVEROO_URL = "https://deliveroo.it/it/menu/firenze/novoli-rifredi/paninoteca-da-tommy/?day=TODAY&time=19%3A15&timestamp=1772734500";

const FeaturedMenu = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("tutti");
  const [activeTab, setActiveTab] = useState<"menu" | "gallery">("menu");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filteredItems = activeCategory === "tutti"
    ? menuItems
    : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section className="py-20" id="menu">
      <div className="container">
        <h2 className="font-display text-5xl md:text-6xl text-center mb-4">
          I Nostri <span className="text-primary">Classici</span>
        </h2>
        <p className="text-center text-muted-foreground font-serif italic mb-10">
          Carni Toscane. Salse Infinite. Fame Risolta.
        </p>

        {/* Main Tabs: Menu / Gallery */}
        <div className="flex justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveTab("menu")}
            className={`inline-flex items-center gap-2 font-accent uppercase tracking-wider text-sm px-6 py-3 rounded-lg border transition-all duration-300 ${
              activeTab === "menu"
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card text-muted-foreground border-border hover:border-primary/50"
            }`}
          >
            <ChefHat className="w-4 h-4" />
            Menu
          </button>
          <button
            onClick={() => setActiveTab("gallery")}
            className={`inline-flex items-center gap-2 font-accent uppercase tracking-wider text-sm px-6 py-3 rounded-lg border transition-all duration-300 ${
              activeTab === "gallery"
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card text-muted-foreground border-border hover:border-primary/50"
            }`}
          >
            <Camera className="w-4 h-4" />
            Galleria
          </button>
        </div>

        {activeTab === "menu" && (
          <>
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-1.5 font-accent text-xs uppercase tracking-wider px-4 py-2 rounded-full border transition-all duration-300 ${
                    activeCategory === cat.id
                      ? "bg-accent text-accent-foreground border-accent"
                      : "bg-card text-muted-foreground border-border hover:border-accent/50 hover:text-foreground"
                  }`}
                >
                  {cat.icon}
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Menu Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item, i) => (
                <div
                  key={`${item.name}-${i}`}
                  className="group rounded-xl overflow-hidden bg-card border border-border food-card-hover cursor-pointer relative"
                >
                  {item.badge && (
                    <span className="absolute top-3 left-3 z-10 bg-primary text-primary-foreground font-accent text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
                      {item.badge}
                    </span>
                  )}
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover food-image transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-accent text-base uppercase tracking-wide font-bold leading-tight">
                        {item.name}
                      </h3>
                      <span className="text-primary font-accent font-bold text-sm whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{item.desc}</p>
                    <a
                      href={DELIVEROO_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary font-accent text-sm uppercase tracking-wider hover:underline"
                    >
                      Ordina <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Items count */}
            <p className="text-center text-muted-foreground text-xs font-accent uppercase tracking-wider mt-6">
              {filteredItems.length} prodott{filteredItems.length === 1 ? "o" : "i"} trovati
            </p>
          </>
        )}

        {activeTab === "gallery" && (
          <>
            {/* Gallery Grid — masonry-like with varied sizes */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {galleryImages.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setLightbox(img.src)}
                  className={`group relative overflow-hidden rounded-xl cursor-pointer ${
                    i === 0 ? "col-span-2 row-span-2" : ""
                  }`}
                >
                  <div className={`overflow-hidden ${i === 0 ? "aspect-[4/3]" : "aspect-square"}`}>
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover food-image transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="font-accent text-sm uppercase tracking-wider text-foreground">
                      {img.caption}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <a
            href={DELIVEROO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-accent uppercase tracking-wider text-sm"
          >
            <ArrowRight className="w-4 h-4" />
            Vedi tutto il menu su Deliveroo
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={lightbox}
            alt="Foto Da Tommy"
            className="max-w-full max-h-[85vh] object-contain rounded-xl food-image"
          />
        </div>
      )}
    </section>
  );
};

export default FeaturedMenu;

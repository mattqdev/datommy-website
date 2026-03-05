import { MapPin, Phone, Clock, Car, Navigation } from "lucide-react";

const Location = () => {
  return (
    <section className="py-20 bg-secondary" id="contatti">
      <div className="container">
        <h2 className="font-display text-5xl md:text-6xl text-center mb-12">
          Dove <span className="text-primary">Siamo</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-xl overflow-hidden border border-border aspect-video lg:aspect-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.1659725838426!2d11.22684127663454!3d43.79013584357304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a513567b41687%3A0xc3f58a9e70198816!2sDa%20Tommy!5e0!3m2!1sit!2sit!4v1710000000000!5m2!1sit!2sit"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 300 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Da Tommy - Mappa"
            />
          </div>
          
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="font-accent uppercase tracking-wider text-sm text-accent mb-1">Indirizzo</p>
                  <p>Via Enrico Forlanini, 8, 50127 Firenze FI</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="font-accent uppercase tracking-wider text-sm text-accent mb-1">Telefono</p>
                  <a href="tel:0554476493" className="hover:text-primary transition-colors">055 447 6493</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="font-accent uppercase tracking-wider text-sm text-accent mb-1">Orari</p>
                  <p>Ogni giorno 19:00 – 03:00 (Chiuso Lunedì)</p>
                  <p className="text-sm text-muted-foreground italic">Ven e Sab aperto fino alle 05:00</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Car className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="font-accent uppercase tracking-wider text-sm text-accent mb-1">Parcheggio</p>
                  <p>Parcheggio nelle vicinanze</p>
                </div>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/yY3R37zRToL376hE9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border font-accent uppercase tracking-wider px-6 py-3 rounded-lg hover:bg-card transition-all duration-300 text-sm"
            >
              <Navigation className="w-4 h-4" />
              Indicazioni
            </a>

            <div className="pt-4 border-t border-border">
              <p className="font-accent uppercase tracking-wider text-sm text-muted-foreground mb-4">Ordinaci anche su</p>
              <div className="flex gap-4 flex-wrap">
                <a 
                  href="https://deliveroo.it/it/menu/firenze/novoli-rifredi/paninoteca-da-tommy/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-card border border-border rounded-lg px-5 py-3 font-accent uppercase tracking-wider text-sm hover:border-[#00CCBC] transition-colors"
                >
                  Deliveroo
                </a>
                <a 
                  href="https://glovoapp.com/ro/it/firenze/stores/da-tommy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-card border border-border rounded-lg px-5 py-3 font-accent uppercase tracking-wider text-sm hover:border-[#FFC244] transition-colors"
                >
                  Glovo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;

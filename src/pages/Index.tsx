import { Phone, Mail, MapPin, ChevronDown, Leaf, Shield, Wrench, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroBg from "/uploads/0-bg-woodykozijnen.webp";
import logoImg from "/uploads/0-logo-woody-kozijnen-1.png";
import logoImgBottom from "/uploads/0-logo-woody-kozijnen-2.png";
import { useState } from "react";

const dienstenLinks = [
  "Houten Kozijnen & Ramen",
  "Houten Deuren",
  "Houten Schuiframen",
  "Houten Schuifpuien",
  "Houten Daklijsten",
  "Renovatie & Verduurzaming",
  "Timmerwerk & Interieur",
  "Houten Vloeren",
  "Keukens",
  "Badkamers",
  "Ontwerp & Tekeningen",
];

const services = [
{
  title: "Houten Kozijnen & Ramen",
  description: "Maatwerk kozijnen, raamkozijnen en schuiframen van de hoogste kwaliteit. Elk kozijn wordt met vakmanschap op maat vervaardigd met de gewenste sierprofielen.",
  image: "/uploads/1-houten-ramen-kozijnen.webp",
  features: ["Raamozijnen", "HR++ isolatieglas", "Roedeverdeling", "Sierweldorpel"]
},
{
  title: "Houten Deuren",
  description: "Prachtige buitendeuren, voordeuren en binnendeuren. Van klassiek tot modern, altijd op maat gemaakt met oog voor detail.",
  image: "/uploads/1-houten-deuren.webp",
  features: ["Voordeuren", "Buitendeuren", "Binnendeuren", "Ensuite deuren"]
},
{
  title: "Houten Schuiframen",
  description: "Renovatie of vernieuwen en verduurzamen van houten schuiframen incl. HR++ glas, tochtdichting en verzwaren contra-gewichten of schuifraamveren.",
  image: "/uploads/1-houten-schuiframen.webp",
  features: ["Houten schuiframen", "Renovatie", "HR++ Isolatieglas", "Tochtdichtingen"]
},
{
  title: "Houten Schuifpuien",
  description: "Renovatie of vernieuwen en verduurzamen van houten schuifpuien incl. HR++ glas en tochtdichting.",
  image: "/uploads/1-houten-schuifpuien.webp",
  features: ["Houten schuifpuien", "Renovatie", "HR++ Isolatieglas", "Tochtdichtingen"]
},
{
  title: "Houten Daklijsten",
  description: "Renovatie of vernieuwen van klassieke houten dak-, goot- en kraallijsten, gootklossen en kraagstenen consoles.",
  image: "/uploads/1-houten-daklijsten.webp",
  features: ["Renovatie", "Daklijsten", "Kraallijsten", "Sierlijsten en klossen"]
},
{
  title: "Renovatie & Verduurzaming",
  description: "Renovatie van houtwerk binnen en buiten. Verduurzaming van kozijnen met HR++ isolatieglas en paneelisolatie voor een energiezuinig huis.",
  image: "/uploads/1-renovatie-verduurzaming.webp",
  features: ["Houtrenovatie", "HR++ beglazing", "Energiebesparing", "Facet-panelen-isolatie"]
},
{
  title: "Timmerwerk & Interieur",
  description: "Specialistisch timmerwerk voor exterieur én interieur zoals kasten, ensuite panelen en schuifdeuren, vide's, deurlijsten en architraven.",
  image: "/uploads/1-timmerwerk-interieur.webp",
  features: ["Kasten", "Ensuite panelen", "Maatwerk", "Ensuite Schuifdeuren"]
},
{
  title: "Houten vloeren",
  description: "Levendige moderne en rustieke houten vloeren in duurzame houtsoorten, nieuwe en gebruikte. Vloerverwarming ook mogelijk.",
  image: "/uploads/1-houten-vloeren.webp",
  features: ["Hardhout", "Woongenot", "Vloerverwarming", "Nieuw en gebruikt"]
},
{
  title: "Keukens",
  description: "Complete keukeninstallatie van ontwerp tot plaatsing. Wij zorgen voor een keuken die perfect past bij uw woning en levensstijl.",
  image: "/uploads/1-keukens.webp",
  features: ["Plaatsing", "Installatie", "Maatwerk", "Advies"]
},
{
  title: "Badkamers",
  description: "Complete badkamerrenovatie van A tot Z. Van tegels en sanitair tot meubels en afwerking — wij regelen het allemaal.",
  image: "/uploads/1-badkamers.webp",
  features: ["Compleet", "Tegelwerk", "Sanitair", "Leidingwerk"]
},
{
  title: "Ontwerp & Tekeningen",
  description: "Samen met u maken wij de eerste schetsen. Daarna zorgen wij voor de tekeningen en monteren wij de gebouwde producten.",
  image: "/uploads/1-ontwerp-tekeningen.webp",
  features: ["Ontwerpen", "Gewenste materialen", "Digitale tekeningen", "Maatwerk"]
}];


const usps = [
{ icon: Wrench, title: "Ambachtelijk Vakmanschap", description: "Traditionele technieken gecombineerd met moderne precisie" },
{ icon: Leaf, title: "Duurzaam Hout", description: "Wij werken uitsluitend met FSC-gecertificeerd hout" },
{ icon: Shield, title: "Ontwerp & Tekeningen", description: "Wij ontwerpen samen met u en maken de tekeningen" },
{ icon: Star, title: "15+ Jaar Ervaring", description: "Bewezen expertise in klassiek en modern houtwerk en interieurbouw" }];


const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDienstenOpen, setMobileDienstenOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center gap-2 sm:gap-3">
              <a href="/"><img alt="Woody Kozijnen logo" className="h-10 sm:h-14 w-auto" src={logoImg} /></a>
            </div>
            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <a href="#diensten" className="text-muted-foreground hover:text-primary transition-colors font-medium text-sm">Diensten</a>
              <a href="#over-ons" className="text-muted-foreground hover:text-primary transition-colors font-medium text-sm">Over Ons</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors font-medium text-sm">Contact</a>
              <Button asChild>
                <a href="tel:+31612345678" className="gap-2">
                  <Phone className="h-4 w-4" />
                  Bel Ons
                </a>
              </Button>
            </div>
            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu">
              
              <div className="space-y-1.5">
                <span className={`block w-6 h-0.5 bg-foreground transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block w-6 h-0.5 bg-foreground transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-6 h-0.5 bg-foreground transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
          {/* Mobile menu */}
          {mobileMenuOpen &&
          <div className="md:hidden pb-4 border-t border-border pt-4 space-y-3">
              <a href="#diensten" onClick={() => setMobileMenuOpen(false)} className="block text-muted-foreground hover:text-primary transition-colors font-medium">Diensten</a>
              <a href="#over-ons" onClick={() => setMobileMenuOpen(false)} className="block text-muted-foreground hover:text-primary transition-colors font-medium">Over Ons</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-muted-foreground hover:text-primary transition-colors font-medium">Contact</a>
              <Button asChild className="w-full">
                <a href="tel:+31612345678" className="gap-2">
                  <Phone className="h-4 w-4" />
                  Bel Ons
                </a>
              </Button>
            </div>
          }
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Ambachtelijk houtwerk" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="max-w-2xl">
            <p className="text-accent font-medium tracking-widest uppercase text-xs sm:text-sm mb-3 sm:mb-4">
              Ambachtelijk Houtwerk & Interieurbouw
            </p>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4 sm:mb-6">Maatwerk Houten Kozijnen, Deuren & Timmerwerk

            </h1>
            <p className="text-base sm:text-xl text-primary-foreground/80 mb-6 sm:mb-8 leading-relaxed max-w-xl">Al meer dan 15 jaar specialist in houten kozijnen, deuren, timmerwerk en interieurbouw. Van klassieke restauratie tot moderne verduurzaming.


            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button size="lg" asChild className="text-base">
                <a href="#contact">
                  Gratis Offerte Aanvragen
                  <ArrowRight className="h-5 w-5 ml-1" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
                <a href="#diensten">
                  Bekijk Onze Diensten
                  <ChevronDown className="h-5 w-5 ml-1" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="diensten" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-accent font-medium tracking-widest uppercase text-xs sm:text-sm mb-2 sm:mb-3">Onze Specialisaties</p>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">Wat Wij Voor U Doen</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-lg">Van maatwerk kozijnen & deuren tot complete keuken- en badkamerrenovaties — wij leveren vakmanschap op elk niveau.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service) =>
            <a key={service.title} href="index.html" className="block">
              <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-300 border-border cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy" />
                
                </div>
                <CardContent className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) =>
                  <span key={feature} className="text-xs bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full font-medium">
                        {feature}
                      </span>
                  )}
                  </div>
                </CardContent>
              </Card>
            </a>
            )}
          </div>
        </div>
      </section>

      {/* USPs */}
      <section id="over-ons" className="py-12 sm:py-20 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {usps.map((usp) =>
            <div key={usp.title} className="text-center p-4 sm:p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 text-primary mb-3 sm:mb-4">
                  <usp.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <h3 className="font-semibold text-foreground text-sm sm:text-base mb-1 sm:mb-2">{usp.title}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm">{usp.description}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 sm:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4">Klaar voor Uw Project?</h2>
          <p className="text-primary-foreground/80 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
            Of het nu gaat om een enkel kozijn, een kleine aanpassing of een complete renovatie — wij denken graag met u mee. 
            Vraag vrijblijvend een offerte aan.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="text-base">
              <a href="tel:+31612345678" className="gap-2">
                <Phone className="h-5 w-5" />
                Bel vrijblijvend
              </a>
            </Button>
            <Button size="lg" variant="secondary" asChild className="text-base">
              <a href="mailto:info@woodykozijnen.nl" className="gap-2">
                <Mail className="h-5 w-5" />
                Stuur een E-mail
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16">
            <div>
              <p className="text-accent font-medium tracking-widest uppercase text-xs sm:text-sm mb-2 sm:mb-3">Neem Contact Op</p>
              <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-4 sm:mb-6">Wij Helpen U Graag</h2>
              <p className="text-muted-foreground text-sm sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                Heeft u een vraag of wilt u vrijblijvende informatie of een offerte? Neem gerust contact met ons op. 
                Wij reageren doorgaans binnen 24 uur.
              </p>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm sm:text-base">Telefoon</p>
                    <a href="tel:+31612345678" className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base">
                      +31 6 2876 4171
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm sm:text-base">E-mail</p>
                    <a href="mailto:info@woodykozijnen.nl" className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base">
                      info@woodykozijnen.nl
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm sm:text-base">Kantoor-adres</p>
                    <p className="text-muted-foreground text-sm sm:text-base">Buijs Ballotstraat 24</p>
                    <p className="text-muted-foreground text-sm sm:text-base">2563 ZL DEN HAAG</p>
                    <p className="text-muted-foreground text-sm sm:text-base">Nederland</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Card className="border-border">
                <CardContent className="p-5 sm:p-8">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4 sm:mb-6">Offerte Aanvragen</h3>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Naam</label>
                      <input type="text" className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Uw naam" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">E-mail</label>
                      <input type="email" className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="uw@email.nl" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Telefoon</label>
                      <input type="tel" className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="06-12345678" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Uw Bericht</label>
                      <textarea rows={4} className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" placeholder="Vertel ons over uw project..." />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      Verstuur Aanvraag
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            <div>
              <img src={logoImgBottom} alt="Woody Kozijnen" className="h-12 sm:h-16 w-auto mb-4 brightness-200" />
              <p className="text-primary-foreground/60 text-sm leading-relaxed">
                Specialist in houten kozijnen, deuren, timmerwerk en interieurbouw. Al meer dan 15 jaar vakmanschap.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-primary-foreground mb-3 sm:mb-4 text-sm sm:text-base">Producten & Diensten</h4>
              <ul className="space-y-2 text-primary-foreground/60 text-sm">
                <li><a href="index.html" className="hover:text-primary-foreground transition-colors">Houten Kozijnen & Ramen</a></li>
                <li><a href="index.html" className="hover:text-primary-foreground transition-colors">Houten Deuren</a></li>
                <li><a href="index.html" className="hover:text-primary-foreground transition-colors">Houten Schuiframen</a></li>
                <li><a href="index.html" className="hover:text-primary-foreground transition-colors">Houten Schuifpuien</a></li>
                <li><a href="index.html" className="hover:text-primary-foreground transition-colors">Houten Daklijsten</a></li>
                <li><a href="index.html" className="hover:text-primary-foreground transition-colors">Renovatie & Verduurzaming</a></li>
                <li><a href="index.html" className="hover:text-primary-foreground transition-colors">Timmerwerk & Interieur</a></li>
                <li><a href="index.html" className="hover:text-primary-foreground transition-colors">Houten Vloeren</a></li>
                <li><a href="index.html" className="hover:text-primary-foreground transition-colors">Keukens</a></li>
                <li><a href="index.html" className="hover:text-primary-foreground transition-colors">Badkamers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-primary-foreground mb-3 sm:mb-4 text-sm sm:text-base">Contact</h4>
              <ul className="space-y-2 text-primary-foreground/60 text-sm">
                <li>
                  <a href="tel:+31 6 2876 4171" className="hover:text-primary-foreground transition-colors">+31 6 2876 4171</a>
                </li>
                <li>
                  <a href="mailto:info@woodykozijnen.nl" className="hover:text-primary-foreground transition-colors">info@woodykozijnen.nl</a>
                </li>
                <li>woodykozijnen.nl</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/10 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
            <p className="text-primary-foreground/40 text-xs sm:text-sm">
              © {new Date().getFullYear()} Woody Kozijnen. Alle rechten voorbehouden.
            </p>
          </div>
        </div>
      </footer>
    </div>);

};

export default Index;

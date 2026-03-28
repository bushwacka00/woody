import { Phone, Mail, MapPin, ChevronDown, ArrowRight, Check, X, TreePine, Ruler, Hammer, Thermometer, ShieldCheck, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import logoImg from "/uploads/0-logo-woody-kozijnen-1.png";
import logoImgBottom from "/uploads/0-logo-woody-kozijnen-2.png";
import heroImg from "/uploads/kozijnen-hero.jpg";
import { useState } from "react";

const dienstenLinks = [
  { label: "Houten Kozijnen & Ramen", href: "/houten-kozijnen-en-ramen" },
  { label: "Houten Deuren", href: "/" },
  { label: "Houten Schuiframen", href: "/" },
  { label: "Houten Schuifpuien", href: "/" },
  { label: "Houten Daklijsten", href: "/" },
  { label: "Renovatie & Verduurzaming", href: "/" },
  { label: "Timmerwerk & Interieur", href: "/" },
  { label: "Houten Vloeren", href: "/" },
  { label: "Keukens", href: "/" },
  { label: "Badkamers", href: "/" },
  { label: "Ontwerp & Tekeningen", href: "/" },
];

const houtsoorten = [
  {
    naam: "Meranti",
    beschrijving: "Tropische houtsoort met uitstekende duurzaamheid en weerbestendigheid. Ideaal voor buitenkozijnen dankzij de natuurlijke resistentie tegen vocht en insecten.",
    kenmerken: ["Duurzaamheidsklasse II", "Goed te bewerken", "Stabiel hout", "Natuurlijk vochtbestendig"],
  },
  {
    naam: "Accoya",
    beschrijving: "Gemodificeerd hout met een levensduur van 50+ jaar. Door het acetylerings­proces is Accoya extreem dimensionaal stabiel en rot­bestendig — ideaal voor kozijnen die decennialang meegaan.",
    kenmerken: ["50+ jaar levensduur", "Dimensionaal stabiel", "FSC-gecertificeerd", "Uitstekend te schilderen"],
  },
  {
    naam: "Eikenhout",
    beschrijving: "Klassieke houtsoort met een warme, rijke uitstraling. Europees eiken wordt al eeuwenlang gebruikt voor kozijnen en ramen in monumentale en klassieke woningen.",
    kenmerken: ["Tijdloze uitstraling", "Zeer sterk", "Duurzaamheidsklasse II", "Prachtige houtnerf"],
  },
  {
    naam: "Vurenhout (verduurzaamd)",
    beschrijving: "Betaalbare optie die door verduurzaming (impregnatie) geschikt wordt gemaakt voor buitentoepassingen. Uitstekende prijs-kwaliteitverhouding voor standaard kozijnen.",
    kenmerken: ["Voordelig geprijsd", "Goed te bewerken", "Verduurzaamd", "Lichtgewicht"],
  },
];

const voordelen = [
  { tekst: "Natuurlijke isolatiewaarde — hout isoleert 5x beter dan aluminium en 1.400x beter dan staal", type: "voordeel" },
  { tekst: "Duurzaam en hernieuwbaar materiaal met lage CO₂-voetafdruk", type: "voordeel" },
  { tekst: "Eindeloze vormvrijheid voor maatwerk en klassieke profielen", type: "voordeel" },
  { tekst: "Warme, authentieke uitstraling die past bij elke woonstijl", type: "voordeel" },
  { tekst: "Eenvoudig te repareren en opnieuw te schilderen", type: "voordeel" },
  { tekst: "Lange levensduur (150 jaar) bij goed onderhoud", type: "voordeel" },
];

const nadelenKunststof = [
  { tekst: "Kunststof kozijnen zijn niet repareerbaar bij schade — vervanging nodig", type: "nadeel" },
  { tekst: "Beperkte kleurkeuze en vormvrijheid vergeleken met hout", type: "nadeel" },
  { tekst: "Verkleuring en vervorming bij langdurige zonbelasting", type: "nadeel" },
  { tekst: "Niet-duurzaam: kunststof is moeilijk recyclebaar", type: "nadeel" },
];

const nadelenAluminium = [
  { tekst: "Aluminium geleidt warmte zeer goed — slechte isolatiewaarde zonder thermische onderbreking", type: "nadeel" },
  { tekst: "Hoge productiekosten en energieverbruik bij vervaardiging", type: "nadeel" },
  { tekst: "Koude, industriële uitstraling — minder geschikt voor klassieke woningen", type: "nadeel" },
  { tekst: "Condensvorming op het kozijnprofiel bij slechte thermische scheiding", type: "nadeel" },
];

const isolatieInfo = [
  {
    icon: Thermometer,
    titel: "HR++ Isolatieglas",
    tekst: "Standaard passen wij HR++ isolatieglas toe met een U-waarde van slechts 1,1 W/m²K. Dit bespaart tot 30% op uw stookkosten vergeleken met enkel glas.",
  },
  {
    icon: ShieldCheck,
    titel: "Triple Glas",
    tekst: "Voor optimale isolatie bieden wij ook triple glas aan (U-waarde 0,6 W/m²K). Ideaal voor nieuwbouw of ingrijpende renovaties waar maximale energieprestatie gewenst is.",
  },
  {
    icon: Eye,
    titel: "Monumentenglas",
    tekst: "Voor monumentale panden leveren wij speciaal monumentenglas dat voldoet aan de eisen van de monumentencommissie, met optimale isolatiewaarde.",
  },
];

const projecten = [
  { image: "/uploads/kozijnen-project-1.jpg", titel: "Maatwerk kozijn in werkplaats", beschrijving: "Ambachtelijke productie van een hardhouten kozijn" },
  { image: "/uploads/kozijnen-project-2.jpg", titel: "Renovatie woning Den Haag", beschrijving: "Nieuwe kozijnen met HR++ beglazing" },
  { image: "/uploads/kozijnen-project-3.jpg", titel: "Klassieke schuiframen", beschrijving: "Restauratie monumentaal pand" },
  { image: "/uploads/kozijnen-project-4.jpg", titel: "Detail isolatieglas", beschrijving: "HR++ glas in hardhouten kozijn" },
  { image: "/uploads/kozijnen-project-5.jpg", titel: "Stadswoning renovatie", beschrijving: "Kozijnen in klassieke kleurstelling" },
  { image: "/uploads/kozijnen-project-6.jpg", titel: "Erkerraam met tuinuitzicht", beschrijving: "Maatwerk hardhouten raampartij" },
];

const HoutenKozijnenEnRamen = () => {
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
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <div className="relative group">
                <a href="/#diensten" className="text-muted-foreground hover:text-primary transition-colors font-medium text-sm flex items-center gap-1">
                  Diensten
                  <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
                </a>
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-background border border-border rounded-lg shadow-lg py-2 min-w-[240px]">
                    {dienstenLinks.map((item) => (
                      <a key={item.label} href={item.href} className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-accent transition-colors">
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <a href="/#over-ons" className="text-muted-foreground hover:text-primary transition-colors font-medium text-sm">Over Ons</a>
              <a href="/#contact" className="text-muted-foreground hover:text-primary transition-colors font-medium text-sm">Contact</a>
              <Button asChild>
                <a href="tel:+31612345678" className="gap-2"><Phone className="h-4 w-4" />Bel Ons</a>
              </Button>
            </div>
            <button className="md:hidden p-2 text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Menu">
              <div className="space-y-1.5">
                <span className={`block w-6 h-0.5 bg-foreground transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block w-6 h-0.5 bg-foreground transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-6 h-0.5 bg-foreground transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-border pt-4 space-y-3">
              <button onClick={() => setMobileDienstenOpen(!mobileDienstenOpen)} className="flex items-center justify-between w-full text-muted-foreground hover:text-primary transition-colors font-medium">
                Diensten
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileDienstenOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileDienstenOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  {dienstenLinks.map((item) => (
                    <a key={item.label} href={item.href} onClick={() => setMobileMenuOpen(false)} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
              <a href="/#over-ons" onClick={() => setMobileMenuOpen(false)} className="block text-muted-foreground hover:text-primary transition-colors font-medium">Over Ons</a>
              <a href="/#contact" onClick={() => setMobileMenuOpen(false)} className="block text-muted-foreground hover:text-primary transition-colors font-medium">Contact</a>
              <Button asChild className="w-full">
                <a href="tel:+31612345678" className="gap-2"><Phone className="h-4 w-4" />Bel Ons</a>
              </Button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Houten kozijnen en ramen" className="w-full h-full object-cover" width={1920} height={800} />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-accent font-medium tracking-widest uppercase text-xs sm:text-sm mb-3 sm:mb-4">
              Woody Kozijnen — Specialist
            </p>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4 sm:mb-6">
              Houten Kozijnen & Ramen
            </h1>
            <p className="text-base sm:text-xl text-primary-foreground/80 mb-6 sm:mb-8 leading-relaxed max-w-xl">
              Ambachtelijk vervaardigde houten kozijnen en ramen, op maat gemaakt voor uw woning. 
              Van klassieke restauratie tot moderne nieuwbouw — altijd met oog voor detail en duurzaamheid.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button size="lg" asChild className="text-base">
                <a href="/#contact">
                  Gratis Offerte Aanvragen
                  <ArrowRight className="h-5 w-5 ml-1" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
                <a href="#projecten">
                  Bekijk Onze Projecten
                  <ChevronDown className="h-5 w-5 ml-1" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introductie */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <p className="text-accent font-medium tracking-widest uppercase text-xs sm:text-sm mb-2 sm:mb-3">Vakmanschap & Kwaliteit</p>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              Waarom Kiezen voor Houten Kozijnen?
            </h2>
            <p className="text-muted-foreground text-sm sm:text-lg leading-relaxed">
              Houten kozijnen en ramen zijn al eeuwenlang dé keuze voor woningen die uitstraling, warmte en karakter verdienen. 
              Bij Woody Kozijnen combineren wij traditioneel ambacht met moderne technieken om kozijnen te leveren die niet alleen 
              prachtig zijn, maar ook optimaal isoleren en decennialang meegaan.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="text-center border-border">
              <CardContent className="p-6 sm:p-8">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                  <Ruler className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">100% Maatwerk</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Elk kozijn wordt individueel opgemeten en op maat vervaardigd. Of het nu gaat om een standaardmaat 
                  of een uniek rond raam — wij maken het precies zoals u het wenst.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-border">
              <CardContent className="p-6 sm:p-8">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                  <Hammer className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Ambachtelijk Vakmanschap</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Onze timmerlieden werken met traditionele verbindingstechnieken gecombineerd met moderne precisie. 
                  Pen-en-gat verbindingen, sierprofielen en klassieke detailleringen — alles wordt met de hand afgewerkt.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-border sm:col-span-2 lg:col-span-1">
              <CardContent className="p-6 sm:p-8">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                  <TreePine className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Duurzaam & Verantwoord</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Wij werken uitsluitend met FSC-gecertificeerd hout uit verantwoord beheerde bossen. 
                  Hout is van nature een hernieuwbare grondstof met een minimale ecologische voetafdruk.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Houtsoorten */}
      <section className="py-16 sm:py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-accent font-medium tracking-widest uppercase text-xs sm:text-sm mb-2 sm:mb-3">Materialen</p>
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-3 sm:mb-4">Houtsoorten voor Kozijnen</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-lg">
              De keuze van houtsoort bepaalt de uitstraling, levensduur en het onderhoud van uw kozijnen. 
              Wij adviseren u graag over de beste keuze voor uw situatie.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {houtsoorten.map((hout) => (
              <Card key={hout.naam} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-xl font-bold text-foreground mb-3">{hout.naam}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{hout.beschrijving}</p>
                  <div className="flex flex-wrap gap-2">
                    {hout.kenmerken.map((k) => (
                      <span key={k} className="text-xs bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full font-medium">
                        {k}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Isolatie */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-accent font-medium tracking-widest uppercase text-xs sm:text-sm mb-2 sm:mb-3">Energiebesparing</p>
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-3 sm:mb-4">Isolatie & Beglazing</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-lg">
              Moderne isolatietechnieken zorgen ervoor dat uw houten kozijnen niet alleen mooi zijn, maar ook bijdragen aan een 
              energiezuinige woning. Wij adviseren altijd de beste glasoptie voor uw situatie.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {isolatieInfo.map((item) => (
              <Card key={item.titel} className="border-border">
                <CardContent className="p-6 sm:p-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{item.titel}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.tekst}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 sm:mt-14 bg-secondary/50 rounded-xl p-6 sm:p-10">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Moderne Isolatietechnieken Voor Optimaal Wooncomfort</h3>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Warm-edge Spacers</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  In plaats van aluminium afstandhouders gebruiken wij kunststof warm-edge spacers die de 
                  koudebrug aan de glasrand minimaliseren. Dit voorkomt condensvorming en verbetert de isolatiewaarde.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Gasvulling</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Onze isolatieglaseenheden worden gevuld met argon of krypton gas. Deze edelgassen isoleren 
                  aanzienlijk beter dan lucht en dragen bij aan een lagere U-waarde van het totale kozijn.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Low-E Coating</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Een onzichtbare metaaloxide-coating op het glas reflecteert warmtestraling terug de woning in. 
                  Zo blijft de warmte binnen in de winter en buiten in de zomer.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Kierdichting</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Alle draaiende en schuivende delen worden voorzien van hoogwaardige tochtprofielen en 
                  afdichtingsrubbers voor een optimale luchtdichtheid en minimaal warmteverlies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hout vs Kunststof vs Aluminium */}
      <section className="py-16 sm:py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-accent font-medium tracking-widest uppercase text-xs sm:text-sm mb-2 sm:mb-3">Vergelijking</p>
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-3 sm:mb-4">Hout vs. Kunststof vs. Aluminium</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-lg">
              Waarom kiezen steeds meer woningeigenaren bewust voor houten kozijnen? 
              Bekijk de voordelen van hout en de nadelen van de alternatieven.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Voordelen hout */}
            <Card className="border-primary/30 border-2">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Voordelen van Hout</h3>
                </div>
                <ul className="space-y-3">
                  {voordelen.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{item.tekst}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Nadelen kunststof */}
            <Card className="border-border">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                    <X className="h-5 w-5 text-destructive" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Nadelen Kunststof</h3>
                </div>
                <ul className="space-y-3">
                  {nadelenKunststof.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <X className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{item.tekst}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Nadelen aluminium */}
            <Card className="border-border">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                    <X className="h-5 w-5 text-destructive" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Nadelen Aluminium</h3>
                </div>
                <ul className="space-y-3">
                  {nadelenAluminium.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <X className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{item.tekst}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projecten Galerij */}
      <section id="projecten" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-accent font-medium tracking-widest uppercase text-xs sm:text-sm mb-2 sm:mb-3">Portfolio</p>
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-3 sm:mb-4">Onze Projecten</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-lg">
              Een selectie van recent gerealiseerde kozijn- en raamprojecten. Elk project is uniek en op maat gemaakt.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projecten.map((project, i) => (
              <div key={i} className="group relative overflow-hidden rounded-lg">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.titel}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6">
                  <div>
                    <h3 className="text-primary-foreground font-bold text-sm sm:text-base">{project.titel}</h3>
                    <p className="text-primary-foreground/70 text-xs sm:text-sm">{project.beschrijving}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4">Interesse in Houten Kozijnen?</h2>
          <p className="text-primary-foreground/80 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
            Wij komen graag vrijblijvend bij u langs om de mogelijkheden te bespreken en op te meten. 
            Vraag vandaag nog een gratis offerte aan.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="text-base">
              <a href="tel:+31612345678" className="gap-2">
                <Phone className="h-5 w-5" />
                Bel Vrijblijvend
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

      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            <div>
              <img src={logoImgBottom} alt="Woody Kozijnen" className="h-12 sm:h-16 w-auto mb-4 brightness-200" />
              <p className="text-primary-foreground/60 text-sm leading-relaxed">
                Specialist in houtwerk voor moderne en klassieke kozijnen, deuren, timmerwerk en interieurbouw. Al meer dan 15 jaar vakmanschap.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-primary-foreground mb-3 sm:mb-4 text-sm sm:text-base">Producten & Diensten</h4>
              <ul className="space-y-2 text-primary-foreground/60 text-sm">
                {dienstenLinks.map((item) => (
                  <li key={item.label}><a href={item.href} className="hover:text-primary-foreground transition-colors">{item.label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-primary-foreground mb-3 sm:mb-4 text-sm sm:text-base">Contact</h4>
              <ul className="space-y-2 text-primary-foreground/60 text-sm">
                <li><a href="tel:+31628764171" className="hover:text-primary-foreground transition-colors">+31 6 2876 4171</a></li>
                <li><a href="mailto:info@woodykozijnen.nl" className="hover:text-primary-foreground transition-colors">info@woodykozijnen.nl</a></li>
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
    </div>
  );
};

export default HoutenKozijnenEnRamen;

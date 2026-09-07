import { useState, type FormEvent, type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  ArrowDown,
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronRight,
  Droplets,
  Facebook,
  HandHeart,
  Instagram,
  Leaf,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Recycle,
  Send,
  Sprout,
  TreePine,
  Users,
  X,
} from 'lucide-react';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';

const queryClient = new QueryClient();

const photos = {
  hero: 'https://images.pexels.com/photos/623171/pexels-photo-623171.jpeg?auto=compress&cs=tinysrgb&w=1800',
  people: 'https://images.pexels.com/photos/7658760/pexels-photo-7658760.jpeg?auto=compress&cs=tinysrgb&w=1200',
  trees: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=1200',
  hands: 'https://images.pexels.com/photos/259280/pexels-photo-259280.jpeg?auto=compress&cs=tinysrgb&w=1200',
  canopy: 'https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg?auto=compress&cs=tinysrgb&w=1800',
};

const navItems = [
  { label: 'L’association', href: '#association' },
  { label: 'Nos actions', href: '#actions' },
  { label: 'Notre histoire', href: '#histoire' },
  { label: 'Partenaires', href: '#partenaires' },
];

type IconType = typeof Leaf;

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a
      href="#accueil"
      className="group flex items-center gap-3"
      data-testid="link-logo"
      aria-label="AEP, retour à l'accueil"
    >
      <span className="relative grid size-11 shrink-0 place-items-center overflow-hidden rounded-full border border-[#dce7d6] bg-white">
        <img
          src="/aep-logo.jpg"
          alt="Logo officiel de l'Association Environnement Parfait"
          className="size-full object-cover"
        />
      </span>
      {!compact && (
        <span className="leading-none">
          <strong className="block text-[1.05rem] font-bold tracking-[-.04em] text-[#15331f]">AEP</strong>
          <span className="mt-1 block text-[.53rem] font-medium uppercase tracking-[.12em] text-[#52705a]">Association Environnement Parfait</span>
        </span>
      )}
    </a>
  );
}

function SectionLabel({ children, number }: { children: ReactNode; number?: string }) {
  return (
    <div className="eyebrow flex items-center gap-3 text-[#51715b]">
      {number && <span className="text-[#c28b45]">{number}</span>}
      <span className="h-px w-8 bg-[#c28b45]" />
      <span>{children}</span>
    </div>
  );
}

function AppShell() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [newsletterState, setNewsletterState] = useState<'idle' | 'success'>('idle');

  const handleNewsletter = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNewsletterState('success');
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="noise min-h-[100dvh] bg-[#f8f7f2] text-[#15331f]">
      <header className="relative z-40 border-b border-[#e2e4dc] bg-[#fbfaf6]/95 backdrop-blur-sm">
        <div className="container-aep flex h-[76px] items-center justify-between gap-8">
          <Logo />
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigation principale">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[.68rem] font-semibold uppercase tracking-[.1em] text-[#48614f] transition-colors hover:text-[#b17836]"
                data-testid={`link-nav-${item.href.slice(1)}`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden items-center gap-2 border border-[#15331f] px-4 py-2.5 text-[.68rem] font-bold uppercase tracking-[.1em] text-[#15331f] transition-colors hover:bg-[#15331f] hover:text-[#faf9f4] md:flex"
            data-testid="link-header-contact"
          >
            Nous rejoindre <ArrowUpRight size={14} strokeWidth={1.8} />
          </a>
          <button
            type="button"
            className="grid size-11 place-items-center border border-[#d8ddd4] text-[#15331f] lg:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            data-testid="button-mobile-menu"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        {menuOpen && (
          <nav id="mobile-navigation" className="border-t border-[#e2e4dc] bg-[#fbfaf6] px-5 pb-5 pt-3 lg:hidden" aria-label="Navigation mobile">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="flex items-center justify-between border-b border-[#e4e6df] py-4 text-sm font-semibold text-[#31523a]"
                data-testid={`link-mobile-${item.href.slice(1)}`}
              >
                {item.label}
                <ChevronRight size={16} />
              </a>
            ))}
            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-5 flex items-center justify-center gap-2 bg-[#15331f] px-5 py-3 text-xs font-bold uppercase tracking-[.1em] text-[#fbfaf6]"
              data-testid="link-mobile-contact"
            >
              Nous rejoindre <ArrowUpRight size={15} />
            </a>
          </nav>
        )}
      </header>

      <main>
        <section id="accueil" className="container-aep pt-5 md:pt-8">
          <div className="relative min-h-[580px] overflow-hidden bg-[#214b30] md:min-h-[680px]">
            <img
              src={photos.hero}
              alt="Lumière traversant un feuillage dense, symbole d'un avenir vivant au Tchad"
              className="absolute inset-0 size-full object-cover object-center opacity-70"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,37,20,.82),rgba(12,37,20,.18)_75%)]" />
            <div className="relative flex min-h-[580px] flex-col justify-between p-7 text-[#fbfaf6] md:min-h-[680px] md:p-14 lg:p-20">
              <div className="flex items-start justify-between gap-5">
                <p className="eyebrow reveal text-[#d9e6d1]">N’Djamena · Tchad</p>
                <div className="hidden max-w-[180px] text-right text-xs leading-relaxed text-[#e4ebdf] md:block">
                  Ensemble pour un environnement sain, aujourd’hui et pour demain.
                </div>
              </div>
              <div className="max-w-[780px]">
                <p className="eyebrow reveal reveal-delay-1 mb-5 text-[#e7b873]">Association Environnement Parfait</p>
                <h1 className="reveal reveal-delay-1 text-balance text-[clamp(3.2rem,8vw,7.6rem)] leading-[.88] tracking-[-.07em]">
                  Agir ici.<br /><span className="serif font-normal italic tracking-[-.04em] text-[#d8e7c9]">Préserver demain.</span>
                </h1>
                <p className="reveal reveal-delay-2 mt-7 max-w-[450px] text-[1rem] leading-relaxed text-[#edf1e9] md:text-[1.1rem]">
                  À N’Djamena, l’AEP rassemble les énergies pour protéger notre environnement et renforcer la solidarité au cœur des communautés.
                </p>
                <div className="reveal reveal-delay-3 mt-8 flex flex-wrap gap-3">
                  <a href="#actions" className="inline-flex items-center gap-3 bg-[#d49a4e] px-5 py-3.5 text-xs font-bold uppercase tracking-[.1em] text-[#1a291b] transition-colors hover:bg-[#e3b46f]" data-testid="link-hero-actions">
                    Découvrir nos actions <ArrowDown size={15} />
                  </a>
                  <a href="#association" className="inline-flex items-center gap-3 border border-[#dce7d6]/60 px-5 py-3.5 text-xs font-bold uppercase tracking-[.1em] text-[#fbfaf6] transition-colors hover:bg-[#fbfaf6] hover:text-[#15331f]" data-testid="link-hero-about">
                    L’AEP en bref <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
              <div className="mt-12 flex flex-wrap items-end gap-x-10 gap-y-5 border-t border-[#dce7d6]/30 pt-5 md:mt-8">
                <div><span className="eyebrow block text-[#c8d9bf]">Création</span><strong className="mt-1 block text-lg font-medium">27.05.2023</strong></div>
                <div><span className="eyebrow block text-[#c8d9bf]">Reconnaissance officielle</span><strong className="mt-1 block text-lg font-medium">17.04.2025</strong></div>
                <div className="ml-auto hidden text-right md:block"><span className="eyebrow block text-[#c8d9bf]">Présidence</span><strong className="mt-1 block text-lg font-medium">Mahamat Assadick Annour</strong></div>
              </div>
            </div>
          </div>
        </section>

        <section id="actions" className="container-aep py-20 md:py-32">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-[650px]">
              <SectionLabel number="01">Ce qui nous met en mouvement</SectionLabel>
              <h2 className="mt-5 text-balance text-4xl leading-[.98] tracking-[-.055em] text-[#15331f] md:text-6xl">
                La transition commence<br /><span className="serif font-normal italic text-[#8a9b7a]">dans nos quartiers.</span>
              </h2>
            </div>
            <p className="max-w-[300px] text-sm leading-relaxed text-[#5f7063]">
              Nos actions associent protection de la nature, transmission des savoirs et attention aux personnes les plus vulnérables.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-[.9fr_1.18fr_.9fr]">
            <ActionCard image={photos.people} number="01" icon={Users} title="Mobiliser" text="Sensibiliser les communautés et faire de l’environnement une responsabilité partagée." />
            <ActionCard image={photos.trees} number="02" icon={TreePine} title="Régénérer" text="Planter, reboiser et prendre soin des espaces qui rendent nos villes plus vivables." featured />
            <ActionCard image={photos.hands} number="03" icon={HandHeart} title="Prendre soin" text="Associer l’action environnementale à l’appui social et humanitaire." />
          </div>
        </section>

        <section id="association" className="bg-[#e9eee5] py-20 md:py-32">
          <div className="container-aep">
            <div className="grid items-start gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
              <div>
                <SectionLabel number="02">Notre raison d’être</SectionLabel>
                <h2 className="mt-6 text-5xl leading-[.9] tracking-[-.06em] text-[#15331f] md:text-7xl">
                  Une terre<br /><span className="serif font-normal italic text-[#ba7f3d]">en partage.</span>
                </h2>
                <div className="mt-10 border-l-2 border-[#c28b45] pl-5">
                  <p className="text-sm leading-relaxed text-[#4c6251]">« Une communauté forte est la première infrastructure d’un avenir durable. »</p>
                </div>
              </div>
              <div className="relative lg:pt-14">
                <div className="relative h-[420px] overflow-hidden bg-[#315d3b] md:h-[530px]">
                  <img src={photos.people} alt="Des personnes réunies pour une action collective en plein air" className="img-zoom size-full object-cover" />
                  <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(16,44,24,.4),transparent_55%)]" />
                  <span className="absolute bottom-5 left-5 eyebrow text-[#edf4e8]">L’humain au centre</span>
                </div>
                <div className="relative -mt-16 ml-8 max-w-[590px] bg-[#fbfaf6] p-7 shadow-[0_18px_54px_rgba(22,39,26,.1)] md:ml-16 md:p-10">
                  <p className="eyebrow text-[#b17836]">Notre mission</p>
                  <p className="mt-4 text-[1.2rem] leading-[1.35] tracking-[-.02em] text-[#15331f] md:text-[1.45rem]">
                    L’AEP œuvre pour un Tchad sain et durable, où les communautés sont résilientes et où la solidarité protège les personnes vulnérables.
                  </p>
                  <div className="mt-8 grid grid-cols-3 border-t border-[#dfe4dc] pt-5">
                    <Feature icon={Leaf} label="Protection" />
                    <Feature icon={Droplets} label="Climat" />
                    <Feature icon={HandHeart} label="Solidarité" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="histoire" className="container-aep py-20 md:py-32">
          <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
            <div>
              <SectionLabel number="03">Une association jeune, un engagement durable</SectionLabel>
              <h2 className="mt-6 max-w-[520px] text-4xl leading-[.95] tracking-[-.055em] md:text-6xl">
                Du premier geste à la <span className="serif font-normal italic text-[#8a9b7a]">force collective.</span>
              </h2>
            </div>
            <div className="space-y-0">
              <TimelineItem year="2023" title="Naissance de l’AEP" text="Le 27 mai, l’Association Environnement Parfait est créée à N’Djamena avec une conviction simple : l’action locale peut changer durablement les habitudes." />
              <TimelineItem year="2025" title="Une reconnaissance officielle" text="Le 17 avril, l’association est officiellement reconnue. Une étape qui confirme la place de l’AEP dans la construction d’un environnement sain au Tchad." />
              <TimelineItem year="Aujourd’hui" title="Agir avec celles et ceux qui font la ville" text="L’AEP développe des actions de proximité avec ses partenaires et les habitants : reboisement, propreté, sensibilisation et appui solidaire." last />
            </div>
          </div>
        </section>

        <section className="container-aep">
          <div className="relative min-h-[500px] overflow-hidden bg-[#193d26] md:min-h-[610px]">
            <img src={photos.canopy} alt="Canopée lumineuse et dense vue depuis le sol" className="absolute inset-0 size-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,35,20,.9),rgba(12,35,20,.15))]" />
            <div className="relative flex min-h-[500px] items-end p-7 md:min-h-[610px] md:p-14 lg:p-20">
              <div className="max-w-[720px] text-[#fbfaf6]">
                <p className="eyebrow text-[#dfac67]">Un avenir qui se construit ensemble</p>
                <h2 className="mt-5 text-[clamp(3rem,7vw,6.8rem)] leading-[.86] tracking-[-.07em]">Cultiver un<br /><span className="serif font-normal italic text-[#d8e7c9]">Tchad vivant.</span></h2>
                <p className="mt-7 max-w-[420px] text-sm leading-relaxed text-[#e1e9de]">Chaque arbre planté, chaque rue nettoyée, chaque voix sensibilisée compte. L’AEP invite les volontaires, les institutions et les acteurs locaux à faire un pas avec nous.</p>
                <a href="#contact" className="mt-8 inline-flex items-center gap-3 bg-[#d49a4e] px-5 py-3.5 text-xs font-bold uppercase tracking-[.1em] text-[#1a291b] transition-colors hover:bg-[#e3b46f]" data-testid="link-cta-contact">
                  Écrire à l’AEP <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="container-aep py-20 md:py-32">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SectionLabel number="04">Nos champs d’action</SectionLabel>
              <h2 className="mt-5 text-4xl leading-[.95] tracking-[-.055em] md:text-6xl">Des gestes concrets,<br /><span className="serif font-normal italic text-[#ba7f3d]">des liens durables.</span></h2>
            </div>
            <p className="max-w-[300px] text-sm leading-relaxed text-[#5f7063]">Une approche de terrain, pensée avec les communautés et attentive aux réalités de N’Djamena.</p>
          </div>
          <div className="mt-12 grid border-t border-[#d8ddd4] md:grid-cols-2 lg:grid-cols-3">
            <Category icon={Sprout} title="Reforestation" text="Planter et protéger les arbres pour restaurer les espaces de vie." />
            <Category icon={Recycle} title="Propreté & assainissement" text="Agir pour des quartiers propres et des pratiques plus responsables." />
            <Category icon={Users} title="Sensibilisation" text="Partager des connaissances utiles, accessibles et ancrées dans le quotidien." />
            <Category icon={Droplets} title="Action climatique" text="Faire grandir la compréhension et la capacité d’adaptation face au climat." />
            <Category icon={HandHeart} title="Soutien social" text="Associer l’engagement environnemental à l’attention portée aux plus fragiles." />
            <Category icon={Leaf} title="Développement durable" text="Encourager des solutions locales qui respectent les personnes et les ressources." />
          </div>
        </section>

        <section id="partenaires" className="border-y border-[#dfe4dc] bg-[#f0f3ed] py-16 md:py-24">
          <div className="container-aep">
            <div className="grid gap-10 md:grid-cols-[.7fr_1.3fr] md:items-center">
              <div>
                <SectionLabel number="05">Faire alliance</SectionLabel>
                <h2 className="mt-5 text-4xl leading-[.95] tracking-[-.055em] md:text-5xl">La force du<br /><span className="serif font-normal italic text-[#8a9b7a]">collectif.</span></h2>
              </div>
              <div>
                <p className="max-w-[570px] text-sm leading-relaxed text-[#4c6251]">L’AEP avance aux côtés d’organisations et de lieux qui partagent une même envie : rendre l’engagement possible, visible et utile.</p>
                <div className="mt-8 grid grid-cols-2 border-t border-[#d5ded2] sm:grid-cols-4">
                  {['Green Chad', 'U-Report', 'Super Banat de Ndjari', 'Maison des Jeunes de Ndjari'].map((partner, index) => (
                    <div key={partner} className="flex min-h-[90px] items-center border-b border-r border-[#d5ded2] pr-4 text-[.82rem] font-semibold leading-tight text-[#31523a] sm:min-h-[110px] sm:pr-6">
                      <span className="mr-3 font-mono text-[.62rem] text-[#b17836]">0{index + 1}</span>{partner}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[#15331f] text-[#fbfaf6]">
          <div className="container-aep py-20 md:py-28">
            <div className="grid gap-14 lg:grid-cols-[1.1fr_.9fr] lg:gap-24">
              <div>
                <p className="eyebrow text-[#dfac67]">06 · La suite s’écrit avec vous</p>
                <h2 className="mt-6 max-w-[760px] text-[clamp(3.2rem,7vw,7rem)] leading-[.86] tracking-[-.07em]">
                  Rejoindre le<br /><span className="serif font-normal italic text-[#d8e7c9]">mouvement.</span>
                </h2>
                <p className="mt-8 max-w-[410px] text-sm leading-relaxed text-[#d8e2d5]">Vous êtes une organisation, un citoyen ou un futur volontaire ? Parlons de ce que nous pouvons construire ensemble.</p>
                <a href="mailto:contact@aep-tchad.org" className="mt-8 inline-flex items-center gap-3 border border-[#d8e7d6]/70 px-5 py-3.5 text-xs font-bold uppercase tracking-[.1em] transition-colors hover:bg-[#fbfaf6] hover:text-[#15331f]" data-testid="link-email-contact">
                  Prendre contact <Mail size={15} />
                </a>
              </div>
              <div className="self-end border-t border-[#6b846d] pt-7">
                <p className="eyebrow text-[#bbceb9]">Recevoir nos nouvelles</p>
                {newsletterState === 'success' ? (
                  <div className="mt-5 flex items-start gap-3 text-[#d8e7c9]" role="status" data-testid="status-newsletter-success">
                    <span className="mt-0.5 grid size-6 place-items-center rounded-full bg-[#d49a4e] text-[#15331f]"><Check size={15} /></span>
                    <p className="text-sm leading-relaxed">Merci. Votre adresse est bien enregistrée pour les nouvelles de l’AEP.</p>
                  </div>
                ) : (
                  <form onSubmit={handleNewsletter} className="mt-5" data-testid="form-newsletter">
                    <label htmlFor="newsletter-email" className="sr-only">Votre adresse e-mail</label>
                    <div className="flex border-b border-[#9eb19d] pb-3">
                      <input id="newsletter-email" name="email" type="email" required placeholder="votre@email.com" className="min-w-0 flex-1 bg-transparent text-sm text-[#fbfaf6] placeholder:text-[#9eb19d] focus:outline-none" data-testid="input-newsletter-email" />
                      <button type="submit" className="grid size-9 shrink-0 place-items-center rounded-full bg-[#d49a4e] text-[#15331f] transition-colors hover:bg-[#e3b46f]" aria-label="S'inscrire à la newsletter" data-testid="button-newsletter-submit"><Send size={15} /></button>
                    </div>
                    <p className="mt-3 text-[.7rem] leading-relaxed text-[#9eb19d]">Un message ponctuel. Des nouvelles du terrain. Pas de bruit.</p>
                  </form>
                )}
                <div className="mt-12 grid gap-5 text-sm text-[#d8e2d5] sm:grid-cols-2">
                  <div className="flex gap-3"><MapPin size={16} className="mt-0.5 shrink-0 text-[#d49a4e]" /><span>N’Djamena,<br />République du Tchad</span></div>
                  <div className="flex gap-3"><CalendarDays size={16} className="mt-0.5 shrink-0 text-[#d49a4e]" /><span>Association créée<br />le 27 mai 2023</span></div>
                </div>
              </div>
            </div>
            <div className="mt-20 flex flex-col justify-between gap-7 border-t border-[#46634b] pt-7 text-[#9eb19d] md:flex-row md:items-center">
              <Logo compact />
              <p className="text-xs">© {new Date().getFullYear()} Association Environnement Parfait. N’Djamena, Tchad.</p>
              <div className="flex gap-3">
                <a href="#contact" aria-label="AEP sur Facebook" className="grid size-9 place-items-center border border-[#46634b] transition-colors hover:border-[#d49a4e] hover:text-[#d49a4e]" data-testid="link-social-facebook"><Facebook size={15} /></a>
                <a href="#contact" aria-label="AEP sur Instagram" className="grid size-9 place-items-center border border-[#46634b] transition-colors hover:border-[#d49a4e] hover:text-[#d49a4e]" data-testid="link-social-instagram"><Instagram size={15} /></a>
                <a href="#contact" aria-label="AEP sur LinkedIn" className="grid size-9 place-items-center border border-[#46634b] transition-colors hover:border-[#d49a4e] hover:text-[#d49a4e]" data-testid="link-social-linkedin"><Linkedin size={15} /></a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function ActionCard({ image, number, icon: Icon, title, text, featured = false }: { image: string; number: string; icon: IconType; title: string; text: string; featured?: boolean }) {
  return (
    <article className={`group relative min-h-[430px] overflow-hidden bg-[#315d3b] ${featured ? 'md:min-h-[500px]' : ''}`} data-testid={`card-action-${number}`}>
      <img src={image} alt="" aria-hidden="true" className="img-zoom absolute inset-0 size-full object-cover opacity-80" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(15,43,23,.9),rgba(15,43,23,.05)_68%)]" />
      <div className="relative flex min-h-[430px] flex-col justify-between p-6 text-[#fbfaf6] md:min-h-[500px] md:p-8">
        <span className="eyebrow text-[#e2b16d]">{number}</span>
        <div>
          <Icon size={25} strokeWidth={1.3} className="mb-5 text-[#d7e6ca]" />
          <h3 className="text-3xl tracking-[-.045em]">{title}</h3>
          <p className="mt-3 max-w-[280px] text-sm leading-relaxed text-[#dce7d9]">{text}</p>
        </div>
      </div>
    </article>
  );
}

function Feature({ icon: Icon, label }: { icon: IconType; label: string }) {
  return <div className="flex items-center gap-2 text-[.68rem] font-semibold uppercase tracking-[.08em] text-[#31523a]"><Icon size={16} strokeWidth={1.6} className="text-[#5d994c]" />{label}</div>;
}

function TimelineItem({ year, title, text, last = false }: { year: string; title: string; text: string; last?: boolean }) {
  return (
    <div className={`grid grid-cols-[72px_1fr] gap-5 border-t border-[#d8ddd4] py-7 ${last ? 'border-b' : ''}`}>
      <span className="font-mono text-[.72rem] font-bold text-[#b17836]">{year}</span>
      <div><h3 className="text-xl tracking-[-.03em] text-[#15331f]">{title}</h3><p className="mt-2 max-w-[490px] text-sm leading-relaxed text-[#607161]">{text}</p></div>
    </div>
  );
}

function Category({ icon: Icon, title, text }: { icon: IconType; title: string; text: string }) {
  return (
    <article className="group border-b border-[#d8ddd4] py-7 md:min-h-[175px] md:border-r md:px-7 md:py-8 first:md:pl-0 md:[&:nth-child(3n)]:border-r-0">
      <Icon size={22} strokeWidth={1.4} className="text-[#5d994c] transition-transform duration-300 group-hover:-translate-y-1" />
      <h3 className="mt-5 text-lg font-semibold tracking-[-.03em]">{title}</h3>
      <p className="mt-2 max-w-[270px] text-sm leading-relaxed text-[#647267]">{text}</p>
    </article>
  );
}

function Router() {
  return (
    <ErrorBoundary resetKey={useLocation()[0]}>
      <Switch>
        <Route path="/" component={AppShell} />
        <Route component={NotFound} />
      </Switch>
    </ErrorBoundary>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
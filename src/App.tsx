import { useEffect, useState, type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Droplets,
  FileCheck,
  Globe,
  HandHeart,
  Leaf,
  Mail,
  MapPin,
  Megaphone,
  Menu,
  Phone,
  Sparkles,
  Trash2,
  TreePine,
  Users,
  X,
} from 'lucide-react';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import NotFound from '@/pages/not-found';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';

const queryClient = new QueryClient();

// Respects the Vite `base` (GitHub Pages project subpath in production, `/` in dev).
const base = import.meta.env.BASE_URL;
const gal = (n: number) => `${base}galerie/galerie-${String(n).padStart(2, '0')}.jpg`;

const CONTACT = {
  email: 'Aep00053@gmail.com',
  phones: ['+235 69 69 79 69', '+235 69 05 12 12'],
  city: 'N’Djamena, République du Tchad',
};

const navItems = [
  { label: 'L’association', href: '#association' },
  { label: 'Domaines', href: '#domaines' },
  { label: 'Méthode', href: '#methode' },
  { label: 'Galerie', href: '#galerie' },
  { label: 'FAQ', href: '#faq' },
];

const identityRows = [
  { label: 'Dénomination', value: 'Association Environnement Parfait' },
  { label: 'Sigle', value: 'AEP' },
  { label: 'Nature', value: 'Association à but non lucratif' },
  { label: 'Création', value: '27 mai 2023' },
  { label: 'Récépissé', value: '17 avril 2025' },
  { label: 'Siège', value: 'N’Djamena, Tchad' },
  { label: 'Président', value: 'Mahamat Assadick Annour' },
];

const benefits = [
  'Protéger et préserver l’environnement au quotidien',
  'Reboiser et agir face aux changements climatiques',
  'Rester solidaires des personnes les plus vulnérables',
];

const steps = [
  {
    icon: Users,
    title: 'Mobiliser',
    text: 'Sensibiliser les communautés et faire de l’environnement une responsabilité partagée, notamment auprès des jeunes.',
  },
  {
    icon: TreePine,
    title: 'Planter',
    text: 'Reboiser, planter des arbres et restaurer les espaces verts et dégradés de nos quartiers.',
  },
  {
    icon: Sparkles,
    title: 'Nettoyer',
    text: 'Organiser des activités de salubrité, d’hygiène et d’assainissement pour un cadre de vie sain.',
  },
  {
    icon: HandHeart,
    title: 'Accompagner',
    text: 'Associer l’action environnementale à la solidarité et à l’assistance des populations vulnérables.',
  },
];

const domains = [
  {
    icon: Leaf,
    title: 'Protection de l’environnement',
    text: 'Protection des ressources naturelles, préservation des écosystèmes et promotion d’un développement durable.',
  },
  {
    icon: TreePine,
    title: 'Reforestation et espaces verts',
    text: 'Plantation d’arbres, sensibilisation à la protection des arbres et restauration des espaces dégradés.',
  },
  {
    icon: Droplets,
    title: 'Changements climatiques',
    text: 'Sensibilisation des communautés sur les causes, les conséquences et les moyens d’adaptation.',
  },
  {
    icon: Sparkles,
    title: 'Salubrité, hygiène et assainissement',
    text: 'Activités de nettoyage, sensibilisation à l’hygiène et promotion d’un cadre de vie sain.',
  },
  {
    icon: Trash2,
    title: 'Pollution et déchets',
    text: 'Sensibilisation à la réduction de la pollution et à une meilleure gestion des déchets.',
  },
  {
    icon: Megaphone,
    title: 'Sensibilisation et mobilisation',
    text: 'Campagnes, conférences, marches et activités éducatives avec les communautés.',
  },
  {
    icon: HandHeart,
    title: 'Actions humanitaires et sociales',
    text: 'Assistance et soutien aux populations vulnérables, déplacées, réfugiées ou affectées par les crises.',
  },
];

const objectives = [
  'Contribuer à la protection et à la préservation de l’environnement',
  'Promouvoir la reforestation et la protection des arbres',
  'Lutter contre les effets des changements climatiques',
  'Promouvoir la salubrité, l’hygiène et l’assainissement',
  'Lutter contre la pollution et la dégradation des écosystèmes',
  'Préserver les espaces verts et les ressources naturelles',
  'Sensibiliser les populations aux enjeux environnementaux et climatiques',
  'Encourager la participation des jeunes aux actions citoyennes',
  'Contribuer aux actions humanitaires en faveur des vulnérables',
  'Participer à la prévention et à la réponse aux crises',
  'Promouvoir la solidarité, l’entraide et la cohésion sociale',
  'Développer des partenariats avec institutions, ONG et acteurs du développement',
];

const activities = [
  'Activités de salubrité et de nettoyage communautaire',
  'Campagnes de sensibilisation environnementale',
  'Reforestation et plantation d’arbres',
  'Sensibilisation sur les changements climatiques',
  'Activités d’hygiène et d’assainissement',
  'Protection des espaces verts',
  'Mobilisation et sensibilisation des jeunes',
  'Initiatives de solidarité et d’assistance humanitaire',
  'Actions en faveur des populations vulnérables et affectées par les crises',
  'Collaborations avec associations, ONG et institutions publiques',
];

const partners = [
  'Green Chad',
  'U-Report',
  'Super Banat de Ndjari',
  'Maison des Jeunes de Ndjari',
];

const audiences = [
  'Jeunes',
  'Femmes',
  'Enfants',
  'Élèves et étudiants',
  'Communautés locales',
  'Populations vulnérables',
  'Populations affectées par les crises',
  'Personnes déplacées et réfugiées',
  'Organisations communautaires',
];

const documents = [
  'Statuts',
  'Règlement intérieur',
  'Procès-verbal de création',
  'Autorisation de fonctionnement',
  'Récépissé du 17 avril 2025',
];

const faqs = [
  {
    q: 'Qu’est-ce que l’Association Environnement Parfait ?',
    a: 'L’AEP est une association tchadienne à but non lucratif créée le 27 mai 2023 à N’Djamena. Elle œuvre pour la protection de l’environnement, le développement durable, la lutte contre les changements climatiques, la salubrité, la reforestation, la sensibilisation communautaire et les actions humanitaires.',
  },
  {
    q: 'L’association est-elle officiellement reconnue ?',
    a: 'Oui. L’AEP a obtenu son récépissé officiel le 17 avril 2025. Elle dispose de ses statuts, de son règlement intérieur, de son procès-verbal de création et de son autorisation de fonctionnement.',
  },
  {
    q: 'Où l’AEP intervient-elle ?',
    a: 'L’AEP intervient principalement à N’Djamena, avec la possibilité d’étendre ses activités dans les différentes provinces du Tchad en fonction des projets, des besoins des communautés et des partenariats établis.',
  },
  {
    q: 'Comment devenir volontaire ou partenaire ?',
    a: 'Écrivez-nous à Aep00053@gmail.com ou appelez-nous au +235 69 69 79 69 / +235 69 05 12 12. L’association collabore déjà avec des associations de jeunes, des ONG, des institutions publiques et des collectivités locales, et reste ouverte à de nouveaux partenariats nationaux et internationaux.',
  },
  {
    q: 'Qui bénéficie des actions de l’AEP ?',
    a: 'Les jeunes, les femmes, les enfants, les élèves et étudiants, les communautés locales, les populations vulnérables ou affectées par les crises, les personnes déplacées et réfugiées, ainsi que les organisations communautaires.',
  },
  {
    q: 'Quels sont les domaines d’action de l’AEP ?',
    a: 'La protection de l’environnement, la reforestation, le climat, la salubrité et l’assainissement, la lutte contre la pollution et les déchets, la sensibilisation communautaire, ainsi que les actions humanitaires et sociales.',
  },
];

type GalleryItem = { src: string; alt: string; caption: string };

const gallery: GalleryItem[] = [
  { src: gal(2), alt: 'Membres de l’AEP réunis autour de la banderole associative', caption: 'L’équipe AEP autour de sa banderole — N’Djamena' },
  { src: gal(3), alt: 'Équipe AEP devant un établissement scolaire', caption: 'Sensibilisation en milieu scolaire — N’Djamena' },
  { src: gal(4), alt: 'Membres de l’AEP en tenue associative', caption: 'L’équipe AEP en tenue associative' },
  { src: gal(5), alt: 'Volontaires de l’AEP en action sur le terrain', caption: 'Action de terrain — N’Djamena' },
  { src: gal(6), alt: 'Volontaires en gilets jaunes nettoyant un espace vert', caption: 'Nettoyage d’espaces verts — N’Djamena' },
  { src: gal(7), alt: 'Mobilisation de volontaires AEP dans un quartier', caption: 'Mobilisation communautaire — N’Djamena' },
  { src: gal(8), alt: 'Plantation d’arbres avec la communauté', caption: 'Plantation d’arbres — N’Djamena' },
  { src: gal(9), alt: 'Volontaires arrosant un jeune plant', caption: 'Arrosage d’un jeune plant — reboisement' },
  { src: gal(10), alt: 'Activité de terrain de l’association', caption: 'Sur le terrain avec les communautés' },
  { src: gal(11), alt: 'Équipe de salubrité de l’AEP', caption: 'Salubrité et assainissement — N’Djamena' },
  { src: gal(12), alt: 'Banderole AEP devant un jeune arbre planté', caption: 'Reboisement : un jeune plant mis en terre' },
  { src: gal(13), alt: 'Volontaires lors d’une activité associative', caption: 'Vie associative — N’Djamena' },
  { src: gal(14), alt: 'Action collective de l’AEP', caption: 'Action collective — N’Djamena' },
  { src: gal(15), alt: 'Membres de l’association sur le terrain', caption: 'En action sur le terrain — N’Djamena' },
  { src: gal(16), alt: 'Grande mobilisation collective avec les partenaires', caption: 'Grande mobilisation collective — 29 avril 2026' },
  { src: gal(17), alt: 'Activité de sensibilisation de l’AEP', caption: 'Sensibilisation — N’Djamena' },
  { src: gal(18), alt: 'Volontaires AEP en opération', caption: 'Opération de terrain — N’Djamena' },
  { src: gal(19), alt: 'Membres de l’AEP à un rassemblement sur la santé et le climat', caption: 'L’AEP au rassemblement santé et climat — Tchad' },
  { src: gal(20), alt: 'Sensibilisation de proximité dans un marché', caption: 'Sensibilisation de proximité — N’Djamena' },
  { src: gal(21), alt: 'Volontaires AEP avec leur matériel de nettoyage', caption: 'Volontaires prêts pour une opération de salubrité' },
];

type IconType = typeof Leaf;

function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <a href="#accueil" className="flex items-center gap-3" aria-label="AEP, retour à l'accueil">
      <span className="grid size-10 shrink-0 place-items-center overflow-hidden rounded-full bg-white">
        <img
          src={gal(1)}
          alt="Logo officiel de l'Association Environnement Parfait"
          className="size-full object-cover"
        />
      </span>
      <span className="leading-none">
        <strong className={`block text-lg font-bold tracking-tight ${dark ? 'text-[#003D20]' : 'text-white'}`}>
          AEP
        </strong>
        <span className={`mt-0.5 block text-[.58rem] font-semibold uppercase tracking-[.12em] ${dark ? 'text-[#68736D]' : 'text-white/70'}`}>
          Environnement Parfait
        </span>
      </span>
    </a>
  );
}

function Eyebrow({ children, tone = 'lime' }: { children: ReactNode; tone?: 'lime' | 'green' | 'light' }) {
  const color =
    tone === 'lime' ? 'text-[#C7FF32]' : tone === 'green' ? 'text-[#003D20]' : 'text-white/70';
  return <p className={`eyebrow ${color}`}>{children}</p>;
}

function LimeButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-2 rounded-full bg-[#C7FF32] px-6 py-3 text-sm font-semibold text-[#003D20] transition hover:brightness-95"
    >
      {children}
      <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
    </a>
  );
}

function OutlineButton({ href, children, onDark = true }: { href: string; children: ReactNode; onDark?: boolean }) {
  return (
    <a
      href={href}
      className={
        onDark
          ? 'inline-flex items-center gap-2 rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#003D20]'
          : 'inline-flex items-center gap-2 rounded-full border border-[#003D20] px-6 py-3 text-sm font-semibold text-[#003D20] transition hover:bg-[#003D20] hover:text-white'
      }
    >
      {children}
    </a>
  );
}

function AppShell() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLightbox(null);
      if (event.key === 'ArrowRight') setLightbox((i) => (i === null ? i : (i + 1) % gallery.length));
      if (event.key === 'ArrowLeft')
        setLightbox((i) => (i === null ? i : (i - 1 + gallery.length) % gallery.length));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox]);

  return (
    <div className="min-h-[100dvh] bg-white text-[#003D20]">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#003D20]/95 backdrop-blur-sm">
        <div className="container-site flex h-[72px] items-center justify-between gap-6">
          <Logo />
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation principale">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/80 transition-colors hover:text-[#C7FF32]"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <LimeButton href="#contact">Nous rejoindre</LimeButton>
          </div>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-full border border-white/25 text-white lg:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <nav
            id="mobile-navigation"
            className="border-t border-white/10 bg-[#002D18] px-5 pb-5 pt-2 lg:hidden"
            aria-label="Navigation mobile"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="flex items-center justify-between border-b border-white/10 py-4 text-sm font-semibold text-white"
              >
                {item.label}
                <ChevronRight size={16} className="text-[#C7FF32]" />
              </a>
            ))}
            <div className="pt-4" onClick={closeMenu}>
              <LimeButton href="#contact">Nous rejoindre</LimeButton>
            </div>
          </nav>
        )}
      </header>

      <main>
        {/* Hero */}
        <section id="accueil" className="bg-[#003D20] pb-16 pt-14 text-white md:pb-24 md:pt-20">
          <div className="container-site text-center">
            <Eyebrow>N’Djamena · Tchad</Eyebrow>
            <h1 className="reveal mx-auto mt-5 max-w-[900px] text-balance text-[clamp(2.6rem,6vw,4.2rem)] font-bold leading-[1.02] tracking-tight">
              Un environnement sain,
              <br />
              une communauté forte.
            </h1>
            <p className="reveal reveal-delay-1 mx-auto mt-6 max-w-[620px] text-[.95rem] leading-relaxed text-white/70 md:text-base">
              L’Association Environnement Parfait rassemble les énergies pour protéger la nature,
              renforcer la résilience climatique et soutenir les plus vulnérables.
            </p>
            <div className="reveal reveal-delay-2 mt-8 flex flex-wrap items-center justify-center gap-3">
              <LimeButton href="#contact">Nous rejoindre</LimeButton>
              <OutlineButton href="#domaines">Découvrir nos actions</OutlineButton>
            </div>
            <div className="reveal reveal-delay-3 mx-auto mt-12 max-w-[1020px] overflow-hidden rounded-[20px] border border-white/15">
              <img
                src={gal(2)}
                alt="Membres de l’AEP réunis autour de la banderole associative à N’Djamena"
                className="aspect-[16/8] w-full object-cover"
              />
            </div>
            <dl className="mx-auto mt-10 grid max-w-[900px] grid-cols-1 gap-6 text-left sm:grid-cols-3">
              {[
                { k: 'Création', v: '27 mai 2023' },
                { k: 'Reconnaissance officielle', v: '17 avril 2025' },
                { k: 'Présidence', v: 'Mahamat Assadick Annour' },
              ].map((fact) => (
                <div key={fact.k} className="rounded-2xl border border-white/12 bg-white/5 px-5 py-4">
                  <dt className="eyebrow text-[#C7FF32]">{fact.k}</dt>
                  <dd className="mt-1.5 text-lg font-semibold">{fact.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Mission + identité */}
        <section id="association" className="bg-white py-16 md:py-28">
          <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow tone="green">Notre mission</Eyebrow>
              <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
                L’environnement, notre responsabilité partagée.
              </h2>
              <p className="mt-6 max-w-[520px] text-[.95rem] leading-relaxed text-[#68736D]">
                Association tchadienne à but non lucratif, l’AEP contribue à la protection de
                l’environnement, au développement durable et à l’amélioration des conditions de vie
                des populations, à travers des actions environnementales, climatiques, sociales,
                humanitaires et de sensibilisation communautaire.
              </p>
              <ul className="mt-8 space-y-4">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-[#C7FF32] text-[#003D20]">
                      <Check size={14} strokeWidth={3} />
                    </span>
                    <span className="text-[.95rem] font-medium">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <OutlineButton href="#domaines" onDark={false}>
                  Voir nos domaines d’action <ArrowUpRight size={15} />
                </OutlineButton>
              </div>
            </div>
            <div className="rounded-[20px] border border-[#003D20] bg-[#003D20] p-7 text-white md:p-10">
              <p className="eyebrow text-[#C7FF32]">Carte d’identité</p>
              <dl className="mt-6 divide-y divide-white/10">
                {identityRows.map((row) => (
                  <div key={row.label} className="grid grid-cols-[130px_1fr] gap-3 py-3.5 sm:grid-cols-[170px_1fr]">
                    <dt className="text-[.8rem] font-medium uppercase tracking-wide text-white/60">
                      {row.label}
                    </dt>
                    <dd className="text-[.95rem] font-semibold">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Méthode */}
        <section id="methode" className="bg-[#F2F6FA] py-16 md:py-28">
          <div className="container-site">
            <div className="mx-auto max-w-[680px] text-center">
              <Eyebrow tone="green">Notre méthode</Eyebrow>
              <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
                Simple et transparente
              </h2>
              <p className="mt-5 text-[.95rem] leading-relaxed text-[#68736D]">
                Quatre gestes concrets, répétés avec les communautés, qui font avancer
                N’Djamena vers un cadre de vie plus sain.
              </p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, i) => (
                <article
                  key={step.title}
                  className="group rounded-[20px] border border-[#D9E0DC] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,61,32,.1)]"
                >
                  <span className="grid size-12 place-items-center rounded-full bg-[#C7FF32] text-[#003D20]">
                    <step.icon size={22} strokeWidth={1.8} />
                  </span>
                  <p className="mt-6 font-mono text-xs font-bold text-[#68736D]">0{i + 1}</p>
                  <h3 className="mt-1 text-xl font-semibold tracking-tight">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#68736D]">{step.text}</p>
                </article>
              ))}
            </div>
            <div className="mt-10 text-center">
              <LimeButton href="#contact">Devenir volontaire</LimeButton>
            </div>
          </div>
        </section>

        {/* Domaines */}
        <section id="domaines" className="bg-white py-16 md:py-28">
          <div className="container-site">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-[640px]">
                <Eyebrow tone="green">Nos champs d’action</Eyebrow>
                <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
                  Sept domaines, un même engagement.
                </h2>
              </div>
              <p className="max-w-[320px] text-sm leading-relaxed text-[#68736D]">
                Une approche de terrain, pensée avec les communautés et attentive aux réalités
                de N’Djamena.
              </p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {domains.map((d) => (
                <article
                  key={d.title}
                  className="group rounded-[20px] border border-[#D9E0DC] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,61,32,.1)]"
                >
                  <span className="grid size-12 place-items-center rounded-full bg-[#003D20] text-[#C7FF32]">
                    <d.icon size={22} strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-6 text-lg font-semibold tracking-tight">{d.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#68736D]">{d.text}</p>
                </article>
              ))}
              <article className="flex flex-col justify-between rounded-[20px] bg-[#003D20] p-7 text-white">
                <div>
                  <Globe size={24} className="text-[#C7FF32]" strokeWidth={1.8} />
                  <h3 className="mt-6 text-lg font-semibold tracking-tight">
                    Un avenir qui se construit ensemble
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/70">
                    Chaque arbre planté, chaque rue nettoyée, chaque voix sensibilisée compte.
                  </p>
                </div>
                <div className="mt-6">
                  <LimeButton href="#contact">Agir avec nous</LimeButton>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Objectifs */}
        <section id="objectifs" className="bg-[#003D20] py-16 text-white md:py-28">
          <div className="container-site">
            <div className="mx-auto max-w-[680px] text-center">
              <Eyebrow>Nos objectifs</Eyebrow>
              <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
                Douze engagements concrets
              </h2>
              <p className="mt-5 text-[.95rem] leading-relaxed text-white/70">
                La feuille de route que l’AEP s’est fixée pour un Tchad sain, résilient
                et solidaire.
              </p>
            </div>
            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {objectives.map((o, i) => (
                <li
                  key={o}
                  className="flex items-start gap-3 rounded-2xl border border-white/12 bg-white/5 p-5"
                >
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-[#C7FF32] text-[#003D20]">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-relaxed text-white/85">
                    <span className="mr-2 font-mono text-xs text-[#C7FF32]">{String(i + 1).padStart(2, '0')}</span>
                    {o}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Activités */}
        <section id="activites" className="bg-[#F2F6FA] py-16 md:py-28">
          <div className="container-site grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
            <div>
              <Eyebrow tone="green">Sur le terrain</Eyebrow>
              <h2 className="mt-4 max-w-[440px] text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
                Nos activités au quotidien
              </h2>
              <p className="mt-5 max-w-[440px] text-[.95rem] leading-relaxed text-[#68736D]">
                Nettoyage communautaire, reforestation, sensibilisation des jeunes, solidarité :
                l’AEP mène et rejoint des actions environnementales, sociales et humanitaires.
              </p>
              <div className="mt-8 overflow-hidden rounded-[20px]">
                <img
                  src={gal(9)}
                  alt="Volontaires de l’AEP arrosant un jeune plant lors d’une activité de reboisement"
                  className="img-zoom aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <ol className="divide-y divide-[#D9E0DC] border-y border-[#D9E0DC]">
              {activities.map((a, i) => (
                <li key={a} className="flex items-baseline gap-4 py-4">
                  <span className="font-mono text-xs font-bold text-[#003D20]/50">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[.95rem] font-medium leading-relaxed">{a}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Galerie */}
        <section id="galerie" className="bg-white py-16 md:py-28">
          <div className="container-site">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-[640px]">
                <Eyebrow tone="green">En images</Eyebrow>
                <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
                  La galerie de nos actions
                </h2>
              </div>
              <p className="max-w-[320px] text-sm leading-relaxed text-[#68736D]">
                Nettoyage, reboisement, sensibilisation : {gallery.length} photos de l’AEP
                en action à N’Djamena. Cliquez pour agrandir.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {gallery.map((photo, i) => (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => setLightbox(i)}
                  className="group relative overflow-hidden rounded-[16px] text-left focus-visible:outline-none"
                  aria-label={`Agrandir : ${photo.caption}`}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="img-zoom aspect-[4/3] w-full object-cover"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-[#002D18]/70 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                  <span className="absolute inset-x-3 bottom-3 truncate text-xs font-semibold text-white opacity-0 transition duration-300 group-hover:opacity-100">
                    {photo.caption}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Zone, publics, documents */}
        <section id="territoires" className="border-y border-[#D9E0DC] bg-[#F2F6FA] py-16 md:py-24">
          <div className="container-site grid gap-5 lg:grid-cols-3">
            <article className="rounded-[20px] border border-[#D9E0DC] bg-white p-7 md:p-8">
              <span className="grid size-12 place-items-center rounded-full bg-[#003D20] text-[#C7FF32]">
                <MapPin size={22} strokeWidth={1.8} />
              </span>
              <h3 className="mt-6 text-xl font-semibold tracking-tight">Zone d’intervention</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#68736D]">
                L’AEP intervient principalement à <strong className="text-[#003D20]">N’Djamena</strong>,
                avec la possibilité d’étendre ses activités dans les différentes provinces du Tchad
                selon les projets, les besoins et les partenariats.
              </p>
            </article>
            <article className="rounded-[20px] border border-[#D9E0DC] bg-white p-7 md:p-8">
              <span className="grid size-12 place-items-center rounded-full bg-[#003D20] text-[#C7FF32]">
                <Users size={22} strokeWidth={1.8} />
              </span>
              <h3 className="mt-6 text-xl font-semibold tracking-tight">Publics bénéficiaires</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {audiences.map((a) => (
                  <span
                    key={a}
                    className="rounded-full border border-[#D9E0DC] bg-[#F2F6FA] px-3.5 py-1.5 text-xs font-semibold text-[#003D20]"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </article>
            <article className="rounded-[20px] border border-[#D9E0DC] bg-white p-7 md:p-8">
              <span className="grid size-12 place-items-center rounded-full bg-[#003D20] text-[#C7FF32]">
                <FileCheck size={22} strokeWidth={1.8} />
              </span>
              <h3 className="mt-6 text-xl font-semibold tracking-tight">Documents officiels</h3>
              <ul className="mt-4 space-y-2.5">
                {documents.map((d) => (
                  <li key={d} className="flex items-start gap-2.5 text-sm text-[#68736D]">
                    <Check size={15} strokeWidth={3} className="mt-0.5 shrink-0 text-[#003D20]" />
                    {d}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        {/* Partenaires */}
        <section id="partenaires" className="bg-white py-16 md:py-24">
          <div className="container-site grid items-center gap-10 md:grid-cols-[.7fr_1.3fr]">
            <div>
              <Eyebrow tone="green">Faire alliance</Eyebrow>
              <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
                La force du collectif.
              </h2>
            </div>
            <div>
              <p className="max-w-[570px] text-sm leading-relaxed text-[#68736D]">
                L’AEP développe des collaborations avec la société civile, des associations de
                jeunes, des ONG, des institutions publiques et des collectivités locales — et
                reste ouverte à de nouveaux partenariats nationaux et internationaux.
              </p>
              <div className="mt-8 grid grid-cols-2 border-t border-[#D9E0DC] sm:grid-cols-4">
                {partners.map((partner, index) => (
                  <div
                    key={partner}
                    className="flex min-h-[90px] items-center border-b border-r border-[#D9E0DC] pr-4 text-[.85rem] font-semibold leading-tight sm:min-h-[110px] sm:pr-6"
                  >
                    <span className="mr-3 font-mono text-xs text-[#68736D]">
                      0{index + 1}
                    </span>
                    {partner}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-[#F2F6FA] py-16 md:py-28">
          <div className="container-site grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
            <div>
              <Eyebrow tone="green">Besoin d’aide ?</Eyebrow>
              <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
                Questions fréquentes
              </h2>
              <p className="mt-5 max-w-[400px] text-[.95rem] leading-relaxed text-[#68736D]">
                Tout ce qu’il faut savoir sur l’association, ses actions et comment la rejoindre.
              </p>
              <p className="mt-6 text-sm font-semibold">Encore une question ?</p>
              <div className="mt-3">
                <LimeButton href="#contact">Nous contacter</LimeButton>
              </div>
            </div>
            <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`} className="border-[#D9E0DC]">
                  <AccordionTrigger className="py-5 text-left text-[1rem] font-semibold hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-[#68736D]">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Contact + CTA final */}
        <section id="contact" className="bg-[#003D20] py-16 text-white md:py-28">
          <div className="container-site">
            <div className="mx-auto max-w-[760px] text-center">
              <Eyebrow>Prêt à agir avec nous ?</Eyebrow>
              <h2 className="mt-4 text-balance text-[clamp(2.4rem,5.5vw,4rem)] font-bold leading-[1.02] tracking-tight">
                Rejoignez le mouvement !
              </h2>
              <p className="mx-auto mt-5 max-w-[560px] text-[.95rem] leading-relaxed text-white/70">
                Volontaires, organisations, citoyens : parlons de ce que nous pouvons construire
                ensemble pour un Tchad sain et durable.
              </p>
              <p className="mx-auto mt-6 max-w-[560px] text-sm italic leading-relaxed text-[#C7FF32]">
                « Protéger l’environnement aujourd’hui, c’est préserver la vie de demain. »
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <LimeButton href={`mailto:${CONTACT.email}`}>Nous écrire</LimeButton>
                <OutlineButton href="#galerie">Voir nos actions en images</OutlineButton>
              </div>
            </div>
            <div className="mx-auto mt-14 grid max-w-[960px] gap-4 sm:grid-cols-3">
              <a
                href={`mailto:${CONTACT.email}`}
                className="group flex items-start gap-4 rounded-[20px] border border-white/12 bg-white/5 p-6 transition hover:bg-white/10"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#C7FF32] text-[#003D20]">
                  <Mail size={19} />
                </span>
                <span>
                  <span className="eyebrow text-white/60">E-mail</span>
                  <span className="mt-1 block text-[.95rem] font-semibold break-all">
                    {CONTACT.email}
                  </span>
                </span>
              </a>
              <a
                href="tel:+23569697969"
                className="group flex items-start gap-4 rounded-[20px] border border-white/12 bg-white/5 p-6 transition hover:bg-white/10"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#C7FF32] text-[#003D20]">
                  <Phone size={19} />
                </span>
                <span>
                  <span className="eyebrow text-white/60">Téléphone</span>
                  {CONTACT.phones.map((p) => (
                    <span key={p} className="mt-1 block text-[.95rem] font-semibold">
                      {p}
                    </span>
                  ))}
                </span>
              </a>
              <div className="flex items-start gap-4 rounded-[20px] border border-white/12 bg-white/5 p-6">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#C7FF32] text-[#003D20]">
                  <MapPin size={19} />
                </span>
                <span>
                  <span className="eyebrow text-white/60">Siège</span>
                  <span className="mt-1 block text-[.95rem] font-semibold">{CONTACT.city}</span>
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-10">
        <div className="container-site">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <Logo dark />
            <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Navigation secondaire">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-[#68736D] transition-colors hover:text-[#003D20]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="mt-8 border-t border-[#D9E0DC] pt-6 text-center text-xs text-[#68736D]">
            <p>© {new Date().getFullYear()} Association Environnement Parfait — N’Djamena, Tchad.</p>
            <p className="mt-1.5 italic">
              Pour un environnement sain, durable et responsable. Ensemble, agissons pour un
              avenir meilleur !
            </p>
          </div>
        </div>
      </footer>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[#002D18]/95 p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={gallery[lightbox].caption}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute right-4 top-4 grid size-11 place-items-center rounded-full border border-white/25 text-white transition hover:bg-white hover:text-[#003D20]"
            aria-label="Fermer la visionneuse"
          >
            <X size={20} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox - 1 + gallery.length) % gallery.length);
            }}
            className="absolute left-2 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/25 text-white transition hover:bg-white hover:text-[#003D20] md:left-6"
            aria-label="Photo précédente"
          >
            <ChevronLeft size={20} />
          </button>
          <figure
            className="max-h-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={gallery[lightbox].src}
              alt={gallery[lightbox].alt}
              className="max-h-[78vh] w-auto rounded-[16px] object-contain"
            />
            <figcaption className="mt-3 text-center text-sm font-medium text-white/85">
              {gallery[lightbox].caption} · {lightbox + 1}/{gallery.length}
            </figcaption>
          </figure>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox + 1) % gallery.length);
            }}
            className="absolute right-2 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/25 text-white transition hover:bg-white hover:text-[#003D20] md:right-6"
            aria-label="Photo suivante"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
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

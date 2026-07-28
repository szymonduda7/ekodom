import fs from "node:fs";
import path from "node:path";

const services = [
  {
    slug: "blachodachowka",
    name: "Blachodachówka",
    eyebrowTag: "Pokrycia stalowe",
    metaDesc: "Blachodachówka w Sanoku: modele Gerard, Ruukki i Bratex. Sprzedaż, doradztwo, obmiar i transport gratis. Tel. 880 118 640.",
    heroLead: "Trwałe pokrycia stalowe znanych marek, m.in. Gerard, Ruukki i Bratex, dobrane do bieszczadzkiego klimatu i bryły Twojego domu.",
    heroImage: "6.webp",
    heroImageAlt: "Ukończone pokrycie dachu blachodachówką w kolorze grafitowym, realizacja EKO-DOM SANOK",
    heroColor: "1C1A1A",
    icon: `<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>`,
    includes: [
      "Doradztwo w wyborze marki, profilu i koloru blachy",
      "Blachodachówka Gerard, Ruukki, Bratex i inne",
      "Akcesoria montażowe: gąsiory, wiatrownice, taśmy",
      "Dokładny obmiar połaci przed zamówieniem",
      "Transport materiału na budowę w cenie",
      "Montaż w wykonaniu sprawdzonej ekipy dekarskiej",
    ],
    why: "Blachodachówka renomowanych producentów jest projektowana z myślą o dużym obciążeniu śniegiem i częstych przemarzaniach, dlatego dobrze sprawdza się w klimacie Bieszczadów.",
  },
  {
    slug: "dachowka-ceramiczna",
    name: "Dachówka ceramiczna",
    eyebrowTag: "Pokrycie klasyczne",
    metaDesc: "Dachówka ceramiczna w Sanoku: próbki kolorów, doradztwo, obmiar i transport gratis. Naturalne pokrycie o wieloletniej trwałości. Tel. 880 118 640.",
    heroLead: "Naturalna dachówka ceramiczna o wieloletniej trwałości, w kolorach i profilach dobranych do charakteru budynku.",
    heroColor: "8B2A20",
    icon: `<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>`,
    includes: [
      "Prezentacja próbek dachówki w różnych kolorach i profilach",
      "Dachówka podstawowa, gąsiory i dachówki brzegowe",
      "Dobór akcesoriów: kominki wentylacyjne, ławy kominiarskie",
      "Wyliczenie zapotrzebowania materiału na podstawie obmiaru",
      "Dowóz palet z dachówką na plac budowy",
      "Montaż zgodny z systemem zakładek producenta",
    ],
    why: "Dachówka ceramiczna to materiał sprawdzony przez pokolenia, odporny na promieniowanie UV, grad i duże wahania temperatur.",
  },
  {
    slug: "wiezba-dachowa",
    name: "Więźba dachowa",
    eyebrowTag: "Konstrukcja",
    metaDesc: "Więźba dachowa w Sanoku: wyliczenie, impregnacja i transport na budowę. Drewniana konstrukcja pod dowolne pokrycie. Tel. 880 118 640.",
    heroLead: "Drewniana konstrukcja dachu przygotowana pod wybrane pokrycie i dostarczona na budowę razem z resztą zamówienia.",
    heroImage: "5.webp",
    heroImageAlt: "Zaimpregnowane drewno konstrukcyjne na więźbę dachową, przygotowane do transportu",
    heroColor: "1C1A1A",
    icon: `<path d="M12 4 4 20"/><path d="M12 4 20 20"/><path d="M8.5 14h7"/>`,
    includes: [
      "Wyliczenie zapotrzebowania na drewno konstrukcyjne",
      "Więźba pod dachówkę, blachodachówkę lub gont",
      "Impregnacja drewna zabezpieczająca przed wilgocią i owadami",
      "Dobór przekrojów krokwi i płatwi do rozpiętości dachu",
      "Transport elementów więźby na plac budowy",
      "Koordynacja z ekipą ciesielską przy montażu",
    ],
    why: "Solidna więźba to podstawa całego dachu. Dobrze dobrane i zaimpregnowane drewno decyduje o trwałości konstrukcji na dekady.",
  },
  {
    slug: "montaz-dachow",
    name: "Montaż dachów",
    eyebrowTag: "Wykonawstwo",
    metaDesc: "Montaż dachów w Sanoku i okolicy: więźba, krycie, obróbki blacharskie i rynny. Sprawdzone ekipy dekarskie. Tel. 880 118 640.",
    heroLead: "Zakupione u nas pokrycie kładą sprawdzone ekipy montażowe, zgodnie ze sztuką dekarską i wytycznymi producenta.",
    heroImage: "15.webp",
    heroImageAlt: "Dom w trakcie krycia dachu blachą na rąbek stojący, montaż w toku",
    heroColor: "1C1A1A",
    icon: `<path d="m15 12-8.5 8.5a2.12 2.12 0 1 1-3-3L12 9"/><path d="M17.64 15 22 10.64"/><path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.41-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91"/>`,
    includes: [
      "Montaż więźby, łacenia i membrany dachowej",
      "Krycie dachówką, blachodachówką lub blachą na rąbek",
      "Obróbki blacharskie kominów i okien połaciowych",
      "Montaż rynien i pasów nadrynnowych",
      "Odbiór dachu wspólnie z inwestorem",
      "Uporządkowanie terenu po zakończeniu prac",
    ],
    why: "Nawet najlepszy materiał wymaga starannego montażu. Współpracujemy z ekipami, które znają specyfikę pokryć, jakie sprzedajemy.",
  },
  {
    slug: "rynny-i-obrobki",
    name: "Rynny i obróbki blacharskie",
    eyebrowTag: "Wykończenie",
    metaDesc: "Rynny i obróbki blacharskie w Sanoku: systemy rynnowe, obróbki kominów i okien połaciowych. Tel. 880 118 640.",
    heroLead: "Systemy rynnowe oraz obróbki blacharskie kominów, okien połaciowych i pasów nadrynnowych, dopełniające szczelność dachu.",
    heroImage: "20.webp",
    heroImageAlt: "Obróbka blacharska parapetu okiennego, precyzyjne wykończenie w kolorze grafitowym",
    heroColor: "1C1A1A",
    icon: `<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>`,
    includes: [
      "Dobór systemu rynnowego do wielkości połaci",
      "Rynny, rury spustowe i akcesoria mocujące",
      "Obróbki kominów, okien połaciowych i koszy dachowych",
      "Pasy nadrynnowe i wiatrownice",
      "Wyliczenie materiału na podstawie długości okapu",
      "Montaż w ramach kompleksowej realizacji dachu",
    ],
    why: "Dobrze wykonane obróbki i rynny chronią elewację i fundamenty przed wilgocią, a to one najczęściej odpowiadają za nieszczelności dachu.",
  },
  {
    slug: "doradztwo-i-wycena",
    name: "Doradztwo, obmiar i transport",
    eyebrowTag: "Pierwszy krok",
    metaDesc: "Bezpłatne doradztwo, obmiar dachu i transport materiału w Sanoku. Umów wycenę pokrycia dachowego. Tel. 880 118 640.",
    heroLead: "Bezpłatna konsultacja, dokładny obmiar połaci dachowej i dowóz zamówienia na budowę, bez dodatkowych kosztów.",
    heroImage: "2.webp",
    heroImageAlt: "Punkt sprzedaży EKO-DOM SANOK i samochód dostawczy z materiałami dekarskimi",
    heroColor: "1C1A1A",
    icon: `<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/>`,
    includes: [
      "Rozmowa o potrzebach i budżecie inwestycji",
      "Prezentacja próbek materiałów i kolorów w punkcie sprzedaży",
      "Dokładny obmiar dachu i wyliczenie ilości materiału",
      "Przygotowanie wyceny kompletnego zamówienia",
      "Ustalenie terminu dowozu materiału na budowę",
      "Transport na plac budowy w cenie zamówienia",
    ],
    why: "Dobry dach zaczyna się od dobrej wyceny. Zanim złożysz zamówienie, dokładnie mierzymy dach i doradzamy, żeby uniknąć niepotrzebnych kosztów.",
  },
];

const steps = [
  { num: "01", title: "Kontakt i konsultacja", text: "Dzwonisz lub odwiedzasz punkt przy Piastowskiej, rozmawiamy o Twoich potrzebach i budynku." },
  { num: "02", title: "Obmiar i wycena", text: "Mierzymy dach i przygotowujemy wycenę materiału dopasowaną do Twojego budynku." },
  { num: "03", title: "Zamówienie i dostawa", text: "Realizujemy zamówienie i dowozimy materiał na budowę w ustalonym terminie." },
  { num: "04", title: "Montaż i odbiór", text: "Współpracujące z nami ekipy kładą pokrycie, a na końcu wspólnie odbieramy efekt." },
];

const check = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`;
const phoneIcon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`;
const chev = `<svg class="chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>`;

function otherServices(current) {
  return services.filter((s) => s.slug !== current.slug).slice(0, 5);
}

function render(s) {
  const others = otherServices(s);
  return `<!doctype html>
<html lang="pl">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${s.name} Sanok | EKO-DOM SANOK</title>
<meta name="description" content="${s.metaDesc}" />
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%231C1A1A' rx='6'/%3E%3Cpath d='M6 20 L16 9 L26 20' stroke='%23EE1D23' stroke-width='2.4' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E" />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "${s.name}",
  "provider": {
    "@type": "RoofingContractor",
    "name": "EKO-DOM SANOK Dystrybutor Pokryć Dachowych",
    "telephone": "+48880118640",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Piastowska 51",
      "postalCode": "38-500",
      "addressLocality": "Sanok",
      "addressCountry": "PL"
    }
  },
  "areaServed": "Sanok i okolice"
}
</script>
<link rel="stylesheet" href="../css/styles.css">
</head>
<body class="antialiased">

<a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg">Przejdź do treści</a>

<header class="sticky top-0 z-40 bg-white/90 backdrop-blur border-b hairline">
  <div class="max-w-6xl mx-auto px-5 md:px-8 h-[68px] flex items-center justify-between">
    <a href="../index.html" class="flex items-center">
      <img src="../images/logo.webp" alt="EKO-DOM SANOK Dachy - sprzedaż, montaż, serwis, transport" class="h-11 md:h-12 w-auto">
    </a>
    <nav class="hidden md:flex items-center gap-8">
      <a href="../index.html#uslugi" class="nav-link active">Usługi</a>
      <a href="../index.html#oferta" class="nav-link">Materiały</a>
      <a href="../index.html#realizacje" class="nav-link">Realizacje</a>
      <a href="../index.html#opinie" class="nav-link">Opinie</a>
      <a href="../index.html#kontakt" class="nav-link">Kontakt</a>
    </nav>
    <a href="tel:+48880118640" class="nav-call btn btn-primary !py-2.5 !px-4 !text-sm">
      ${phoneIcon}
      <span>880 118 640</span>
    </a>
    <button type="button" id="menuToggle" class="nav-toggle items-center justify-center w-10 h-10 rounded-lg border hairline" aria-expanded="false" aria-controls="mobileMenu" aria-label="Otwórz menu">
      <svg id="iconMenuOpen" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg>
      <svg id="iconMenuClose" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>
    </button>
  </div>
</header>

<div id="menuBackdrop" class="menu-backdrop" style="position:fixed; inset:0; top:68px; z-index:30; background:rgba(21,24,27,.4);"></div>
<div id="mobileMenu" class="mobile-menu" style="position:fixed; top:68px; left:0; right:0; z-index:35; background:#fff; border-bottom:1px solid var(--line); box-shadow:0 20px 34px -22px rgba(21,24,27,.3);">
  <nav class="max-w-6xl mx-auto px-5">
    <a href="../index.html#uslugi" class="mobile-nav-link">Usługi</a>
    <a href="../index.html#oferta" class="mobile-nav-link">Materiały</a>
    <a href="../index.html#realizacje" class="mobile-nav-link">Realizacje</a>
    <a href="../index.html#opinie" class="mobile-nav-link">Opinie</a>
    <a href="../index.html#kontakt" class="mobile-nav-link">Kontakt</a>
  </nav>
</div>

<main id="main">
  <section class="relative overflow-hidden">
    <div class="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-6 md:pt-12 md:pb-10">
      <nav class="breadcrumb mb-8" aria-label="Okruszki">
        <a href="../index.html">Strona główna</a>
        <span class="sep">/</span>
        <a href="../index.html#uslugi">Usługi</a>
        <span class="sep">/</span>
        <span class="current">${s.name}</span>
      </nav>

      <div class="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-center">
        <div>
          <p class="eyebrow mb-5">Usługa · ${s.eyebrowTag}</p>
          <h1 class="font-display text-[2.25rem] sm:text-[2.9rem] lg:text-[3.4rem]" style="color:var(--ink)">${s.name}</h1>
          <p class="mt-7 text-lg leading-[1.7] max-w-xl" style="color:var(--ink-soft)">${s.heroLead}</p>
          <div class="mt-9 flex flex-wrap items-center gap-4">
            <a href="tel:+48880118640" class="btn btn-primary">
              ${phoneIcon}
              Zadzwoń: 880 118 640
            </a>
            <a href="../index.html#uslugi" class="btn btn-ghost">Wszystkie usługi</a>
          </div>
        </div>

        <div class="relative mt-2 lg:mt-0">
          <div class="rounded-2xl overflow-hidden" style="aspect-ratio:4/5; box-shadow:0 1px 2px rgba(21,24,27,.08), 0 32px 54px -26px rgba(21,24,27,.4);">
            <img src="${s.heroImage ? "../images/" + s.heroImage : `https://placehold.co/800x1000/${s.heroColor}/FFFFFF?text=${encodeURIComponent(s.name)}`}" alt="${s.heroImageAlt || s.name + " - oferta EKO-DOM SANOK"}" class="w-full h-full" style="object-fit:cover;">
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="pb-20 md:pb-28" style="background:var(--cloud)">
    <div class="max-w-6xl mx-auto px-5 md:px-8">
      <div class="max-w-2xl mb-10">
        <p class="eyebrow mb-4">Zakres usługi</p>
        <h2 class="font-display text-3xl md:text-4xl" style="color:var(--ink)">Co obejmuje</h2>
      </div>
      <div class="grid sm:grid-cols-2 gap-x-10">
        ${s.includes
          .map(
            (item) => `<div class="check-item">
          <span class="check-icon">${check}</span>
          <p class="text-sm leading-[1.6]" style="color:var(--ink-soft)">${item}</p>
        </div>`
          )
          .join("\n        ")}
      </div>
    </div>
  </section>

  <section class="py-20 md:py-28">
    <div class="max-w-6xl mx-auto px-5 md:px-8">
      <div class="max-w-2xl mb-14">
        <p class="eyebrow mb-4">Przebieg realizacji</p>
        <h2 class="font-display text-3xl md:text-4xl" style="color:var(--ink)">Jak pracujemy</h2>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
        ${steps
          .map(
            (st) => `<div class="step-card">
          <span class="step-num">${st.num}</span>
          <h3 class="font-display text-xl mt-3 mb-2" style="color:var(--ink)">${st.title}</h3>
          <p class="text-sm leading-[1.7]" style="color:var(--ink-soft)">${st.text}</p>
        </div>`
          )
          .join("\n        ")}
      </div>
    </div>
  </section>

  <section class="slate-panel py-20 md:py-28">
    <div class="max-w-6xl mx-auto px-5 md:px-8">
      <p class="eyebrow mb-4" style="color:var(--red-light)">Dlaczego ${s.name.toLowerCase()}</p>
      <h2 class="font-display text-3xl md:text-4xl text-white max-w-2xl">${s.why}</h2>
    </div>
  </section>

  <section style="background:var(--red)" class="py-16 md:py-20">
    <div class="max-w-6xl mx-auto px-5 md:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
      <div>
        <p class="eyebrow mb-2" style="color:rgba(255,255,255,.8)">Umów wycenę</p>
        <h2 class="font-display text-3xl md:text-4xl text-white">Porozmawiajmy o Twoim dachu.</h2>
      </div>
      <a href="tel:+48880118640" class="btn btn-on-dark flex-shrink-0">
        ${phoneIcon}
        Zadzwoń: 880 118 640
      </a>
    </div>
  </section>

  <section class="py-20 md:py-28" style="background:var(--cloud)">
    <div class="max-w-6xl mx-auto px-5 md:px-8">
      <div class="max-w-2xl mb-10">
        <p class="eyebrow mb-4">Zobacz też</p>
        <h2 class="font-display text-3xl md:text-4xl" style="color:var(--ink)">Pozostałe usługi</h2>
      </div>
      <div class="grid sm:grid-cols-2 gap-4">
        ${others
          .map(
            (o) => `<a href="${o.slug}.html" class="service-link-card">
          <div class="icon-ring">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${o.icon}</svg>
          </div>
          <div>
            <p class="font-semibold text-sm" style="color:var(--ink)">${o.name}</p>
          </div>
          ${chev}
        </a>`
          )
          .join("\n        ")}
      </div>
    </div>
  </section>
</main>

<footer class="py-8 border-t hairline">
  <div class="max-w-6xl mx-auto px-5 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
    <img src="../images/logo.webp" alt="EKO-DOM SANOK Dachy" class="h-9 w-auto">
    <p class="text-xs" style="color:var(--ink-soft)">&copy; 2026 EKO-DOM SANOK · Piastowska 51, 38-500 Sanok · 880 118 640</p>
  </div>
</footer>

<div class="fixed bottom-0 inset-x-0 z-40 md:hidden bg-white border-t hairline px-4 py-3">
  <a href="tel:+48880118640" class="btn btn-primary w-full justify-center">
    ${phoneIcon}
    Zadzwoń: 880 118 640
  </a>
</div>
<div class="h-20 md:hidden" aria-hidden="true"></div>

<script src="../js/main.js"></script>

</body>
</html>
`;
}

const outDir = path.join(process.cwd(), "uslugi");
fs.mkdirSync(outDir, { recursive: true });
for (const s of services) {
  fs.writeFileSync(path.join(outDir, `${s.slug}.html`), render(s));
  console.log("Wrote", s.slug + ".html");
}

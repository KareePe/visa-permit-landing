// Generates the SEO / AEO layer from the page content (assets/i18n.js + index.html):
//   - index.html between <!-- seo:start --> / <!-- seo:end -->: canonical, hreflang, Open Graph,
//     Twitter card and JSON-LD (organization, website, page, services, process, FAQ)
//   - sitemap.xml, robots.txt, llms.txt
// Run with `npm run build:seo` (or `npm run build`) after changing content or SITE_URL.
import { readFileSync, writeFileSync } from 'node:fs';
import vm from 'node:vm';

// ⚠️ Production URL with trailing slash — replace before deploying, then run `npm run build`
const SITE_URL = 'https://example.com/';
const EN_URL = `${SITE_URL}?lang=en`;
const OG_IMAGE = `${SITE_URL}assets/img/og-image.jpg`;

const CONTACT = {
  legalName: 'FDI Accounting & Advisory Co., Ltd.',
  thaiName: 'บริษัท เอฟ ดี ไอ แอคเคาน์ติ้ง แอนด์ แอดไวซอรี่ จำกัด',
  phones: ['+66-2-642-6866', '+66-2-642-6869', '+66-2-642-6895'],
  email: 'infojob@fdi.co.th',
  line: 'https://line.me/R/ti/p/@fdigroup',
  website: 'https://www.fdi.co.th',
  social: ['https://www.youtube.com/@fdigroup_Official', 'https://www.facebook.com/fdiaccounting', 'https://www.tiktok.com/@fdigroup_official'],
  address: {
    streetAddress: '41 Lertpanya Building, 14th Floor, Room 1403-1405, Soi Lertpanya, Si Ayutthaya Road, Thanon Phaya Thai',
    addressLocality: 'Ratchathewi',
    addressRegion: 'Bangkok',
    postalCode: '10400',
    addressCountry: 'TH'
  },
  languages: ['Thai', 'English', 'Japanese', 'Chinese']
};

const root = new URL('..', import.meta.url);
const read = f => readFileSync(new URL(f, root), 'utf8');
const write = (f, s) => { writeFileSync(new URL(f, root), s); console.log(`✓ ${f}`); };

// Load I18N_EN / CONTENT / faqJsonLd from the browser script
const ctx = vm.createContext({});
vm.runInContext(`${read('assets/i18n.js')}\n;globalThis.out = { I18N_EN, CONTENT, faqJsonLd };`, ctx);
const { I18N_EN, CONTENT, faqJsonLd } = ctx.out;

let html = read('index.html');
const decode = s => s.replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
const strip = s => decode(s.replace(/<br\s*\/?>/g, ' ').replace(/<[^>]+>/g, ''));
const attr = s => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const json = o => JSON.stringify(o, null, 2).replace(/</g, '\\u003c');

const TH = {
  title: decode(html.match(/<title[^>]*>([^<]*)<\/title>/)[1]),
  desc: decode(html.match(/<meta name="description"[^>]*content="([^"]*)"/)[1])
};
const EN = { title: strip(I18N_EN['meta.title']), desc: strip(I18N_EN['meta.desc']) };

/* ---------- JSON-LD ---------- */
const orgId = `${SITE_URL}#organization`;
const graph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': orgId,
      name: CONTACT.legalName,
      alternateName: ['FDI A&A', CONTACT.thaiName],
      url: SITE_URL,
      logo: `${SITE_URL}assets/img/fdi-logo.webp`,
      image: OG_IMAGE,
      description: EN.desc,
      foundingDate: '2003',
      parentOrganization: { '@type': 'Organization', name: 'FDI Group', url: CONTACT.website },
      telephone: CONTACT.phones[0],
      email: CONTACT.email,
      address: { '@type': 'PostalAddress', ...CONTACT.address },
      openingHoursSpecification: [{
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:30',
        closes: '17:00'
      }],
      contactPoint: CONTACT.phones.map(telephone => ({
        '@type': 'ContactPoint', telephone, contactType: 'customer service', areaServed: 'TH', availableLanguage: CONTACT.languages
      })),
      areaServed: { '@type': 'Country', name: 'Thailand' },
      knowsLanguage: ['th', 'en', 'ja', 'zh'],
      sameAs: [...CONTACT.social, CONTACT.line, CONTACT.website],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Visa & Work Permit Services',
        itemListElement: CONTENT.en.SVC_MAIN.map(([, name, description], i) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name, alternateName: CONTENT.th.SVC_MAIN[i][1], description, provider: { '@id': orgId }, areaServed: 'TH' }
        }))
      }
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}#website`,
      url: SITE_URL,
      name: 'Visa & Work Permit Services in Thailand',
      publisher: { '@id': orgId },
      inLanguage: ['th', 'en']
    },
    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}#webpage`,
      url: SITE_URL,
      name: TH.title,
      description: TH.desc,
      inLanguage: 'th',
      isPartOf: { '@id': `${SITE_URL}#website` },
      about: { '@id': orgId },
      primaryImageOfPage: { '@type': 'ImageObject', url: OG_IMAGE, width: 1200, height: 630 }
    },
    {
      '@type': 'HowTo',
      name: strip(I18N_EN['proc.title']),
      description: strip(I18N_EN['proc.lead']),
      step: CONTENT.en.STEPS.map(([, name, text, tags], i) => ({
        '@type': 'HowToStep', position: i + 1, name, text: [text, ...(tags || [])].filter(Boolean).join(' — ')
      }))
    }
  ]
};

const seo = `
<link rel="canonical" href="${SITE_URL}">
<link rel="alternate" hreflang="th" href="${SITE_URL}">
<link rel="alternate" hreflang="en" href="${EN_URL}">
<link rel="alternate" hreflang="x-default" href="${SITE_URL}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${attr(CONTACT.legalName)}">
<meta property="og:url" content="${SITE_URL}">
<meta property="og:title" content="${attr(TH.title)}">
<meta property="og:description" content="${attr(TH.desc)}">
<meta property="og:image" content="${OG_IMAGE}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${attr(CONTACT.legalName)}">
<meta property="og:locale" content="th_TH">
<meta property="og:locale:alternate" content="en_US">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${attr(TH.title)}">
<meta name="twitter:description" content="${attr(TH.desc)}">
<meta name="twitter:image" content="${OG_IMAGE}">
<script type="application/ld+json">
${json(graph)}
</script>
<script type="application/ld+json" id="ld-faq">
${json(faqJsonLd('th'))}
</script>
`;
html = html.replace(/(<!-- seo:start[^>]*-->)[\s\S]*?(<!-- seo:end -->)/, `$1${seo}$2`);
write('index.html', html);

/* ---------- sitemap.xml ---------- */
const today = new Date().toISOString().slice(0, 10);
const alternates = `
    <xhtml:link rel="alternate" hreflang="th" href="${SITE_URL}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${EN_URL}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}"/>`;
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${[SITE_URL, EN_URL].map(loc => `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>${alternates}
  </url>`).join('\n')}
</urlset>
`);

/* ---------- robots.txt ---------- */
write('robots.txt', `# Search engines and AI answer engines are welcome
User-agent: *
Allow: /

Sitemap: ${SITE_URL}sitemap.xml
`);

/* ---------- llms.txt (plain-language summary for AI answer engines) ---------- */
const list = items => items.map(t => `- ${t}`).join('\n');
const faq = rows => rows.map(([q, a]) => `### ${q}\n${a}`).join('\n\n');
const steps = rows => rows.map(([, t, d, tags], i) => `${i + 1}. ${t}${d ? ` — ${d}` : ''}${tags ? ` (${tags.join(', ')})` : ''}`).join('\n');
const en = CONTENT.en, th = CONTENT.th;
write('llms.txt', `# ${CONTACT.legalName} — Visa & Work Permit Services in Thailand

> ${EN.desc}

${strip(I18N_EN['hero.intro'])}

- Thai page: ${SITE_URL}
- English page: ${EN_URL}

## Contact
- LINE: @fdigroup — ${CONTACT.line}
- Phone: ${CONTACT.phones.join(', ')}
- Email: ${CONTACT.email}
- Website: ${CONTACT.website}
- Address: ${Object.values(CONTACT.address).join(', ')}
- Business hours: Monday – Friday, 08:30 – 17:00 (Bangkok time); closed Saturday – Sunday
- Languages: ${CONTACT.languages.join(', ')}

## Services
${list(en.SVC_MAIN.map(([, t, d]) => `**${t}**: ${d}`))}

### ${strip(I18N_EN['svc.inTitle'])}
${list(en.SVC_INBOUND)}

### ${strip(I18N_EN['svc.outTitle'])}
${list(en.SVC_OUTBOUND)}

${strip(I18N_EN['svc.docs'])}: ${en.SVC_DOCS.join(', ')}.

## Why FDI
${list(en.WHY.map(([, t, d]) => `**${t}**: ${d}`))}

## ${strip(I18N_EN['proc.title'])}
${steps(en.STEPS)}

${strip(I18N_EN['proc.note1'])} ${strip(I18N_EN['proc.note2'])}

## FAQ
${faq(en.FAQ)}

---

# ภาษาไทย

> ${TH.desc}

## บริการ
${list(th.SVC_MAIN.map(([, t, d]) => `**${t}**: ${d}`))}

## ขั้นตอนการดำเนินงาน
${steps(th.STEPS)}

## คำถามที่พบบ่อย
${faq(th.FAQ)}
`);

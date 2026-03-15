// ══════════════════════════════════════════════════════════════════════════════
// DASHBOARD CONFIGURATION
// Edit this file to customise fonts, branding, must reads, and sources.
// No React knowledge needed — just edit values and save.
// ══════════════════════════════════════════════════════════════════════════════


// ── Typography ─────────────────────────────────────────────────────────────────
// Font families — paste in any Google Fonts stack you prefer.
export const fontSans  = "'DM Sans', 'Helvetica Neue', sans-serif";
export const fontSerif = "'Newsreader', 'Georgia', serif";
export const fontMono  = "'JetBrains Mono', 'Fira Code', monospace";

// Global font scale — 1.0 = default, 1.1 = ~10% larger, 0.9 = ~10% smaller.
// This multiplies every font size in the dashboard uniformly.
export const fontScale = 1.5;


// ── Author / Credit ────────────────────────────────────────────────────────────
// Shown in the footer. Set url to null to render plain text (no link).
export const author = {
  name: "BoundlessPM",
  url:  "https://boundlesspm.substack.com/",   // set to null to disable the hyperlink
};


// ── Must Reads ─────────────────────────────────────────────────────────────────
// Add, remove, or reorder tiers and items freely.
// Each item: { title, author, why, url, time }
export const mustReads = [
  { tier: "Foundational Reading", emoji: "🎯", items: [
    {
      title: "Data-Informed Product Building (Full Series)",
      author: "Sequoia Capital Data Science",
      why: "The single best free resource for learning product analytics from first principles. 12+ articles covering metrics, retention, growth frameworks.",
      url: "https://articles.sequoiacap.com/building-products-using-data",
      time: "3–4 hours",
    },
    {
      title: "Why Most Analytics Efforts Fail",
      author: "Crystal Widjaja (Reforge)",
      why: "The definitive piece on why teams waste months on bad analytics. Required reading before touching any tool.",
      url: "https://www.reforge.com/blog/why-most-analytics-efforts-fail",
      time: "30 min",
    },
    {
      title: "Growth Loops Are the New Funnels",
      author: "Reforge",
      why: "Reframes how products actually grow. Moves you beyond the basic AARRR funnel model.",
      url: "https://www.reforge.com/blog/growth-loops",
      time: "30 min",
    },
    {
      title: "The Product Analytics Market: Overview and Deep Dive",
      author: "Aakash Gupta",
      why: "11K-word deep dive with VP of Product interviews from Amplitude, Mixpanel, Pendo, Heap. The source for the magic quadrant framework.",
      url: "https://www.news.aakashg.com/p/product-analytics-market",
      time: "50 min",
    },
  ]},
  { tier: "Metrics & Retention", emoji: "📈", items: [
    {
      title: "The Four Fits to $100M+",
      author: "Brian Balfour",
      why: "Framework connecting market, product, channel, and model fit. Changes how you think about which metrics matter.",
      url: "https://brianbalfour.com/essays",
      time: "20 min",
    },
    {
      title: "How to Know If You Have Product/Market Fit",
      author: "Lenny Rachitsky",
      why: "Practical PMF metrics with real benchmarks across SaaS, consumer, and marketplace businesses.",
      url: "https://medium.com/@lennysan/how-to-know-if-youve-got-product-market-fit-d19a8fe6faf7",
      time: "15 min",
    },
    {
      title: "North Star Metric Playbook",
      author: "Amplitude",
      why: "The definitive guide to choosing and using a north star metric. Deep, practical, framework-driven.",
      url: "https://amplitude.com/blog",
      time: "40 min",
    },
    {
      title: "Data as a Strategic Lever of Growth",
      author: "Brian Balfour",
      why: "Breaks down Crystal Widjaja's data maturity stages. Connects analytics capability to business outcomes.",
      url: "https://brianbalfour.com/quick-takes/data-as-a-strategic-lever-of-growth",
      time: "15 min",
    },
  ]},
  { tier: "Tool Deep Dives", emoji: "🔧", items: [
    {
      title: "PostHog vs Mixpanel",
      author: "PostHog Blog",
      why: "Surprisingly fair feature-by-feature comparison. Covers pricing, philosophy, and real use cases.",
      url: "https://posthog.com/blog/posthog-vs-mixpanel",
      time: "20 min",
    },
    {
      title: "PostHog vs Amplitude",
      author: "PostHog Blog",
      why: "Same depth, covers enterprise features, experimentation, and warehouse-native approaches.",
      url: "https://posthog.com/blog/posthog-vs-amplitude",
      time: "20 min",
    },
    {
      title: "Tracking Plan Case Studies",
      author: "Timo Dechau",
      why: "Real tracking plans for products like Notion. The most hands-on implementation resource available.",
      url: "https://timodechau.com/",
      time: "30 min",
    },
    {
      title: "Best product analytics tools: after testing them all",
      author: "Vision Labs",
      why: "Practitioner who implemented all major tools across dozens of companies. No vendor bias.",
      url: "https://visionlabs.com/blog/best-product-analytics-tools/",
      time: "25 min",
    },
  ]},
  { tier: "Newsletters to Subscribe", emoji: "📬", items: [
    {
      title: "Lenny's Newsletter",
      author: "Lenny Rachitsky",
      why: "The #1 product newsletter. Deep research on metrics, retention, growth, benchmarks. 670K+ subscribers.",
      url: "https://www.lennysnewsletter.com/",
      time: "Weekly",
    },
    {
      title: "The Beautiful Mess",
      author: "John Cutler",
      why: "Org dynamics of product building. Cutler was Product Evangelist at Amplitude, so analytics thinking is baked in.",
      url: "https://cutlefish.substack.com/",
      time: "Weekly",
    },
    {
      title: "Data Analysis Journal",
      author: "Olga Berezovsky",
      why: "Weekly practical advice on product analytics, A/B testing, data collection, SQL.",
      url: "https://dataanalysis.substack.com/",
      time: "Weekly",
    },
    {
      title: "Experimenting with Growth",
      author: "Rishikesh Ranjan",
      why: "Growth case studies (Duolingo, Cursor, Bolt.new), PLG breakdowns, analytics-driven tactics.",
      url: "https://www.productgrowth.blog/",
      time: "Weekly",
    },
  ]},
  { tier: "People to Follow", emoji: "👤", items: [
    {
      title: "Crystal Widjaja",
      author: "Former SVP Growth & Data, Gojek",
      why: "Scaled Gojek from 20K to 5M daily orders using data. Infrequent but extremely high signal writing.",
      url: "https://substack.com/@crystalwidjaja",
      time: "LinkedIn + Substack",
    },
    {
      title: "Timo Dechau",
      author: "Product Analytics Consultant",
      why: "The most hands-on expert on tracking plans, event naming, and analytics implementation.",
      url: "https://timodechau.com/",
      time: "Blog + LinkedIn",
    },
    {
      title: "James Hawkins",
      author: "Co-founder & CEO, PostHog",
      why: "Building the open-source analytics movement. Radically transparent about product decisions.",
      url: "https://twitter.com/james406",
      time: "X/Twitter + LinkedIn",
    },
    {
      title: "Andrew Chen",
      author: "GP at a16z, former Growth at Uber",
      why: "650+ essays on growth. Coined 'The Law of Shitty Clickthroughs.' Foundational growth thinking.",
      url: "https://andrewchen.com/",
      time: "Blog archive",
    },
  ]},
];


// ── Sources ────────────────────────────────────────────────────────────────────
// Add, remove, or reorder categories and items freely.
// Each item: { name, desc, url }
export const sources = [
  { category: "Market Size & Forecasts", items: [
    {
      name: "Mordor Intelligence",
      desc: "Product Analytics Market Size, Competitive Landscape, Trends 2025–2030",
      url:  "https://www.mordorintelligence.com/industry-reports/product-analytics-market",
    },
  ]},
  { category: "Magic Quadrant & ARR Estimates", items: [
    {
      name: "Aakash Gupta / Product Growth",
      desc: "The Product Analytics Market: Overview and Deep Dive",
      url:  "https://www.news.aakashg.com/p/product-analytics-market",
    },
    {
      name: "Sacra",
      desc: "PostHog revenue, valuation & funding",
      url:  "https://sacra.com/c/posthog/",
    },
  ]},
  { category: "G2 Ratings & Rankings", items: [
    {
      name: "G2 Product Analytics Category",
      desc: "Category page with grid rankings, Winter 2026",
      url:  "https://www.g2.com/categories/product-analytics",
    },
    {
      name: "G2 Best Software",
      desc: "7 Best Product Analytics Software in 2025",
      url:  "https://learn.g2.com/best-product-analytics-software",
    },
    {
      name: "G2 Compare",
      desc: "Mixpanel vs PostHog head-to-head",
      url:  "https://www.g2.com/compare/mixpanel-vs-posthog",
    },
  ]},
  { category: "TrustRadius", items: [
    {
      name: "TrustRadius",
      desc: "Product Analytics category rankings 2026",
      url:  "https://www.trustradius.com/categories/product-analytics",
    },
    {
      name: "TrustRadius Enterprise",
      desc: "Enterprise product analytics segment",
      url:  "https://www.trustradius.com/categories/product-analytics?company-size=enterprise",
    },
  ]},
  { category: "Feature Comparisons & Tool Analysis", items: [
    {
      name: "PostHog Blog",
      desc: "Amplitude alternatives & competitors compared",
      url:  "https://posthog.com/blog/best-amplitude-alternatives",
    },
    {
      name: "PostHog Blog",
      desc: "Mixpanel alternatives & competitors compared",
      url:  "https://posthog.com/blog/best-mixpanel-alternatives",
    },
    {
      name: "LiveSession",
      desc: "8 Best Product Analytics Tools 2025",
      url:  "https://livesession.io/blog/8-best-product-analytics-tools-list",
    },
    {
      name: "Vision Labs",
      desc: "Best product analytics tools (2025): after testing them all",
      url:  "https://visionlabs.com/blog/best-product-analytics-tools/",
    },
    {
      name: "Galaxy",
      desc: "Best Product Analytics Platforms for 2025",
      url:  "https://www.getgalaxy.io/learn/data-tools/best-product-analytics-platforms-2025",
    },
    {
      name: "BrainForge",
      desc: "Amplitude vs Mixpanel vs PostHog Comparison",
      url:  "https://www.brainforge.ai/resources/amplitude-vs-mixpanel-vs-posthog",
    },
    {
      name: "CrazyEgg",
      desc: "Mixpanel vs Amplitude: Each Tool's True Strengths",
      url:  "https://www.crazyegg.com/blog/mixpanel-vs-amplitude/",
    },
    {
      name: "CleverX",
      desc: "Best product analytics tools in 2026: 12 options compared",
      url:  "https://cleverx.com/blog/product-analytics-tools-12-best-options-compared",
    },
    {
      name: "Statsig",
      desc: "The Best 7 Product Analytics Tools in 2025",
      url:  "https://www.statsig.com/comparison/best-product-analytics-tools",
    },
  ]},
];

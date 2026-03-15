# Product Analytics Landscape 2026

A comprehensive, interactive dashboard for evaluating and comparing the leading product analytics tools in 2026. Built for product managers, growth teams, and data practitioners who need a clear, research-backed view of the market before making a tool decision.

**Live site →** [product-analytics-landscape-2026.vercel.app](https://product-analytics-landscape-2026.vercel.app)
**Built by →** [BoundlessPM](https://boundlesspm.substack.com/)

---

## What's Inside

Seven interactive views, all in one page:

| Section | What it shows |
|---|---|
| **Magic Quadrant** | 13 tools plotted by vision vs. execution, bubble-sized by estimated ARR |
| **Feature Matrix** | 14 core capabilities rated across 8 platforms (Basic / Good / Best-in-class) |
| **User Satisfaction** | G2 scores vs. review volume — signal strength at a glance |
| **Platform Convergence** | How Amplitude, Mixpanel, PostHog, and Pendo have expanded from 2020–2025 |
| **Decision Framework** | 4 questions that narrow down your shortlist in minutes |
| **Must Reads** | Curated reading list by learning stage — foundational → deep dives → newsletters → people |
| **Sources** | Every data point linked back to its source |

---

## Tools Covered

| Tool | Category | Est. ARR |
|---|---|---|
| Amplitude | Leader | ~$280M |
| Mixpanel | Leader | ~$100M |
| Contentsquare | Challenger | ~$250M |
| Heap | Challenger | ~$80M |
| Pendo | Challenger | ~$150M |
| Quantum Metric | Challenger | ~$100M |
| PostHog | Visionary | ~$15M |
| FullStory | Niche | ~$90M |
| Statsig | Niche | ~$25M |
| LogRocket | Niche | ~$30M |
| Glassbox | Niche | ~$50M |
| Woopra | Niche | ~$8M |
| Smartlook | Niche | ~$10M |
| Google Analytics 4 | Legacy | ~$800M |
| Adobe Analytics | Legacy | ~$500M |

---

## Data Sources

- **G2** — ratings, review counts, category rankings ([g2.com/categories/product-analytics](https://www.g2.com/categories/product-analytics))
- **TrustRadius** — enterprise segment rankings ([trustradius.com](https://www.trustradius.com/categories/product-analytics))
- **Mordor Intelligence** — market size & CAGR forecasts ([mordorintelligence.com](https://www.mordorintelligence.com/industry-reports/product-analytics-market))
- **Sacra** — ARR & valuation estimates ([sacra.com](https://sacra.com/c/posthog/))
- **Aakash Gupta / Product Growth** — quadrant framework & VP interviews ([news.aakashg.com](https://www.news.aakashg.com/p/product-analytics-market))
- **Gartner Peer Insights** — directional scoring (gated, not directly cited)

Market size figures: **$11.4B** in 2025, growing at **14.8% CAGR** to **$22.7B** by 2030.

---

## Running Locally

Requires Node.js 18+.

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/product-analytics-landscape-2026.git
cd product-analytics-landscape-2026

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. The page hot-reloads on every save.

```bash
# Build for production
npm run build
```

---

## Customising the Dashboard

All user-editable content lives in **`config.js`** — no React knowledge needed.

```
config.js
├── fontSans / fontSerif / fontMono   ← swap font families
├── fontScale                         ← 1.0 = default, 1.1 = 10% larger
├── author { name, url }              ← footer credit + link
├── mustReads [ ]                     ← add / remove reading list items
└── sources [ ]                       ← add / remove source citations
```

To change the default theme (light vs dark), open `product-analytics-landscape.jsx` and find:

```js
const [isDark, setIsDark] = useState(false); // false = light, true = dark
```

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | React 18 |
| Build tool | Vite 5 |
| Styling | Inline CSS (no external framework) |
| Charts | Hand-built SVG |
| Fonts | DM Sans · Newsreader · JetBrains Mono (Google Fonts) |
| Hosting | Vercel |
| Analytics | Vercel Analytics |

---

## Deploying to Vercel

The repo includes a `vercel.json` config. Connect the GitHub repo in the [Vercel dashboard](https://vercel.com) and it deploys automatically on every push to `main`.

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

---

## License

MIT — free to use, adapt, and build on. Attribution appreciated.

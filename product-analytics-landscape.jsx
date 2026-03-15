import { useState, useContext, createContext } from "react";
import {
  fontSans as sans,
  fontSerif as font,
  fontMono as mono,
  fontScale,
  author as siteAuthor,
  mustReads,
  sources,
} from "./config.js";

// fs(n) — scales any font-size value by the fontScale set in config.js
const fs = n => Math.round(n * fontScale);

// ── Theme ────────────────────────────────────────────────────────────────────
const ThemeContext = createContext();

const darkTheme = {
  bg: "#0a0a0a",
  surface: "#0d0d0d",
  surfaceAlt: "#111",
  surfaceHover: "#151515",
  border: "#222",
  borderSubtle: "#1a1a1a",
  borderStrong: "#333",
  text: "#eee",
  textStrong: "#fff",
  textMid: "#ccc",
  textSub: "#aaa",
  textMuted: "#888",
  textFaint: "#666",
  textVeryFaint: "#444",
  accent: "#00D4AA",
  accentDim: "#00D4AA44",
  accentBg: "#0a2a20",
  accentBorder: "#1a3a2a",
  rowAlt: "rgba(255,255,255,0.025)",
  svgGrid: "#2e2e2e",
  svgLabel: "#666",
  tooltipBg: "#1a1a1a",
  tooltipBorder: "#333",
  quadLeader: "#0D3B2E",
  quadChallenger: "#1A2A3A",
  quadVisionary: "#2A2A1A",
  quadNiche: "#2A1A2A",
  calloutBg: "#111",
  calloutBorder: "#222",
  calloutBgAccent: "#0a1a15",
  calloutBorderAccent: "#1a3a2a",
  shadow: "0 4px 24px rgba(0,0,0,0.55)",
  shadowSm: "0 1px 8px rgba(0,0,0,0.4)",
  cellText: ["#555", "#886644", "#7aaa7a", "#00D4AA"],
};

const lightTheme = {
  bg: "#f0eeea",
  surface: "#ffffff",
  surfaceAlt: "#f8f7f3",
  surfaceHover: "#f0efe9",
  border: "#e0ddd5",
  borderSubtle: "#ece9e1",
  borderStrong: "#c0bdb4",
  text: "#1a1a1a",
  textStrong: "#0a0a0a",
  textMid: "#3a3a3a",
  textSub: "#555",
  textMuted: "#777",
  textFaint: "#999",
  textVeryFaint: "#bbb",
  accent: "#007a60",
  accentDim: "#007a6044",
  accentBg: "#e8f5f0",
  accentBorder: "#b0e0d0",
  rowAlt: "rgba(0,0,0,0.025)",
  svgGrid: "#d8d4cc",
  svgLabel: "#999",
  tooltipBg: "#ffffff",
  tooltipBorder: "#ddd",
  quadLeader: "#c8f0e4",
  quadChallenger: "#c8e4f4",
  quadVisionary: "#f4f4c8",
  quadNiche: "#f0d4f4",
  calloutBg: "#f8f7f3",
  calloutBorder: "#e0ddd5",
  calloutBgAccent: "#e8f5f0",
  calloutBorderAccent: "#b0e0d0",
  shadow: "0 4px 24px rgba(0,0,0,0.08)",
  shadowSm: "0 1px 8px rgba(0,0,0,0.06)",
  cellText: ["#ccc", "#b06820", "#3a8a5a", "#007a60"],
};

// ── Data ─────────────────────────────────────────────────────────────────────
const tools = [
  { id: "amplitude", name: "Amplitude", vision: 9.0, execution: 8.6, arr: 280, category: "Leader", g2: 4.5, reviews: 2763, founded: 2012, hq: "SF", pricing: "MTU-based", freeEvents: "10K MTUs", color: "#00D4AA" },
  { id: "mixpanel", name: "Mixpanel", vision: 8.5, execution: 8.3, arr: 100, category: "Leader", g2: 4.6, reviews: 1150, founded: 2009, hq: "SF", pricing: "Event-based", freeEvents: "1M events", color: "#7856FF" },
  { id: "posthog", name: "PostHog", vision: 8.2, execution: 7.1, arr: 15, category: "Visionary", g2: 4.4, reviews: 480, founded: 2020, hq: "London", pricing: "Usage-based", freeEvents: "1M events", color: "#F9BD2B" },
  { id: "contentsquare", name: "Contentsquare", vision: 7.5, execution: 8.8, arr: 250, category: "Challenger", g2: 4.3, reviews: 600, founded: 2012, hq: "Paris", pricing: "Custom", freeEvents: "N/A", color: "#FF6B35" },
  { id: "heap", name: "Heap", vision: 7.8, execution: 7.8, arr: 80, category: "Challenger", g2: 4.4, reviews: 1097, founded: 2013, hq: "SF", pricing: "Custom", freeEvents: "10K sessions", color: "#FF4081" },
  { id: "pendo", name: "Pendo", vision: 7.2, execution: 8.0, arr: 150, category: "Challenger", g2: 4.4, reviews: 1400, founded: 2013, hq: "Raleigh", pricing: "Custom", freeEvents: "500 MAUs", color: "#FF8A65" },
  { id: "fullstory", name: "FullStory", vision: 7.8, execution: 7.4, arr: 90, category: "Niche", g2: 4.5, reviews: 390, founded: 2014, hq: "Atlanta", pricing: "Session-based", freeEvents: "1K sessions", color: "#536DFE" },
  { id: "quantum", name: "Quantum Metric", vision: 8.0, execution: 7.6, arr: 100, category: "Challenger", g2: 4.6, reviews: 220, founded: 2015, hq: "Colorado", pricing: "Custom", freeEvents: "N/A", color: "#00BCD4" },
  { id: "statsig", name: "Statsig", vision: 7.0, execution: 7.4, arr: 25, category: "Niche", g2: 4.6, reviews: 90, founded: 2021, hq: "Seattle", pricing: "Event-based", freeEvents: "2M events", color: "#8BC34A" },
  { id: "adobe", name: "Adobe Analytics", vision: 6.0, execution: 7.5, arr: 500, category: "Legacy", g2: 4.1, reviews: 1000, founded: 2009, hq: "San Jose", pricing: "Enterprise", freeEvents: "N/A", color: "#E91E63" },
  { id: "ga4", name: "Google Analytics", vision: 6.2, execution: 6.8, arr: 800, category: "Legacy", g2: 4.3, reviews: 8000, founded: 2005, hq: "Mountain View", pricing: "Free / Enterprise", freeEvents: "20M events", color: "#E91E63" },
  { id: "logrocket", name: "LogRocket", vision: 7.2, execution: 6.1, arr: 30, category: "Niche", g2: 4.6, reviews: 270, founded: 2016, hq: "Boston", pricing: "Session-based", freeEvents: "1K sessions", color: "#764ABC" },
  { id: "smartlook", name: "Smartlook", vision: 6.8, execution: 5.6, arr: 10, category: "Niche", g2: 4.5, reviews: 150, founded: 2016, hq: "Brno", pricing: "Session-based", freeEvents: "3K sessions", color: "#607D8B" },
  { id: "glassbox", name: "Glassbox", vision: 7.2, execution: 6.3, arr: 50, category: "Niche", g2: 4.5, reviews: 350, founded: 2010, hq: "London", pricing: "Custom", freeEvents: "N/A", color: "#9C27B0" },
  { id: "woopra", name: "Woopra", vision: 7.0, execution: 7.0, arr: 8, category: "Niche", g2: 4.4, reviews: 180, founded: 2012, hq: "SF", pricing: "Event-based", freeEvents: "500K actions", color: "#795548" },
];

const features = {
  "Event Analytics":       { amplitude: 3, mixpanel: 3, posthog: 3, heap: 3, pendo: 2, contentsquare: 2, fullstory: 2, quantum: 2, statsig: 2 },
  "Funnels":               { amplitude: 3, mixpanel: 3, posthog: 3, heap: 3, pendo: 2, contentsquare: 3, fullstory: 2, quantum: 3, statsig: 2 },
  "Retention":             { amplitude: 3, mixpanel: 3, posthog: 3, heap: 2, pendo: 2, contentsquare: 2, fullstory: 1, quantum: 2, statsig: 2 },
  "Cohort Analysis":       { amplitude: 3, mixpanel: 3, posthog: 2, heap: 2, pendo: 2, contentsquare: 2, fullstory: 1, quantum: 2, statsig: 2 },
  "Session Replay":        { amplitude: 2, mixpanel: 2, posthog: 3, heap: 2, pendo: 2, contentsquare: 3, fullstory: 3, quantum: 3, statsig: 0 },
  "Heatmaps":              { amplitude: 1, mixpanel: 1, posthog: 2, heap: 2, pendo: 1, contentsquare: 3, fullstory: 3, quantum: 3, statsig: 0 },
  "Feature Flags":         { amplitude: 2, mixpanel: 2, posthog: 3, heap: 0, pendo: 0, contentsquare: 0, fullstory: 0, quantum: 0, statsig: 3 },
  "A/B Testing":           { amplitude: 3, mixpanel: 1, posthog: 3, heap: 0, pendo: 0, contentsquare: 1, fullstory: 0, quantum: 1, statsig: 3 },
  "In-App Guides":         { amplitude: 1, mixpanel: 0, posthog: 0, heap: 0, pendo: 3, contentsquare: 0, fullstory: 0, quantum: 0, statsig: 0 },
  "Surveys / NPS":         { amplitude: 1, mixpanel: 0, posthog: 2, heap: 0, pendo: 3, contentsquare: 1, fullstory: 0, quantum: 1, statsig: 0 },
  "AI / NL Queries":       { amplitude: 2, mixpanel: 3, posthog: 2, heap: 2, pendo: 1, contentsquare: 2, fullstory: 2, quantum: 2, statsig: 1 },
  "Group / B2B Analytics": { amplitude: 3, mixpanel: 2, posthog: 2, heap: 1, pendo: 2, contentsquare: 1, fullstory: 1, quantum: 1, statsig: 1 },
  "Warehouse Native":      { amplitude: 3, mixpanel: 2, posthog: 2, heap: 1, pendo: 1, contentsquare: 1, fullstory: 1, quantum: 1, statsig: 2 },
  "Self-Host / OSS":       { amplitude: 0, mixpanel: 0, posthog: 3, heap: 0, pendo: 0, contentsquare: 0, fullstory: 0, quantum: 0, statsig: 0 },
};

const convergenceData = [
  { year: "2020", amplitude: 4, mixpanel: 4, posthog: 3, pendo: 3 },
  { year: "2021", amplitude: 5, mixpanel: 4, posthog: 5, pendo: 4 },
  { year: "2022", amplitude: 6, mixpanel: 5, posthog: 7, pendo: 5 },
  { year: "2023", amplitude: 8, mixpanel: 6, posthog: 9, pendo: 6 },
  { year: "2024", amplitude: 10, mixpanel: 8, posthog: 11, pendo: 7 },
  { year: "2025", amplitude: 12, mixpanel: 10, posthog: 13, pendo: 8 },
];

// sources — imported from config.js

// mustReads — imported from config.js

const tabs = [
  { id: "quadrant", label: "Magic Quadrant", icon: "◈" },
  { id: "features", label: "Feature Matrix", icon: "⊞" },
  { id: "satisfaction", label: "User Satisfaction", icon: "★" },
  { id: "convergence", label: "Platform Convergence", icon: "⟳" },
  { id: "decision", label: "Decision Framework", icon: "◎" },
  { id: "reads", label: "Must Reads", icon: "📖" },
  { id: "sources", label: "Sources", icon: "🔗" },
];

// ── Shared styles ─────────────────────────────────────────────────────────────
// font / mono / sans are imported from config.js above

// ── Link component ────────────────────────────────────────────────────────────
function ExtLink({ href, children, style = {} }) {
  const theme = useContext(ThemeContext);
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      style={{ color: theme.accent, textDecoration: "none", borderBottom: `1px solid ${theme.accentDim}`, transition: "border-color 0.15s", ...style }}
      onMouseEnter={e => e.currentTarget.style.borderBottomColor = theme.accent}
      onMouseLeave={e => e.currentTarget.style.borderBottomColor = theme.accentDim}>
      {children}
    </a>
  );
}

// ── Section heading helper ────────────────────────────────────────────────────
function SectionHeading({ children }) {
  const theme = useContext(ThemeContext);
  return (
    <h2 style={{ fontFamily: font, fontSize: fs(22), fontWeight: 700, color: theme.textStrong, margin: "0 0 6px", letterSpacing: "-0.3px" }}>
      {children}
    </h2>
  );
}

// ── Components ────────────────────────────────────────────────────────────────
function QuadrantView() {
  const theme = useContext(ThemeContext);
  const [hoveredTool, setHoveredTool] = useState(null);
  const filteredTools = tools.filter(t => !["ga4", "adobe"].includes(t.id));

  const xMin = 6.5, xMax = 9.5, yMin = 5.5, yMax = 9.2;
  const W = 600, H = 460;
  const pad = { t: 30, r: 30, b: 50, l: 55 };
  const pW = W - pad.l - pad.r;
  const pH = H - pad.t - pad.b;

  const toX = v => pad.l + ((v - xMin) / (xMax - xMin)) * pW;
  const toY = v => pad.t + pH - ((v - yMin) / (yMax - yMin)) * pH;
  const radius = arr => Math.max(6, Math.min(30, Math.sqrt(arr) * 1.6));

  const catColor = { Leader: "#00D4AA", Challenger: "#38BDF8", Visionary: "#A0A0A0", Niche: "#6B8AFE", Legacy: "#E06B8A" };

  const midX = toX((xMin + xMax) / 2);
  const midY = toY((yMin + yMax) / 2);

  return (
    <div>
      <SectionHeading>Magic Quadrant</SectionHeading>
      <p style={{ fontFamily: sans, fontSize: fs(13), color: theme.textMuted, marginBottom: 16, lineHeight: 1.5 }}>
        Positioned by completeness of vision vs. ability to execute. Bubble size represents estimated ARR.
      </p>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 16 }}>
        {Object.entries(catColor).map(([cat, col]) => (
          <div key={cat} style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: col }} />
            <span style={{ fontFamily: sans, fontSize: fs(11), color: theme.textMuted, fontWeight: 600 }}>{cat}</span>
          </div>
        ))}
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", display: "block" }}>
        <rect x={midX} y={pad.t} width={pad.l + pW + pad.r - midX} height={midY - pad.t} fill={theme.quadLeader} opacity={0.35} rx={4} />
        <rect x={pad.l} y={pad.t} width={midX - pad.l} height={midY - pad.t} fill={theme.quadChallenger} opacity={0.25} rx={4} />
        <rect x={midX} y={midY} width={pad.l + pW + pad.r - midX} height={pad.t + pH - midY} fill={theme.quadVisionary} opacity={0.2} rx={4} />
        <rect x={pad.l} y={midY} width={midX - pad.l} height={pad.t + pH - midY} fill={theme.quadNiche} opacity={0.18} rx={4} />

        <text x={pad.l + 8} y={pad.t + 18} fill={theme.svgLabel} fontSize={fs(9)} fontFamily={sans} fontWeight={700} opacity={0.6}>CHALLENGERS</text>
        <text x={midX + 8} y={pad.t + 18} fill={theme.accent} fontSize={fs(9)} fontFamily={sans} fontWeight={700} opacity={0.8}>LEADERS</text>
        <text x={pad.l + 8} y={pad.t + pH - 6} fill={theme.svgLabel} fontSize={fs(9)} fontFamily={sans} fontWeight={700} opacity={0.5}>NICHE PLAYERS</text>
        <text x={midX + 8} y={pad.t + pH - 6} fill={theme.svgLabel} fontSize={fs(9)} fontFamily={sans} fontWeight={700} opacity={0.5}>VISIONARIES</text>

        {[7, 7.5, 8, 8.5, 9].map(v => (
          <g key={`gx-${v}`}>
            <line x1={toX(v)} y1={pad.t} x2={toX(v)} y2={pad.t + pH} stroke={theme.svgGrid} strokeWidth={0.5} strokeDasharray="3,3" />
            <text x={toX(v)} y={pad.t + pH + 18} textAnchor="middle" fill={theme.svgLabel} fontSize={fs(10)} fontFamily={mono}>{v}</text>
          </g>
        ))}
        {[6, 6.5, 7, 7.5, 8, 8.5, 9].map(v => (
          <g key={`gy-${v}`}>
            <line x1={pad.l} y1={toY(v)} x2={pad.l + pW} y2={toY(v)} stroke={theme.svgGrid} strokeWidth={0.5} strokeDasharray="3,3" />
            <text x={pad.l - 8} y={toY(v) + 4} textAnchor="end" fill={theme.svgLabel} fontSize={fs(10)} fontFamily={mono}>{v}</text>
          </g>
        ))}

        <text x={pad.l + pW / 2} y={H - 4} textAnchor="middle" fill={theme.textMuted} fontSize={fs(11)} fontFamily={sans} fontWeight={700}>Completeness of Vision</text>
        <text x={14} y={pad.t + pH / 2} textAnchor="middle" fill={theme.textMuted} fontSize={fs(11)} fontFamily={sans} fontWeight={700} transform={`rotate(-90, 14, ${pad.t + pH / 2})`}>Ability to Execute</text>

        {filteredTools.map(t => {
          const cx = toX(t.vision);
          const cy = toY(t.execution);
          const r = radius(t.arr);
          const isHovered = hoveredTool === t.id;
          return (
            <g key={t.id}
              onMouseEnter={() => setHoveredTool(t.id)}
              onMouseLeave={() => setHoveredTool(null)}
              style={{ cursor: "pointer" }}>
              <circle cx={cx} cy={cy} r={r + 3} fill={catColor[t.category]} opacity={0.12} />
              <circle cx={cx} cy={cy} r={r} fill={catColor[t.category]} opacity={isHovered ? 0.95 : 0.72} stroke={isHovered ? "#fff" : "none"} strokeWidth={2} />
              <text x={cx} y={cy - r - 5} textAnchor="middle" fill={theme.text} fontSize={isHovered ? fs(11) : fs(10)} fontFamily={sans} fontWeight={isHovered ? 800 : 600}>
                {t.name}
              </text>
              {isHovered && (
                <g>
                  <rect x={cx - 68} y={cy + r + 4} width={136} height={46} rx={7} fill={theme.tooltipBg} stroke={theme.tooltipBorder} strokeWidth={1} />
                  <text x={cx} y={cy + r + 20} textAnchor="middle" fill={theme.textSub} fontSize={fs(9)} fontFamily={mono}>
                    G2: {t.g2}/5 · ~${t.arr}M ARR
                  </text>
                  <text x={cx} y={cy + r + 34} textAnchor="middle" fill={theme.textFaint} fontSize={fs(9)} fontFamily={mono}>
                    {t.reviews.toLocaleString()} reviews · {t.pricing}
                  </text>
                </g>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function FeatureMatrix() {
  const theme = useContext(ThemeContext);
  const toolIds = ["amplitude", "mixpanel", "posthog", "heap", "pendo", "contentsquare", "fullstory", "statsig"];
  const toolNames = { amplitude: "Amp.", mixpanel: "Mix.", posthog: "PH", heap: "Heap", pendo: "Pendo", contentsquare: "CS", fullstory: "FS", statsig: "Statsig" };
  const featureList = Object.keys(features);
  const cellLabels = ["—", "●", "●●", "●●●"];

  return (
    <div>
      <SectionHeading>Feature Matrix</SectionHeading>
      <p style={{ fontFamily: sans, fontSize: fs(13), color: theme.textMuted, marginBottom: 16, lineHeight: 1.5 }}>
        How each platform covers the 14 core product analytics capabilities.
      </p>
      <div style={{ overflowX: "auto" }}>
        <table style={{ borderCollapse: "collapse", width: "100%", minWidth: 660 }}>
          <thead>
            <tr>
              <th style={{ textAlign: "left", padding: "10px 12px", fontFamily: sans, fontSize: fs(11), color: theme.textFaint, borderBottom: `2px solid ${theme.borderStrong}`, fontWeight: 700 }}>Feature</th>
              {toolIds.map(id => (
                <th key={id} style={{ padding: "10px 4px", fontFamily: sans, fontSize: fs(10), color: tools.find(t => t.id === id)?.color || theme.textSub, borderBottom: `2px solid ${theme.borderStrong}`, fontWeight: 800, textAlign: "center", whiteSpace: "nowrap" }}>
                  {toolNames[id]}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {featureList.map((feat, fi) => (
              <tr key={feat} style={{ background: fi % 2 === 0 ? "transparent" : theme.rowAlt }}>
                <td style={{ padding: "7px 12px", fontFamily: sans, fontSize: fs(12), color: theme.textMid, borderBottom: `1px solid ${theme.border}`, fontWeight: 500 }}>{feat}</td>
                {toolIds.map(id => {
                  const val = features[feat]?.[id] ?? 0;
                  return (
                    <td key={id} style={{ padding: "5px 2px", textAlign: "center", borderBottom: `1px solid ${theme.border}` }}>
                      <span style={{ fontFamily: mono, fontSize: fs(10), color: theme.cellText[val], fontWeight: 700 }}>
                        {cellLabels[val]}
                      </span>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ marginTop: 14, display: "flex", gap: 20 }}>
          {[{ v: 1, l: "Basic" }, { v: 2, l: "Good" }, { v: 3, l: "Best-in-class" }].map(({ v, l }) => (
            <div key={v} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontFamily: mono, fontSize: fs(10), color: theme.cellText[v], fontWeight: 700 }}>{cellLabels[v]}</span>
              <span style={{ fontFamily: sans, fontSize: fs(11), color: theme.textFaint }}>{l}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SatisfactionView() {
  const theme = useContext(ThemeContext);
  const sorted = [...tools].filter(t => t.reviews >= 80).sort((a, b) => b.g2 - a.g2);
  const maxReviews = Math.max(...sorted.map(t => t.reviews));

  return (
    <div>
      <SectionHeading>User Satisfaction</SectionHeading>
      <p style={{ fontFamily: sans, fontSize: fs(13), color: theme.textMuted, marginBottom: 18, lineHeight: 1.5 }}>
        G2 satisfaction score (left) vs review volume (bar width). Higher score + more reviews = stronger signal.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
        {sorted.map(t => {
          const barWidth = (t.reviews / maxReviews) * 100;
          return (
            <div key={t.id} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 120, textAlign: "right", fontFamily: sans, fontSize: fs(12), color: theme.textMid, fontWeight: 600, flexShrink: 0 }}>{t.name}</div>
              <div style={{ fontFamily: mono, fontSize: fs(13), color: t.g2 >= 4.5 ? theme.accent : theme.textSub, fontWeight: 800, width: 34, textAlign: "center", flexShrink: 0 }}>{t.g2}</div>
              <div style={{ flex: 1, position: "relative", height: 24, borderRadius: 4, overflow: "hidden", background: theme.surfaceAlt }}>
                <div style={{
                  width: `${barWidth}%`,
                  height: "100%",
                  background: `linear-gradient(90deg, ${t.color}55, ${t.color}bb)`,
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: 10,
                  transition: "width 0.5s ease",
                  borderRadius: 4,
                }}>
                  <span style={{ fontFamily: mono, fontSize: fs(9), color: theme.text, fontWeight: 600 }}>{t.reviews.toLocaleString()}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: 22, padding: 18, background: theme.calloutBg, borderRadius: 10, border: `1px solid ${theme.calloutBorder}`, boxShadow: theme.shadowSm }}>
        <div style={{ fontFamily: sans, fontSize: fs(11), color: theme.textFaint, fontWeight: 700, letterSpacing: 0.5, marginBottom: 6 }}>KEY TAKEAWAY</div>
        <div style={{ fontFamily: font, fontSize: fs(15), color: theme.textMid, lineHeight: 1.6 }}>
          Mixpanel leads on satisfaction (4.6) with solid review volume. Amplitude has the deepest review pool among leaders (2,763). PostHog, Statsig, and LogRocket punch above their weight on satisfaction despite smaller review bases.
        </div>
      </div>
    </div>
  );
}

function ConvergenceView() {
  const theme = useContext(ThemeContext);
  const W = 600, H = 340;
  const pad = { t: 20, r: 20, b: 40, l: 50 };
  const pW = W - pad.l - pad.r;
  const pH = H - pad.t - pad.b;

  const maxY = 14;
  const years = convergenceData.map(d => d.year);
  const lines = [
    { key: "amplitude", label: "Amplitude", color: "#00D4AA" },
    { key: "mixpanel", label: "Mixpanel", color: "#7856FF" },
    { key: "posthog", label: "PostHog", color: "#F9BD2B" },
    { key: "pendo", label: "Pendo", color: "#FF8A65" },
  ];

  const toX = i => pad.l + (i / (years.length - 1)) * pW;
  const toY = v => pad.t + pH - (v / maxY) * pH;

  return (
    <div>
      <SectionHeading>Platform Convergence</SectionHeading>
      <p style={{ fontFamily: sans, fontSize: fs(13), color: theme.textMuted, marginBottom: 14, lineHeight: 1.5 }}>
        Number of distinct product categories each platform covers (analytics, replay, flags, testing, surveys, guides, warehouse, etc.)
      </p>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", display: "block" }}>
        {[0, 4, 8, 12].map(v => (
          <g key={v}>
            <line x1={pad.l} y1={toY(v)} x2={pad.l + pW} y2={toY(v)} stroke={theme.svgGrid} strokeWidth={0.5} strokeDasharray="3,3" />
            <text x={pad.l - 8} y={toY(v) + 4} textAnchor="end" fill={theme.svgLabel} fontSize={fs(10)} fontFamily={mono}>{v}</text>
          </g>
        ))}
        {years.map((yr, i) => (
          <text key={yr} x={toX(i)} y={H - 8} textAnchor="middle" fill={theme.svgLabel} fontSize={fs(10)} fontFamily={mono}>{yr}</text>
        ))}

        {lines.map(line => {
          const points = convergenceData.map((d, i) => `${toX(i)},${toY(d[line.key])}`).join(" ");
          const lastPt = convergenceData[convergenceData.length - 1];
          return (
            <g key={line.key}>
              <polyline points={points} fill="none" stroke={line.color} strokeWidth={2.5} strokeLinejoin="round" />
              {convergenceData.map((d, i) => (
                <circle key={i} cx={toX(i)} cy={toY(d[line.key])} r={3.5} fill={line.color} />
              ))}
              <text x={toX(years.length - 1) + 7} y={toY(lastPt[line.key]) + 4} fill={line.color} fontSize={fs(10)} fontFamily={sans} fontWeight={700}>
                {line.label}
              </text>
            </g>
          );
        })}

        <text x={14} y={pad.t + pH / 2} textAnchor="middle" fill={theme.textMuted} fontSize={fs(10)} fontFamily={sans} fontWeight={600} transform={`rotate(-90, 14, ${pad.t + pH / 2})`}>Product Categories</text>
      </svg>
      <div style={{ marginTop: 18, padding: 18, background: theme.calloutBg, borderRadius: 10, border: `1px solid ${theme.calloutBorder}`, boxShadow: theme.shadowSm }}>
        <div style={{ fontFamily: sans, fontSize: fs(11), color: theme.textFaint, fontWeight: 700, letterSpacing: 0.5, marginBottom: 6 }}>THE CONVERGENCE STORY</div>
        <div style={{ fontFamily: font, fontSize: fs(15), color: theme.textMid, lineHeight: 1.6 }}>
          Every major player is expanding beyond core analytics. PostHog leads the all-in-one play (analytics + replay + flags + testing + surveys + warehouse + CDP). Amplitude and Mixpanel are converging fast, both adding session replay, heatmaps, and experimentation in 2024-2025. Pendo stays differentiated on in-app guidance but trails on experimentation.
        </div>
      </div>
    </div>
  );
}

function DecisionFramework() {
  const theme = useContext(ThemeContext);
  const paths = [
    { q: "What's your team size & technical depth?", options: [
      { label: "Small + strong engineers", rec: "PostHog", color: "#F9BD2B", why: "Self-host, full control, generous free tier, all-in-one" },
      { label: "Small + less technical", rec: "Mixpanel Free", color: "#7856FF", why: "Most intuitive query builder, no infra overhead" },
      { label: "Mid-size (20–100)", rec: "Mixpanel or Amplitude", color: "#7856FF", why: "Both have solid free tiers, PM-friendly interfaces" },
      { label: "Enterprise + governance", rec: "Amplitude", color: "#00D4AA", why: "Best cohorting, experimentation, multi-product governance" },
    ]},
    { q: "Auto-capture or manual instrumentation?", options: [
      { label: "Manual (cleaner data)", rec: "Mixpanel, Amplitude", color: "#7856FF", why: "Forces tracking discipline, cleaner data from day 1" },
      { label: "Auto-capture (retroactive)", rec: "PostHog, Heap", color: "#F9BD2B", why: "Nothing slips through, ask questions later" },
    ]},
    { q: "Need more than just analytics?", options: [
      { label: "Just analytics", rec: "Mixpanel or Amplitude", color: "#7856FF", why: "Purpose-built, best-in-class event analytics" },
      { label: "+ Session replay + flags", rec: "PostHog", color: "#F9BD2B", why: "Replaces Mixpanel + LaunchDarkly + Hotjar in one" },
      { label: "+ In-app guides + NPS", rec: "Pendo", color: "#FF8A65", why: "Analytics + product engagement in one platform" },
      { label: "+ Experimentation first", rec: "Statsig", color: "#8BC34A", why: "Feature flags + A/B testing native, analytics included" },
    ]},
    { q: "Data privacy / self-hosting requirement?", options: [
      { label: "Must self-host", rec: "PostHog", color: "#F9BD2B", why: "Only mature OSS option, full data control" },
      { label: "EU residency needed", rec: "Mixpanel or Amplitude", color: "#7856FF", why: "Both offer EU data residency, SOC 2, GDPR-ready" },
      { label: "Cloud is fine", rec: "Any of the above", color: theme.textFaint, why: "Don't over-engineer this if not a constraint" },
    ]},
  ];

  return (
    <div>
      <SectionHeading>Decision Framework</SectionHeading>
      <p style={{ fontFamily: sans, fontSize: fs(13), color: theme.textMuted, marginBottom: 20, lineHeight: 1.5 }}>
        Answer four questions. Get your shortlist in minutes.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {paths.map((p, pi) => (
          <div key={pi} style={{ background: theme.surfaceAlt, borderRadius: 12, border: `1px solid ${theme.border}`, overflow: "hidden", boxShadow: theme.shadowSm }}>
            <div style={{ padding: "14px 18px", background: theme.surfaceHover, borderBottom: `1px solid ${theme.border}`, display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontFamily: mono, fontSize: fs(11), color: theme.accent, fontWeight: 800, background: theme.accentBg, padding: "2px 8px", borderRadius: 4 }}>Q{pi + 1}</span>
              <span style={{ fontFamily: sans, fontSize: fs(14), color: theme.text, fontWeight: 700 }}>{p.q}</span>
            </div>
            <div style={{ padding: "10px 18px 14px", display: "flex", flexDirection: "column", gap: 6 }}>
              {p.options.map((opt, oi) => (
                <div key={oi} style={{ display: "flex", alignItems: "flex-start", gap: 14, padding: "9px 12px", borderRadius: 8, background: theme.rowAlt, border: `1px solid ${theme.borderSubtle}` }}>
                  <div style={{ fontFamily: sans, fontSize: fs(12), color: theme.textMuted, fontWeight: 600, width: 170, flexShrink: 0 }}>{opt.label}</div>
                  <div style={{ fontFamily: sans, fontSize: fs(13), color: opt.color, fontWeight: 800, width: 140, flexShrink: 0 }}>{opt.rec}</div>
                  <div style={{ fontFamily: font, fontSize: fs(12), color: theme.textFaint, lineHeight: 1.5 }}>{opt.why}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div style={{ padding: 20, background: theme.calloutBgAccent, borderRadius: 12, border: `1px solid ${theme.calloutBorderAccent}`, boxShadow: theme.shadowSm }}>
          <div style={{ fontFamily: sans, fontSize: fs(12), color: theme.accent, fontWeight: 800, letterSpacing: 0.5, marginBottom: 8 }}>THE BOTTOM LINE</div>
          <div style={{ fontFamily: font, fontSize: fs(16), color: theme.textMid, lineHeight: 1.65 }}>
            Pick two tools based on this framework. Sign up for both free tiers. Try to answer your three most important product questions in each. You will have a clear answer within two weeks.
          </div>
        </div>
      </div>
    </div>
  );
}

function MustReadsView() {
  const theme = useContext(ThemeContext);
  const [expandedTier, setExpandedTier] = useState("Foundational Reading");
  const tierColors = {
    "Foundational Reading": "#00D4AA",
    "Metrics & Retention": "#7856FF",
    "Tool Deep Dives": "#F9BD2B",
    "Newsletters to Subscribe": "#FF6B35",
    "People to Follow": "#FF4081",
  };

  return (
    <div>
      <SectionHeading>Must Reads</SectionHeading>
      <p style={{ fontFamily: font, fontSize: fs(14), color: theme.textMuted, margin: "0 0 18px", lineHeight: 1.6 }}>
        Curated from practitioner experience. Organized by learning stage. Start at the top, work down.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {mustReads.map(tier => {
          const isOpen = expandedTier === tier.tier;
          const col = tierColors[tier.tier] || theme.textFaint;
          return (
            <div key={tier.tier} style={{ background: theme.surfaceAlt, borderRadius: 12, border: `1px solid ${isOpen ? col + "55" : theme.border}`, overflow: "hidden", boxShadow: isOpen ? theme.shadowSm : "none", transition: "box-shadow 0.2s" }}>
              <div
                onClick={() => setExpandedTier(isOpen ? null : tier.tier)}
                style={{ padding: "15px 20px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", background: isOpen ? col + "0d" : "transparent", transition: "background 0.15s" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ fontSize: fs(18) }}>{tier.emoji}</span>
                  <span style={{ fontFamily: sans, fontSize: fs(14), fontWeight: 700, color: isOpen ? col : theme.text }}>{tier.tier}</span>
                  <span style={{ fontFamily: mono, fontSize: fs(10), color: theme.textVeryFaint, fontWeight: 600, background: theme.surfaceHover, padding: "2px 7px", borderRadius: 10 }}>{tier.items.length}</span>
                </div>
                <span style={{ color: theme.textFaint, fontSize: fs(12) }}>{isOpen ? "▲" : "▼"}</span>
              </div>
              {isOpen && (
                <div style={{ padding: "4px 20px 20px", display: "flex", flexDirection: "column", gap: 10 }}>
                  {tier.items.map((item, i) => (
                    <div key={i} style={{ padding: "14px 16px", background: theme.surface, borderRadius: 10, borderLeft: `3px solid ${col}`, boxShadow: theme.shadowSm }}>
                      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 14, flexWrap: "wrap" }}>
                        <div style={{ flex: 1 }}>
                          <ExtLink href={item.url} style={{ fontFamily: sans, fontSize: fs(14), fontWeight: 700 }}>
                            {item.title}
                          </ExtLink>
                          <div style={{ fontFamily: sans, fontSize: fs(11), color: theme.textMuted, marginTop: 3, fontWeight: 600 }}>{item.author}</div>
                        </div>
                        <span style={{ fontFamily: mono, fontSize: fs(10), color: theme.textFaint, background: theme.surfaceAlt, padding: "4px 9px", borderRadius: 6, whiteSpace: "nowrap", flexShrink: 0, border: `1px solid ${theme.border}` }}>
                          {item.time}
                        </span>
                      </div>
                      <p style={{ fontFamily: font, fontSize: fs(13), color: theme.textMuted, margin: "10px 0 0", lineHeight: 1.6 }}>{item.why}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SourcesView() {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <SectionHeading>Sources</SectionHeading>
      <p style={{ fontFamily: font, fontSize: fs(14), color: theme.textMuted, margin: "0 0 20px", lineHeight: 1.6 }}>
        Every data point in this dashboard is sourced from the following. All links verified March 2026.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
        {sources.map((cat, ci) => (
          <div key={ci}>
            <div style={{ fontFamily: sans, fontSize: fs(11), fontWeight: 800, color: theme.accent, letterSpacing: 0.8, marginBottom: 10, paddingBottom: 8, borderBottom: `1px solid ${theme.borderSubtle}`, textTransform: "uppercase" }}>
              {cat.category}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {cat.items.map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "8px 0" }}>
                  <span style={{ fontFamily: mono, fontSize: fs(9), color: theme.textVeryFaint, marginTop: 3, flexShrink: 0 }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap" }}>
                      <span style={{ fontFamily: sans, fontSize: fs(13), fontWeight: 700, color: theme.textMid }}>{item.name}</span>
                      <span style={{ fontFamily: font, fontSize: fs(12), color: theme.textFaint }}>{item.desc}</span>
                    </div>
                    <ExtLink href={item.url} style={{ fontFamily: mono, fontSize: fs(10), color: theme.accentDim }}>
                      {item.url.replace("https://", "").replace("www.", "").slice(0, 72)}{item.url.length > 80 ? "…" : ""}
                    </ExtLink>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div style={{ padding: 16, background: theme.calloutBg, borderRadius: 10, border: `1px solid ${theme.calloutBorder}`, marginTop: 4 }}>
          <div style={{ fontFamily: sans, fontSize: fs(11), color: theme.textMuted, fontWeight: 600, lineHeight: 1.6 }}>
            Review platforms consulted but gated behind login:{" "}
            <span style={{ color: theme.textSub }}>Gartner Peer Insights</span>,{" "}
            <span style={{ color: theme.textSub }}>Capterra India</span>.
            Data from these informed directional scoring but are not directly cited due to access restrictions.
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main Dashboard ────────────────────────────────────────────────────────────
export default function ProductAnalyticsLandscape() {
  const [activeTab, setActiveTab] = useState("quadrant");
  const [isDark, setIsDark] = useState(false);

  const theme = isDark ? darkTheme : lightTheme;

  const renderView = () => {
    switch (activeTab) {
      case "quadrant":    return <QuadrantView />;
      case "features":   return <FeatureMatrix />;
      case "satisfaction": return <SatisfactionView />;
      case "convergence": return <ConvergenceView />;
      case "decision":   return <DecisionFramework />;
      case "reads":      return <MustReadsView />;
      case "sources":    return <SourcesView />;
      default:           return null;
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ fontFamily: sans, background: theme.bg, color: theme.text, minHeight: "100vh", padding: "28px 24px", transition: "background 0.25s, color 0.25s" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          {/* ── Header card ── */}
          <div style={{ background: theme.surface, borderRadius: 18, border: `1px solid ${theme.border}`, marginBottom: 24, overflow: "hidden", boxShadow: theme.shadow }}>
            {/* Accent gradient bar */}
            <div style={{ height: 4, background: `linear-gradient(90deg, ${theme.accent}, ${theme.accent}55, transparent)` }} />

            <div style={{ padding: "28px 36px 32px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 16, marginBottom: 28 }}>
                <div>
                  <div style={{ fontFamily: mono, fontSize: fs(10), color: theme.accent, fontWeight: 700, letterSpacing: 2.5, marginBottom: 8 }}>
                    BOUNDLESSPM RESEARCH
                  </div>
                  <h1 style={{ fontFamily: font, fontSize: fs(34), fontWeight: 800, color: theme.textStrong, margin: 0, lineHeight: 1.12, letterSpacing: "-0.5px" }}>
                    Product Analytics Landscape 2025-26
                  </h1>
                  <p style={{ fontFamily: font, fontSize: fs(15), color: theme.textMuted, marginTop: 10, lineHeight: 1.65, maxWidth: 560 }}>
                    A multi-dimensional deep dive across G2, TrustRadius, Gartner Peer Insights, and practitioner research.
                    Seven views, one landscape.
                  </p>
                </div>

                {/* Theme toggle */}
                <button
                  onClick={() => setIsDark(d => !d)}
                  style={{
                    display: "flex", alignItems: "center", gap: 8,
                    padding: "9px 18px", borderRadius: 24,
                    border: `1px solid ${theme.border}`,
                    background: theme.surfaceAlt,
                    color: theme.textSub,
                    fontFamily: sans, fontSize: fs(13), fontWeight: 600,
                    cursor: "pointer", transition: "all 0.2s ease",
                    flexShrink: 0, whiteSpace: "nowrap",
                    boxShadow: theme.shadowSm,
                  }}
                >
                  {isDark ? "☀️  Light mode" : "🌙  Dark mode"}
                </button>
              </div>

              {/* Market stats */}
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                {[
                  { label: "Market Size", value: "$11.4B", sub: "2025 estimate" },
                  { label: "CAGR", value: "14.8%", sub: "through 2030" },
                  { label: "Projected", value: "$22.7B", sub: "by 2030" },
                  { label: "Tools Tracked", value: "15+", sub: "in this report" },
                ].map((s, i) => (
                  <div key={i} style={{
                    flex: "1 1 140px",
                    padding: "16px 20px",
                    background: theme.surfaceAlt,
                    borderRadius: 12,
                    border: `1px solid ${theme.border}`,
                    boxShadow: theme.shadowSm,
                    textAlign: "center",
                  }}>
                    <div style={{ fontFamily: mono, fontSize: fs(22), color: theme.accent, fontWeight: 800, lineHeight: 1.1 }}>{s.value}</div>
                    <div style={{ fontFamily: sans, fontSize: fs(11), color: theme.textMid, fontWeight: 700, marginTop: 4 }}>{s.label}</div>
                    <div style={{ fontFamily: mono, fontSize: fs(10), color: theme.textVeryFaint, marginTop: 2 }}>{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Sidebar + Content layout ── */}
          <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>

            {/* Sidebar navigation */}
            <div style={{ width: 210, flexShrink: 0 }}>
              <div style={{
                background: theme.surface,
                borderRadius: 14,
                border: `1px solid ${theme.border}`,
                overflow: "hidden",
                boxShadow: theme.shadowSm,
                position: "sticky",
                top: 24,
              }}>
                {tabs.map((tab, i) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      width: "100%",
                      textAlign: "left",
                      padding: "13px 16px",
                      border: "none",
                      borderLeft: `3px solid ${activeTab === tab.id ? theme.accent : "transparent"}`,
                      borderBottom: i < tabs.length - 1 ? `1px solid ${theme.borderSubtle}` : "none",
                      background: activeTab === tab.id ? theme.accentBg : "transparent",
                      color: activeTab === tab.id ? theme.accent : theme.textMuted,
                      fontFamily: sans,
                      fontSize: fs(13),
                      fontWeight: activeTab === tab.id ? 700 : 500,
                      cursor: "pointer",
                      transition: "all 0.15s ease",
                    }}
                  >
                    <span style={{ fontSize: fs(14), lineHeight: 1, flexShrink: 0 }}>{tab.icon}</span>
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Main content */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{
                background: theme.surface,
                borderRadius: 18,
                border: `1px solid ${theme.border}`,
                padding: "32px 36px",
                minHeight: 520,
                boxShadow: theme.shadow,
              }}>
                {renderView()}
              </div>
            </div>
          </div>

          {/* ── Footer ── */}
          <div style={{ marginTop: 20, padding: "14px 4px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
            <span style={{ fontFamily: mono, fontSize: fs(9), color: theme.textVeryFaint }}>
              Built by{" "}
              {siteAuthor.url
                ? <a href={siteAuthor.url} target="_blank" rel="noopener noreferrer" style={{ color: theme.textFaint, textDecoration: "none", borderBottom: `1px solid ${theme.textVeryFaint}` }}>{siteAuthor.name}</a>
                : siteAuthor.name
              }
              {" "}· Data: G2, TrustRadius, Mordor Intelligence, Sacra, Product Growth
            </span>
            <span style={{ fontFamily: mono, fontSize: fs(9), color: theme.textVeryFaint }}>
              Last updated: March 2026
            </span>
          </div>

        </div>
      </div>
    </ThemeContext.Provider>
  );
}

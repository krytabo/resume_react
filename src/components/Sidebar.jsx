import { RESUME_DATA } from '../data/resume.js'

const d = RESUME_DATA

const NAV_ITEMS = [
  { id: "hero",       num: "00", zh: "首頁",  en: "Intro" },
  { id: "about",      num: "01", zh: "關於",  en: "About" },
  { id: "experience", num: "02", zh: "經歷",  en: "Experience" },
  { id: "skills",     num: "03", zh: "技能",  en: "Skills" },
  { id: "projects",   num: "04", zh: "作品",  en: "Projects" },
  { id: "contact",    num: "05", zh: "聯繫",  en: "Contact" },
]

const btnBase = {
  flex: 1,
  padding: "8px 10px",
  background: "var(--bg-soft)",
  border: "1px solid var(--line)",
  borderRadius: 8,
  fontFamily: "var(--mono)",
  fontSize: 10.5,
  cursor: "pointer",
  color: "var(--ink-soft)",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
}

const Sidebar = ({ active, onNavigate, lang, onLangToggle, theme, onThemeToggle }) => (
  <aside className="sidebar">
    <div>
      <div className="mark">
        Krystal Chu<span className="dot">.</span>
      </div>
      <div className="eyebrow" style={{ marginTop: 8 }}>
        Senior Front-End · Portfolio
      </div>
    </div>

    <nav className="nav">
      {NAV_ITEMS.map(it => (
        <a
          key={it.id}
          href={`#${it.id}`}
          className={active === it.id ? "active" : ""}
          onClick={e => { e.preventDefault(); onNavigate(it.id) }}
        >
          <span className="num">{it.num}</span>
          <span className="zh">{lang === "zh" ? it.zh : it.en}</span>
          <span className="en">{it.en}</span>
        </a>
      ))}
    </nav>

    {/*<div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <div className="eyebrow">Controls</div>
      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={onThemeToggle} style={btnBase}>
          {theme === "dark" ? "☀ Light" : "☾ Dark"}
        </button>
        <button onClick={onLangToggle} style={btnBase}>
          {lang === "zh" ? "EN" : "中"}
        </button>
      </div>
      <button
        onClick={() => window.print()}
        style={{
          padding: "8px 10px",
          background: "var(--ink)",
          color: "var(--bg)",
          border: "0",
          borderRadius: 8,
          fontFamily: "var(--mono)",
          fontSize: 10.5,
          cursor: "pointer",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        ⇩ Download PDF
      </button>
    </div>*/}

    <div className="side-meta">
      <div>{d.contact.email}</div>
      <div>{d.contact.phone}</div>
      <div>{d.contact.location}</div>
      <div style={{ marginTop: 4, color: "var(--accent)" }}>● {d.contact.status}</div>
    </div>
  </aside>
)

export default Sidebar

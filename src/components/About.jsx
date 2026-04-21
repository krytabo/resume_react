import { useState } from 'react'
import SectionHead from './SectionHead.jsx'
import { RESUME_DATA } from '../data/resume.js'

const d = RESUME_DATA

const StrengthCard = ({ s }) => {
  const [hover, setHover] = useState(false)
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding: "20px 18px",
        border: "1px solid var(--line)",
        borderRadius: 12,
        background: hover ? "var(--accent-soft)" : "var(--panel)",
        transition: "all .3s cubic-bezier(.2,.7,.2,1)",
        transform: hover ? "translateY(-3px)" : "translateY(0)",
        cursor: "default",
      }}
    >
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 10 }}>
        <span style={{ fontFamily: "var(--sans)", fontSize: 20, fontWeight: 800, color: hover ? "var(--accent)" : "var(--ink-mute)", letterSpacing: "-0.02em", transition: "color .3s" }}>{s.k}</span>
        <span className="eyebrow">{s.en}</span>
      </div>
      <div className="zh" style={{ fontSize: 14, fontWeight: 700, color: "var(--ink)", marginBottom: 6, letterSpacing: "-0.01em" }}>{s.title}</div>
      <div className="zh" style={{ fontSize: 12.5, lineHeight: 1.6, color: "var(--ink-soft)" }}>{s.body}</div>
    </div>
  )
}

const About = ({ lang }) => {
  const paragraphs = d.summary.zh.split(/\n+/).filter(Boolean)

  return (
    <section id="about" className="section">
      <SectionHead num="01" en="About" zh={lang === "zh" ? "關於我" : "About me"} />
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 1fr)", gap: 72, alignItems: "start" }}>
        <div className="zh" style={{ fontSize: 16, lineHeight: 1.8, color: "var(--ink-soft)" }}>
          {paragraphs.map((p, i) => (
            <p key={i} style={{ margin: "0 0 22px", fontWeight: i === 0 ? 500 : 400, color: i === 0 ? "var(--ink)" : "var(--ink-soft)", fontSize: i === 0 ? 18 : 15.5, textWrap: "pretty" }}>
              {p}
            </p>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {d.strengths.map((s, i) => <StrengthCard key={i} s={s} />)}
        </div>
      </div>
    </section>
  )
}

export default About

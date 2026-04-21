import { useState } from 'react'
import SectionHead from './SectionHead.jsx'
import { RESUME_DATA } from '../data/resume.js'

const d = RESUME_DATA

const Row = ({ k, v, mono, accent }) => (
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", paddingBottom: 10, borderBottom: "1px solid var(--line)" }}>
    <span className="eyebrow" style={{ whiteSpace: "nowrap", fontFamily: "var(--mono)" }}>{k}</span>
    <span className={mono ? "mono" : "zh"} style={{ fontSize: mono ? 12.5 : 13, fontWeight: 500, color: accent ? "var(--accent)" : "var(--ink)" }}>
      {accent && "● "}{v}
    </span>
  </div>
)

const Contact = ({ lang }) => {
  const [copied, setCopied] = useState(false)

  const copy = () => {
    navigator.clipboard.writeText(d.contact.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  return (
    <section id="contact" className="section" style={{ borderBottom: 0, paddingBottom: 140 }}>
      <SectionHead num="05" en="Contact" zh={lang === "zh" ? "聯繫" : "Get in touch"} />

      <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)", gap: 56, alignItems: "center" }}>
        <div>
          <h3 style={{ fontFamily: "var(--sans)", fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.02, margin: "0 0 24px" }}>
            {lang === "zh"
              ? <>{`有適合的機會？`}<br /><span style={{ color: "var(--accent)" }}>聊聊看。</span></>
              : <>Got a role in mind?<br /><span style={{ color: "var(--accent)" }}>Let's talk.</span></>
            }
          </h3>
          <button
            onClick={copy}
            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
            onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
            style={{ display: "inline-flex", alignItems: "center", gap: 12, padding: "14px 22px", background: "var(--ink)", color: "var(--bg)", border: 0, borderRadius: 100, fontFamily: "var(--mono)", fontSize: 13, letterSpacing: "0.02em", cursor: "pointer", transition: "transform .2s" }}
          >
            {copied ? "✓ Copied" : d.contact.email}
            <span>↗</span>
          </button>
        </div>

        <div style={{ padding: 28, border: "1px solid var(--line-strong)", borderRadius: 16, background: "var(--panel)", display: "flex", flexDirection: "column", gap: 18 }}>
          <Row k={lang === "zh" ? "電子信箱" : "Email"}    v={d.contact.email}      mono />
          <Row k={lang === "zh" ? "聯絡電話" : "Phone"}    v={d.contact.phone}      mono />
          <Row k={lang === "zh" ? "所在地"   : "Location"} v={d.contact.location} />
          <Row k={lang === "zh" ? "期望月薪" : "Expected"} v={d.meta.salary}        mono />
          <Row k={lang === "zh" ? "到職"     : "Start date"} v={d.meta.availability} />
          <Row k={lang === "zh" ? "狀態"     : "Status"}   v={d.contact.status}    accent />
        </div>
      </div>

      <div style={{ marginTop: 96, paddingTop: 24, borderTop: "1px solid var(--line)", display: "flex", justifyContent: "space-between", fontFamily: "var(--mono)", fontSize: 10.5, color: "var(--ink-mute)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
        <span>© 2026 Krystal Chu</span>
        <span>Built with React · Vite</span>
      </div>
    </section>
  )
}

export default Contact

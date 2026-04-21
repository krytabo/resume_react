import { useState, useEffect } from 'react'
import SectionHead from './SectionHead.jsx'
import { PROJECTS } from '../data/resume.js'

const ProjectCard = ({ p, onOpen }) => {
  const [hover, setHover] = useState(false)
  return (
    <button
      onClick={onOpen}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        textAlign: "left", padding: 22,
        border: `1px solid ${hover ? "var(--accent)" : "var(--line)"}`,
        borderRadius: 14, background: "var(--panel)", cursor: "pointer",
        transition: "all .3s cubic-bezier(.2,.7,.2,1)",
        transform: hover ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hover ? "0 12px 30px rgba(0,0,0,0.08)" : "0 0 0 rgba(0,0,0,0)",
        fontFamily: "var(--sans)", color: "var(--ink)",
        display: "flex", flexDirection: "column", gap: 14,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <span className="mono" style={{ fontSize: 10.5, color: "var(--accent)", letterSpacing: "0.1em" }}>{p.k}</span>
        <span className="mono" style={{ fontSize: 10, color: "var(--ink-mute)" }}>{p.year}</span>
      </div>
      <div>
        <div className="zh" style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 4 }}>{p.title}</div>
        <div style={{ fontSize: 12, color: "var(--ink-mute)", fontFamily: "var(--sans)" }}>{p.titleEn} · {p.role}</div>
      </div>
      <div className="zh" style={{ fontSize: 13.5, lineHeight: 1.6, color: "var(--ink-soft)", textWrap: "pretty" }}>{p.summary}</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: "auto" }}>
        {p.stack.map((s, j) => (
          <span key={j} className="mono" style={{ fontSize: 10, padding: "3px 8px", borderRadius: 4, background: "var(--bg-soft)", color: "var(--ink-soft)" }}>{s}</span>
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: hover ? "var(--accent)" : "var(--ink-mute)", fontFamily: "var(--mono)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 4, transition: "color .2s" }}>
        View details
        <span style={{ transform: hover ? "translateX(4px)" : "translateX(0)", transition: "transform .3s" }}>→</span>
      </div>
    </button>
  )
}

const ProjectModal = ({ p, onClose }) => {
  useEffect(() => {
    const onKey = e => { if (e.key === "Escape") onClose() }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [onClose])

  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)", backdropFilter: "blur(4px)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: 40, animation: "fadein .25s ease" }}>
      <div onClick={e => e.stopPropagation()} style={{ width: "100%", maxWidth: 720, maxHeight: "85vh", overflow: "auto", background: "var(--panel)", borderRadius: 18, padding: "36px 40px", border: "1px solid var(--line-strong)", animation: "rise .35s cubic-bezier(.2,.7,.2,1)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
          <div>
            <span className="mono" style={{ fontSize: 11, color: "var(--accent)", letterSpacing: "0.15em" }}>{p.k} · {p.year}</span>
            <h3 className="zh" style={{ margin: "8px 0 4px", fontSize: 28, fontWeight: 800, letterSpacing: "-0.025em" }}>{p.title}</h3>
            <div style={{ fontSize: 13, color: "var(--ink-mute)" }}>{p.titleEn} · {p.role}</div>
          </div>
          <button onClick={onClose} style={{ background: "var(--bg-soft)", border: "1px solid var(--line)", borderRadius: "50%", width: 36, height: 36, cursor: "pointer", color: "var(--ink-soft)", fontSize: 16 }}>×</button>
        </div>

        <div className="zh" style={{ fontSize: 15, lineHeight: 1.7, color: "var(--ink-soft)", padding: "16px 0", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", marginBottom: 22 }}>{p.summary}</div>

        <div className="eyebrow" style={{ marginBottom: 12 }}>Highlights</div>
        <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
          {p.details.map((detail, i) => (
            <li key={i} className="zh" style={{ fontSize: 14, lineHeight: 1.65, color: "var(--ink-soft)", paddingLeft: 20, position: "relative" }}>
              <span style={{ position: "absolute", left: 0, top: 10, width: 8, height: 1, background: "var(--accent)" }} />
              {detail}
            </li>
          ))}
        </ul>

        <div style={{ marginTop: 22, display: "flex", flexWrap: "wrap", gap: 6 }}>
          {p.stack.map((s, i) => (
            <span key={i} className="mono" style={{ fontSize: 10.5, padding: "4px 10px", borderRadius: 4, background: "var(--accent-soft)", color: "var(--accent)", letterSpacing: "0.03em" }}>{s}</span>
          ))}
        </div>
      </div>
      <style>{`@keyframes fadein { from { opacity: 0; } to { opacity: 1; } }`}</style>
    </div>
  )
}

const Projects = ({ lang }) => {
  const [open, setOpen] = useState(null)

  return (
    <section id="projects" className="section">
      <SectionHead num="04" en="Projects" zh={lang === "zh" ? "代表作品" : "Selected work"} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 16 }}>
        {PROJECTS.map((p, i) => (
          <ProjectCard key={i} p={p} onOpen={() => setOpen(p)} />
        ))}
      </div>
      {open && <ProjectModal p={open} onClose={() => setOpen(null)} />}
    </section>
  )
}

export default Projects

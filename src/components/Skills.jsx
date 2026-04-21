import { useState, useEffect, useRef } from 'react'
import SectionHead from './SectionHead.jsx'
import { RESUME_DATA } from '../data/resume.js'

const d = RESUME_DATA

const SkillGroup = ({ group, idx, visible }) => (
  <div style={{
    padding: 22,
    border: "1px solid var(--line)",
    borderRadius: 12,
    background: "var(--panel)",
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(20px)",
    transition: `opacity .7s ease ${idx * 0.08}s, transform .7s cubic-bezier(.2,.7,.2,1) ${idx * 0.08}s`,
  }}>
    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 14 }}>
      <div style={{ fontFamily: "var(--sans)", fontSize: 14, fontWeight: 700, letterSpacing: "-0.01em" }}>{group.group}</div>
      <div className="mono" style={{ fontSize: 10, color: "var(--ink-mute)" }}>{String(idx + 1).padStart(2, "0")} / {String(d.skills.length).padStart(2, "0")}</div>
    </div>
    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
      {group.items.map((it, j) => {
        const primary = group.primary?.includes(it)
        return (
          <span
            key={j}
            className={primary ? "" : "zh"}
            style={{
              fontSize: primary ? 12 : 11.5,
              padding: primary ? "5px 11px" : "4px 10px",
              borderRadius: 20,
              background: primary ? "var(--accent)" : "var(--bg-soft)",
              color: primary ? "var(--bg)" : "var(--ink-soft)",
              fontWeight: primary ? 600 : 500,
              fontFamily: primary ? "var(--mono)" : undefined,
              letterSpacing: primary ? "0.02em" : undefined,
              transition: "transform .2s",
              cursor: "default",
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
            onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
          >{it}</span>
        )
      })}
    </div>
  </div>
)

const Skills = ({ lang }) => {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.2 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="skills" className="section" ref={ref}>
      <SectionHead num="03" en="Skills" zh={lang === "zh" ? "技能" : "Stack"} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 28 }}>
        {d.skills.map((group, i) => <SkillGroup key={i} group={group} idx={i} visible={visible} />)}
      </div>
    </section>
  )
}

export default Skills

import { useState } from 'react'
import SectionHead from './SectionHead.jsx'
import { RESUME_DATA } from '../data/resume.js'

const d = RESUME_DATA

const Experience = ({ lang }) => {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <section id="experience" className="section">
      <SectionHead num="02" en="Experience" zh={lang === "zh" ? "工作經歷" : "Work history"} />

      {d.experience.map((job, i) => (
        <div key={i} style={{ marginBottom: 32 }}>
          <div
            onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
            style={{ display: "grid", gridTemplateColumns: "120px 1fr auto", gap: 24, padding: "20px 0", borderTop: "1px solid var(--line-strong)", cursor: "pointer", alignItems: "baseline" }}
          >
            <div className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.05em" }}>{job.period}</div>
            <div>
              <div className="zh" style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 4 }}>{job.company}</div>
              <div style={{ fontSize: 14, color: "var(--ink-soft)", fontFamily: "var(--sans)", fontWeight: 500 }}>
                {job.role} <span style={{ color: "var(--ink-mute)" }}>· {job.roleEn}</span>
              </div>
            </div>
            <div style={{
              width: 32, height: 32, borderRadius: "50%", border: "1px solid var(--line-strong)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 14, color: "var(--ink-soft)",
              transform: openIdx === i ? "rotate(45deg)" : "rotate(0)",
              transition: "transform .3s cubic-bezier(.2,.7,.2,1)",
            }}>+</div>
          </div>

          <div style={{ maxHeight: openIdx === i ? 2000 : 0, overflow: "hidden", transition: "max-height .6s cubic-bezier(.2,.7,.2,1)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: 24, paddingBottom: 28 }}>
              <div>
                <div className="eyebrow" style={{ marginBottom: 4 }}>Scope</div>
                <div className="zh" style={{ fontSize: 11, color: "var(--ink-soft)", lineHeight: 1.6 }}>{job.scope}</div>
                <div className="eyebrow" style={{ marginTop: 14, marginBottom: 4 }}>Duration</div>
                <div className="mono" style={{ fontSize: 11, color: "var(--ink-soft)" }}>{job.duration}</div>
              </div>
              <div>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                  {job.bullets.map((b, j) => (
                    <li key={j} className="zh" style={{ fontSize: 14, lineHeight: 1.65, color: "var(--ink-soft)", paddingLeft: 16, position: "relative", textWrap: "pretty" }}>
                      <span style={{ position: "absolute", left: 0, top: "0.65em", width: 6, height: 6, borderRadius: "50%", background: "var(--accent)" }} />
                      {b}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: 20, display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {job.tags.map((t, j) => (
                    <span key={j} className="mono" style={{ fontSize: 10.5, padding: "4px 10px", borderRadius: 20, background: "var(--bg-soft)", color: "var(--ink-soft)", letterSpacing: "0.02em" }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div style={{ marginTop: 48 }}>
        <div className="eyebrow" style={{ marginBottom: 16 }}>
          {lang === "zh" ? "更早前的經歷 · Prior" : "Prior roles"}
        </div>
        {d.priorRoles.map((r, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "120px 1fr 1fr", gap: 24, padding: "12px 0", borderTop: "1px solid var(--line)", alignItems: "baseline" }}>
            <div className="mono" style={{ fontSize: 10.5, color: "var(--ink-mute)" }}>{r.year}</div>
            <div className="zh" style={{ fontSize: 13, fontWeight: 500 }}>{r.company}</div>
            <div className="zh" style={{ fontSize: 12, color: "var(--ink-mute)" }}>{r.role}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience

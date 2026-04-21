import { useState, useEffect } from 'react'
import { RESUME_DATA } from '../data/resume.js'

const d = RESUME_DATA

const StatRow = ({ big, unit, label }) => (
  <div>
    <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 2 }}>
      <span style={{ fontFamily: "var(--sans)", fontSize: 26, fontWeight: 800, letterSpacing: "-0.025em", color: "var(--ink)", lineHeight: 1 }}>{big}</span>
      <span style={{ fontSize: 12, color: "var(--ink-mute)", fontFamily: "var(--sans)", fontWeight: 500 }}>{unit}</span>
    </div>
    <div className="zh" style={{ fontSize: 11.5, color: "var(--ink-soft)", letterSpacing: "0.01em" }}>{label}</div>
  </div>
)

const QuickFact = ({ k, v }) => (
  <div>
    <div className="eyebrow" style={{ marginBottom: 6 }}>{k}</div>
    <div className="zh" style={{ fontSize: 18, fontWeight: 600, letterSpacing: "-0.01em", color: "var(--ink)" }}>{v}</div>
  </div>
)

const Hero = ({ lang }) => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = e => {
      const rect = document.getElementById("hero-stage")?.getBoundingClientRect()
      if (!rect) return
      setMouse({
        x: (e.clientX - rect.left - rect.width / 2) / rect.width,
        y: (e.clientY - rect.top - rect.height / 2) / rect.height,
      })
    }
    window.addEventListener("mousemove", onMove)
    return () => window.removeEventListener("mousemove", onMove)
  }, [])

  return (
    <section id="hero" className="section" style={{
      padding: "120px 72px 96px",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
    }}>
      <div id="hero-stage" style={{ position: "relative", zIndex: 2 }}>
        <div className="eyebrow reveal in" style={{ marginBottom: 24 }}>
          {lang === "zh" ? "履歷 / Portfolio · 2026" : "Curriculum Vitae · 2026"}
        </div>

        <h1 className="reveal in" style={{
          fontFamily: "var(--sans)",
          fontSize: "clamp(64px, 11vw, 156px)",
          fontWeight: 800,
          letterSpacing: "-0.04em",
          lineHeight: 0.92,
          margin: 0,
          transform: `translate(${mouse.x * 6}px, ${mouse.y * 6}px)`,
          transition: "transform .3s ease-out",
        }}>
          Krystal<br/>
          <span style={{ color: "var(--accent)" }}>Chu</span>
          <span style={{ color: "var(--accent)" }}>.</span>
        </h1>

        <div className="reveal in" style={{
          marginTop: 36,
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: 40,
          alignItems: "end",
          maxWidth: 900,
          animationDelay: "0.15s",
        }}>
          <div>
            <div className="zh" style={{ fontSize: 22, fontWeight: 500, lineHeight: 1.35, letterSpacing: "-0.015em", color: "var(--ink)", maxWidth: 560, textWrap: "balance" }}>
              {lang === "zh" ? d.tagline : d.taglineEn}
            </div>
            <div style={{ marginTop: 14, fontSize: 14, color: "var(--ink-mute)", fontFamily: "var(--mono)", letterSpacing: "0.04em" }}>
              {lang === "zh" ? d.titleZh : d.title} · {d.meta.experience} {lang === "zh" ? "經驗" : "experience"}
            </div>
          </div>

          <div style={{ padding: "20px 24px", border: "1px solid var(--line-strong)", borderRadius: 14, background: "var(--panel)", minWidth: 240 }}>
            <div className="eyebrow" style={{ marginBottom: 14 }}>
              {lang === "zh" ? "核心能量 · At a glance" : "At a glance"}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <StatRow big="9+" unit={lang === "zh" ? "年" : "yrs"} label={lang === "zh" ? "前端 / UI 年資" : "Front-end experience"} />
              <div style={{ height: 1, background: "var(--line)" }} />
              <StatRow big="Vue 3" unit="· React" label={lang === "zh" ? "雙棧核心技術" : "Dual-stack core"} />
              <div style={{ height: 1, background: "var(--line)" }} />
              <StatRow big="3D" unit={lang === "zh" ? "視覺化" : "Dataviz"} label="CesiumJS · Three.js" />
            </div>
          </div>
        </div>

        <div className="reveal in" style={{
          marginTop: 80,
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 24,
          paddingTop: 28,
          borderTop: "1px solid var(--line)",
          animationDelay: "0.3s",
        }}>
          <QuickFact k={lang === "zh" ? "經驗" : "Experience"} v={d.meta.experience} />
          <QuickFact k={lang === "zh" ? "所在地" : "Based in"} v={lang === "zh" ? "台中" : "Taichung, TW"} />
          <QuickFact k={lang === "zh" ? "核心技術" : "Stack"} v="Vue 3 · React" />
          <QuickFact k={lang === "zh" ? "到職" : "Available"} v={lang === "zh" ? "1 個月內" : "Within 1 month"} />
        </div>

        <div style={{ marginTop: 64, display: "flex", alignItems: "center", gap: 14, color: "var(--ink-mute)", fontFamily: "var(--mono)", fontSize: 10.5, letterSpacing: "0.15em", textTransform: "uppercase" }}>
          <div style={{ width: 32, height: 1, background: "var(--ink-mute)", animation: "pulse 2s ease-in-out infinite" }} />
          <span>{lang === "zh" ? "向下捲動" : "Scroll"}</span>
        </div>
      </div>

      <div aria-hidden style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(var(--line) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
        opacity: 0.5, zIndex: 1,
        maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
      }} />

      <style>{`@keyframes pulse { 0%, 100% { opacity: .3; } 50% { opacity: 1; } }`}</style>
    </section>
  )
}

export default Hero

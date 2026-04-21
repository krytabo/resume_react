import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Tweaks from './components/Tweaks.jsx'
import { ACCENT_SWATCHES, FONT_OPTIONS, TWEAK_DEFAULTS } from './constants/tweaks.js'

const SECTION_IDS = ["hero", "about", "experience", "skills", "projects", "contact"]

const App = () => {
  const [state, setState] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("resume-tweaks") || "null")
      return { ...TWEAK_DEFAULTS, ...(saved || {}) }
    } catch { return TWEAK_DEFAULTS }
  })
  const [active, setActive] = useState("hero")
  const [tweaksOpen, setTweaksOpen] = useState(false)

  // Persist tweaks
  useEffect(() => {
    localStorage.setItem("resume-tweaks", JSON.stringify(state))
  }, [state])

  // Apply theme + accent + font + density to :root
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", state.theme)

    const swatch = ACCENT_SWATCHES.find(s => s.k === state.accent) || ACCENT_SWATCHES[3]
    const accentColor = state.theme === "dark" ? swatch.dark : swatch.light
    const accentSoft = state.theme === "dark"
      ? `color-mix(in oklab, ${swatch.dark} 18%, transparent)`
      : swatch.soft
    document.documentElement.style.setProperty("--accent", accentColor)
    document.documentElement.style.setProperty("--accent-soft", accentSoft)

    const font = FONT_OPTIONS.find(f => f.k === state.font) || FONT_OPTIONS[0]
    document.documentElement.style.setProperty("--sans", font.stack)

    const densityMap = { compact: 0.85, normal: 1, spacious: 1.15 }
    document.documentElement.style.setProperty("--density", densityMap[state.density])
  }, [state])

  // Scroll-spy
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) })
    }, { rootMargin: "-45% 0px -45% 0px", threshold: 0 })
    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  const navigate = id => {
    setActive(id)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div className="app">
      <Sidebar
        active={active}
        onNavigate={navigate}
        lang={state.lang}
        onLangToggle={() => setState(s => ({ ...s, lang: s.lang === "zh" ? "en" : "zh" }))}
        theme={state.theme}
        onThemeToggle={() => setState(s => ({ ...s, theme: s.theme === "light" ? "dark" : "light" }))}
      />
      <main className="content">
        <Hero lang={state.lang} />
        <About lang={state.lang} />
        <Experience lang={state.lang} />
        <Skills lang={state.lang} />
        <Projects lang={state.lang} />
        <Contact lang={state.lang} />
      </main>

      {/*{!tweaksOpen && (
        <button
          onClick={() => setTweaksOpen(true)}
          style={{ position: "fixed", right: 20, bottom: 20, width: 44, height: 44, borderRadius: "50%", background: "var(--ink)", color: "var(--bg)", border: 0, cursor: "pointer", fontSize: 18, boxShadow: "0 8px 20px rgba(0,0,0,0.15)", zIndex: 90 }}
          title="Tweaks"
        >⚙</button>
      )}

      <Tweaks state={state} setState={setState} open={tweaksOpen} onClose={() => setTweaksOpen(false)} />*/}
    </div>
  )
}

export default App

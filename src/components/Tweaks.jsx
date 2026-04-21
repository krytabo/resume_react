import { ACCENT_SWATCHES, FONT_OPTIONS } from '../constants/tweaks.js'

const Tweaks = ({ state, setState, open, onClose }) => {
  if (!open) return null

  const set = (key, v) => setState(prev => ({ ...prev, [key]: v }))

  return (
    <div className="tweaks-panel">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
        <h4>Tweaks</h4>
        <button onClick={onClose} style={{ background: "transparent", border: 0, cursor: "pointer", color: "var(--ink-mute)", fontSize: 16, padding: 0 }}>×</button>
      </div>

      <div className="tweaks-row">
        <label>Accent color</label>
        <div className="options">
          {ACCENT_SWATCHES.map(s => (
            <div key={s.k} className={`swatch ${state.accent === s.k ? "active" : ""}`} onClick={() => set("accent", s.k)} style={{ background: state.theme === "dark" ? s.dark : s.light }} title={s.k} />
          ))}
        </div>
      </div>

      <div className="tweaks-row">
        <label>Theme</label>
        <div className="options">
          {["light", "dark"].map(t => (
            <div key={t} className={`chip ${state.theme === t ? "active" : ""}`} onClick={() => set("theme", t)}>{t}</div>
          ))}
        </div>
      </div>

      <div className="tweaks-row">
        <label>Language</label>
        <div className="options">
          {[{ k: "zh", l: "中文" }, { k: "en", l: "English" }].map(l => (
            <div key={l.k} className={`chip ${state.lang === l.k ? "active" : ""}`} onClick={() => set("lang", l.k)}>{l.l}</div>
          ))}
        </div>
      </div>

      <div className="tweaks-row">
        <label>Primary font</label>
        <div className="options">
          {FONT_OPTIONS.map(f => (
            <div key={f.k} className={`chip ${state.font === f.k ? "active" : ""}`} onClick={() => set("font", f.k)} style={{ fontFamily: f.stack, textTransform: "none" }}>{f.label}</div>
          ))}
        </div>
      </div>

      <div className="tweaks-row" style={{ marginBottom: 0 }}>
        <label>Density</label>
        <div className="options">
          {["compact", "normal", "spacious"].map(d => (
            <div key={d} className={`chip ${state.density === d ? "active" : ""}`} onClick={() => set("density", d)}>{d}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tweaks

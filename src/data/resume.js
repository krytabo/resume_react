// ============================================================
//  履歷內容 — 只需編輯這一個檔案就能更新所有頁面內容
//  Resume content — edit this file to update everything
// ============================================================

export const RESUME_DATA = {
  // ── 基本資訊 Basic Info ──────────────────────────────────
  name: { en: "Krystal Chu", zh: "朱" },
  title: "Senior Front-End Engineer",
  titleZh: "資深前端工程師",
  tagline: "從平面設計轉型前端，9+ 年跨域經驗，擅長把 UI/UX 思維帶進產品開發。",
  taglineEn: "Design-minded engineer bridging product UX and front-end architecture.",

  // ── 聯絡資訊 Contact ─────────────────────────────────────
  contact: {
    email: "c7kimo@hotmail.com",
    phone: "0909-334-315",
    location: "台中市 · Taichung, TW",
    status: "在職中 · Currently employed",
  },

  // ── 求職偏好 Preferences ─────────────────────────────────
  meta: {
    age: 37,
    experience: "9–10 年",
    salary: "NT$ 65,000+ / 月",
    roles: ["資深前端工程師", "UI 設計師"],
    availability: "可於一個月內到職",
  },

  // ── 自我介紹 Summary ─────────────────────────────────────
  summary: {
    zh: `我是一位從平面設計轉型為前端工程師的開發者。對使用介面的敏感度，讓我習慣從使用者角度思考功能設計，而非只從程式碼結構出發。

目前於 EZPLUS 擔任前端工程師暨 UI 設計師，負責公司各項專案與平台的前端開發。從 Vue 2 一路跟進到 Vue 3，能獨立處理從規劃、UI、元件開發、API 串接到測試上線的完整流程；同時以 React + Hooks 進行個人專案與技術研究，Vue 3 / React 皆為核心技術棧。

技術面熟悉 TypeScript、Pinia、Vue Router、Axios、SCSS、Tailwind CSS；設計面以 Figma 製作 wireframe、UI layout 與 prototype。團隊協作上擁有扎實的 Git 分支管理、Code Review 與 CI/CD 經驗。`,
  },

  // ── 技能分組 Skills ──────────────────────────────────────
  skills: [
    {
      group: "Framework",
      items: ["Vue 3", "React", "Composition API", "React Hooks", "Vue Router", "Pinia", "TypeScript"],
      primary: ["Vue 3", "React"],
    },
    {
      group: "Styling",
      items: ["Tailwind CSS", "SCSS / Sass", "CSS3", "Element Plus", "Arco Design", "Responsive Design"],
    },
    {
      group: "Visualization",
      items: ["Three.js", "CesiumJS", "3D 地圖", "互動式圖表"],
    },
    {
      group: "Tooling",
      items: ["Git / GitFlow", "Vite", "Axios", "RESTful API", "CI/CD", "Code Review"],
    },
    {
      group: "Design",
      items: ["Figma", "Wireframe", "Prototype", "UI/UX", "CIS", "平面設計"],
    },
    {
      group: "Foundation",
      items: ["HTML5", "JavaScript (ES6+)", "jQuery", "DOM / Event", "CSP 資安"],
    },
  ],

  // ── 核心優勢 Strengths ───────────────────────────────────
  strengths: [
    {
      k: "01",
      title: "前端核心技術",
      en: "Core Engineering",
      body: "扎實的 HTML / CSS / JS 基礎；Vue 3 + React 雙核心技術棧，熟悉 Composition API、<script setup>、React Hooks 與狀態管理。",
    },
    {
      k: "02",
      title: "專案獨立規劃",
      en: "Project Ownership",
      body: "帶過多個從 0 到 1 的專案：從技術選型、UI 結構、元件規劃、API 串接到上線，能獨立負責並維護可擴展性。",
    },
    {
      k: "03",
      title: "3D / 資料視覺化",
      en: "3D & Dataviz",
      body: "實務操作 three.js、CesiumJS，曾協助 3D 地圖看板專案，處理地理資料、相機動畫、圖層切換等互動場景。",
    },
    {
      k: "04",
      title: "設計 × 工程思維",
      en: "Design-minded",
      body: "平面設計轉職背景讓我能用 Figma 自行產出 wireframe / UI layout，主動與 PM、設計師對齊需求，降低來回溝通成本。",
    },
  ],

  // ── 工作經歷 Experience ──────────────────────────────────
  experience: [
    {
      company: "EZPLUS",
      companyNote: "www.ezplus.com.tw",
      role: "前端工程師 / UI 設計師",
      roleEn: "Front-End Engineer / UI Designer",
      period: "2018.11 – Present",
      duration: "7+ yrs",
      location: "台中",
      scope: "公司規模 30–100 人 · 管理 4 人以下 · 全職",
      bullets: [
        "主導 Vue 3 生態系開發：Vue Router、Pinia、Composition API、<script setup>，搭配 Element Plus / Arco Design 建構多項管理後台頁面與互動功能。",
        "以 React + Hooks 進行個人專案與技術研究，建立 Vue / React 雙棧切換的開發能力，可依專案特性選型。",
        "獨立主導多個從 0 開始的專案：技術選型、UI/UX 規劃、元件架構、API 串接、跨團隊協作。",
        "3D 資料視覺化：以 three.js 與 CesiumJS 協助 3D 地圖看板專案，完成圖層切換、相機動畫、互動式圖表等功能。",
        "API 串接與資安：熟悉 RESTful API 錯誤處理與例外邏輯；導入 Content Security Policy (CSP) 防止 XSS，提升前端安全性。",
        "以 Pinia 狀態管理 + localStorage 實作頁面狀態持久化，規劃元件與狀態的同步策略。",
        "團隊協作：Git 分支策略、Code Review、Merge Conflict 解決、CI/CD 流程。",
        "跨部門溝通：主動與 UI 設計師、後端工程師、PM 對齊需求並提供技術解法。",
      ],
      tags: ["Vue 3", "React", "Pinia", "Three.js", "CesiumJS", "Tailwind", "TypeScript", "UI/UX"],
    },
  ],

  // ── 過往經歷 Prior Roles ─────────────────────────────────
  priorRoles: [
    { year: "2017 – 2018", company: "生物科技有限公司", role: "平面設計 · 1y6m" },
    { year: "2012 – 2017", company: "傳產相關", role: "企劃助理 / 行政專員 · 4y10m" },
    { year: "2011 – 2012", company: "網路相關", role: "客服專員 · 10m" },
    { year: "2010 – 2011", company: "網路相關", role: "客服專員 · 1y7m" },
  ],

  // ── 學歷 Education ───────────────────────────────────────
  education: [
    {
      school: "嘉南藥理科技大學",
      schoolEn: "Chia Nan University",
      degree: "資訊系",
      period: "2008.9 – 2010.2",
    },
    {
      school: "崇實高工",
      schoolEn: "National Yuanlin ChungShih",
      degree: "室內設計",
      period: "2004.6 – 2008.6",
    },
  ],

  languages: [
    { name: "中文 · Mandarin", level: "精通 · Native" },
    { name: "英文 · English", level: "讀寫 · Professional reading" },
  ],

  certs: [
    "室內設計相關證照",
    "丙級木工技術士",
    "輕型機車駕照",
  ],

  preferences: {
    desiredRoles: ["資深前端工程師", "UI 設計師", "網頁設計師", "UX 設計師"],
    desiredWork: "UI/UX 設計、平面設計、地圖視覺化",
    specialty: "Vue 3 · React",
    salary: "NT$ 65,000+ / 月",
    startDate: "可於一個月內到職",
    locations: ["台中"],
  },
};

// ── 作品集 Projects ────────────────────────────────────────
// 新增作品：在陣列中加一個 {} 物件即可
export const PROJECTS = [
  {
    k: "P01",
    title: "3D 地圖看板系統",
    titleEn: "3D Geospatial Dashboard",
    year: "2023–2025",
    role: "Lead Front-End",
    stack: ["CesiumJS", "Three.js", "Vue 3", "Pinia"],
    summary: "以 CesiumJS 建構的 3D 地理資料看板，支援圖層切換、相機動畫、互動式資料點位。",
    details: [
      "規劃並實作多圖層 (raster / vector / 3D tileset) 切換與混合渲染策略。",
      "以 Pinia 管理相機狀態，支援場景 bookmark、平滑切換與鏡頭錄製。",
      "將 Three.js 粒子 / 路徑特效疊合進 Cesium 場景，展示即時資料流動。",
      "針對大量 POI 點位做視錐 + LOD 優化，維持 60fps 互動效能。",
    ],
  },
  {
    k: "P02",
    title: "Vue 3 管理後台平台",
    titleEn: "Admin Platform (Vue 3)",
    year: "2021–2024",
    role: "Front-End Architect",
    stack: ["Vue 3", "TypeScript", "Pinia", "Element Plus", "Arco Design"],
    summary: "公司核心管理後台系統，由 Vue 2 逐步升級到 Vue 3 + Composition API。",
    details: [
      "主導 Vue 2 → Vue 3 升級計畫，拆分 mixin 與 options API 至 composable。",
      "建立可重用元件庫（表格、表單、篩選、檔案上傳）供多專案共用。",
      "整合 Element Plus / Arco Design 兩套 UI，包一層主題 token 以統一視覺語言。",
      "導入 TypeScript + Pinia，提升型別安全與狀態管理可維護性。",
    ],
  },
  {
    k: "P03",
    title: "React Hooks 個人實驗",
    titleEn: "React Experiments",
    year: "2022–Present",
    role: "Solo",
    stack: ["React 18", "Hooks", "Vite", "Tailwind"],
    summary: "以 React + Hooks 進行技術研究的個人專案，涵蓋動畫、狀態同步與 hook 組合。",
    details: [
      "嘗試 Suspense、useTransition 等 concurrent features 在資料載入的實務模式。",
      "實作幾組可重用 custom hook：useLocalStorage、useIntersection、useThrottle。",
      "用於驗證 Vue / React 語意差異，建立雙棧切換時的心智模型。",
    ],
  },
  {
    k: "P04",
    title: "前端資安導入（CSP）",
    titleEn: "CSP Hardening",
    year: "2024",
    role: "Front-End Lead",
    stack: ["CSP", "Nonce", "Nginx"],
    summary: "導入 Content Security Policy，降低 XSS 攻擊面並建立 inline script 的 nonce 策略。",
    details: [
      "盤點專案內所有 inline script / style 並遷移至外部檔案或使用 nonce。",
      "與後端協作配置 CSP header，從 report-only 逐步收斂到 enforce。",
      "建立開發期與上線期的 CSP 差異化設定，降低 DX 摩擦。",
    ],
  },
];

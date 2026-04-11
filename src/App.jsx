import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
import { getGlobalSearchResults } from './data/globalSearchIndex.js'
import { useCopyButtons } from './hooks/useCopyButtons.js'
import Home from './components/Home'
import Linux from './components/Linux'
import Git from './components/Git'
import CICD from './components/CICD'
import Cloud from './components/Cloud'
import Infrastructure from './components/Infrastructure'
import Network from './components/Network'
import Monitoring from './components/Monitoring'
import Security from './components/Security'
import Containers from './components/Containers'
import Resources from './components/Resources'
import Roadmap from './components/Roadmap'
import KnowledgeBase from './components/KnowledgeBase'
import DevOpsMustKnow from './components/DevOpsMustKnow'
import SkillMap from './components/SkillMap'

const THEME_STORAGE_KEY = 'devops-hub-theme'
const VISITED_STORAGE_KEY = 'devops-hub-visited'

function readInitialTheme() {
  if (typeof window === 'undefined') return 'dark'
  const stored = window.localStorage.getItem(THEME_STORAGE_KEY)
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

function readVisited() {
  try {
    const raw = window.localStorage.getItem(VISITED_STORAGE_KEY)
    return raw ? new Set(JSON.parse(raw)) : new Set(['home'])
  } catch {
    return new Set(['home'])
  }
}

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [searchTerm, setSearchTerm] = useState('')
  const [theme, setTheme] = useState(readInitialTheme)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showBackTop, setShowBackTop] = useState(false)
  const [visited, setVisited] = useState(readVisited)
  const mainRef = useRef(null)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme)
    } catch {
      /* ignore */
    }
  }, [theme])

  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement
      const scrollTop = el.scrollTop || document.body.scrollTop
      const scrollHeight = el.scrollHeight - el.clientHeight
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0
      setScrollProgress(progress)
      setShowBackTop(scrollTop > 300)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigateTo = useCallback((sectionId) => {
    setActiveSection(sectionId)
    setVisited((prev) => {
      const next = new Set(prev)
      next.add(sectionId)
      try {
        window.localStorage.setItem(VISITED_STORAGE_KEY, JSON.stringify([...next]))
      } catch { /* ignore */ }
      return next
    })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  useCopyButtons(activeSection)

  const sections = [
    { id: 'home', name: 'Accueil', icon: '🏠' },
    { id: 'linux', name: 'Linux', icon: '🐧' },
    { id: 'git', name: 'Git', icon: '📂' },
    { id: 'cicd', name: 'CI/CD', icon: '🔄' },
    { id: 'cloud', name: 'Cloud', icon: '☁️' },
    { id: 'infrastructure', name: 'Infrastructure', icon: '🏗️' },
    { id: 'network', name: 'Réseau', icon: '🌐' },
    { id: 'containers', name: 'Containers', icon: '📦' },
    { id: 'monitoring', name: 'Monitoring', icon: '📊' },
    { id: 'security', name: 'Sécurité', icon: '🔒' },
    { id: 'mustknow', name: 'Métier DevOps', icon: '🎯' },
    { id: 'skillmap', name: 'Carte des compétences', icon: '🗺️' },
    { id: 'roadmap', name: 'Roadmap', icon: '🧭' },
    { id: 'knowledge', name: 'Base de connaissances', icon: '🧠' },
    { id: 'resources', name: 'Ressources', icon: '📚' }
  ]

  const contentSections = sections.filter(s => s.id !== 'home')
  const visitedCount = [...visited].filter(id => id !== 'home').length
  const totalContent = contentSections.length

  const globalResults = useMemo(
    () => getGlobalSearchResults(searchTerm, { limit: 16 }),
    [searchTerm]
  )

  const showGlobalPanel = searchTerm.trim().length >= 2

  const renderContent = () => {
    switch(activeSection) {
      case 'home': return <Home onNavigate={navigateTo} visited={visited} />
      case 'linux': return <Linux />
      case 'git': return <Git />
      case 'cicd': return <CICD />
      case 'cloud': return <Cloud />
      case 'infrastructure': return <Infrastructure />
      case 'network': return <Network />
      case 'containers': return <Containers />
      case 'monitoring': return <Monitoring />
      case 'security': return <Security />
      case 'mustknow': return <DevOpsMustKnow />
      case 'skillmap': return <SkillMap onNavigate={navigateTo} />
      case 'roadmap': return <Roadmap />
      case 'knowledge': return <KnowledgeBase onNavigateToSection={navigateTo} />
      case 'resources': return <Resources />
      default: return <Home onNavigate={navigateTo} visited={visited} />
    }
  }

  return (
    <div className="app">
      {/* Barre de progression du scroll */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden
      />

      <header className="header">
        <div className="header-content">
          <h1 className="logo">🚀 DevOps Knowledge Hub</h1>
          <p className="subtitle">Centre de ressources pour étudiants Master DevOps & Cloud</p>
          <div className="header-actions">
            {visitedCount > 0 && (
              <span className="progress-badge" title={`${visitedCount} section${visitedCount > 1 ? 's' : ''} explorée${visitedCount > 1 ? 's' : ''} sur ${totalContent}`}>
                {visitedCount}/{totalContent}
              </span>
            )}
            <button
              type="button"
              className="theme-toggle"
              onClick={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}
              aria-pressed={theme === 'light'}
              aria-label={theme === 'light' ? 'Passer en mode sombre' : 'Passer en mode clair'}
            >
              <span aria-hidden>{theme === 'light' ? '🌙' : '☀️'}</span>
              <span className="theme-toggle-label">{theme === 'light' ? 'Sombre' : 'Clair'}</span>
            </button>
          </div>
        </div>
      </header>

      <nav className="navbar">
        <div className="search-wrapper">
          <input
            type="search"
            className="search-input"
            placeholder="Recherche globale : sections, fiches, runbooks…"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Escape') setSearchTerm('')
            }}
            aria-label="Recherche globale dans le hub"
            autoComplete="off"
          />
          {showGlobalPanel && (
            <div className="global-search-panel" role="listbox" aria-label="Résultats de recherche">
              {globalResults.length === 0 ? (
                <p className="global-search-empty">Aucun résultat pour cette recherche.</p>
              ) : (
                globalResults.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    role="option"
                    className="global-search-item"
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={() => {
                      navigateTo(item.sectionId)
                      setSearchTerm('')
                    }}
                  >
                    <span className={`global-search-badge global-search-badge-${item.category}`}>
                      {item.category === 'section' ? 'Section' : item.category === 'runbook' ? 'Runbook' : 'Fiche'}
                    </span>
                    <span className="global-search-item-title">{item.title}</span>
                    {item.snippet ? (
                      <span className="global-search-item-snippet">{item.snippet}</span>
                    ) : null}
                  </button>
                ))
              )}
            </div>
          )}
        </div>
        <div className="navbar-container">
          {sections.map(section => (
            <button
              key={section.id}
              className={`nav-button ${activeSection === section.id ? 'active' : ''}${visited.has(section.id) && section.id !== 'home' && activeSection !== section.id ? ' visited' : ''}`}
              onClick={() => navigateTo(section.id)}
            >
              <span className="nav-icon">{section.icon}</span>
              <span className="nav-text">{section.name}</span>
            </button>
          ))}
        </div>
      </nav>

      <main className="main-content" ref={mainRef}>
        {renderContent()}
      </main>

      {/* Bouton retour en haut */}
      <button
        type="button"
        className={`back-to-top${showBackTop ? '' : ' back-to-top--hidden'}`}
        onClick={scrollToTop}
        aria-label="Retour en haut de la page"
        title="Retour en haut"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-links">
            {[
              { id: 'linux', label: 'Linux' },
              { id: 'containers', label: 'Containers' },
              { id: 'cicd', label: 'CI/CD' },
              { id: 'cloud', label: 'Cloud' },
              { id: 'knowledge', label: 'Base de connaissances' },
              { id: 'roadmap', label: 'Roadmap' },
              { id: 'resources', label: 'Ressources' },
            ].map(link => (
              <button
                key={link.id}
                type="button"
                className="footer-link"
                onClick={() => navigateTo(link.id)}
              >
                {link.label}
              </button>
            ))}
          </div>
          <p className="footer-copy">
            © 2026 <strong>DevOps Knowledge Hub</strong> — Karim Haddadi — Master DevOps, Infrastructure & Cloud
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

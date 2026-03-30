import { useMemo, useState } from 'react'
import './App.css'
import { getGlobalSearchResults } from './data/globalSearchIndex.js'
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

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [searchTerm, setSearchTerm] = useState('')

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
    { id: 'roadmap', name: 'Roadmap', icon: '🧭' },
    { id: 'knowledge', name: 'Base de connaissances', icon: '🧠' },
    { id: 'resources', name: 'Ressources', icon: '📚' }
  ]

  const globalResults = useMemo(
    () => getGlobalSearchResults(searchTerm, { limit: 16 }),
    [searchTerm]
  )

  const showGlobalPanel = searchTerm.trim().length >= 2

  const renderContent = () => {
    switch(activeSection) {
      case 'home': return <Home />
      case 'linux': return <Linux />
      case 'git': return <Git />
      case 'cicd': return <CICD />
      case 'cloud': return <Cloud />
      case 'infrastructure': return <Infrastructure />
      case 'network': return <Network />
      case 'containers': return <Containers />
      case 'monitoring': return <Monitoring />
      case 'security': return <Security />
      case 'roadmap': return <Roadmap />
      case 'knowledge': return <KnowledgeBase onNavigateToSection={setActiveSection} />
      case 'resources': return <Resources />
      default: return <Home />
    }
  }

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1 className="logo">🚀 DevOps Knowledge Hub</h1>
          <p className="subtitle">Centre de ressources pour étudiants Master DevOps & Cloud</p>
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
                      setActiveSection(item.sectionId)
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
              className={`nav-button ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => setActiveSection(section.id)}
            >
              <span className="nav-icon">{section.icon}</span>
              <span className="nav-text">{section.name}</span>
            </button>
          ))}
        </div>
      </nav>

      <main className="main-content">
        {renderContent()}
      </main>

      <footer className="footer">
        <p>© 2025 DevOps Knowledge Hub - Pour les apprentis en Master DevOps, Infrastructure et Cloud</p>
      </footer>
    </div>
  )
}

export default App

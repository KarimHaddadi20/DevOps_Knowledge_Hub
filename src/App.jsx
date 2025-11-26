import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Linux from './components/Linux'
import CICD from './components/CICD'
import Cloud from './components/Cloud'
import Infrastructure from './components/Infrastructure'
import Monitoring from './components/Monitoring'
import Security from './components/Security'
import Containers from './components/Containers'
import Resources from './components/Resources'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const sections = [
    { id: 'home', name: 'Accueil', icon: '🏠' },
    { id: 'linux', name: 'Linux', icon: '🐧' },
    { id: 'cicd', name: 'CI/CD', icon: '🔄' },
    { id: 'cloud', name: 'Cloud', icon: '☁️' },
    { id: 'infrastructure', name: 'Infrastructure', icon: '🏗️' },
    { id: 'containers', name: 'Containers', icon: '📦' },
    { id: 'monitoring', name: 'Monitoring', icon: '📊' },
    { id: 'security', name: 'Sécurité', icon: '🔒' },
    { id: 'resources', name: 'Ressources', icon: '📚' }
  ]

  const renderContent = () => {
    switch(activeSection) {
      case 'home': return <Home />
      case 'linux': return <Linux />
      case 'cicd': return <CICD />
      case 'cloud': return <Cloud />
      case 'infrastructure': return <Infrastructure />
      case 'containers': return <Containers />
      case 'monitoring': return <Monitoring />
      case 'security': return <Security />
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

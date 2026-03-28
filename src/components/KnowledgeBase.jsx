import { useMemo, useState } from 'react';
import { KB_INDEX_ENTRIES, KB_RUNBOOKS, KB_TABS } from '../data/knowledgeCatalog';

function KnowledgeBase({ onNavigateToSection }) {
  const [activeTab, setActiveTab] = useState('index');
  const [kbQuery, setKbQuery] = useState('');

  const filteredIndex = useMemo(() => {
    const q = kbQuery.trim().toLowerCase();
    if (!q) return KB_INDEX_ENTRIES;
    return KB_INDEX_ENTRIES.filter((entry) => {
      const hay = `${entry.title} ${entry.summary} ${entry.keywords} ${entry.tags.join(' ')}`.toLowerCase();
      return hay.includes(q);
    });
  }, [kbQuery]);

  return (
    <div className="kb-root">
      <div className="card kb-intro">
        <h2>🧠 Base de connaissances</h2>
        <p className="kb-intro-text">
          Structure en <strong>index thématique</strong>, <strong>cycle de vie logiciel</strong>, fondations techniques,
          sujets avancés, <strong>runbooks</strong> et FAQ. Utilisez l’onglet Index pour rechercher un sujet ou ouvrir
          directement la section détaillée du hub.
        </p>

        <div className="kb-tabs" role="tablist" aria-label="Rubriques de la base de connaissances">
          {KB_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`kb-tab ${activeTab === tab.id ? 'kb-tab-active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {activeTab === 'index' && (
        <div className="animate-fade-in">
          <div className="card">
            <h3>🔎 Index thématique</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              Recherche sur titres, mots-clés et tags. Chaque fiche renvoie vers le contenu approfondi du site lorsque disponible.
            </p>
            <input
              type="search"
              className="kb-search"
              placeholder="Ex. kubernetes, terraform, pipeline, slo…"
              value={kbQuery}
              onChange={(e) => setKbQuery(e.target.value)}
              aria-label="Rechercher dans la base de connaissances"
            />
            <p className="kb-result-count">
              {filteredIndex.length} entrée{filteredIndex.length !== 1 ? 's' : ''}
              {kbQuery.trim() ? ` pour « ${kbQuery.trim()} »` : ''}
            </p>
            <div className="kb-index-grid">
              {filteredIndex.map((entry) => (
                <article key={entry.id} className="kb-index-card">
                  <h4 className="kb-index-title">{entry.title}</h4>
                  <p className="kb-index-summary">{entry.summary}</p>
                  <div className="kb-tags">
                    {entry.tags.map((tag) => (
                      <span key={tag} className="kb-tag">{tag}</span>
                    ))}
                  </div>
                  {entry.sectionId && onNavigateToSection ? (
                    <button
                      type="button"
                      className="kb-link-section"
                      onClick={() => onNavigateToSection(entry.sectionId)}
                    >
                      Ouvrir la section →
                    </button>
                  ) : (
                    <span className="kb-link-muted">Contenu transversal — parcourir les autres onglets</span>
                  )}
                </article>
              ))}
            </div>
            {filteredIndex.length === 0 && (
              <p className="kb-empty">Aucun résultat. Essayez un autre mot-clé ou consultez le cycle de vie et les fondamentaux.</p>
            )}
          </div>
        </div>
      )}

      {activeTab === 'lifecycle' && (
        <div className="animate-fade-in">
          <div className="card">
            <h3>♾️ Cycle de vie DevOps</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              La livraison logicielle se comprend comme une boucle continue : chaque phase alimente la suivante et
              remonte des retours vers la conception.
            </p>
            <div className="diagram-container kb-lifecycle-diagram">
              <pre className="kb-lifecycle-pre">{`    Plan ──► Code ──► Build ──► Test
      ▲                         │
      │                         ▼
  Monitor ◄── Operate ◄── Deploy ◄── Release`}</pre>
            </div>
            <div className="grid">
              <div className="kb-pillar">
                <h4>Plan & Code</h4>
                <ul>
                  <li>Backlog, spécifications, architecture cible</li>
                  <li>Git, revues, branches, conventions</li>
                </ul>
              </div>
              <div className="kb-pillar">
                <h4>Build & Test</h4>
                <ul>
                  <li>Build reproductible, artefacts versionnés</li>
                  <li>Tests unitaires, intégration, qualité statique</li>
                </ul>
              </div>
              <div className="kb-pillar">
                <h4>Release & Deploy</h4>
                <ul>
                  <li>Promotion d’environnements, stratégies canary / blue-green</li>
                  <li>Infrastructure as Code, secrets hors du code</li>
                </ul>
              </div>
              <div className="kb-pillar">
                <h4>Operate & Monitor</h4>
                <ul>
                  <li>Observabilité : métriques, logs, traces</li>
                  <li>Incidents, runbooks, amélioration continue</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'fundamentals' && (
        <div className="animate-fade-in">
          <div className="card">
            <h3>📘 Tronc commun</h3>
            <div className="grid kb-fundamentals-grid">
              <div className="kb-pillar">
                <h4>Linux</h4>
                <ul>
                  <li>FHS, systemd, permissions, SSH, logs, processus</li>
                  <li>Automatisation Bash et tâches planifiées</li>
                  <li>Debug réseau : DNS, sockets, ports, routes</li>
                </ul>
                {onNavigateToSection && (
                  <button type="button" className="kb-link-section kb-link-inline" onClick={() => onNavigateToSection('linux')}>
                    Section Linux
                  </button>
                )}
              </div>
              <div className="kb-pillar">
                <h4>Git</h4>
                <ul>
                  <li>Branches, merge vs rebase, résolution de conflits</li>
                  <li>Pull requests, revues, conventions de commit</li>
                  <li>Trunk-based vs git-flow selon la taille d’équipe</li>
                </ul>
                {onNavigateToSection && (
                  <button type="button" className="kb-link-section kb-link-inline" onClick={() => onNavigateToSection('git')}>
                    Section Git
                  </button>
                )}
              </div>
              <div className="kb-pillar">
                <h4>Containers</h4>
                <ul>
                  <li>Dockerfile multi-stage, durcissement d’image</li>
                  <li>Réseau, volumes, healthchecks, limites ressources</li>
                  <li>Registry, tags sémantiques, scan de vulnérabilités</li>
                </ul>
                {onNavigateToSection && (
                  <button type="button" className="kb-link-section kb-link-inline" onClick={() => onNavigateToSection('containers')}>
                    Section Containers
                  </button>
                )}
              </div>
              <div className="kb-pillar">
                <h4>CI/CD</h4>
                <ul>
                  <li>Pipelines : build → test → lint → scan → déploiement</li>
                  <li>Artefacts, quality gates, promotion par environnement</li>
                  <li>Rollback, canary, blue/green</li>
                </ul>
                {onNavigateToSection && (
                  <button type="button" className="kb-link-section kb-link-inline" onClick={() => onNavigateToSection('cicd')}>
                    Section CI/CD
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="card">
            <h3>🧾 Checklist « prêt à livrer »</h3>
            <ul className="kb-checklist">
              <li>Je peux déployer une application containerisée en environnement de test.</li>
              <li>Je peux analyser un pipeline en échec et corriger la cause racine.</li>
              <li>Je gère les secrets sans les committer (vault, secrets CI, variables chiffrées).</li>
              <li>J’ai des dashboards et des alertes actionnables pour la production.</li>
              <li>Je documente runbook et procédure de rollback pour les changements critiques.</li>
            </ul>
          </div>
        </div>
      )}

      {activeTab === 'advanced' && (
        <div className="animate-fade-in">
          <div className="card">
            <h3>🚀 Domaines avancés</h3>
            <div className="grid">
              <div className="kb-advanced-card">
                <h4>SRE & fiabilité</h4>
                <p>SLI, SLO, budget d’erreur, gestion d’incident, post-mortem sans blâme.</p>
                {onNavigateToSection && (
                  <button type="button" className="kb-link-section kb-link-inline" onClick={() => onNavigateToSection('monitoring')}>
                    Monitoring
                  </button>
                )}
              </div>
              <div className="kb-advanced-card">
                <h4>Platform engineering</h4>
                <p>Golden paths, self-service, templates, portail développeur interne.</p>
              </div>
              <div className="kb-advanced-card">
                <h4>Security by design</h4>
                <p>Shift-left, policy as code, moindre privilège IAM, supply chain.</p>
                {onNavigateToSection && (
                  <button type="button" className="kb-link-section kb-link-inline" onClick={() => onNavigateToSection('security')}>
                    Sécurité
                  </button>
                )}
              </div>
              <div className="kb-advanced-card">
                <h4>FinOps</h4>
                <p>Suivi des coûts cloud, rightsizing, alertes budget, optimisation continue.</p>
                {onNavigateToSection && (
                  <button type="button" className="kb-link-section kb-link-inline" onClick={() => onNavigateToSection('cloud')}>
                    Cloud
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'runbooks' && (
        <div className="animate-fade-in">
          <div className="card">
            <h3>🛠️ Runbooks opérationnels</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Procédures types à adapter à votre contexte. Chaque étape doit être datée dans l’outil d’incident.
            </p>
            <div className="kb-runbook-list">
              {KB_RUNBOOKS.map((rb) => (
                <div key={rb.id} className="kb-runbook">
                  <div className="kb-runbook-head">
                    <strong>{rb.title}</strong>
                    <span className={`kb-severity kb-severity-${rb.severity.toLowerCase()}`}>{rb.severity}</span>
                  </div>
                  <ol className="kb-runbook-steps">
                    {rb.steps.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'architecture' && (
        <div className="animate-fade-in">
          <div className="card">
            <h3>🏗️ Architecture de référence</h3>
            <div className="code-block">
              <pre>{`Utilisateur
  → CDN / WAF
    → Équilibreur de charge
      → Kubernetes (front + API)
        → Cache (ex. Redis)
        → Base de données managée
        → File de messages (optionnel)
      → Observabilité unifiée (logs, métriques, traces)
      → CI/CD · Registry · Gestion des secrets`}</pre>
            </div>
            <ul className="kb-arch-list">
              <li>Résilience : plusieurs zones de disponibilité, health checks, dégradation gracieuse</li>
              <li>Sécurité : segmentation réseau, identités de charge de travail, rotation des secrets</li>
              <li>Livraison : déploiements progressifs, feature flags, observabilité pour valider le rollout</li>
            </ul>
            {onNavigateToSection && (
              <div className="kb-arch-links">
                <button type="button" className="kb-link-section kb-link-inline" onClick={() => onNavigateToSection('network')}>Réseau</button>
                <button type="button" className="kb-link-section kb-link-inline" onClick={() => onNavigateToSection('containers')}>Containers</button>
                <button type="button" className="kb-link-section kb-link-inline" onClick={() => onNavigateToSection('infrastructure')}>Infrastructure</button>
              </div>
            )}
          </div>
        </div>
      )}

      {activeTab === 'faq' && (
        <div className="animate-fade-in">
          <div className="card">
            <h3>❓ FAQ</h3>
            <div className="kb-faq-list">
              <details className="kb-faq-item">
                <summary>Quelle différence entre Continuous Delivery et Continuous Deployment ?</summary>
                <p>La <em>delivery</em> produit une release déployable à la demande ; le <em>deployment</em> pousse automatiquement chaque changement validé vers la production.</p>
              </details>
              <details className="kb-faq-item">
                <summary>Par où commencer pour être opérationnel vite ?</summary>
                <p>Linux et Git, puis Docker, un pipeline CI/CD minimal, les bases Kubernetes, enfin IaC, monitoring et sécurité — dans l’ordre de la section Roadmap.</p>
              </details>
              <details className="kb-faq-item">
                <summary>Comment limiter les incidents en production ?</summary>
                <p>Tests automatisés, revues, quality gates, déploiements progressifs, limites de ressources, observabilité et runbooks à jour.</p>
              </details>
              <details className="kb-faq-item">
                <summary>Que mettre dans un bon runbook ?</summary>
                <p>Symptômes, diagnostic (où regarder), actions de mitigation, escalade, critères de clôture, lien vers dashboards et owners.</p>
              </details>
              <details className="kb-faq-item">
                <summary>Terraform ou Ansible en premier ?</summary>
                <p>Terraform pour l’état de l’infrastructure (provisionnement) ; Ansible (ou équivalent) pour la configuration et les tâches procédurales — souvent complémentaires.</p>
              </details>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default KnowledgeBase;

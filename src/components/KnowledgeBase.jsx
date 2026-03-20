import { useState } from 'react';

function KnowledgeBase() {
  const [activeTab, setActiveTab] = useState('fundamentals');

  const tabs = [
    { id: 'fundamentals', label: 'Fondamentaux' },
    { id: 'advanced', label: 'Sujets avancés' },
    { id: 'runbooks', label: 'Runbooks' },
    { id: 'architecture', label: 'Architecture type' },
    { id: 'faq', label: 'FAQ' }
  ];

  return (
    <div>
      <div className="card">
        <h2>🧠 Base de connaissances complète</h2>
        <p>
          Cette section centralise les informations essentielles et avancées pour couvrir
          un cycle DevOps complet: conception, livraison, exploitation et sécurité.
        </p>

        <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem' }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                background: 'none',
                border: 'none',
                color: activeTab === tab.id ? '#38bdf8' : 'var(--text-secondary)',
                borderBottom: activeTab === tab.id ? '2px solid #38bdf8' : '2px solid transparent',
                padding: '0.5rem 0.75rem',
                cursor: 'pointer',
                fontWeight: 500,
                whiteSpace: 'nowrap'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {activeTab === 'fundamentals' && (
        <div className="animate-fade-in">
          <div className="card">
            <h3>📘 Tronc commun DevOps</h3>
            <div className="grid">
              <div>
                <h4>Linux</h4>
                <ul style={{ lineHeight: 1.9, color: 'var(--text-secondary)' }}>
                  <li>FHS, systemd, permissions, SSH, logs, processus</li>
                  <li>Automatisation Bash et tâches planifiées</li>
                  <li>Debug réseau: DNS, sockets, ports, routes</li>
                </ul>
              </div>
              <div>
                <h4>Git</h4>
                <ul style={{ lineHeight: 1.9, color: 'var(--text-secondary)' }}>
                  <li>Branches, merge vs rebase, conflits</li>
                  <li>Pull requests, revues, conventions de commit</li>
                  <li>Stratégies trunk-based et git-flow selon contexte</li>
                </ul>
              </div>
              <div>
                <h4>Containers</h4>
                <ul style={{ lineHeight: 1.9, color: 'var(--text-secondary)' }}>
                  <li>Dockerfile multi-stage, image hardening</li>
                  <li>Networking, volumes, healthchecks, limits</li>
                  <li>Registry, tagging, scan vulnérabilités</li>
                </ul>
              </div>
              <div>
                <h4>CI/CD</h4>
                <ul style={{ lineHeight: 1.9, color: 'var(--text-secondary)' }}>
                  <li>Pipelines build-test-lint-scan-deploy</li>
                  <li>Artifacts, quality gates, promotion d environnements</li>
                  <li>Rollback, canary, blue/green</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card">
            <h3>🧾 Checklist de maîtrise</h3>
            <div className="code-block">
              <div>[ ] Je peux déployer une app containerisée en environnement de test.</div>
              <div>[ ] Je peux analyser un pipeline en échec et corriger la cause.</div>
              <div>[ ] Je peux sécuriser les secrets sans les exposer dans le code.</div>
              <div>[ ] Je peux configurer dashboard + alertes utiles en production.</div>
              <div>[ ] Je peux documenter runbook et procédure de rollback.</div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'advanced' && (
        <div className="animate-fade-in">
          <div className="card">
            <h3>🚀 Domaines avancés à couvrir</h3>
            <div className="grid">
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)', borderRadius: '8px', padding: '1rem' }}>
                <h4 style={{ marginTop: 0 }}>SRE & fiabilité</h4>
                <p style={{ margin: 0 }}>SLI, SLO, error budget, incident management, postmortem blameless.</p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)', borderRadius: '8px', padding: '1rem' }}>
                <h4 style={{ marginTop: 0 }}>Platform Engineering</h4>
                <p style={{ margin: 0 }}>Golden paths, self-service platform, templates, portail dev interne.</p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)', borderRadius: '8px', padding: '1rem' }}>
                <h4 style={{ marginTop: 0 }}>Security by design</h4>
                <p style={{ margin: 0 }}>Shift-left, policy as code, IAM least privilege, supply chain security.</p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)', borderRadius: '8px', padding: '1rem' }}>
                <h4 style={{ marginTop: 0 }}>FinOps</h4>
                <p style={{ margin: 0 }}>Suivi coûts cloud, rightsizing, budget alerts, optimisation continue.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'runbooks' && (
        <div className="animate-fade-in">
          <div className="card">
            <h3>🛠️ Runbooks opérationnels</h3>
            <p>Templates rapides à adapter pour exploitation réelle.</p>
            <div className="grid">
              <div className="code-block" style={{ margin: 0 }}>
                <strong>Runbook: API indisponible</strong>
                <div>1. Vérifier status service, pods, ingress</div>
                <div>2. Vérifier erreurs logs et latence DB</div>
                <div>3. Rollback dernière release si nécessaire</div>
                <div>4. Ouvrir incident + timeline + postmortem</div>
              </div>
              <div className="code-block" style={{ margin: 0 }}>
                <strong>Runbook: pipeline cassé</strong>
                <div>1. Identifier stage bloquant (build/test/deploy)</div>
                <div>2. Isoler la régression (commit, dépendance, infra)</div>
                <div>3. Corriger ou revert proprement</div>
                <div>4. Ajouter garde-fou pour éviter la récidive</div>
              </div>
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
  -> CDN + WAF
    -> Load Balancer
      -> Kubernetes (API + Front)
        -> Cache (Redis)
        -> Base de données managée
        -> Message Broker
      -> Observabilité (Logs, Metrics, Traces)
      -> CI/CD + Registry + Secrets Manager`}</pre>
            </div>
            <ul style={{ lineHeight: 2, color: 'var(--text-secondary)', paddingLeft: '1.25rem' }}>
              <li>Haute disponibilité multi-zones</li>
              <li>Sécurité réseau et identités cloisonnées</li>
              <li>Déploiements progressifs avec observabilité native</li>
            </ul>
          </div>
        </div>
      )}

      {activeTab === 'faq' && (
        <div className="animate-fade-in">
          <div className="card">
            <h3>❓ FAQ DevOps (essentielle)</h3>
            <div style={{ display: 'grid', gap: '1rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)', borderRadius: '8px', padding: '1rem' }}>
                <strong>CI/CD: quelle différence entre delivery et deployment ?</strong>
                <p style={{ margin: '0.5rem 0 0' }}>Delivery prépare une release prête à être déployée. Deployment déploie automatiquement en production.</p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)', borderRadius: '8px', padding: '1rem' }}>
                <strong>Par quoi commencer pour devenir opérationnel rapidement ?</strong>
                <p style={{ margin: '0.5rem 0 0' }}>Linux + Git + Docker + CI/CD + Kubernetes de base, puis IaC, monitoring et sécurité.</p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)', borderRadius: '8px', padding: '1rem' }}>
                <strong>Comment éviter de casser la production ?</strong>
                <p style={{ margin: '0.5rem 0 0' }}>Tests automatiques, quality gates, déploiement progressif, rollback prêt, observabilité active.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default KnowledgeBase;

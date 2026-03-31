import { useState } from 'react';

function DevOpsMustKnow() {
  const [activeTab, setActiveTab] = useState('culture');

  const tabBar = (
    <div
      style={{
        display: 'flex',
        gap: '1rem',
        borderBottom: '1px solid var(--border-subtle)',
        marginBottom: '2rem',
        overflowX: 'auto',
        paddingBottom: '0.5rem'
      }}
    >
      {[
        { id: 'culture', label: 'Culture & esprit' },
        { id: 'pillars', label: 'Piliers techniques' },
        { id: 'stack', label: 'Stack & outils' },
        { id: 'operations', label: 'Exploitation & SRE' },
        { id: 'soft', label: 'Soft skills' },
        { id: 'levels', label: 'Niveaux (junior → senior)' }
      ].map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => setActiveTab(tab.id)}
          style={{
            background: 'none',
            border: 'none',
            color: activeTab === tab.id ? '#38bdf8' : 'var(--text-secondary)',
            borderBottom: activeTab === tab.id ? '2px solid #38bdf8' : '2px solid transparent',
            padding: '0.5rem 1rem',
            cursor: 'pointer',
            fontWeight: 500,
            whiteSpace: 'nowrap',
            transition: 'all 0.2s ease'
          }}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );

  return (
    <div>
      <div className="card">
        <h2>🎯 Ce qu’un DevOps doit savoir</h2>
        <p>
          Synthèse des compétences attendues en entreprise : pas seulement des outils, mais une façon de travailler
          (collaboration, automatisation, fiabilité) et une couverture technique large du code à la production.
        </p>
        {tabBar}
      </div>

      {activeTab === 'culture' && (
        <div className="animate-fade-in">
          <div className="card">
            <h3>CALMS — repères culturels</h3>
            <ul style={{ lineHeight: 2, color: 'var(--text-secondary)' }}>
              <li><strong>C</strong>ulture — partage de responsabilités dev & ops, pas de silos</li>
              <li><strong>A</strong>utomation — répéter sans erreur : pipelines, IaC, self-service</li>
              <li><strong>L</strong>ean — flux court, petits lots, limiter le gaspillage (WIP)</li>
              <li><strong>M</strong>easurement — métriques, logs, feedback sur la livraison et la prod</li>
              <li><strong>S</strong>haring — documentation, post-mortems blameless, apprentissage continu</li>
            </ul>
          </div>
          <div className="card">
            <h3>Ce que ça implique au quotidien</h3>
            <ul style={{ lineHeight: 2, color: 'var(--text-secondary)' }}>
              <li>Définir et mesurer la <strong>qualité</strong> (tests, SLO, dette technique)</li>
              <li>Réduire le <strong>temps de mise en prod</strong> tout en gardant la stabilité</li>
              <li>Assumer la <strong>observabilité</strong> : savoir déboguer sans deviner</li>
              <li><strong>Sécurité par défaut</strong> : secrets, moindre privilège, patching</li>
            </ul>
          </div>
        </div>
      )}

      {activeTab === 'pillars' && (
        <div className="animate-fade-in">
          <div className="card">
            <h3>Bloc 1 — Système & scripting</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Linux (processus, réseau, disque, permissions, systemd, logs), shell Bash, au minimum les bases de Python ou Go pour l’outillage.
            </p>
          </div>
          <div className="card">
            <h3>Bloc 2 — Versionnement & collaboration</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Git : branches, merges, résolution de conflits, PR/reviews. Compréhension des workflows d’équipe (trunk, Git Flow simplifié).
            </p>
          </div>
          <div className="card">
            <h3>Bloc 3 — Automatisation CI/CD</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Pipeline : build, tests unitaires/intégration, analyse statique, empaquetage, promotion d’artefacts, déploiement.
              Comprendre au moins une plateforme (GitHub Actions, GitLab CI, Jenkins, Azure DevOps).
            </p>
          </div>
          <div className="card">
            <h3>Bloc 4 — Conteneurs & orchestration</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Images Docker (multi-stage, utilisateur non-root), réseaux et volumes, <code>docker-compose</code>.
              Kubernetes : Pods, Deployments, Services, ConfigMaps/Secrets, Ingress, probes, limits/requests, scaling de base.
            </p>
          </div>
          <div className="card">
            <h3>Bloc 5 — Cloud & réseau</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Un fournisseur en profondeur (ex. AWS) + notions transverses (IAM, VPC, sous-réseaux, DNS, équilibreur, stockage objet).
              TLS, pare-feu, exposition HTTP(s) via reverse proxy.
            </p>
          </div>
          <div className="card">
            <h3>Bloc 6 — Infrastructure as Code</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Terraform (ou équivalent) : état, modules, plan/apply. Ansible ou scripts idempotents pour la configuration post-provisionnement.
            </p>
          </div>
          <div className="card">
            <h3>Bloc 7 — Données & messagerie (notions)</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Comprendre connexions BD, migrations, réplicas, sauvegardes. Notions de files (Kafka, RabbitMQ) et caches (Redis) selon le stack.
            </p>
          </div>
          <div className="card">
            <h3>Bloc 8 — Observabilité & fiabilité</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Métriques (Prometheus), dashboards (Grafana), logs centralisés, corrélation. SLI/SLO, alerting utile (moins de bruit).
              Idées SRE : erreurs budgétaires, résilience, capacity planning léger.
            </p>
          </div>
          <div className="card">
            <h3>Bloc 9 — Sécurité (DevSecOps)</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Gestion des secrets, scans de dépendances et d’images, durcissement (RBAC K8s), prise en compte de la supply chain (signature, SBOM selon maturité).
            </p>
          </div>
        </div>
      )}

      {activeTab === 'stack' && (
        <div className="animate-fade-in">
          <div className="card">
            <h3>Exemples de stack (les noms changent, les rôles restent)</h3>
            <div className="grid">
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.25rem', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
                <h4 style={{ marginTop: 0 }}>CI/CD & Git</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>
                  GitHub / GitLab / Bitbucket · Actions / Pipelines / Jenkins · Argo CD ou Flux (GitOps) si K8s
                </p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.25rem', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
                <h4 style={{ marginTop: 0 }}>Runtime</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>
                  Docker · Kubernetes (EKS, AKS, GKE ou on-prem) · Helm
                </p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.25rem', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
                <h4 style={{ marginTop: 0 }}>Observabilité</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>
                  Prometheus · Grafana · Loki ou ELK · OpenTelemetry / Jaeger (traces)
                </p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.25rem', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
                <h4 style={{ marginTop: 0 }}>IaC & config</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>
                  Terraform · Ansible · Vault ou secrets managés cloud
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <h3>À retenir</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Mieux vaut maîtriser <strong>les concepts</strong> (pipeline, idempotence, immutabilité, API cloud) que de lister 50 outils sans les lier à un problème métier.
            </p>
          </div>
        </div>
      )}

      {activeTab === 'operations' && (
        <div className="animate-fade-in">
          <div className="card">
            <h3>Incident & changement</h3>
            <ul style={{ lineHeight: 2, color: 'var(--text-secondary)' }}>
              <li>Gérer un incident : prioriser, communiquer, stabiliser, puis analyser (post-mortem blameless)</li>
              <li>Réduire le risque : canary, feature flags, rollbacks testés</li>
              <li>Changements traçables : tout passe par Git ou un ticket lié à un déploiement versionné</li>
            </ul>
          </div>
          <div className="card">
            <h3>Performance & coûts</h3>
            <ul style={{ lineHeight: 2, color: 'var(--text-secondary)' }}>
              <li>Savoir lire une courbe (latence p95, saturation, erreurs) et isoler la couche fautive</li>
              <li>Rightsizing, réservations, instances spot : réconcilier perf et budget</li>
              <li>Capacité : anticiper la croissance sans sur-provisionner en permanence</li>
            </ul>
          </div>
          <div className="card">
            <h3>Documentation & transfert</h3>
            <ul style={{ lineHeight: 2, color: 'var(--text-secondary)' }}>
              <li>Runbooks et ADR (Architecture Decision Records) pour les décisions importantes</li>
              <li>Onboarding : un nouveau peut déployer en toute confiance avec la procédure documentée</li>
            </ul>
          </div>
        </div>
      )}

      {activeTab === 'soft' && (
        <div className="animate-fade-in">
          <div className="card">
            <h3>Compétences non techniques essentielles</h3>
            <ul style={{ lineHeight: 2, color: 'var(--text-secondary)' }}>
              <li><strong>Communication</strong> : expliquer un risque ou un trade-off à des non-spécialistes</li>
              <li><strong>Curiosité</strong> : technologies et domaine métier (ce que fait le produit)</li>
              <li><strong>Priorisation</strong> : tout ne peut pas être automatisé en même temps</li>
              <li><strong>Esprit critique</strong> : challenger les « on a toujours fait comme ça »</li>
              <li><strong>Travail d’équipe</strong> avec devs, sécu, SRE, support — sans jargon inutile</li>
            </ul>
          </div>
        </div>
      )}

      {activeTab === 'levels' && (
        <div className="animate-fade-in">
          <div className="card">
            <h3>Junior — exécuter avec supervision</h3>
            <ul style={{ lineHeight: 2, color: 'var(--text-secondary)' }}>
              <li>Linux & Git opérationnels, premiers pipelines, Docker, notions K8s</li>
              <li>Suit des runbooks, pose les bonnes questions en incident</li>
            </ul>
          </div>
          <div className="card">
            <h3>Confirmé — concevoir et industrialiser</h3>
            <ul style={{ lineHeight: 2, color: 'var(--text-secondary)' }}>
              <li>Pipeline bout-en-bout, IaC sur un périmètre, observabilité utile, pair debugging efficace</li>
              <li>Anticipe les pannes courantes et propose des garde-fous en CI</li>
            </ul>
          </div>
          <div className="card">
            <h3>Senior / Staff — architecturer et faire évoluer la pratique</h3>
            <ul style={{ lineHeight: 2, color: 'var(--text-secondary)' }}>
              <li>Choix de plateforme, standards d’équipe, sécurité et conformité à grande échelle</li>
              <li>Mentorat, amélioration continue des indicateurs et de la livraison (DORA, etc.)</li>
            </ul>
          </div>
          <div className="card">
            <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
              Pour un parcours structuré, consulte aussi <strong>Roadmap</strong> et <strong>Base de connaissances</strong> dans la barre de navigation.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default DevOpsMustKnow;

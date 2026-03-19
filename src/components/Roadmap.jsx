function Roadmap() {
  const pillars = [
    {
      title: 'Linux & Scripting',
      level: 'Fondation',
      outcomes: [
        'Administrer un serveur Linux en autonomie',
        'Automatiser des taches via Bash et cron',
        'Diagnostiquer CPU, memoire, disque et reseau'
      ]
    },
    {
      title: 'Git & Collaboration',
      level: 'Fondation',
      outcomes: [
        'Appliquer une strategie de branches propre',
        'Gerer PR, code review et historique lisible',
        'Normaliser les conventions de commit'
      ]
    },
    {
      title: 'Containers & Kubernetes',
      level: 'Intermediaire',
      outcomes: [
        'Construire des images Docker optimisees',
        'Deployer des workloads Kubernetes',
        'Configurer services, ingress et autoscaling'
      ]
    },
    {
      title: 'CI/CD & Quality Gates',
      level: 'Intermediaire',
      outcomes: [
        'Mettre en place un pipeline complet build-test-deploy',
        'Ajouter lint, tests, scans de securite et quality gates',
        'Implementer rollback et strategies de deploiement'
      ]
    },
    {
      title: 'Cloud & Infrastructure as Code',
      level: 'Intermediaire',
      outcomes: [
        'Concevoir une architecture cloud basique et resiliente',
        'Provisionner avec Terraform et configurer avec Ansible',
        'Optimiser couts et gouvernance multi-environnements'
      ]
    },
    {
      title: 'Observabilite & SRE',
      level: 'Avance',
      outcomes: [
        'Definir SLI, SLO et alerting actionnable',
        'Construire dashboards et runbooks de support',
        'Mener postmortems et amelioration continue'
      ]
    },
    {
      title: 'DevSecOps',
      level: 'Avance',
      outcomes: [
        'Mettre en place gestion de secrets et RBAC',
        'Scanner dependances, images et IaC',
        'Durcir l acces, le reseau et la chaine CI/CD'
      ]
    }
  ];

  const labs = [
    'Lab 1: Setup Linux + durcissement SSH + firewall',
    'Lab 2: Workflow Git avec PR et convention commits',
    'Lab 3: Dockeriser une application web + healthcheck',
    'Lab 4: Pipeline CI/CD avec tests et scan securite',
    'Lab 5: Deploy Kubernetes + rolling update + rollback',
    'Lab 6: Infra cloud via Terraform + variables par environnement',
    'Lab 7: Monitoring Prometheus/Grafana + alertes',
    'Lab 8: Incident drill + postmortem + actions correctives'
  ];

  const weeklyPlan = [
    { week: 'Semaines 1-2', focus: 'Linux, shell, reseau, Git' },
    { week: 'Semaines 3-4', focus: 'Docker, registry, bonnes pratiques images' },
    { week: 'Semaines 5-6', focus: 'CI/CD, tests, quality gates, secrets' },
    { week: 'Semaines 7-8', focus: 'Kubernetes, deploy strategies, observabilite' },
    { week: 'Semaines 9-10', focus: 'Cloud, Terraform, Ansible, securite' },
    { week: 'Semaines 11-12', focus: 'Projet final, SRE, documentation et soutenance' }
  ];

  return (
    <div>
      <div className="card">
        <h2>🧭 Roadmap Complete DevOps</h2>
        <p>
          Cette section structure le hub pour couvrir les competences attendues en Master
          DevOps de la fondation jusqu aux pratiques avancees.
        </p>
      </div>

      <div className="card">
        <h3>✅ Couverture des competences</h3>
        <div className="grid">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              style={{
                background: 'rgba(255,255,255,0.03)',
                padding: '1rem 1.25rem',
                borderRadius: '8px',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <h4 style={{ margin: '0 0 0.5rem', color: 'var(--text-primary)' }}>{pillar.title}</h4>
              <p style={{ margin: '0 0 0.75rem', fontSize: '0.85rem', color: '#38bdf8' }}>{pillar.level}</p>
              <ul style={{ margin: 0, paddingLeft: '1.25rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                {pillar.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <h3>🧪 Parcours pratique (labs)</h3>
        <ul style={{ lineHeight: 2, color: 'var(--text-secondary)', margin: 0, paddingLeft: '1.25rem' }}>
          {labs.map((lab) => (
            <li key={lab}>{lab}</li>
          ))}
        </ul>
      </div>

      <div className="card">
        <h3>📅 Plan de progression 12 semaines</h3>
        <div className="code-block">
          {weeklyPlan.map((item) => (
            <div key={item.week} style={{ marginBottom: '0.75rem' }}>
              <strong>{item.week}</strong> - {item.focus}
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <h3>🎯 Definition du niveau "job-ready"</h3>
        <ul style={{ lineHeight: 2, color: 'var(--text-secondary)', margin: 0, paddingLeft: '1.25rem' }}>
          <li>Construire et deployer une application containerisee de bout en bout</li>
          <li>Automatiser la livraison avec pipeline CI/CD et controles qualite</li>
          <li>Observer, diagnostiquer et corriger une panne avec methodologie SRE</li>
          <li>Appliquer les fondamentaux de securite sur code, infra et runtime</li>
        </ul>
      </div>
    </div>
  );
}

export default Roadmap;

function Home() {
  const sections = [
    { id: 'linux', name: 'Linux', icon: '🐧', desc: 'Arborescence FHS, commandes, permissions, systemd, réseau, scripting Bash.' },
    { id: 'cicd', name: 'CI/CD', icon: '🔄', desc: 'Jenkins, GitLab CI, GitHub Actions - Pipelines et bonnes pratiques.' },
    { id: 'cloud', name: 'Cloud', icon: '☁️', desc: 'AWS, Azure, GCP - IaaS, PaaS, services essentiels et CLI.' },
    { id: 'infrastructure', name: 'Infrastructure', icon: '🏗️', desc: 'Terraform, Ansible - Infrastructure as Code.' },
    { id: 'containers', name: 'Containers', icon: '📦', desc: 'Docker, Kubernetes - Conteneurisation et orchestration.' },
    { id: 'monitoring', name: 'Monitoring', icon: '📊', desc: 'Prometheus, Grafana, ELK - Métriques, logs, observabilité.' },
    { id: 'security', name: 'Sécurité', icon: '🔒', desc: 'Secrets, vulnérabilités, DevSecOps et bonnes pratiques.' },
    { id: 'resources', name: 'Ressources', icon: '📚', desc: 'Documentations, formations, certifications et parcours.' }
  ];

  return (
    <div>
      <div className="card">
        <h2>Bienvenue dans le DevOps Knowledge Hub</h2>
        <p>
          Ce hub de connaissances est conçu spécialement pour les étudiants en Master DevOps,
          Infrastructure et Cloud. Vous y trouverez des ressources structurées, des guides
          pratiques et des exemples de code pour maîtriser les concepts essentiels du DevOps.
        </p>
        <p>
          Utilisez la barre de navigation ci-dessus pour explorer chaque section. Chaque thème
          contient des sous-onglets avec du contenu détaillé : commandes, exemples de config,
          bonnes pratiques et schémas.
        </p>
      </div>

      <div className="card">
        <h3>🎯 Par où commencer ?</h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
          Si vous débutez, suivez cet ordre recommandé :
        </p>
        <ol style={{ lineHeight: 2, color: 'var(--text-secondary)', paddingLeft: '1.5rem' }}>
          <li><strong>Linux</strong> — Le socle de tout : système de fichiers, permissions, services</li>
          <li><strong>Containers</strong> — Docker pour isoler vos applications</li>
          <li><strong>CI/CD</strong> — Automatiser build, tests et déploiement</li>
          <li><strong>Kubernetes</strong> — Orchestration à l'échelle</li>
          <li><strong>Cloud</strong> — AWS, Azure ou GCP selon votre contexte</li>
          <li><strong>Infrastructure</strong> — Terraform et Ansible pour l'IaC</li>
          <li><strong>Monitoring</strong> — Observabilité et alerting</li>
          <li><strong>Sécurité</strong> — DevSecOps et gestion des secrets</li>
        </ol>
      </div>

      <div className="card">
        <h3>📂 Contenu par section</h3>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {sections.map(section => (
            <div
              key={section.id}
              className="card"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid var(--border-subtle)',
                padding: '1.25rem',
                margin: 0,
                height: '100%',
                transition: 'border-color 0.2s'
              }}
            >
              <h4 style={{ margin: '0 0 0.5rem', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>{section.icon}</span>
                {section.name}
              </h4>
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {section.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <h3>💡 Conseils</h3>
        <ul style={{ lineHeight: 2, color: 'var(--text-secondary)' }}>
          <li>Les blocs de code sont copiables — utilisez-les comme base pour vos projets</li>
          <li>Consultez la section <strong>Ressources</strong> pour les documentations officielles et formations</li>
          <li>Pratiquez en local avec Docker ou une VM avant de passer au cloud</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;

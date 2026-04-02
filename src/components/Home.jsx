function Home() {
  const sections = [
    { id: 'linux', name: 'Linux', icon: '🐧', desc: 'FHS, commandes, permissions, systemd, logs, firewall, scripting Bash.' },
    { id: 'git', name: 'Git', icon: '📂', desc: 'Branches, merge, rebase, remote, workflows, conventional commits.' },
    { id: 'cicd', name: 'CI/CD', icon: '🔄', desc: 'Jenkins, GitLab CI, GitHub Actions, stratégies de déploiement.' },
    { id: 'cloud', name: 'Cloud', icon: '☁️', desc: 'AWS, Azure, GCP - IaaS, PaaS, CLI, optimisation coûts.' },
    { id: 'infrastructure', name: 'Infrastructure', icon: '🏗️', desc: 'Terraform, Ansible - IaC, state, modules.' },
    { id: 'network', name: 'Réseau', icon: '🌐', desc: 'DNS, proxy, reverse proxy Nginx, load balancing.' },
    { id: 'containers', name: 'Containers', icon: '📦', desc: 'Docker, Kubernetes, Helm, Ingress, HPA.' },
    { id: 'monitoring', name: 'Monitoring', icon: '📊', desc: 'Prometheus, Grafana, AlertManager, ELK, observabilité.' },
    { id: 'security', name: 'Sécurité', icon: '🔒', desc: 'Secrets, vulnérabilités, RBAC K8s, Network Policies.' },
    { id: 'mustknow', name: 'Métier DevOps', icon: '🎯', desc: 'CALMS, piliers techniques, stack, SRE, soft skills, niveaux.' },
    { id: 'roadmap', name: 'Roadmap', icon: '🧭', desc: 'Parcours structuré, compétences cibles, labs et plan sur plusieurs semaines.' },
    { id: 'knowledge', name: 'Base de connaissances', icon: '🧠', desc: 'Index thématique, recherche, cycle de vie, runbooks et FAQ.' },
    { id: 'resources', name: 'Ressources', icon: '📚', desc: 'Documentations, formations, certifications, glossaire.' }
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
          Utilisez la barre de navigation ci-dessus pour explorer chaque section. La{' '}
          <strong>recherche globale</strong> (au moins 2 caractères) parcourt sections, fiches et runbooks.
          Les pages <strong>Roadmap</strong> et <strong>Base de connaissances</strong> structurent le parcours et
          l’accès rapide aux sujets. La page <strong>Métier DevOps</strong> résume ce qu’un ingénieur DevOps est
          censé maîtriser (culture, technique, exploitation). Chaque thème contient des sous-onglets : commandes,
          exemples de config, bonnes pratiques.
        </p>
      </div>

      <div className="card">
        <h3>🎯 Par où commencer ?</h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
          Si vous débutez, suivez cet ordre recommandé :
        </p>
        <ol style={{ lineHeight: 2, color: 'var(--text-secondary)', paddingLeft: '1.5rem' }}>
          <li><strong>Linux</strong> — Le socle : système de fichiers, permissions, services</li>
          <li><strong>Git</strong> — Contrôle de version et collaboration</li>
          <li><strong>Containers</strong> — Docker pour isoler vos applications</li>
          <li><strong>CI/CD</strong> — Automatiser build, tests et déploiement</li>
          <li><strong>Kubernetes</strong> — Orchestration à l'échelle</li>
          <li><strong>Cloud</strong> — AWS, Azure ou GCP selon votre contexte</li>
          <li><strong>Infrastructure</strong> — Terraform et Ansible pour l'IaC</li>
          <li><strong>Réseau</strong> — DNS, proxy, load balancing</li>
          <li><strong>Monitoring</strong> — Observabilité et alerting</li>
          <li><strong>Sécurité</strong> — DevSecOps et gestion des secrets</li>
          <li><strong>Roadmap</strong> — Parcours d’apprentissage et objectifs par étape</li>
          <li><strong>Base de connaissances</strong> — Index, runbooks et recherche globale dans le hub</li>
          <li><strong>Métier DevOps</strong> — Vue d’ensemble des compétences attendues (voir section dédiée)</li>
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
          <li>Utilisez le bouton <strong>Clair / Sombre</strong> en haut à droite selon votre confort de lecture</li>
          <li>Pratiquez en local avec Docker ou une VM avant de passer au cloud</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;

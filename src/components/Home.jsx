function Home() {
  return (
    <div>
      <div className="card">
        <h2>Bienvenue dans le DevOps Knowledge Hub</h2>
        <p>
          Ce hub de connaissances est conçu spécialement pour les étudiants en Master DevOps, 
          Infrastructure et Cloud. Vous y trouverez des ressources structurées et des guides 
          pratiques pour maîtriser les concepts essentiels du DevOps.
        </p>
        <p>
          Commencez par explorer la section <strong>Linux</strong> pour comprendre l'arborescence 
          des fichiers et les fondamentaux du système d'exploitation.
        </p>
      </div>

      <div className="grid">
        <div className="card">
          <h3>📁 Linux</h3>
          <p>Arborescence des fichiers, commandes essentielles, gestion des permissions et bien plus.</p>
        </div>
        <div className="card">
          <h3>🔄 CI/CD</h3>
          <p>Intégration et déploiement continus avec Jenkins, GitLab CI, GitHub Actions.</p>
        </div>
        <div className="card">
          <h3>☁️ Cloud</h3>
          <p>AWS, Azure, GCP - Concepts et services cloud essentiels.</p>
        </div>
        <div className="card">
          <h3>🏗️ Infrastructure</h3>
          <p>Infrastructure as Code, Terraform, Ansible, et gestion de l'infrastructure.</p>
        </div>
        <div className="card">
          <h3>📦 Containers</h3>
          <p>Docker, Kubernetes, orchestration de conteneurs.</p>
        </div>
        <div className="card">
          <h3>📊 Monitoring</h3>
          <p>Prometheus, Grafana, ELK Stack, observabilité.</p>
        </div>
      </div>
    </div>
  )
}

export default Home


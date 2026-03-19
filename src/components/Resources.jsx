function Resources() {
  const categories = [
    {
      title: '📚 Documentation Officielle',
      items: [
        { name: 'Docker Docs', url: 'https://docs.docker.com', desc: 'Documentation complète Docker' },
        { name: 'Kubernetes', url: 'https://kubernetes.io/docs', desc: 'Docs K8s' },
        { name: 'Terraform', url: 'https://developer.hashicorp.com/terraform/docs', desc: 'HashiCorp Terraform' },
        { name: 'Ansible', url: 'https://docs.ansible.com', desc: 'Documentation Ansible' },
        { name: 'Prometheus', url: 'https://prometheus.io/docs', desc: 'Monitoring' },
        { name: 'AWS Documentation', url: 'https://docs.aws.amazon.com', desc: 'Documentation AWS' },
        { name: 'Azure Documentation', url: 'https://learn.microsoft.com/azure', desc: 'Documentation Azure' },
        { name: 'Google Cloud Documentation', url: 'https://cloud.google.com/docs', desc: 'Documentation GCP' }
      ]
    },
    {
      title: '🎓 Formations & Tutoriels',
      items: [
        { name: 'KubeAcademy (VMware)', url: 'https://kubeacademy.com', desc: 'Kubernetes gratuit' },
        { name: 'Linux Foundation', url: 'https://training.linuxfoundation.org', desc: 'CKA, CKAD, LFCS' },
        { name: 'AWS SkillBuilder', url: 'https://skillbuilder.aws', desc: 'Cours AWS gratuits' },
        { name: 'Microsoft Learn', url: 'https://learn.microsoft.com', desc: 'Azure, DevOps' },
        { name: 'Google Cloud Skills', url: 'https://cloud.google.com/training', desc: 'GCP' }
      ]
    },
    {
      title: '🛠️ Outils & Références',
      items: [
        { name: 'DevOps Roadmap', url: 'https://roadmap.sh/devops', desc: 'Parcours d\'apprentissage' },
        { name: 'Awesome DevOps', url: 'https://github.com/devops-awesome/devops-awesome', desc: 'Liste d\'outils' },
        { name: 'Cheat Sheets', url: 'https://github.com/cheat/cheatsheets', desc: 'Aide-mémoire CLI' },
        { name: 'ExplainShell', url: 'https://explainshell.com', desc: 'Décortiquer les commandes' },
        { name: 'DevOps Bookmarks', url: 'https://www.devopsbookmarks.com', desc: 'Ressources triées' }
      ]
    },
    {
      title: '📖 Livres Recommandés',
      items: [
        { name: 'The Phoenix Project', desc: 'Roman sur le DevOps (Gene Kim)' },
        { name: 'The DevOps Handbook', desc: 'Guide pratique (Gene Kim et al.)' },
        { name: 'Kubernetes in Action', desc: 'Marko Luksa' },
        { name: 'Terraform: Up & Running', desc: 'Yevgeniy Brikman' },
        { name: 'Site Reliability Engineering', desc: 'Google SRE Book (gratuit en ligne)' }
      ]
    },
    {
      title: '📜 Certifications Utiles',
      items: [
        { name: 'CKA / CKAD', desc: 'Kubernetes (CNCF)' },
        { name: 'AWS Solutions Architect', desc: 'AWS' },
        { name: 'Azure DevOps Engineer', desc: 'Microsoft' },
        { name: 'HashiCorp Terraform Associate', desc: 'Terraform' },
        { name: 'Linux Foundation LFCS', desc: 'Administration Linux' }
      ]
    }
  ];

  return (
    <div>
      <div className="card">
        <h2>📚 Ressources et Références</h2>
        <p>
          Liens utiles, documentations, formations et certifications pour approfondir
          vos connaissances en DevOps, Cloud et Infrastructure.
        </p>
      </div>

      {categories.map((cat, idx) => (
        <div key={idx} className="card">
          <h3>{cat.title}</h3>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {cat.items.map((item, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  padding: '1rem 1.25rem',
                  borderRadius: '8px',
                  border: '1px solid var(--border-subtle)',
                  transition: 'border-color 0.2s'
                }}
              >
                {item.url && item.url !== '#' ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#38bdf8',
                      textDecoration: 'none',
                      fontWeight: 500,
                      fontSize: '1rem'
                    }}
                  >
                    {item.name}
                  </a>
                ) : (
                  <span style={{ fontWeight: 500, color: 'var(--text-primary)' }}>{item.name}</span>
                )}
                <p style={{ margin: '0.5rem 0 0', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="card">
        <h3>📖 Glossaire DevOps</h3>
        <div className="code-block" style={{ fontSize: '0.9rem', lineHeight: 1.9 }}>
          <strong>CI/CD</strong> — Intégration et déploiement continus<br />
          <strong>IaC</strong> — Infrastructure as Code<br />
          <strong>FHS</strong> — Filesystem Hierarchy Standard (Linux)<br />
          <strong>VPC</strong> — Virtual Private Cloud<br />
          <strong>AZ</strong> — Availability Zone<br />
          <strong>POD</strong> — Plus petite unité déployable dans K8s<br />
          <strong>HPA</strong> — Horizontal Pod Autoscaler<br />
          <strong>RBAC</strong> — Role-Based Access Control<br />
          <strong>SLO/SLI/SLA</strong> — Objectifs de niveau de service<br />
          <strong>Blue/Green</strong> — Stratégie de déploiement avec bascule<br />
          <strong>Canary</strong> — Déploiement progressif<br />
          <strong>DevSecOps</strong> — Sécurité intégrée au DevOps
        </div>
      </div>

      <div className="card">
        <h3>🔄 Parcours Suggéré (Master DevOps)</h3>
        <div className="diagram-container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
            {[
              { step: 1, label: 'Linux', icon: '🐧' },
              { step: 2, label: 'Git', icon: '📂' },
              { step: 3, label: 'Docker', icon: '🐳' },
              { step: 4, label: 'CI/CD', icon: '🔄' },
              { step: 5, label: 'Kubernetes', icon: '☸️' },
              { step: 6, label: 'Cloud', icon: '☁️' },
              { step: 7, label: 'Terraform/Ansible', icon: '🏗️' },
              { step: 8, label: 'Réseau', icon: '🌐' },
              { step: 9, label: 'Monitoring', icon: '📊' }
            ].map((s, i) => (
              <div key={s.step} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{
                  background: 'rgba(56, 189, 248, 0.1)',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  borderRadius: '8px',
                  padding: '0.75rem 1rem',
                  textAlign: 'center',
                  minWidth: '100px'
                }}>
                  <div style={{ fontSize: '1.5rem' }}>{s.icon}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}>{s.label}</div>
                </div>
                {i < 8 && <span style={{ color: 'var(--text-tertiary)' }}>→</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;

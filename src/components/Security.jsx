import { useState } from 'react';

function Security() {
  const [activeTab, setActiveTab] = useState('secrets');

  return (
    <div>
      <div className="card">
        <h2>🔒 Sécurité DevOps (DevSecOps)</h2>
        <p>
          Intégrer la sécurité dès le début du cycle de développement. Gestion des secrets,
          scan de vulnérabilités, bonnes pratiques.
        </p>

        <div style={{
          display: 'flex',
          gap: '1rem',
          borderBottom: '1px solid var(--border-subtle)',
          marginBottom: '2rem',
          overflowX: 'auto',
          paddingBottom: '0.5rem'
        }}>
          {[
            { id: 'secrets', label: 'Secrets' },
            { id: 'vulnerabilities', label: 'Vulnérabilités' },
            { id: 'practices', label: 'Bonnes Pratiques' }
          ].map(tab => (
            <button
              key={tab.id}
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
      </div>

      {activeTab === 'secrets' && (
        <div className="animate-fade-in">
          <div className="card">
            <h3>🔐 Gestion des Secrets</h3>
            <p>
              <strong>Jamais</strong> de mots de passe, clés API ou tokens en clair dans le code ou les configs.
            </p>
            <div className="grid">
              <div className="card" style={{ background: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                <h4 style={{ marginTop: 0, color: '#ef4444' }}>❌ À éviter</h4>
                <ul style={{ fontSize: '0.9rem', lineHeight: '1.8' }}>
                  <li>Secrets dans le code source</li>
                  <li>Fichiers .env commités</li>
                  <li>Variables en clair dans les pipelines</li>
                </ul>
              </div>
              <div className="card" style={{ background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                <h4 style={{ marginTop: 0, color: '#10b981' }}>✅ Solutions</h4>
                <ul style={{ fontSize: '0.9rem', lineHeight: '1.8' }}>
                  <li>HashiCorp Vault</li>
                  <li>AWS Secrets Manager / Azure Key Vault</li>
                  <li>Variables d'environnement au runtime</li>
                  <li>Secrets GitHub/GitLab CI</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card">
            <h3>📦 HashiCorp Vault</h3>
            <div className="code-block">
              <pre>{`# Démarrer Vault (dev mode)
vault server -dev

# Stocker un secret
vault kv put secret/myapp db_password="s3cr3t"

# Lire un secret
vault kv get secret/myapp

# Via API (pour les apps)
curl -H "X-Vault-Token: $VAULT_TOKEN" \\
  http://127.0.0.1:8200/v1/secret/data/myapp`}</pre>
            </div>
          </div>

          <div className="card">
            <h3>🔑 Bonnes Pratiques Secrets CI/CD</h3>
            <div className="code-block">
              <pre>{`# GitHub Actions - Utiliser les secrets
- name: Deploy
  env:
    AWS_ACCESS_KEY_ID: \${{ secrets.AWS_ACCESS_KEY_ID }}
    AWS_SECRET_ACCESS_KEY: \${{ secrets.AWS_SECRET_ACCESS_KEY }}
  run: ./deploy.sh

# GitLab CI
deploy:
  script:
    - echo $DB_PASSWORD  # Variable CI/CD masquée`}</pre>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'vulnerabilities' && (
        <div className="animate-fade-in">
          <div className="card">
            <h3>🛡️ Scan de Vulnérabilités</h3>
            <p>
              Détecter les CVE dans les dépendances et les images Docker avant le déploiement.
            </p>
            <div className="grid">
              <div className="card" style={{ background: 'rgba(255,255,255,0.03)', border: 'none' }}>
                <h4 style={{ marginTop: 0 }}>📦 Dépendances (SAST)</h4>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}>• <strong>npm audit</strong> - Node.js</li>
                  <li style={{ marginBottom: '0.5rem' }}>• <strong>pip-audit</strong> - Python</li>
                  <li style={{ marginBottom: '0.5rem' }}>• <strong>OWASP Dependency-Check</strong></li>
                  <li style={{ marginBottom: '0.5rem' }}>• <strong>Snyk</strong> - Multi-langage</li>
                </ul>
              </div>
              <div className="card" style={{ background: 'rgba(255,255,255,0.03)', border: 'none' }}>
                <h4 style={{ marginTop: 0 }}>🐳 Images Docker</h4>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}>• <strong>Trivy</strong> - Scan rapide</li>
                  <li style={{ marginBottom: '0.5rem' }}>• <strong>Docker Scout</strong></li>
                  <li style={{ marginBottom: '0.5rem' }}>• <strong>Clair</strong> - Analyse de couches</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card">
            <h3>🔍 Trivy - Scan d'images Docker</h3>
            <div className="code-block">
              <code>trivy image nginx:latest</code> <span style={{ color: '#666' }}># Scan image</span><br />
              <code>trivy fs .</code> <span style={{ color: '#666' }}># Scan fichiers/IaC</span><br />
              <code>trivy config .</code> <span style={{ color: '#666' }}># Scan configs (Dockerfile, k8s)</span>
            </div>
          </div>

          <div className="card">
            <h3>📝 Intégration dans le Pipeline</h3>
            <div className="code-block">
              <pre>{`# .github/workflows/security.yml
- name: Run Trivy
  uses: aquasecurity/trivy-action@master
  with:
    image-ref: 'myapp:\${{ github.sha }}'
    exit-code: '1'  # Fail si vulnérabilités critiques
    severity: 'CRITICAL,HIGH'`}</pre>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'practices' && (
        <div className="animate-fade-in">
          <div className="card">
            <h3>✅ Checklist Sécurité DevOps</h3>
            <div className="grid">
              <div style={{ background: 'rgba(16, 185, 129, 0.05)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                <h4 style={{ marginTop: 0, color: '#10b981' }}>Infrastructure</h4>
                <ul style={{ fontSize: '0.9rem', lineHeight: '1.8' }}>
                  <li>Principle of least privilege</li>
                  <li>Réseau segmenté (VPC, firewall)</li>
                  <li>Chiffrement au repos et en transit</li>
                  <li>Backups réguliers et testés</li>
                </ul>
              </div>
              <div style={{ background: 'rgba(56, 189, 248, 0.05)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
                <h4 style={{ marginTop: 0, color: '#38bdf8' }}>Conteneurs</h4>
                <ul style={{ fontSize: '0.9rem', lineHeight: '1.8' }}>
                  <li>Images minimales (alpine, distroless)</li>
                  <li>Ne pas tourner en root</li>
                  <li>Read-only filesystem si possible</li>
                  <li>Scan des images en CI</li>
                </ul>
              </div>
              <div style={{ background: 'rgba(245, 158, 11, 0.05)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
                <h4 style={{ marginTop: 0, color: '#f59e0b' }}>CI/CD</h4>
                <ul style={{ fontSize: '0.9rem', lineHeight: '1.8' }}>
                  <li>Signer les artifacts (cosign)</li>
                  <li>Pipeline immutable</li>
                  <li>Audit des accès</li>
                  <li>2FA sur les plateformes</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card">
            <h3>🔐 OWASP Top 10 - Rappel</h3>
            <p>Les vulnérabilités web les plus critiques à connaître.</p>
            <ul style={{ lineHeight: 1.9, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              <li>Injection (SQL, NoSQL, Command)</li>
              <li>Authentification défaillante</li>
              <li>Exposition de données sensibles</li>
              <li>Composants avec vulnérabilités connues</li>
              <li>Configuration de sécurité incorrecte</li>
              <li>...</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Security;

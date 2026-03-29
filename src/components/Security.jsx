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
            { id: 'kubernetes', label: 'K8s (RBAC, Network)' },
            { id: 'sastdast', label: 'SAST / DAST / SCA' },
            { id: 'supplychain', label: 'Supply Chain' },
            { id: 'policy', label: 'Policy as Code' },
            { id: 'compliance', label: 'Conformité & KPIs' },
            { id: 'incident', label: 'Incident Sécurité' },
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

      {activeTab === 'kubernetes' && (
        <div className="animate-fade-in">
          <div className="card">
            <h3>👤 RBAC - Role-Based Access Control</h3>
            <p>Contrôler qui peut faire quoi dans le cluster Kubernetes.</p>
            <div className="code-block">
              <pre>{`# Role : permissions dans un namespace
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  namespace: default
  name: pod-reader
rules:
- apiGroups: [""]
  resources: ["pods"]
  verbs: ["get", "list", "watch"]

# RoleBinding : lier Role à un utilisateur
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: read-pods
subjects:
- kind: User
  name: dev-user
  apiGroup: rbac.authorization.k8s.io
roleRef:
  kind: Role
  name: pod-reader
  apiGroup: rbac.authorization.k8s.io`}</pre>
            </div>
          </div>

          <div className="card">
            <h3>🔒 Network Policies</h3>
            <p>Isoler les pods au niveau réseau. Par défaut tout est autorisé.</p>
            <div className="code-block">
              <pre>{`# Bloquer tout le trafic entrant sauf depuis le frontend
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: api-policy
spec:
  podSelector:
    matchLabels:
      app: api
  policyTypes:
  - Ingress
  ingress:
  - from:
    - podSelector:
        matchLabels:
          app: frontend
    ports:
    - protocol: TCP
      port: 8080`}</pre>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'sastdast' && (
        <div className="animate-fade-in">
          <div className="card">
            <h3>🔬 SAST / DAST / SCA</h3>
            <p>Couverture sécurité complète dans le pipeline: code, dépendances et application en exécution.</p>
            <div className="grid">
              <div className="card" style={{ background: 'rgba(56, 189, 248, 0.05)', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
                <h4 style={{ marginTop: 0, color: '#38bdf8' }}>SAST (code statique)</h4>
                <ul style={{ fontSize: '0.9rem', lineHeight: '1.8' }}>
                  <li>Analyse le code source sans exécution</li>
                  <li>Détecte patterns dangereux (injections, secrets)</li>
                  <li>Outils: Semgrep, SonarQube, CodeQL</li>
                </ul>
              </div>
              <div className="card" style={{ background: 'rgba(245, 158, 11, 0.05)', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
                <h4 style={{ marginTop: 0, color: '#f59e0b' }}>DAST (app en runtime)</h4>
                <ul style={{ fontSize: '0.9rem', lineHeight: '1.8' }}>
                  <li>Teste l'application déployée (staging)</li>
                  <li>Détecte failles OWASP en boîte noire</li>
                  <li>Outils: OWASP ZAP, Burp Scanner</li>
                </ul>
              </div>
              <div className="card" style={{ background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                <h4 style={{ marginTop: 0, color: '#10b981' }}>SCA (dépendances)</h4>
                <ul style={{ fontSize: '0.9rem', lineHeight: '1.8' }}>
                  <li>Identifie CVE et licences à risque</li>
                  <li>Scanne lockfiles et images</li>
                  <li>Outils: Snyk, Trivy, Dependency-Check</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card">
            <h3>⚙️ Exemple GitHub Actions Security Gate</h3>
            <div className="code-block">
              <pre>{`name: Security Gates
on: [pull_request]

jobs:
  sast:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: returntocorp/semgrep-action@v1

  sca:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: aquasecurity/trivy-action@master
        with:
          scan-type: fs
          severity: CRITICAL,HIGH
          exit-code: '1'`}</pre>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'supplychain' && (
        <div className="animate-fade-in">
          <div className="card">
            <h3>⛓️ Supply Chain Security</h3>
            <p>Sécuriser ce qui entre dans vos builds et ce qui sort vers la production.</p>
            <ul style={{ lineHeight: 2, color: 'var(--text-secondary)', paddingLeft: '1.25rem' }}>
              <li><strong>SBOM</strong> (Software Bill of Materials) pour inventorier composants et versions</li>
              <li><strong>Signature d'artefacts</strong> (images, binaries) avant déploiement</li>
              <li><strong>Provenance build</strong> et traçabilité de la chaîne CI/CD</li>
              <li>Blocage des images non signées ou non conformes</li>
            </ul>
          </div>

          <div className="card">
            <h3>🧾 SBOM + Signature (exemple)</h3>
            <div className="code-block">
              <pre>{`# Générer un SBOM
syft myapp:latest -o spdx-json > sbom.json

# Signer une image
cosign sign --key cosign.key ghcr.io/org/myapp:1.0.0

# Vérifier la signature
cosign verify --key cosign.pub ghcr.io/org/myapp:1.0.0`}</pre>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'policy' && (
        <div className="animate-fade-in">
          <div className="card">
            <h3>📜 Policy as Code (OPA / Kyverno)</h3>
            <p>Transformer les règles sécurité en politiques versionnées et testables.</p>
            <div className="grid">
              <div className="card" style={{ background: 'rgba(255,255,255,0.03)', border: 'none' }}>
                <h4 style={{ marginTop: 0 }}>Exemples de politiques</h4>
                <ul style={{ fontSize: '0.9rem', lineHeight: '1.8' }}>
                  <li>Interdire les containers root</li>
                  <li>Exiger <code>resources.limits</code></li>
                  <li>Refuser l'image taggée <code>latest</code></li>
                  <li>Bloquer ingress sans TLS</li>
                </ul>
              </div>
              <div className="card" style={{ background: 'rgba(255,255,255,0.03)', border: 'none' }}>
                <h4 style={{ marginTop: 0 }}>Où appliquer</h4>
                <ul style={{ fontSize: '0.9rem', lineHeight: '1.8' }}>
                  <li>Pré-merge (scan IaC)</li>
                  <li>Admission controller Kubernetes</li>
                  <li>Validation en pipeline CI/CD</li>
                  <li>Audit continu en production</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card">
            <h3>🛡️ Exemple Kyverno</h3>
            <div className="code-block">
              <pre>{`apiVersion: kyverno.io/v1
kind: ClusterPolicy
metadata:
  name: disallow-latest-tag
spec:
  validationFailureAction: Enforce
  rules:
  - name: require-image-tag
    match:
      any:
      - resources:
          kinds: ["Pod"]
    validate:
      message: "Les images :latest sont interdites"
      pattern:
        spec:
          containers:
          - image: "!*:latest"`}</pre>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'compliance' && (
        <div className="animate-fade-in">
          <div className="card">
            <h3>📏 Conformité, benchmarks et gouvernance</h3>
            <ul style={{ lineHeight: 2, color: 'var(--text-secondary)', paddingLeft: '1.25rem' }}>
              <li>CIS Benchmarks (OS, Docker, Kubernetes)</li>
              <li>Référentiels NIST / ISO 27001 / SOC 2 (niveau introductif)</li>
              <li>Contrôles d'accès, journalisation, chiffrement et rétention logs</li>
              <li>Revue périodique des rôles IAM et secrets</li>
            </ul>
          </div>

          <div className="card">
            <h3>📈 KPIs DevSecOps à suivre</h3>
            <div className="grid">
              <div className="card" style={{ background: 'rgba(255,255,255,0.03)', border: 'none' }}>
                <h4 style={{ marginTop: 0 }}>Vulnérabilités</h4>
                <ul style={{ fontSize: '0.9rem', lineHeight: '1.8' }}>
                  <li>MTTR des CVE critiques</li>
                  <li>% CVE corrigées en &lt; 7 jours</li>
                  <li>Backlog vulnérabilités par sévérité</li>
                </ul>
              </div>
              <div className="card" style={{ background: 'rgba(255,255,255,0.03)', border: 'none' }}>
                <h4 style={{ marginTop: 0 }}>Pipeline</h4>
                <ul style={{ fontSize: '0.9rem', lineHeight: '1.8' }}>
                  <li>% builds bloqués par quality gates sécurité</li>
                  <li>Taux de couverture scans SAST/SCA/Images</li>
                  <li>Temps moyen de remédiation après alerte</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'incident' && (
        <div className="animate-fade-in">
          <div className="card">
            <h3>🚨 Runbook incident sécurité</h3>
            <p>Procédure type en cas de fuite de token, compromission d'image ou activité suspecte.</p>
            <div className="code-block">
              <pre>{`1) Contenir immédiatement
   - Révoquer token/clé exposé(e)
   - Isoler workload/service impacté

2) Évaluer l'impact
   - Fenêtre temporelle et périmètre touché
   - Données potentiellement exposées

3) Corriger et restaurer
   - Rotation de secrets
   - Patch image/dépendance vulnérable
   - Redéploiement propre

4) Capitaliser
   - Post-mortem blameless
   - Ajout de garde-fous (scan, policy, alertes)`}</pre>
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

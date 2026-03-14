import { useState } from 'react';

function CICD() {
  const [activeTab, setActiveTab] = useState('concepts');

  return (
    <div>
      <div className="card">
        <h2>🔄 CI/CD - Intégration et Déploiement Continus</h2>
        <p>
          Automatiser le build, les tests et le déploiement pour livrer rapidement et en toute confiance.
        </p>

        {/* Navigation Interne */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          borderBottom: '1px solid var(--border-subtle)',
          marginBottom: '2rem',
          overflowX: 'auto',
          paddingBottom: '0.5rem'
        }}>
          {[
            { id: 'concepts', label: 'Concepts CI/CD' },
            { id: 'strategies', label: 'Stratégies Déploiement' },
            { id: 'jenkins', label: 'Jenkins' },
            { id: 'gitlab', label: 'GitLab CI' },
            { id: 'github', label: 'GitHub Actions' }
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

      {activeTab === 'concepts' && (
        <div className="animate-fade-in">
          <div className="card">
            <h3>🎯 Qu'est-ce que le CI/CD ?</h3>
            <div className="grid">
              <div style={{ background: 'rgba(56, 189, 248, 0.05)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
                <h4 style={{ marginTop: 0, color: '#38bdf8' }}>🔨 CI - Continuous Integration</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  Intégrer le code fréquemment (plusieurs fois par jour) dans une branche commune.
                </p>
                <ul style={{ fontSize: '0.9rem', lineHeight: '1.8' }}>
                  <li>Détection rapide des bugs</li>
                  <li>Tests automatisés à chaque commit</li>
                  <li>Build automatique</li>
                </ul>
              </div>

              <div style={{ background: 'rgba(245, 158, 11, 0.05)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
                <h4 style={{ marginTop: 0, color: '#f59e0b' }}>🚀 CD - Continuous Deployment</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  Déployer automatiquement chaque changement validé en production.
                </p>
                <ul style={{ fontSize: '0.9rem', lineHeight: '1.8' }}>
                  <li>Livraison rapide des features</li>
                  <li>Réduction des risques (petits changements)</li>
                  <li>Feedback utilisateur immédiat</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card">
            <h3>📊 Pipeline CI/CD Typique</h3>
            <div className="diagram-container">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                {[
                  { label: 'Code Push', icon: '📝', color: '#38bdf8' },
                  { label: 'Build', icon: '🔨', color: '#10b981' },
                  { label: 'Test', icon: '✅', color: '#f59e0b' },
                  { label: 'Deploy', icon: '🚀', color: '#ef4444' }
                ].map((step, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                      background: `${step.color}20`,
                      border: `2px solid ${step.color}`,
                      borderRadius: '8px',
                      padding: '1rem 1.5rem',
                      textAlign: 'center',
                      minWidth: '120px'
                    }}>
                      <div style={{ fontSize: '2rem' }}>{step.icon}</div>
                      <div style={{ color: step.color, fontWeight: 600, marginTop: '0.5rem' }}>{step.label}</div>
                    </div>
                    {index < 3 && <div style={{ fontSize: '1.5rem', color: 'var(--text-tertiary)' }}>→</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="card">
            <h3>🏢 Environnements (Dev, Staging, Prod)</h3>
            <ul style={{ lineHeight: 2, color: 'var(--text-secondary)' }}>
              <li><strong>Development</strong> : Développeurs, tests rapides, données fictives</li>
              <li><strong>Staging</strong> : Pré-production, tests E2E, miroir de prod</li>
              <li><strong>Production</strong> : Utilisateurs réels, monitoring strict, backups</li>
            </ul>
          </div>
        </div>
      )}

      {activeTab === 'strategies' && (
        <div className="animate-fade-in">
          <div className="card">
            <h3>🚀 Stratégies de Déploiement Détaillées</h3>
            <div className="grid">
              <div style={{ background: 'rgba(56, 189, 248, 0.05)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
                <h4 style={{ marginTop: 0, color: '#38bdf8' }}>Blue/Green</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Deux environnements identiques. Bascule instantanée. Rollback = rebasculer.</p>
              </div>
              <div style={{ background: 'rgba(245, 158, 11, 0.05)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
                <h4 style={{ marginTop: 0, color: '#f59e0b' }}>Canary</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>5% trafic → 50% → 100%. Détecte les problèmes avant impact total.</p>
              </div>
              <div style={{ background: 'rgba(16, 185, 129, 0.05)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                <h4 style={{ marginTop: 0, color: '#10b981' }}>Rolling Update</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Remplacement instance par instance. Zero-downtime. Défaut K8s.</p>
              </div>
            </div>
          </div>

          <div className="card">
            <h3>📋 Gestion des Environnements</h3>
            <p>Variables par environnement, secrets, feature flags.</p>
            <div className="code-block">
              <pre>{`# Exemple : variables par environnement
# .env.development
API_URL=http://localhost:3000
DEBUG=true

# .env.production
API_URL=https://api.example.com
DEBUG=false`}</pre>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'jenkins' && (
        <div className="animate-fade-in">
          <div className="card">
            <h3>🔧 Jenkins - L'outil CI/CD Open Source</h3>
            <p>Jenkins est le standard de l'industrie pour l'automatisation CI/CD. Très flexible grâce à ses 1800+ plugins.</p>

            <div className="grid">
              <div className="card" style={{ background: 'rgba(255,255,255,0.03)', border: 'none' }}>
                <h4 style={{ marginTop: 0 }}>📦 Installation (Docker)</h4>
                <div className="code-block" style={{ margin: 0 }}>
                  <code>docker run -d -p 8080:8080 -p 50000:50000 \</code>
                  <code>  --name jenkins \</code>
                  <code>  -v jenkins_home:/var/jenkins_home \</code>
                  <code>  jenkins/jenkins:lts</code>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '1rem', marginBottom: 0 }}>
                  Accès : <code>http://localhost:8080</code>
                </p>
              </div>

              <div className="card" style={{ background: 'rgba(255,255,255,0.03)', border: 'none' }}>
                <h4 style={{ marginTop: 0 }}>🔑 Récupérer le mot de passe initial</h4>
                <div className="code-block" style={{ margin: 0 }}>
                  <code>docker exec jenkins \</code>
                  <code>  cat /var/jenkins_home/secrets/initialAdminPassword</code>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <h3>📝 Jenkinsfile - Pipeline as Code</h3>
            <p>Définir votre pipeline CI/CD dans un fichier versionné avec votre code.</p>

            <div className="code-block">
              <pre>{`pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE = "myapp:latest"
    }
    
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', 
                    url: 'https://github.com/user/repo.git'
            }
        }
        
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        
        stage('Docker Build') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE .'
            }
        }
        
        stage('Deploy') {
            steps {
                sh 'docker-compose up -d'
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}`}</pre>
            </div>
          </div>

          <div className="card">
            <h3>🔌 Plugins Jenkins Essentiels</h3>
            <div className="grid">
              <div>
                <h4>Git & SCM</h4>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}>✅ <strong>Git Plugin</strong> - Intégration Git</li>
                  <li style={{ marginBottom: '0.5rem' }}>✅ <strong>GitHub Plugin</strong> - Webhooks GitHub</li>
                  <li style={{ marginBottom: '0.5rem' }}>✅ <strong>GitLab Plugin</strong> - Intégration GitLab</li>
                </ul>
              </div>
              <div>
                <h4>Build & Deploy</h4>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}>✅ <strong>Docker Pipeline</strong> - Build Docker</li>
                  <li style={{ marginBottom: '0.5rem' }}>✅ <strong>Kubernetes</strong> - Deploy K8s</li>
                  <li style={{ marginBottom: '0.5rem' }}>✅ <strong>SSH Agent</strong> - Déploiement SSH</li>
                </ul>
              </div>
              <div>
                <h4>Notifications</h4>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}>✅ <strong>Slack Notification</strong></li>
                  <li style={{ marginBottom: '0.5rem' }}>✅ <strong>Email Extension</strong></li>
                  <li style={{ marginBottom: '0.5rem' }}>✅ <strong>Discord Notifier</strong></li>
                </ul>
              </div>
              <div>
                <h4>Qualité Code</h4>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}>✅ <strong>SonarQube Scanner</strong></li>
                  <li style={{ marginBottom: '0.5rem' }}>✅ <strong>Code Coverage</strong></li>
                  <li style={{ marginBottom: '0.5rem' }}>✅ <strong>Warnings Next Gen</strong></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card">
            <h3>⚡ Bonnes Pratiques Jenkins</h3>
            <div className="grid">
              <div style={{ background: 'rgba(16, 185, 129, 0.05)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                <h4 style={{ marginTop: 0, color: '#10b981' }}>✅ À Faire</h4>
                <ul style={{ fontSize: '0.9rem', lineHeight: '1.8' }}>
                  <li>Utiliser des <strong>Jenkinsfile</strong> (Pipeline as Code)</li>
                  <li>Séparer les <strong>stages</strong> clairement</li>
                  <li>Utiliser des <strong>agents Docker</strong> pour l'isolation</li>
                  <li>Mettre en place des <strong>notifications</strong></li>
                  <li>Archiver les <strong>artifacts</strong> importants</li>
                </ul>
              </div>

              <div style={{ background: 'rgba(239, 68, 68, 0.05)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                <h4 style={{ marginTop: 0, color: '#ef4444' }}>❌ À Éviter</h4>
                <ul style={{ fontSize: '0.9rem', lineHeight: '1.8' }}>
                  <li>Stocker des <strong>secrets en clair</strong> (utiliser Credentials)</li>
                  <li>Lancer tous les jobs sur le <strong>master node</strong></li>
                  <li>Oublier de <strong>nettoyer les workspaces</strong></li>
                  <li>Pipelines trop longs (découper en jobs)</li>
                  <li>Pas de gestion des <strong>erreurs</strong> (post blocks)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'gitlab' && (
        <div className="animate-fade-in">
          <div className="card">
            <h3>🦊 GitLab CI/CD</h3>
            <p>CI/CD intégré directement dans GitLab. Configuration via <code>.gitlab-ci.yml</code></p>

            <div className="code-block">
              <pre>{`# .gitlab-ci.yml
stages:
  - build
  - test
  - deploy

variables:
  DOCKER_IMAGE: registry.gitlab.com/user/project

build:
  stage: build
  image: node:18
  script:
    - npm install
    - npm run build
  artifacts:
    paths:
      - dist/

test:
  stage: test
  image: node:18
  script:
    - npm test
  coverage: '/Coverage: \\d+\\.\\d+%/'

deploy:
  stage: deploy
  image: docker:latest
  services:
    - docker:dind
  script:
    - docker build -t $DOCKER_IMAGE .
    - docker push $DOCKER_IMAGE
  only:
    - main`}</pre>
            </div>
          </div>

          <div className="card">
            <h3>🎯 GitLab Runners</h3>
            <p>Les runners exécutent vos jobs CI/CD.</p>
            <div className="grid">
              <div className="code-block" style={{ margin: 0 }}>
                <div style={{ color: '#888', marginBottom: '0.5rem' }}># Installer un Runner (Docker)</div>
                <code>docker run -d --name gitlab-runner \</code>
                <code>  --restart always \</code>
                <code>  -v /var/run/docker.sock:/var/run/docker.sock \</code>
                <code>  gitlab/gitlab-runner:latest</code>
              </div>
              <div className="code-block" style={{ margin: 0 }}>
                <div style={{ color: '#888', marginBottom: '0.5rem' }}># Enregistrer le Runner</div>
                <code>docker exec -it gitlab-runner \</code>
                <code>  gitlab-runner register</code>
                <div style={{ fontSize: '0.85rem', color: '#666', marginTop: '0.5rem' }}>
                  Vous aurez besoin du token depuis Settings → CI/CD → Runners
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'github' && (
        <div className="animate-fade-in">
          <div className="card">
            <h3>⚡ GitHub Actions</h3>
            <p>CI/CD natif de GitHub. Configuration via <code>.github/workflows/</code></p>

            <div className="code-block">
              <pre>{`# .github/workflows/ci.yml
name: CI/CD Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run tests
      run: npm test
    
    - name: Build
      run: npm run build
    
    - name: Upload artifacts
      uses: actions/upload-artifact@v3
      with:
        name: build
        path: dist/

  deploy:
    needs: build-and-test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Deploy to production
      run: |
        echo "Deploying to production..."
        # Your deployment script here`}</pre>
            </div>
          </div>

          <div className="card">
            <h3>🔐 Secrets GitHub Actions</h3>
            <p>Gérer les credentials de manière sécurisée.</p>
            <div className="code-block">
              <pre>{`# Utiliser un secret
steps:
  - name: Deploy
    env:
      API_KEY: \${{ secrets.API_KEY }}
      DB_PASSWORD: \${{ secrets.DB_PASSWORD }}
    run: |
      ./deploy.sh`}</pre>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '1rem' }}>
              💡 Ajouter des secrets : <strong>Settings → Secrets and variables → Actions</strong>
            </p>
          </div>

          <div className="card">
            <h3>🎭 Actions Marketplace</h3>
            <p>Réutiliser des actions créées par la communauté.</p>
            <div className="grid">
              <div>
                <h4>Populaires</h4>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}>🔹 <code>actions/checkout</code> - Clone repo</li>
                  <li style={{ marginBottom: '0.5rem' }}>🔹 <code>actions/setup-node</code> - Setup Node.js</li>
                  <li style={{ marginBottom: '0.5rem' }}>🔹 <code>docker/build-push-action</code> - Docker</li>
                </ul>
              </div>
              <div>
                <h4>Deploy</h4>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}>🔹 <code>aws-actions/configure-aws-credentials</code></li>
                  <li style={{ marginBottom: '0.5rem' }}>🔹 <code>google-github-actions/deploy-cloud-functions</code></li>
                  <li style={{ marginBottom: '0.5rem' }}>🔹 <code>azure/webapps-deploy</code></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CICD

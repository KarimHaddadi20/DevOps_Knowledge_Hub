import { useState } from 'react';

function Containers() {
  const [activeTab, setActiveTab] = useState('docker');

  return (
    <div>
      <div className="card">
        <h2>📦 Containers et Orchestration</h2>
        <p>
          Docker et Kubernetes sont les standards pour conteneuriser et orchestrer les applications.
          Essentiels pour le DevOps moderne.
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
            { id: 'docker', label: 'Docker' },
            { id: 'kubernetes', label: 'Kubernetes' },
            { id: 'helm', label: 'Helm & Avancé' }
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

      {activeTab === 'docker' && (
        <div className="animate-fade-in">
          <div className="card">
            <h3>🐳 Docker - Concepts</h3>
            <p>
              Un conteneur isole une application avec ses dépendances. Plus léger qu'une VM,
              partage le kernel de l'hôte.
            </p>
            <div className="grid">
              <div style={{ background: 'rgba(56, 189, 248, 0.05)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
                <h4 style={{ marginTop: 0, color: '#38bdf8' }}>Image</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  Template read-only. Contient l'OS + l'app. Ex: nginx:alpine, node:18
                </p>
              </div>
              <div style={{ background: 'rgba(245, 158, 11, 0.05)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
                <h4 style={{ marginTop: 0, color: '#f59e0b' }}>Conteneur</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  Instance exécutable d'une image. Éphémère ou persistant.</p>
              </div>
            </div>
          </div>

          <div className="card">
            <h3>📝 Dockerfile</h3>
            <div className="code-block">
              <pre>{`# Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["node", "dist/index.js"]`}</pre>
            </div>
          </div>

          <div className="card">
            <h3>⚡ Commandes Docker</h3>
            <div className="grid">
              <div className="code-block" style={{ margin: 0 }}>
                <div style={{ color: '#888', marginBottom: '0.5rem' }}># Build & Run</div>
                <code>docker build -t monapp:latest .</code>
                <code>docker run -d -p 8080:3000 monapp</code>
                <code>docker run -it --rm alpine sh</code>
              </div>
              <div className="code-block" style={{ margin: 0 }}>
                <div style={{ color: '#888', marginBottom: '0.5rem' }}># Gestion</div>
                <code>docker ps</code> <span style={{ color: '#666' }}># Conteneurs actifs</span><br />
                <code>docker logs -f container_id</code>
                <code>docker exec -it container_id sh</code>
              </div>
            </div>
          </div>

          <div className="card">
            <h3>🐳 Docker Compose</h3>
            <p>Orchestrer plusieurs conteneurs en local.</p>
            <div className="code-block">
              <pre>{`# docker-compose.yml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgres://db:5432
    depends_on:
      - db

  db:
    image: postgres:15-alpine
    environment:
      POSTGRES_PASSWORD: secret
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:`}</pre>
            </div>
            <div className="code-block" style={{ marginTop: '1rem' }}>
              <code>docker-compose up -d</code> <span style={{ color: '#666' }}># Démarrer</span><br />
              <code>docker-compose down</code> <span style={{ color: '#666' }}># Arrêter</span>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'kubernetes' && (
        <div className="animate-fade-in">
          <div className="card">
            <h3>☸️ Kubernetes - Architecture</h3>
            <p>
              K8s orchestre les conteneurs automatiquement : déploiement, scaling, health checks,
              load balancing.
            </p>
            <div className="grid">
              <div style={{ background: 'rgba(56, 189, 248, 0.05)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
                <h4 style={{ marginTop: 0, color: '#38bdf8' }}>Pod</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  Plus petite unité déployable. Contient 1 ou plusieurs conteneurs.
                </p>
              </div>
              <div style={{ background: 'rgba(245, 158, 11, 0.05)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
                <h4 style={{ marginTop: 0, color: '#f59e0b' }}>Deployment</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  Déclare l'état souhaité des pods (réplicas, image, rollout).
                </p>
              </div>
              <div style={{ background: 'rgba(16, 185, 129, 0.05)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                <h4 style={{ marginTop: 0, color: '#10b981' }}>Service</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  Expose les pods sur le réseau (ClusterIP, NodePort, LoadBalancer).
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <h3>📝 Manifeste Kubernetes</h3>
            <div className="code-block">
              <pre>{`# deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: myapp
        image: myapp:latest
        ports:
        - containerPort: 3000
        resources:
          limits:
            memory: "256Mi"
            cpu: "250m"
---
apiVersion: v1
kind: Service
metadata:
  name: myapp
spec:
  selector:
    app: myapp
  ports:
  - port: 80
    targetPort: 3000
  type: LoadBalancer`}</pre>
            </div>
          </div>

          <div className="card">
            <h3>⚡ Commandes kubectl</h3>
            <div className="code-block">
              <code>kubectl apply -f deployment.yaml</code> <span style={{ color: '#666' }}># Déployer</span><br />
              <code>kubectl get pods</code> <span style={{ color: '#666' }}># Lister les pods</span><br />
              <code>kubectl get svc</code> <span style={{ color: '#666' }}># Lister les services</span><br />
              <code>kubectl logs -f pod/name</code> <span style={{ color: '#666' }}># Logs</span><br />
              <code>kubectl exec -it pod/name -- sh</code> <span style={{ color: '#666' }}># Shell</span><br />
              <code>kubectl scale deployment myapp --replicas=5</code>
            </div>
          </div>

          <div className="card">
            <h3>📦 ConfigMaps & Secrets</h3>
            <div className="code-block">
              <pre>{`# ConfigMap pour config non sensible
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  LOG_LEVEL: "info"
  API_URL: "https://api.example.com"

# Secret pour données sensibles (base64)
apiVersion: v1
kind: Secret
metadata:
  name: db-credentials
type: Opaque
data:
  password: c2VjcmV0cGFzc3dvcmQ=`}</pre>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'helm' && (
        <div className="animate-fade-in">
          <div className="card">
            <h3>⎈ Helm - Gestionnaire de Packages K8s</h3>
            <p>Helm permet de packager des applications Kubernetes (charts) et de les déployer facilement.</p>
            <div className="code-block">
              <code>helm repo add bitnami https://charts.bitnami.com/bitnami</code><br />
              <code>helm install my-nginx bitnami/nginx</code> <span style={{ color: '#666' }}># Installer</span><br />
              <code>helm upgrade my-nginx bitnami/nginx -f values.yaml</code> <span style={{ color: '#666' }}># Mettre à jour</span><br />
              <code>helm uninstall my-nginx</code> <span style={{ color: '#666' }}># Désinstaller</span><br />
              <code>helm list</code> <span style={{ color: '#666' }}># Lister les releases</span>
            </div>
          </div>

          <div className="card">
            <h3>📥 Ingress - Routeur HTTP</h3>
            <p>Expose les services via HTTP/HTTPS avec routage par hostname ou path.</p>
            <div className="code-block">
              <pre>{`apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: myapp-ingress
  annotations:
    kubernetes.io/ingress.class: nginx
spec:
  rules:
  - host: app.example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: myapp
            port:
              number: 80`}</pre>
            </div>
          </div>

          <div className="card">
            <h3>📈 HPA - Horizontal Pod Autoscaler</h3>
            <p>Scale automatiquement les pods selon CPU ou métriques custom.</p>
            <div className="code-block">
              <pre>{`apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: myapp-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: myapp
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70`}</pre>
            </div>
          </div>

          <div className="card">
            <h3>📦 DaemonSet & StatefulSet</h3>
            <div className="grid">
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
                <h4 style={{ marginTop: 0 }}>DaemonSet</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>Un pod par nœud (ex: agent monitoring, log collector)</p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
                <h4 style={{ marginTop: 0 }}>StatefulSet</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>Pods avec identité stable (ex: bases de données)</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Containers;

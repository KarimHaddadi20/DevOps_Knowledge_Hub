import { useState } from 'react';

function Network() {
  const [activeTab, setActiveTab] = useState('concepts');

  const tabStyle = {
    display: 'flex',
    gap: '1rem',
    borderBottom: '1px solid var(--border-subtle)',
    marginBottom: '2rem',
    overflowX: 'auto',
    paddingBottom: '0.5rem'
  };

  const btnStyle = (active) => ({
    background: 'none',
    border: 'none',
    color: active ? '#38bdf8' : 'var(--text-secondary)',
    borderBottom: active ? '2px solid #38bdf8' : '2px solid transparent',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    fontWeight: 500,
    whiteSpace: 'nowrap',
    transition: 'all 0.2s ease'
  });

  return (
    <div>
      <div className="card">
        <h2>🌐 Réseau & Infrastructure</h2>
        <p>
          DNS, proxy, load balancing, reverse proxy : les concepts réseau essentiels pour déployer
          et sécuriser les applications.
        </p>

        <div style={tabStyle}>
          {[
            { id: 'concepts', label: 'Concepts' },
            { id: 'dns', label: 'DNS' },
            { id: 'proxy', label: 'Proxy & Reverse Proxy' },
            { id: 'loadbalancing', label: 'Load Balancing' }
          ].map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={btnStyle(activeTab === tab.id)}>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {activeTab === 'concepts' && (
        <div className="animate-fade-in">
          <div className="card">
            <h3>📡 Modèle OSI & TCP/IP</h3>
            <div className="grid">
              <div style={{ background: 'rgba(56, 189, 248, 0.05)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
                <h4 style={{ marginTop: 0, color: '#38bdf8' }}>Ports courants</h4>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
                  <li>22 : SSH</li>
                  <li>80 : HTTP</li>
                  <li>443 : HTTPS</li>
                  <li>3306 : MySQL</li>
                  <li>5432 : PostgreSQL</li>
                  <li>6379 : Redis</li>
                  <li>8080 : HTTP alternatif</li>
                </ul>
              </div>
              <div style={{ background: 'rgba(245, 158, 11, 0.05)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
                <h4 style={{ marginTop: 0, color: '#f59e0b' }}>Protocoles</h4>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
                  <li>TCP : Connexion fiable</li>
                  <li>UDP : Sans connexion</li>
                  <li>HTTP/1.1, HTTP/2</li>
                  <li>WebSocket</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card">
            <h3>🔧 Outils de Diagnostic</h3>
            <div className="code-block">
              <code>ping google.com</code> <span style={{ color: '#666' }}># Test connectivité</span><br />
              <code>traceroute google.com</code> <span style={{ color: '#666' }}># Chemin des paquets</span><br />
              <code>nslookup google.com</code> <span style={{ color: '#666' }}># Résolution DNS</span><br />
              <code>dig google.com</code> <span style={{ color: '#666' }}># DNS détaillé</span><br />
              <code>curl -I https://example.com</code> <span style={{ color: '#666' }}># Headers HTTP</span><br />
              <code>nc -zv host 443</code> <span style={{ color: '#666' }}># Test port TCP</span>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'dns' && (
        <div className="animate-fade-in">
          <div className="card">
            <h3>🔍 DNS - Domain Name System</h3>
            <p>
              Traduit les noms de domaine en adresses IP. Types d'enregistrements : A, AAAA, CNAME, MX, TXT.
            </p>
            <div className="code-block">
              <div style={{ color: '#888', marginBottom: '0.5rem' }}># Types d'enregistrements</div>
              <code>A</code> <span style={{ color: '#666' }}>→ IPv4</span><br />
              <code>AAAA</code> <span style={{ color: '#666' }}>→ IPv6</span><br />
              <code>CNAME</code> <span style={{ color: '#666' }}>→ Alias vers un autre domaine</span><br />
              <code>MX</code> <span style={{ color: '#666' }}>→ Serveur mail</span><br />
              <code>TXT</code> <span style={{ color: '#666' }}>→ Texte (validation, SPF, DKIM)</span>
            </div>
          </div>

          <div className="card">
            <h3>📝 Configuration DNS (exemple)</h3>
            <div className="code-block">
              <pre>{`# Zone file exemple
example.com.    A      192.168.1.10
www.example.com. CNAME example.com.
api.example.com.  A     192.168.1.11
mail.example.com. MX 10 mail.provider.com.
example.com.     TXT   "v=spf1 include:_spf.google.com ~all"`}</pre>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'proxy' && (
        <div className="animate-fade-in">
          <div className="card">
            <h3>🔄 Proxy vs Reverse Proxy</h3>
            <div className="grid">
              <div style={{ background: 'rgba(56, 189, 248, 0.05)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
                <h4 style={{ marginTop: 0, color: '#38bdf8' }}>Forward Proxy</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  Client → Proxy → Internet. Cache, filtrage, anonymat. Ex: Squid.
                </p>
              </div>
              <div style={{ background: 'rgba(245, 158, 11, 0.05)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
                <h4 style={{ marginTop: 0, color: '#f59e0b' }}>Reverse Proxy</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  Internet → Proxy → Backends. Load balancing, SSL, cache. Ex: Nginx, Traefik.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <h3>⚙️ Nginx - Reverse Proxy</h3>
            <div className="code-block">
              <pre>{`# /etc/nginx/sites-available/default
server {
    listen 80;
    server_name example.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    location /api {
        proxy_pass http://localhost:8080;
    }
}`}</pre>
            </div>
          </div>

          <div className="card">
            <h3>🔒 Nginx avec SSL (Let's Encrypt)</h3>
            <div className="code-block">
              <pre>{`# certbot pour obtenir certificat
certbot --nginx -d example.com

# Config HTTPS
server {
    listen 443 ssl;
    server_name example.com;
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    # ...
}`}</pre>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'loadbalancing' && (
        <div className="animate-fade-in">
          <div className="card">
            <h3>⚖️ Stratégies de Load Balancing</h3>
            <div className="grid">
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
                <h4 style={{ marginTop: 0 }}>Round Robin</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>Distribution tournante entre les backends</p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
                <h4 style={{ marginTop: 0 }}>Least Connections</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>Envoie vers le serveur le moins chargé</p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
                <h4 style={{ marginTop: 0 }}>IP Hash</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>Même client → même serveur (sticky)</p>
              </div>
            </div>
          </div>

          <div className="card">
            <h3>📊 Nginx Load Balancing</h3>
            <div className="code-block">
              <pre>{`upstream backend {
    least_conn;  # Stratégie
    server 192.168.1.10:3000 weight=3;
    server 192.168.1.11:3000 weight=1;
    server 192.168.1.12:3000 backup;  # Serveur de secours
}

server {
    listen 80;
    location / {
        proxy_pass http://backend;
    }
}`}</pre>
            </div>
          </div>

          <div className="card">
            <h3>☸️ Load Balancing dans Kubernetes</h3>
            <p>Le Service de type LoadBalancer ou Ingress expose les pods automatiquement.</p>
            <div className="code-block">
              <pre>{`# Service type LoadBalancer
apiVersion: v1
kind: Service
metadata:
  name: myapp
spec:
  type: LoadBalancer
  selector:
    app: myapp
  ports:
  - port: 80
    targetPort: 3000`}</pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Network;

import { useState } from 'react';

function Monitoring() {
  const [activeTab, setActiveTab] = useState('concepts');

  return (
    <div>
      <div className="card">
        <h2>📊 Monitoring et Observabilité</h2>
        <p>
          Les trois piliers de l'observabilité : <strong>Métriques</strong>, <strong>Logs</strong>, <strong>Traces</strong>.
          Essentiels pour détecter les incidents et comprendre le comportement des systèmes.
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
            { id: 'concepts', label: 'Concepts' },
            { id: 'prometheus', label: 'Prometheus' },
            { id: 'alerting', label: 'AlertManager' },
            { id: 'grafana', label: 'Grafana' },
            { id: 'elk', label: 'ELK Stack' }
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
            <h3>🎯 Les 3 Piliers de l'Observabilité</h3>
            <div className="grid">
              <div style={{ background: 'rgba(56, 189, 248, 0.05)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
                <h4 style={{ marginTop: 0, color: '#38bdf8' }}>📈 Métriques</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  Valeurs numériques agrégées dans le temps. CPU, RAM, requêtes/sec, latence.
                </p>
                <span style={{ fontSize: '0.8rem', color: '#888' }}>Outils: Prometheus, InfluxDB</span>
              </div>
              <div style={{ background: 'rgba(245, 158, 11, 0.05)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
                <h4 style={{ marginTop: 0, color: '#f59e0b' }}>📋 Logs</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  Événements discrets avec timestamp. Logs applicatifs, erreurs, accès.
                </p>
                <span style={{ fontSize: '0.8rem', color: '#888' }}>Outils: ELK, Loki, Fluentd</span>
              </div>
              <div style={{ background: 'rgba(16, 185, 129, 0.05)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                <h4 style={{ marginTop: 0, color: '#10b981' }}>🔍 Traces</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  Suivi d'une requête à travers les services (distributed tracing).
                </p>
                <span style={{ fontSize: '0.8rem', color: '#888' }}>Outils: Jaeger, Zipkin, Tempo</span>
              </div>
            </div>
          </div>

          <div className="card">
            <h3>📊 SLI, SLO, SLA</h3>
            <ul style={{ lineHeight: 2, color: 'var(--text-secondary)' }}>
              <li><strong>SLI</strong> (Service Level Indicator) : Indicateur mesuré (ex: 99.5% uptime)</li>
              <li><strong>SLO</strong> (Service Level Objective) : Objectif interne (ex: 99.9% uptime)</li>
              <li><strong>SLA</strong> (Service Level Agreement) : Engagement contractuel avec le client</li>
            </ul>
          </div>
        </div>
      )}

      {activeTab === 'prometheus' && (
        <div className="animate-fade-in">
          <div className="card">
            <h3>🔥 Prometheus - Métriques Time-Series</h3>
            <p>
              Prometheus collecte les métriques via un modèle pull (scrape). Stockage local,
              requêtes PromQL, alerting intégré.
            </p>

            <div className="code-block">
              <pre>{`# prometheus.yml
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'prometheus'
    static_configs:
      - targets: ['localhost:9090']

  - job_name: 'node'
    static_configs:
      - targets: ['node-exporter:9100']

  - job_name: 'myapp'
    static_configs:
      - targets: ['myapp:8080']
    metrics_path: /metrics`}</pre>
            </div>
          </div>

          <div className="card">
            <h3>📝 PromQL - Exemples</h3>
            <div className="code-block">
              <code>node_cpu_seconds_total</code> <span style={{ color: '#666' }}># Métrique brute</span><br />
              <code>rate(http_requests_total[5m])</code> <span style={{ color: '#666' }}># Taux sur 5 min</span><br />
              <code>sum(rate(http_requests_total[5m])) by (status)</code> <span style={{ color: '#666' }}># Par status</span><br />
              <code>histogram_quantile(0.95, rate(http_request_duration_seconds_bucket[5m]))</code> <span style={{ color: '#666' }}># P95 latence</span>
            </div>
          </div>

          <div className="card">
            <h3>📦 Exporter une App (Prometheus Client)</h3>
            <div className="code-block">
              <pre>{`# Node.js - prom-client
const { register, collectDefaultMetrics } = require('prom-client');

collectDefaultMetrics();
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});`}</pre>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'alerting' && (
        <div className="animate-fade-in">
          <div className="card">
            <h3>🔔 AlertManager - Gestion des Alertes</h3>
            <p>AlertManager reçoit les alertes Prometheus, déduplique, regroupe et envoie les notifications.</p>
            <div className="code-block">
              <pre>{`# prometheus.yml - configurer Alertmanager
alerting:
  alertmanagers:
    - static_configs:
        - targets: ['alertmanager:9093']`}</pre>
            </div>
          </div>

          <div className="card">
            <h3>📝 Règles d'Alerte Prometheus</h3>
            <div className="code-block">
              <pre>{`# alert_rules.yml
groups:
- name: example
  rules:
  - alert: HighCPU
    expr: rate(node_cpu_seconds_total[5m]) > 0.9
    for: 5m
    labels:
      severity: critical
    annotations:
      summary: "CPU usage high"
  - alert: InstanceDown
    expr: up == 0
    for: 1m`}</pre>
            </div>
          </div>

          <div className="card">
            <h3>📤 Canaux de Notification</h3>
            <ul style={{ lineHeight: 2, color: 'var(--text-secondary)' }}>
              <li>Slack, Discord, Microsoft Teams</li>
              <li>Email, PagerDuty, Opsgenie</li>
              <li>Webhook personnalisé</li>
            </ul>
          </div>
        </div>
      )}

      {activeTab === 'grafana' && (
        <div className="animate-fade-in">
          <div className="card">
            <h3>📊 Grafana - Dashboards & Visualisation</h3>
            <p>
              Grafana connecte Prometheus, InfluxDB, Elasticsearch, etc. Crée des dashboards
              interactifs et des alertes.
            </p>

            <div className="grid">
              <div className="card" style={{ background: 'rgba(255,255,255,0.03)', border: 'none' }}>
                <h4 style={{ marginTop: 0 }}>Sources de données</h4>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}>• Prometheus</li>
                  <li style={{ marginBottom: '0.5rem' }}>• InfluxDB</li>
                  <li style={{ marginBottom: '0.5rem' }}>• Elasticsearch</li>
                  <li style={{ marginBottom: '0.5rem' }}>• Loki (logs)</li>
                </ul>
              </div>
              <div className="card" style={{ background: 'rgba(255,255,255,0.03)', border: 'none' }}>
                <h4 style={{ marginTop: 0 }}>Types de panels</h4>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}>• Graph, Gauge, Stat</li>
                  <li style={{ marginBottom: '0.5rem' }}>• Table, Heatmap</li>
                  <li style={{ marginBottom: '0.5rem' }}>• Alerting intégré</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card">
            <h3>🐳 Stack Prometheus + Grafana (Docker)</h3>
            <div className="code-block">
              <pre>{`# docker-compose.yml
services:
  prometheus:
    image: prom/prometheus:latest
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml
    ports:
      - "9090:9090"

  grafana:
    image: grafana/grafana:latest
    ports:
      - "3000:3000"
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=admin
    volumes:
      - grafana_data:/var/lib/grafana`}</pre>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'elk' && (
        <div className="animate-fade-in">
          <div className="card">
            <h3>🦌 ELK Stack - Elasticsearch, Logstash, Kibana</h3>
            <p>
              Stack pour centraliser, indexer et visualiser les logs. Alternative moderne : <strong>EFK</strong> (Fluentd à la place de Logstash).
            </p>
            <div className="grid">
              <div style={{ background: 'rgba(56, 189, 248, 0.05)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
                <h4 style={{ marginTop: 0, color: '#38bdf8' }}>Elasticsearch</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>Moteur de recherche et stockage des logs</p>
              </div>
              <div style={{ background: 'rgba(245, 158, 11, 0.05)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
                <h4 style={{ marginTop: 0, color: '#f59e0b' }}>Logstash / Fluentd</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>Collecte et transformation des logs</p>
              </div>
              <div style={{ background: 'rgba(16, 185, 129, 0.05)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                <h4 style={{ marginTop: 0, color: '#10b981' }}>Kibana</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>Interface de visualisation et recherche</p>
              </div>
            </div>
          </div>

          <div className="card">
            <h3>📝 Pipeline Logstash</h3>
            <div className="code-block">
              <pre>{`# logstash.conf
input {
  beats {
    port => 5044
  }
}

filter {
  grok {
    match => { "message" => "%{COMBINEDAPACHELOG}" }
  }
  date {
    match => [ "timestamp", "dd/MMM/yyyy:HH:mm:ss Z" ]
  }
}

output {
  elasticsearch {
    hosts => ["elasticsearch:9200"]
    index => "logs-%{+YYYY.MM.dd}"
  }
}`}</pre>
            </div>
          </div>

          <div className="card">
            <h3>📦 Filebeat - Collecteur léger</h3>
            <p>Filebeat envoie les logs vers Logstash ou Elasticsearch.</p>
            <div className="code-block">
              <pre>{`# filebeat.yml
filebeat.inputs:
- type: log
  paths:
    - /var/log/nginx/*.log
  fields:
    app: nginx

output.elasticsearch:
  hosts: ["elasticsearch:9200"]`}</pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Monitoring;

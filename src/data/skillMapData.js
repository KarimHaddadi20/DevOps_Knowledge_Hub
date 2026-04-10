/**
 * Données du graphe de compétences DevOps.
 * Chaque nœud a une position (x, y) dans un espace 1000×700.
 * Les arêtes représentent des dépendances : "pour maîtriser target, il faut source".
 */

export const SKILL_NODES = [
  {
    id: 'linux',
    label: 'Linux',
    icon: '🐧',
    sectionId: 'linux',
    level: 'fondation',
    x: 120,
    y: 340,
    desc: 'Socle incontournable : FHS, systemd, SSH, scripting.'
  },
  {
    id: 'git',
    label: 'Git',
    icon: '📂',
    sectionId: 'git',
    level: 'fondation',
    x: 300,
    y: 180,
    desc: 'Versioning, branches, PR, workflows d\'équipe.'
  },
  {
    id: 'network',
    label: 'Réseau',
    icon: '🌐',
    sectionId: 'network',
    level: 'fondation',
    x: 120,
    y: 520,
    desc: 'DNS, TLS, proxy, load balancing, troubleshooting.'
  },
  {
    id: 'containers',
    label: 'Containers',
    icon: '📦',
    sectionId: 'containers',
    level: 'intermediaire',
    x: 380,
    y: 360,
    desc: 'Docker, images, volumes, réseau conteneurs.'
  },
  {
    id: 'cicd',
    label: 'CI/CD',
    icon: '🔄',
    sectionId: 'cicd',
    level: 'intermediaire',
    x: 520,
    y: 200,
    desc: 'Pipelines, build, tests, déploiement automatisé.'
  },
  {
    id: 'kubernetes',
    label: 'Kubernetes',
    icon: '☸️',
    sectionId: 'containers',
    level: 'intermediaire',
    x: 560,
    y: 420,
    desc: 'Orchestration, pods, services, ingress, HPA.'
  },
  {
    id: 'cloud',
    label: 'Cloud',
    icon: '☁️',
    sectionId: 'cloud',
    level: 'intermediaire',
    x: 720,
    y: 260,
    desc: 'AWS / Azure / GCP, IaaS, PaaS, IAM, VPC.'
  },
  {
    id: 'iac',
    label: 'IaC',
    icon: '🏗️',
    sectionId: 'infrastructure',
    level: 'intermediaire',
    x: 700,
    y: 460,
    desc: 'Terraform, Ansible, state, modules, idempotence.'
  },
  {
    id: 'monitoring',
    label: 'Monitoring',
    icon: '📊',
    sectionId: 'monitoring',
    level: 'avance',
    x: 860,
    y: 340,
    desc: 'Prometheus, Grafana, alerting, SLO, traces.'
  },
  {
    id: 'security',
    label: 'DevSecOps',
    icon: '🔒',
    sectionId: 'security',
    level: 'avance',
    x: 700,
    y: 580,
    desc: 'Secrets, SAST/SCA, RBAC, supply chain, Kyverno.'
  },
  {
    id: 'sre',
    label: 'SRE',
    icon: '🛡️',
    sectionId: 'monitoring',
    level: 'avance',
    x: 880,
    y: 500,
    desc: 'SLI/SLO, error budget, incidents, postmortem.'
  }
]

/**
 * Arêtes : { from, to }
 * Sens : "from" est un prérequis de "to"
 */
export const SKILL_EDGES = [
  { from: 'linux', to: 'containers' },
  { from: 'linux', to: 'network' },
  { from: 'linux', to: 'cicd' },
  { from: 'git', to: 'cicd' },
  { from: 'network', to: 'kubernetes' },
  { from: 'containers', to: 'kubernetes' },
  { from: 'containers', to: 'cicd' },
  { from: 'cicd', to: 'cloud' },
  { from: 'kubernetes', to: 'cloud' },
  { from: 'kubernetes', to: 'iac' },
  { from: 'cloud', to: 'iac' },
  { from: 'cloud', to: 'monitoring' },
  { from: 'kubernetes', to: 'monitoring' },
  { from: 'iac', to: 'security' },
  { from: 'kubernetes', to: 'security' },
  { from: 'monitoring', to: 'sre' },
  { from: 'security', to: 'sre' }
]

export const LEVEL_COLORS = {
  fondation: '#38bdf8',
  intermediaire: '#10b981',
  avance: '#f59e0b'
}

export const LEVEL_LABELS = {
  fondation: 'Fondation',
  intermediaire: 'Intermédiaire',
  avance: 'Avancé'
}

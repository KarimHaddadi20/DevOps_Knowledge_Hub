import { KB_INDEX_ENTRIES, KB_RUNBOOKS } from './knowledgeCatalog.js';

const SECTION_ENTRIES = [
  {
    id: 'nav-home',
    title: 'Accueil',
    snippet: 'Bienvenue, parcours recommandé et vue d’ensemble du hub.',
    sectionId: 'home',
    category: 'section',
    keywords: 'accueil début démarrage hub master devops cloud'
  },
  {
    id: 'nav-linux',
    title: 'Linux',
    snippet: 'FHS, paquets, systemd, permissions, SSH, logs, firewall, scripting.',
    sectionId: 'linux',
    category: 'section',
    keywords: 'linux bash shell ubuntu debian systemd journalctl ssh cron'
  },
  {
    id: 'nav-git',
    title: 'Git',
    snippet: 'Branches, merge, rebase, workflows et collaboration.',
    sectionId: 'git',
    category: 'section',
    keywords: 'git github gitlab commit branch merge rebase pull request'
  },
  {
    id: 'nav-cicd',
    title: 'CI/CD',
    snippet: 'Jenkins, GitLab CI, GitHub Actions, stratégies de déploiement.',
    sectionId: 'cicd',
    category: 'section',
    keywords: 'cicd pipeline jenkins gitlab actions deploy build test'
  },
  {
    id: 'nav-cloud',
    title: 'Cloud',
    snippet: 'AWS, Azure, GCP — IaaS, PaaS, identité, réseau, coûts.',
    sectionId: 'cloud',
    category: 'section',
    keywords: 'cloud aws azure gcp ec2 s3 lambda vpc iam'
  },
  {
    id: 'nav-infrastructure',
    title: 'Infrastructure',
    snippet: 'Terraform, Ansible, IaC, modules et environnements.',
    sectionId: 'infrastructure',
    category: 'section',
    keywords: 'terraform ansible iac playbook module state drift'
  },
  {
    id: 'nav-network',
    title: 'Réseau',
    snippet: 'DNS, TLS, reverse proxy Nginx, load balancing.',
    sectionId: 'network',
    category: 'section',
    keywords: 'réseau dns tls ssl nginx proxy load balancer http'
  },
  {
    id: 'nav-containers',
    title: 'Containers',
    snippet: 'Docker, Kubernetes, Helm, ingress, autoscaling.',
    sectionId: 'containers',
    category: 'section',
    keywords: 'docker kubernetes k8s helm pod deployment ingress docker-compose'
  },
  {
    id: 'nav-monitoring',
    title: 'Monitoring',
    snippet: 'Prometheus, Grafana, alerting, logs, observabilité.',
    sectionId: 'monitoring',
    category: 'section',
    keywords: 'monitoring prometheus grafana alertmanager elk jaeger traces slo'
  },
  {
    id: 'nav-security',
    title: 'Sécurité / DevSecOps',
    snippet: 'Secrets, scans SAST/SCA, supply chain, RBAC, Kyverno, conformité.',
    sectionId: 'security',
    category: 'section',
    keywords: 'sécurité devsecops vault trivy rbac kyverno cosign sbom sast dast'
  },
  {
    id: 'nav-mustknow',
    title: 'Ce qu’un DevOps doit savoir',
    snippet: 'Culture CALMS, piliers techniques, stack, SRE, soft skills, niveaux junior à senior.',
    sectionId: 'mustknow',
    category: 'section',
    keywords: 'devops métier compétences savoir calms sre junior senior stack rôle job'
  },
  {
    id: 'nav-roadmap',
    title: 'Roadmap',
    snippet: 'Parcours d’apprentissage, compétences et plan sur plusieurs semaines.',
    sectionId: 'roadmap',
    category: 'section',
    keywords: 'roadmap parcours formation plan semaines certification'
  },
  {
    id: 'nav-knowledge',
    title: 'Base de connaissances',
    snippet: 'Index thématique, cycle de vie, runbooks, FAQ.',
    sectionId: 'knowledge',
    category: 'section',
    keywords: 'base connaissances index recherche runbook faq cycle vie'
  },
  {
    id: 'nav-resources',
    title: 'Ressources',
    snippet: 'Documentation officielle, formations, livres, certifications.',
    sectionId: 'resources',
    category: 'section',
    keywords: 'ressources documentation cours livre liens externes'
  }
];

function haystackFromKb(entry) {
  return [
    entry.title,
    entry.summary,
    entry.keywords,
    ...(entry.tags || [])
  ].join(' ');
}

function buildKbEntries() {
  return KB_INDEX_ENTRIES.map((entry) => ({
    id: `kb-${entry.id}`,
    title: entry.title,
    snippet: entry.summary,
    sectionId: entry.sectionId ?? 'knowledge',
    category: 'fiche',
    haystack: haystackFromKb(entry).toLowerCase()
  }));
}

function buildRunbookEntries() {
  return KB_RUNBOOKS.map((rb) => ({
    id: `rb-${rb.id}`,
    title: `Runbook — ${rb.title}`,
    snippet: rb.steps[0] || '',
    sectionId: 'knowledge',
    category: 'runbook',
    haystack: [
      rb.title,
      rb.severity,
      ...rb.steps
    ].join(' ').toLowerCase()
  }));
}

function buildSectionHaystacks() {
  return SECTION_ENTRIES.map((e) => ({
    ...e,
    haystack: [
      e.title,
      e.snippet,
      e.keywords
    ].join(' ').toLowerCase()
  }));
}

const GLOBAL_ENTRIES = [
  ...buildSectionHaystacks(),
  ...buildKbEntries(),
  ...buildRunbookEntries()
];

/**
 * Recherche globale : sections, fiches catalogue KB, runbooks.
 * @param {string} query
 * @param {{ limit?: number }} options
 */
export function getGlobalSearchResults(query, options = {}) {
  const limit = options.limit ?? 14;
  const q = query.trim().toLowerCase().normalize('NFD').replace(/\p{M}/gu, '');
  if (q.length < 2) return [];

  const scored = [];

  for (const entry of GLOBAL_ENTRIES) {
    const hay = entry.haystack.normalize('NFD').replace(/\p{M}/gu, '');
    if (!hay.includes(q)) continue;

    let score = 1;
    const titleNorm = entry.title.toLowerCase().normalize('NFD').replace(/\p{M}/gu, '');
    if (titleNorm.startsWith(q)) score += 4;
    else if (titleNorm.includes(q)) score += 2;
    if (entry.category === 'section') score += 0.5;

    scored.push({ entry, score });
  }

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.entry);
}

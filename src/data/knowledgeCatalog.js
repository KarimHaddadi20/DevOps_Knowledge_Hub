/**
 * Catalogue thématique de la base de connaissances.
 * sectionId: id de navigation App (linux, git, cicd, etc.) ou null si transversal.
 */
export const KB_TABS = [
  { id: 'index', label: 'Index & recherche' },
  { id: 'lifecycle', label: 'Cycle de vie' },
  { id: 'fundamentals', label: 'Fondamentaux' },
  { id: 'advanced', label: 'Sujets avancés' },
  { id: 'runbooks', label: 'Runbooks' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'faq', label: 'FAQ' }
];

export const KB_INDEX_ENTRIES = [
  {
    id: 'idx-linux',
    title: 'Linux — administration système',
    summary: 'FHS, paquets, systemd, permissions, SSH, logs, firewall, scripting.',
    sectionId: 'linux',
    tags: ['socle', 'sysadmin', 'shell'],
    keywords: 'linux bash systemd ssh journalctl apt dnf firewall'
  },
  {
    id: 'idx-git',
    title: 'Git — collaboration et workflows',
    summary: 'Branches, merge, rebase, PR, conventions de commits, stratégies d’équipe.',
    sectionId: 'git',
    tags: ['versioning', 'collaboration'],
    keywords: 'git branch merge rebase pull request trunk flow'
  },
  {
    id: 'idx-cicd',
    title: 'CI/CD — pipelines et déploiement',
    summary: 'Build, tests, quality gates, Jenkins, GitLab CI, GitHub Actions, stratégies.',
    sectionId: 'cicd',
    tags: ['automation', 'delivery'],
    keywords: 'jenkins gitlab github actions pipeline deploy canary blue green'
  },
  {
    id: 'idx-containers',
    title: 'Containers — Docker & orchestration',
    summary: 'Images, réseau, volumes, Kubernetes, Helm, ingress, scaling.',
    sectionId: 'containers',
    tags: ['runtime', 'k8s'],
    keywords: 'docker kubernetes helm pod deployment ingress hpa'
  },
  {
    id: 'idx-cloud',
    title: 'Cloud — fondamentaux multi-fournisseur',
    summary: 'IaaS, PaaS, identité, réseau virtuel, stockage, bonnes pratiques coûts.',
    sectionId: 'cloud',
    tags: ['cloud', 'aws', 'azure', 'gcp'],
    keywords: 'aws azure gcp vpc iam s3 compute'
  },
  {
    id: 'idx-iac',
    title: 'Infrastructure as Code',
    summary: 'Terraform, state, modules, Ansible, idempotence, environnements.',
    sectionId: 'infrastructure',
    tags: ['iac', 'automation'],
    keywords: 'terraform ansible playbook module state drift'
  },
  {
    id: 'idx-network',
    title: 'Réseau pour DevOps',
    summary: 'DNS, TLS, reverse proxy, load balancing, troubleshooting.',
    sectionId: 'network',
    tags: ['réseau', 'sécurité'],
    keywords: 'nginx dns tls ssl load balancer proxy'
  },
  {
    id: 'idx-monitoring',
    title: 'Monitoring & observabilité',
    summary: 'Métriques, logs, traces, alerting, SLO, dashboards.',
    sectionId: 'monitoring',
    tags: ['sre', 'observability'],
    keywords: 'prometheus grafana elk jaeger slo alertmanager'
  },
  {
    id: 'idx-security',
    title: 'Sécurité & DevSecOps',
    summary: 'Secrets, scans, RBAC, supply chain, durcissement conteneurs.',
    sectionId: 'security',
    tags: ['devsecops', 'compliance'],
    keywords: 'rbac secrets vault vulnerability scan sbom'
  },
  {
    id: 'idx-sast-dast-sca',
    title: 'SAST, DAST et SCA',
    summary: 'Stratégie de scanning sécurité par phase: code, runtime et dépendances.',
    sectionId: 'security',
    tags: ['devsecops', 'security-gates'],
    keywords: 'sast dast sca semgrep zap codeql trivy'
  },
  {
    id: 'idx-policy-as-code',
    title: 'Policy as Code',
    summary: 'OPA, Kyverno et règles d’admission Kubernetes versionnées.',
    sectionId: 'security',
    tags: ['governance', 'kubernetes'],
    keywords: 'opa gatekeeper kyverno admission policy'
  },
  {
    id: 'idx-supply-chain',
    title: 'Supply Chain Security',
    summary: 'SBOM, signature d’artefacts, provenance build et vérification image.',
    sectionId: 'security',
    tags: ['supply-chain', 'integrity'],
    keywords: 'sbom syft cosign slsa provenance signature'
  },
  {
    id: 'idx-roadmap',
    title: 'Roadmap & parcours d’apprentissage',
    summary: 'Compétences cibles, labs, plan sur plusieurs semaines, niveau job-ready.',
    sectionId: 'roadmap',
    tags: ['parcours', 'pédagogie'],
    keywords: 'roadmap formation master certification parcours'
  },
  {
    id: 'idx-resources',
    title: 'Ressources externes',
    summary: 'Documentation officielle, formations, livres, certifications.',
    sectionId: 'resources',
    tags: ['références'],
    keywords: 'documentation cours livre certification'
  },
  {
    id: 'idx-12factor',
    title: 'Twelve-Factor App (transversal)',
    summary: 'Principes pour des apps cloud-native : config, logs, parité dev/prod, etc.',
    sectionId: null,
    tags: ['bonnes pratiques', 'cloud-native'],
    keywords: '12 factor cloud native config port binding'
  },
  {
    id: 'idx-postmortem',
    title: 'Post-mortem blameless (transversal)',
    summary: 'Structure d’incident : chronologie, cause racine, actions, prévention.',
    sectionId: null,
    tags: ['sre', 'process'],
    keywords: 'incident postmortem blameless timeline'
  }
];

export const KB_RUNBOOKS = [
  {
    id: 'rb-api-down',
    title: 'API / service indisponible',
    severity: 'P1',
    steps: [
      'Confirmer l’ampleur (scope utilisateurs, régions, un seul endpoint ?).',
      'Vérifier santé des pods / instances, readiness, dépendances (DB, cache, file d’attente).',
      'Consulter métriques (latence, erreurs 5xx, saturation CPU/RAM) et logs corrélés.',
      'Si déploiement récent : rollback ou bascule blue/green / canary.',
      'Ouvrir l’incident, désigner un commandant, communiquer statut, tenir un post-mortem.'
    ]
  },
  {
    id: 'rb-pipeline',
    title: 'Pipeline CI/CD en échec',
    severity: 'P2',
    steps: [
      'Identifier le stage (checkout, build, test, scan, push image, deploy).',
      'Reproduire en local ou relancer le job avec logs détaillés.',
      'Vérifier dépendances (registry, secrets expirés, quotas, breaking change).',
      'Corriger ou revert ; ajouter un test ou une garde-fou pour éviter la récidive.'
    ]
  },
  {
    id: 'rb-db-latency',
    title: 'Latence base de données élevée',
    severity: 'P1',
    steps: [
      'Vérifier connexions actives, pool, locks et requêtes lentes (slow query log).',
      'Inspecter CPU / IOPS / espace disque sur l’instance managée ou le nœud.',
      'Scaler lecture (réplicas) ou verticalement si goulot d’étranglement confirmé.',
      'Indexer ou optimiser la requête fautive ; planifier correctif durable.'
    ]
  },
  {
    id: 'rb-tls',
    title: 'Erreur certificat TLS / HTTPS',
    severity: 'P2',
    steps: [
      'Vérifier date d’expiration et chaîne complète (intermédiaires).',
      'Contrôler nom de domaine couvert (SAN) vs hostname client.',
      'Renouveler via ACME / secret manager ; redéployer ingress ou load balancer.',
      'Tester avec curl -v ou sslyze après correction.'
    ]
  },
  {
    id: 'rb-memory',
    title: 'Saturation mémoire (OOM)',
    severity: 'P1',
    steps: [
      'Identifier le workload (pod / process) et la tendance (fuite vs pic).',
      'Ajuster requests/limits Kubernetes ou taille instance si légitime.',
      'Profiler l’application (heap, caches) ; corriger fuite si présente.',
      'Documenter la cause et les limites validées en production.'
    ]
  },
  {
    id: 'rb-security-token',
    title: 'Fuite de token / secret',
    severity: 'P1',
    steps: [
      'Révoquer immédiatement le token/secret compromis.',
      'Auditer les logs pour identifier usage malveillant et périmètre.',
      'Régénérer et redistribuer les secrets via un coffre sécurisé.',
      'Ajouter détection précoce (secret scanning, policy CI, alertes).'
    ]
  }
];

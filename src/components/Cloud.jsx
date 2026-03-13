import { useState } from 'react';

function Cloud() {
  const [activeTab, setActiveTab] = useState('concepts');

  return (
    <div>
      <div className="card">
        <h2>☁️ Cloud Computing</h2>
        <p>
          Les trois principaux fournisseurs cloud (AWS, Azure, GCP) offrent des services essentiels
          pour le DevOps : compute, stockage, réseau, bases de données et bien plus.
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
            { id: 'concepts', label: 'Concepts Cloud' },
            { id: 'aws', label: 'AWS' },
            { id: 'azure', label: 'Azure' },
            { id: 'gcp', label: 'GCP' }
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
            <h3>🎯 Modèles de Service Cloud</h3>
            <div className="grid">
              <div style={{ background: 'rgba(56, 189, 248, 0.05)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
                <h4 style={{ marginTop: 0, color: '#38bdf8' }}>IaaS - Infrastructure as a Service</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  VM, stockage, réseau. Vous gérez OS, apps, middleware. Ex: EC2, Azure VM, GCE.
                </p>
              </div>
              <div style={{ background: 'rgba(245, 158, 11, 0.05)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
                <h4 style={{ marginTop: 0, color: '#f59e0b' }}>PaaS - Platform as a Service</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  Environnement runtime. Vous déployez du code. Ex: Elastic Beanstalk, App Service, Cloud Run.
                </p>
              </div>
              <div style={{ background: 'rgba(16, 185, 129, 0.05)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                <h4 style={{ marginTop: 0, color: '#10b981' }}>SaaS - Software as a Service</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  Application complète. Ex: Gmail, Office 365, Salesforce.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <h3>📊 Concepts Clés</h3>
            <ul style={{ lineHeight: 2, color: 'var(--text-secondary)' }}>
              <li><strong>Région</strong> : Zone géographique (ex: eu-west-1, West Europe)</li>
              <li><strong>Zone de disponibilité (AZ)</strong> : Datacenter isolé dans une région</li>
              <li><strong>VPC</strong> : Réseau virtuel privé isolé</li>
              <li><strong>Auto-scaling</strong> : Ajustement automatique des ressources</li>
              <li><strong>Load Balancer</strong> : Répartition de la charge</li>
            </ul>
          </div>
        </div>
      )}

      {activeTab === 'aws' && (
        <div className="animate-fade-in">
          <div className="card">
            <h3>🟠 AWS - Services Essentiels</h3>
            <div className="grid">
              <div className="card" style={{ background: 'rgba(255,255,255,0.03)', border: 'none' }}>
                <h4 style={{ marginTop: 0 }}>📦 Compute</h4>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}>• <strong>EC2</strong> : Instances virtuelles</li>
                  <li style={{ marginBottom: '0.5rem' }}>• <strong>ECR</strong> : Registry Docker</li>
                  <li style={{ marginBottom: '0.5rem' }}>• <strong>EKS</strong> : Kubernetes managé</li>
                  <li style={{ marginBottom: '0.5rem' }}>• <strong>Lambda</strong> : Serverless</li>
                </ul>
              </div>
              <div className="card" style={{ background: 'rgba(255,255,255,0.03)', border: 'none' }}>
                <h4 style={{ marginTop: 0 }}>💾 Stockage</h4>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}>• <strong>S3</strong> : Stockage objet</li>
                  <li style={{ marginBottom: '0.5rem' }}>• <strong>EBS</strong> : Volumes disque</li>
                  <li style={{ marginBottom: '0.5rem' }}>• <strong>EFS</strong> : Fichiers partagés</li>
                </ul>
              </div>
              <div className="card" style={{ background: 'rgba(255,255,255,0.03)', border: 'none' }}>
                <h4 style={{ marginTop: 0 }}>🔧 DevOps</h4>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}>• <strong>CodePipeline</strong> : CI/CD</li>
                  <li style={{ marginBottom: '0.5rem' }}>• <strong>CodeBuild</strong> : Build</li>
                  <li style={{ marginBottom: '0.5rem' }}>• <strong>CodeDeploy</strong> : Déploiement</li>
                  <li style={{ marginBottom: '0.5rem' }}>• <strong>CloudFormation</strong> : IaC</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card">
            <h3>📝 AWS CLI - Commandes de Base</h3>
            <div className="code-block">
              <div style={{ color: '#888', marginBottom: '0.5rem' }}># Configuration</div>
              <code>aws configure</code>
              <div style={{ color: '#666', fontSize: '0.85rem', marginTop: '0.5rem' }}>
                Saisir Access Key, Secret Key, région (ex: eu-west-1)
              </div>

              <div style={{ color: '#888', margin: '1rem 0 0.5rem' }}># Lister les ressources</div>
              <code>aws ec2 describe-instances</code>
              <code>aws s3 ls</code>
              <code>aws s3 cp fichier.txt s3://mon-bucket/</code>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'azure' && (
        <div className="animate-fade-in">
          <div className="card">
            <h3>🔵 Azure - Services Essentiels</h3>
            <div className="grid">
              <div className="card" style={{ background: 'rgba(255,255,255,0.03)', border: 'none' }}>
                <h4 style={{ marginTop: 0 }}>📦 Compute</h4>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}>• <strong>Virtual Machines</strong> : VM</li>
                  <li style={{ marginBottom: '0.5rem' }}>• <strong>Container Registry</strong> : Registry Docker</li>
                  <li style={{ marginBottom: '0.5rem' }}>• <strong>AKS</strong> : Kubernetes managé</li>
                  <li style={{ marginBottom: '0.5rem' }}>• <strong>Functions</strong> : Serverless</li>
                </ul>
              </div>
              <div className="card" style={{ background: 'rgba(255,255,255,0.03)', border: 'none' }}>
                <h4 style={{ marginTop: 0 }}>💾 Stockage</h4>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}>• <strong>Blob Storage</strong> : Stockage objet</li>
                  <li style={{ marginBottom: '0.5rem' }}>• <strong>Managed Disks</strong> : Volumes</li>
                  <li style={{ marginBottom: '0.5rem' }}>• <strong>Files</strong> : Fichiers partagés</li>
                </ul>
              </div>
              <div className="card" style={{ background: 'rgba(255,255,255,0.03)', border: 'none' }}>
                <h4 style={{ marginTop: 0 }}>🔧 DevOps</h4>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}>• <strong>Azure DevOps</strong> : Pipelines, Repos</li>
                  <li style={{ marginBottom: '0.5rem' }}>• <strong>ARM/Bicep</strong> : Infrastructure as Code</li>
                  <li style={{ marginBottom: '0.5rem' }}>• <strong>Key Vault</strong> : Secrets</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card">
            <h3>📝 Azure CLI - Commandes de Base</h3>
            <div className="code-block">
              <div style={{ color: '#888', marginBottom: '0.5rem' }}># Connexion</div>
              <code>az login</code>

              <div style={{ color: '#888', margin: '1rem 0 0.5rem' }}># Lister les ressources</div>
              <code>az vm list</code>
              <code>az storage account list</code>
              <code>az aks list</code>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'gcp' && (
        <div className="animate-fade-in">
          <div className="card">
            <h3>🟢 GCP - Services Essentiels</h3>
            <div className="grid">
              <div className="card" style={{ background: 'rgba(255,255,255,0.03)', border: 'none' }}>
                <h4 style={{ marginTop: 0 }}>📦 Compute</h4>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}>• <strong>Compute Engine</strong> : VM</li>
                  <li style={{ marginBottom: '0.5rem' }}>• <strong>Artifact Registry</strong> : Images Docker</li>
                  <li style={{ marginBottom: '0.5rem' }}>• <strong>GKE</strong> : Kubernetes managé</li>
                  <li style={{ marginBottom: '0.5rem' }}>• <strong>Cloud Run</strong> : Containers serverless</li>
                </ul>
              </div>
              <div className="card" style={{ background: 'rgba(255,255,255,0.03)', border: 'none' }}>
                <h4 style={{ marginTop: 0 }}>💾 Stockage</h4>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}>• <strong>Cloud Storage</strong> : Stockage objet</li>
                  <li style={{ marginBottom: '0.5rem' }}>• <strong>Persistent Disk</strong> : Volumes</li>
                </ul>
              </div>
              <div className="card" style={{ background: 'rgba(255,255,255,0.03)', border: 'none' }}>
                <h4 style={{ marginTop: 0 }}>🔧 DevOps</h4>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}>• <strong>Cloud Build</strong> : CI/CD</li>
                  <li style={{ marginBottom: '0.5rem' }}>• <strong>Deployment Manager</strong> : IaC</li>
                  <li style={{ marginBottom: '0.5rem' }}>• <strong>Secret Manager</strong> : Secrets</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card">
            <h3>📝 gcloud CLI - Commandes de Base</h3>
            <div className="code-block">
              <div style={{ color: '#888', marginBottom: '0.5rem' }}># Connexion</div>
              <code>gcloud auth login</code>
              <code>gcloud config set project MON_PROJECT_ID</code>

              <div style={{ color: '#888', margin: '1rem 0 0.5rem' }}># Lister les ressources</div>
              <code>gcloud compute instances list</code>
              <code>gcloud container clusters list</code>
              <code>gcloud run services list</code>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cloud;
